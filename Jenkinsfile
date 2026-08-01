pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    parameters {
        string(
            name: 'TEST_FILES',
            defaultValue: 'all',
            description: 'Enter all, one spec file, or comma-separated spec files'
        )

        choice(
            name: 'TEST_TAG',
            choices: [
                'all',
                '@smoke',
                '@regression',
                '@validation',
                '@positive',
                '@negative',
                '@search',
                '@pagination',
                '@upload',
                '@download',
                '@delete',
                '@security',
                '@account',
                '@selection',
                '@navigation'
            ],
            description: 'Select the Playwright tests to run'
        )

        choice(
            name: 'BROWSER',
            choices: [
                'chromium'
            ],
            description: 'Select the browser'
        )
    }

    options {
        timestamps()

        timeout(
            time: 60,
            unit: 'MINUTES'
        )

        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
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

        stage('Build Test Command') {
            steps {
                script {
                    def testCommand =
                        'npx playwright test'

                    def requestedFiles =
                        params.TEST_FILES.trim()

                    if (
                        requestedFiles
                            .toLowerCase() != 'all'
                    ) {
                        def selectedFiles =
                            requestedFiles
                                .split(',')
                                .collect {
                                    it.trim()
                                }
                                .findAll {
                                    it
                                }

                        if (selectedFiles.isEmpty()) {
                            error(
                                'No test files were provided'
                            )
                        }

                        selectedFiles.each { file ->
                            if (
                                !file.startsWith(
                                    'tests/'
                                )
                            ) {
                                error(
                                    "Test file must start with tests/: ${file}"
                                )
                            }

                            if (
                                !file.endsWith(
                                    '.spec.ts'
                                )
                            ) {
                                error(
                                    "Test file must end with .spec.ts: ${file}"
                                )
                            }

                            if (file.contains('..')) {
                                error(
                                    "Invalid test file path: ${file}"
                                )
                            }
                        }

                        def fileArguments =
                            selectedFiles
                                .collect { file ->
                                    "\"${file}\""
                                }
                                .join(' ')

                        testCommand +=
                            " ${fileArguments}"
                    }

                    testCommand +=
                        " --project=${params.BROWSER}"

                    testCommand +=
                        ' --workers=1'

                    if (
                        params.TEST_TAG != 'all'
                    ) {
                        testCommand +=
                            " --grep \"${params.TEST_TAG}\""
                    }

                    env.PLAYWRIGHT_TEST_COMMAND =
                        testCommand

                    echo(
                        "Running command: ${testCommand}"
                    )
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(
                    buildResult: 'FAILURE',
                    stageResult: 'FAILURE'
                ) {
                    bat(
                        script:
                            "${env.PLAYWRIGHT_TEST_COMMAND}"
                    )
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
                    allure(
                        includeProperties: false,
                        jdk: '',
                        results: [
                            [
                                path:
                                    'allure-results'
                            ]
                        ]
                    )
                } else {
                    echo(
                        'No Allure results were generated'
                    )
                }
            }

            archiveArtifacts(
                artifacts: 'playwright-report/**,test-results/**,allure-results/**',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright tests passed'
        }

        failure {
            echo 'One or more Playwright tests failed'
        }
    }
}