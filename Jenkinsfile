pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    parameters {
        string(
            name: 'TEST_FILES',
            defaultValue: 'all',
            description: 'Enter all, one spec file, folder, or comma-separated spec files'
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
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
        timestamps()

        timeout(
            time: 60,
            unit: 'MINUTES'
        )
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

        stage('List Tests') {
            steps {
                bat(
                    'npx playwright test --list --project=chromium'
                )
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def testCommand =
                        'npx playwright test'

                    def requestedFiles =
                        params.TEST_FILES?.trim()

                    if (
                        requestedFiles == null ||
                        requestedFiles == ''
                    ) {
                        requestedFiles = 'all'
                    }

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
                                    "Test path must start with tests/: ${file}"
                                )
                            }

                            if (file.contains('..')) {
                                error(
                                    "Invalid test path: ${file}"
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

                    def selectedBrowser =
                        params.BROWSER ?: 'chromium'

                    testCommand +=
                        " --project=${selectedBrowser}"

                    testCommand +=
                        ' --workers=1'

                    def selectedTag =
                        params.TEST_TAG ?: 'all'

                    if (selectedTag != 'all') {
                        testCommand +=
                            " --grep \"${selectedTag}\""
                    }

                    echo(
                        "Running command: ${testCommand}"
                    )

                    catchError(
                        buildResult: 'FAILURE',
                        stageResult: 'FAILURE'
                    ) {
                        bat(
                            script: testCommand
                        )
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