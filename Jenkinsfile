pipeline {
    agent any

    tools {
        nodejs 'nodejs'
        allure 'Allure'
    }

    options {
        skipDefaultCheckout(true)
        timestamps()

        timeout(
            time: 2,
            unit: 'HOURS'
        )

        disableConcurrentBuilds()

        buildDiscarder(
            logRotator(
                numToKeepStr: '10'
            )
        )
    }

    parameters {
        string(
            name: 'TEST_FILES',
            defaultValue: 'all',
            description:
                'Enter all, a test folder, one spec file, or comma-separated spec files',
            trim: true
        )

        choice(
            name: 'TEST_TAG',
            choices: [
                'all',
                '@smoke',
                '@regression',
                '@positive',
                '@negative',
                '@validation',
                '@filter',
                '@search',
                '@navigation',
                '@pagination',
                '@upload',
                '@download',
                '@delete',
                '@security',
                '@account',
                '@selection'
            ],
            description:
                'Select the test tag to run'
        )

        choice(
            name: 'BROWSER',
            choices: [
                'chromium'
            ],
            description:
                'Select the Playwright browser'
        )

        choice(
            name: 'WORKERS',
            choices: [
                '2',
                '1'
            ],
            description:
                'Use 2 normally; use 1 for unstable or destructive tests'
        )
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Clean and Checkout') {
            steps {
                deleteDir()

                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'npx playwright --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Remove every previous report before
                    // the single Playwright execution.
                    bat '''
                        if exist allure-results rmdir /s /q allure-results
                        if exist allure-report rmdir /s /q allure-report
                        if exist playwright-report rmdir /s /q playwright-report
                        if exist test-results rmdir /s /q test-results
                    '''

                    def rawTestFiles =
                        params.TEST_FILES.trim()

                    def testFileArguments = ''

                    if (
                        !rawTestFiles.equalsIgnoreCase(
                            'all'
                        )
                    ) {
                        def selectedPaths =
                            rawTestFiles
                                .split(',')
                                .collect {
                                    it.trim()
                                        .replace(
                                            '\\',
                                            '/'
                                        )
                                }
                                .findAll {
                                    it.length() > 0
                                }

                        if (
                            selectedPaths.isEmpty()
                        ) {
                            error(
                                'No valid test path was supplied'
                            )
                        }

                        selectedPaths.each {
                            testPath ->

                            if (
                                !testPath.startsWith(
                                    'tests/'
                                )
                            ) {
                                error(
                                    'Test path must start with tests/: ' +
                                    testPath
                                )
                            }

                            if (
                                testPath.contains(
                                    '..'
                                )
                            ) {
                                error(
                                    'Parent path references are not allowed: ' +
                                    testPath
                                )
                            }
                        }

                        testFileArguments =
                            selectedPaths
                                .collect {
                                    "\"${it}\""
                                }
                                .join(' ')
                    }

                    def tagArgument = ''

                    if (
                        params.TEST_TAG != 'all'
                    ) {
                        tagArgument =
                            "--grep \"${params.TEST_TAG}\""
                    }

                    def testCommand = [
                        'npx playwright test',
                        testFileArguments,
                        "--project=${params.BROWSER}",
                        "--workers=${params.WORKERS}",
                        '--retries=0',
                        tagArgument
                    ]
                    .findAll {
                        it != null &&
                        it.trim().length() > 0
                    }
                    .join(' ')

                    echo(
                        "Running exactly: ${testCommand}"
                    )

                    catchError(
                        buildResult: 'FAILURE',
                        stageResult: 'FAILURE'
                    ) {
                        bat testCommand
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                if (
                    fileExists(
                        'allure-results'
                    )
                ) {
                    echo(
                        'Publishing Allure report'
                    )

                    allure([
                        includeProperties: false,
                        jdk: '',
                        results: [[
                            path:
                                'allure-results'
                        ]]
                    ])
                } else {
                    echo(
                        'No Allure results were generated'
                    )
                }
            }

            archiveArtifacts(
                artifacts:
                    'allure-report/**, ' +
                    'playwright-report/**, ' +
                    'test-results/**',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright tests passed'
        }

        unsuccessful {
            echo(
                'One or more Playwright tests failed or the build was interrupted'
            )
        }

        cleanup {
            echo 'Jenkins pipeline completed'
        }
    }
}