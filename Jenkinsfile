pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: [
                'all',
                'admin',
                'pim',
                'employee'
            ],
            description: 'Select all tests or a role/feature folder'
        )

        string(
            name: 'TEST_FILES',
            defaultValue: 'all',
            description: 'Optional: all, one spec, folder, or comma-separated specs. Custom files override TEST_SUITE.'
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
                '@search',
                '@filter',
                '@pagination',
                '@navigation',
                '@upload',
                '@download',
                '@create',
                '@edit',
                '@delete',
                '@bulk-delete',
                '@cancel',
                '@security',
                '@account',
                '@selection',
                '@details',
                '@autocomplete'
            ],
            description: 'Select a Playwright test tag'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium'],
            description: 'Select the Playwright browser project'
        )

        choice(
            name: 'WORKERS',
            choices: ['1', '2', '4'],
            description: 'Number of Playwright workers; 1 is recommended for the shared OrangeHRM demo'
        )
    }

    options {
        skipDefaultCheckout(true)
        disableConcurrentBuilds()
        timestamps()
        timeout(time: 60, unit: 'MINUTES')
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
                script {
                    def selectedBrowser = params.BROWSER ?: 'chromium'
                    bat "npx playwright install ${selectedBrowser}"
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    bat '''
                        if exist allure-results rmdir /s /q allure-results
                        if exist allure-report rmdir /s /q allure-report
                        if exist playwright-report rmdir /s /q playwright-report
                        if exist test-results rmdir /s /q test-results
                    '''

                    def testCommand = 'npx playwright test'
                    def requestedFiles = params.TEST_FILES?.trim()
                    def selectedSuite = params.TEST_SUITE ?: 'all'

                    if (!requestedFiles) {
                        requestedFiles = 'all'
                    }

                    if (requestedFiles.toLowerCase() != 'all') {
                        def selectedFiles = requestedFiles
                            .split(',')
                            .collect { file ->
                                file.trim().replace('\\', '/')
                            }
                            .findAll { file -> file }

                        if (selectedFiles.isEmpty()) {
                            error('No test files were provided')
                        }

                        selectedFiles.each { file ->
                            if (!file.startsWith('tests/')) {
                                error("Test path must start with tests/: ${file}")
                            }

                            if (file.contains('..')) {
                                error("Invalid test path: ${file}")
                            }

                            if (!(file ==~ /[A-Za-z0-9_@() .\/\-]+/)) {
                                error("Test path contains unsupported characters: ${file}")
                            }
                        }

                        def fileArguments = selectedFiles
                            .collect { file -> "\"${file}\"" }
                            .join(' ')

                        testCommand += " ${fileArguments}"
                    } else if (selectedSuite != 'all') {
                        def suitePaths = [
                            admin: 'tests/admin',
                            pim: 'tests/pim',
                            employee: 'tests/employee'
                        ]

                        def suitePath = suitePaths[selectedSuite]

                        if (!suitePath) {
                            error("Unsupported test suite: ${selectedSuite}")
                        }

                        testCommand += " \"${suitePath}\""
                    }

                    def selectedBrowser = params.BROWSER ?: 'chromium'
                    def selectedWorkers = params.WORKERS ?: '1'

                    testCommand += " --project=${selectedBrowser}"
                    testCommand += " --workers=${selectedWorkers}"

                    def selectedTag = params.TEST_TAG ?: 'all'

                    if (selectedTag != 'all') {
                        testCommand += " --grep \"${selectedTag}\""
                    }

                    echo("Running exactly: ${testCommand}")

                    catchError(
                        buildResult: 'FAILURE',
                        stageResult: 'FAILURE'
                    ) {
                        bat(script: testCommand)
                    }
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
                        results: [[path: 'allure-results']]
                    )
                } else {
                    echo('No Allure results were generated')
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
