pipeline {
    agent any

    tools {
        nodejs 'nodejs'
        allure 'Allure'
    }

    parameters {
        choice(
            name: 'BROWSER',
            choices: [
                'chromium',
                'firefox',
                'webkit'
            ],
            description: 'Choose the Playwright browser'
        )

        string(
            name: 'TEST_TARGET',
            defaultValue: 'tests',
            description: 'Example: tests/Admin/admin-user.spec.ts or tests'
        )

        choice(
            name: 'WORKERS',
            choices: [
                '1',
                '2',
                '4'
            ],
            description: 'Number of Playwright workers'
        )
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
        disableConcurrentBuilds()

        timeout(
            time: 2,
           unit: 'HOURS',
            timestamps()

    disableConcurrentBuilds()

        )

        buildDiscarder(
            logRotator(
                numToKeepStr: '10'
            )
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

                bat '''
                    echo Checked-out commit:
                    git rev-parse HEAD
                '''
            }
        }

        stage('Verify Environment') {
            steps {
                bat '''
                    call node --version
                    call npm.cmd --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'call npm.cmd ci'
            }
        }

        stage('Verify Playwright') {
            steps {
                bat 'call npx.cmd playwright --version'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat '''
                    call npx.cmd playwright install %BROWSER%
                '''
            }
        }

        stage('Clean Test Reports') {
            steps {
                bat '''
                    if exist allure-results rmdir /s /q allure-results
                    if exist allure-report rmdir /s /q allure-report
                    if exist playwright-report rmdir /s /q playwright-report
                    if exist test-results rmdir /s /q test-results
                '''
            }
        }

        stage('Discover Tests') {
            steps {
                bat '''
                    echo ========================================
                    echo Available Playwright test files
                    echo ========================================

                    if exist tests (
                        dir /s /b tests\\*.spec.ts
                        dir /s /b tests\\*.test.ts
                    ) else (
                        echo ERROR: The tests directory does not exist.
                        exit /b 1
                    )

                    echo ========================================
                    echo Tests recognized by Playwright
                    echo ========================================

                    call npx.cmd playwright test --list
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def testTarget = params.TEST_TARGET?.trim()

                    if (!testTarget) {
                        testTarget = 'tests'
                    }

                    // Normalize Windows path separators for Playwright.
                    testTarget = testTarget.replace('\\', '/')

                    // Prevent parent-directory traversal.
                    if (testTarget.contains('..')) {
                        error(
                            'Parent-directory references are not allowed: ' +
                            testTarget
                        )
                    }

                    // Prevent Windows command injection.
                    if (!(testTarget ==~ /[A-Za-z0-9_ .\/-]+/)) {
                        error(
                            'TEST_TARGET contains unsupported characters: ' +
                            testTarget
                        )
                    }

                    // Verify that the requested file or directory exists.
                    if (!fileExists(testTarget)) {
                        error(
                            "Test target does not exist: ${testTarget}. " +
                            "Check the Discover Tests stage for valid paths."
                        )
                    }

                    def testCommand =
                        'call npx.cmd playwright test ' +
                        "\"${testTarget}\" " +
                        "--project=${params.BROWSER} " +
                        "--workers=${params.WORKERS} " +
                        '--retries=0'

                    echo "Running: ${testCommand}"

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
                if (fileExists('allure-results')) {
                    echo 'Publishing fresh Allure report'

                    allure([
                        includeProperties: false,
                        jdk: '',
                        commandline: 'Allure',
                        results: [[
                            path: 'allure-results'
                        ]]
                    ])
                } else {
                    echo 'No Allure results were generated'
                }
            }

            archiveArtifacts(
                artifacts:
                    'allure-results/**, ' +
                    'allure-report/**, ' +
                    'playwright-report/**, ' +
                    'test-results/**',
                allowEmptyArchive: true,
                fingerprint: true
            )
        }

        success {
            echo 'All Playwright tests passed'
        }

        unsuccessful {
            echo 'One or more Playwright tests failed or the build was interrupted'
        }

        cleanup {
            echo 'Jenkins pipeline completed'
        }
    }
}