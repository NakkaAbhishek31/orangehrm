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
            description: 'Spec file or directory, for example: tests/Admin/admin-users.spec.ts'
        )

        string(
            name: 'TEST_NAME',
            defaultValue: '',
            description: 'Optional test-case ID, for example: TC_ADMIN_063'
        )

        choice(
            name: 'WORKERS',
            choices: [
                '1'
            ],
            description: 'Serialized for the shared OrangeHRM demo'
        )
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
        disableConcurrentBuilds()
   timeout(time: 3, unit: 'HOURS')


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
                script {
                    def testTarget = params.TEST_TARGET?.trim() ?: 'tests'
                    def testName = params.TEST_NAME?.trim()

                    testTarget = testTarget.replace('\\', '/')

                    if (testTarget.contains('..')) {
                        error("Parent-directory references are not allowed: ${testTarget}")
                    }

                    if (!(testTarget ==~ /[A-Za-z0-9_ .\/-]+/)) {
                        error("TEST_TARGET contains unsupported characters: ${testTarget}")
                    }

                    if (!fileExists(testTarget)) {
                        error("Test target does not exist: ${testTarget}")
                    }

                    if (testName && !(testName ==~ /[A-Za-z0-9_-]+/)) {
                        error('TEST_NAME must use only letters, numbers, underscores, or hyphens')
                    }

                    def listCommand =
                        'call npx.cmd playwright test ' +
                        "\"${testTarget}\" " +
                        "--project=${params.BROWSER} " +
                        '--list --reporter=line'

                    if (testName) {
                        listCommand += " --grep \"${testName}\""
                    }

                    echo "Selected tests: ${listCommand}"
                    bat listCommand
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def testTarget = params.TEST_TARGET?.trim()
                    def testName = params.TEST_NAME?.trim()

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

                    if (testName && !(testName ==~ /[A-Za-z0-9_-]+/)) {
                        error(
                            'TEST_NAME must use only letters, numbers, ' +
                            'underscores, or hyphens'
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
                        '--workers=1 ' +
                        '--retries=1'

                    if (testName) {
                        testCommand += " --grep \"${testName}\""
                    }

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
