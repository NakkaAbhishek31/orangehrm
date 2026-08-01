
pipeline {
    agent any

    tools {
        nodejs 'nodejs'
        allure 'Allure'
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
                '@account'
            ],
            description: 'Select the test tag'
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

        stage('Install Dependencies') {
            steps {
                bat 'node --version'
                bat 'npm --version'
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

                    if (
                        params.TEST_FILES
                            .trim()
                            .toLowerCase() != 'all'
                    ) {
                        def selectedFiles =
                            params.TEST_FILES
                                .split(',')
                                .collect { it.trim() }
                                .findAll { it }

                        if (selectedFiles.isEmpty()) {
                            error(
                                'No valid test files were provided'
                            )
                        }

                        selectedFiles.each { file ->
                            if (
                                !(file ==~
                                  /tests[\/\\][A-Za-z0-9_.\/\\-]+\.spec\.ts/)
                            ) {
                                error(
                                    "Invalid test file: ${file}"
                                )
                            }
                        }

                        def fileArguments =
                            selectedFiles
                                .collect {
                                    "\"${it}\""
                                }
                                .join(' ')

                        testCommand +=
                            " ${fileArguments}"
                    }

                    testCommand +=
                        " --project=${params.BROWSER}"

                    if (params.TEST_TAG != 'all') {
                        testCommand +=
                            " --grep \"${params.TEST_TAG}\""
                    }

                    env.PLAYWRIGHT_TEST_COMMAND =
                        testCommand

                    echo(
                        "Test command: ${testCommand}"
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
                    bat "${env.PLAYWRIGHT_TEST_COMMAND}"
                }
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('allure-results')) {
                    allure(
                        includeProperties: false,
                        jdk: '',
                        results: [
                            [
                                path: 'allure-results'
                            ]
                        ]
                    )
                } else {
                    echo(
                        'Allure results were not generated'
                    )
                }
            }

            archiveArtifacts(
                artifacts: '''
                    playwright-report/**,
                    test-results/**,
                    allure-results/**
                ''',
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
Make sure playwright.config.ts contains the Allure reporter:
reporter: [
  ['html', { open: 'never' }],
  [
    'allure-playwright',
    {
      outputFolder: 'allure-results',
    },
  ],
],