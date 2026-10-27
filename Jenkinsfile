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
                '1','2'
            ],
            description: 'Use 1 or 2 workers to avoid overloading the shared OrangeHRM demo'
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
                    if exist ai-results rmdir /s /q ai-results
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

                    def workerCount = Math.min((params.WORKERS ?: '1') as Integer, 2)

                    def testCommand =
                        'call npx.cmd playwright test ' +
                        "\"${testTarget}\" " +
                        "--project=${params.BROWSER} " +
                        "--workers=${workerCount} " +
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
            if (fileExists('playwright-report/index.html')) {
                publishHTML(target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])
            } else {
                echo 'Playwright HTML report was not generated'
            }
        }

        archiveArtifacts(
            artifacts: 'allure-results/**, allure-report/**, playwright-report/**, test-results/**, ai-results/**',
            allowEmptyArchive: true,
            fingerprint: true
        )
    }
}
}
