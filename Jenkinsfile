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
    stage('Clean and Checkout') {
        steps {
            deleteDir()
            checkout scm
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
            bat 'npx playwright test --list --project=chromium'
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