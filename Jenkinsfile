pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
        allure 'Allure'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                catchError(
                    buildResult: 'FAILURE',
                    stageResult: 'FAILURE'
                ) {
                    bat 'npx playwright test --project=chromium'
                }
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])

            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )
        }
    }
}