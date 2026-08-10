pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    parameters {
        string(
            name: 'TEST_FILES',
            defaultValue: 'all',
            description: 'Enter all, one spec file, folder, or comma-separated spec files. Both / and \\ are accepted.'
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
            description: 'Select the test tag'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium'],
            description: 'Select the browser'
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
                bat 'npx playwright install chromium'
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

                    if (!requestedFiles) {
                        requestedFiles = 'all'
                    }

                    if (requestedFiles.toLowerCase() != 'all') {
                        def selectedFiles = requestedFiles
                            .split(',')
                            .collect { file ->
                                // Normalize Windows paths before validation.
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
                    }

                    def selectedBrowser = params.BROWSER ?: 'chromium'
                    testCommand += " --project=${selectedBrowser}"

                    // OrangeHRM is a shared demo environment.
                    testCommand += ' --workers=1'

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
