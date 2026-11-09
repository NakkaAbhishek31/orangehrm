pipeline {
    agent any

    tools {
        nodejs 'nodejs'
        allure 'Allure'
    }

    parameters {
        booleanParam(
            name: 'SPLIT_TESTS',
            defaultValue: false,
            description: 'Split the selected tests across parallel Playwright shards'
        )

        choice(
            name: 'SHARD_COUNT',
            choices: ['2', '3', '4'],
            description: 'Parallel shards when splitting is enabled; requires the same number of free Jenkins executors'
        )

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

        string(
            name: 'ORANGEHRM_BASE_URL',
            defaultValue: 'https://opensource-demo.orangehrmlive.com',
            description: 'OrangeHRM instance URL. Use an isolated instance to run multiple workers safely.'
        )

        choice(
            name: 'WORKERS',
            choices: [
                '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'
            ],
            description: 'Number of Playwright workers per run (per shard when split; shared public demo is limited to 1; choose 1 to 15; default: 1)'
        )
    }

    options {
        skipDefaultCheckout(true)
        timestamps()
        disableConcurrentBuilds()
   timeout(time: 4, unit: 'HOURS')

        buildDiscarder(
            logRotator(
                numToKeepStr: '10'
            )
        )
    }

    environment {
        CI = 'true'
        ORANGEHRM_BASE_URL = "${params.ORANGEHRM_BASE_URL}"
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

        stage('Check OrangeHRM Availability') {
            steps {
                bat 'call node scripts/check-app-availability.js'
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

                    def requestedWorkerCount = Math.min((params.WORKERS ?: '1') as Integer, 15)
                    def configuredBaseUrl = (env.ORANGEHRM_BASE_URL ?:
                        'https://opensource-demo.orangehrmlive.com').trim().toLowerCase()
                    def isSharedPublicDemo = configuredBaseUrl.contains(
                        'opensource-demo.orangehrmlive.com'
                    )
                    if (isSharedPublicDemo && params.SPLIT_TESTS) {
                        error('SPLIT_TESTS is not supported against the shared public OrangeHRM demo because parallel shards can conflict over shared data. Disable splitting or configure an isolated OrangeHRM instance.')
                    }

                    if (isSharedPublicDemo && requestedWorkerCount > 1) {
                        error("WORKERS=${requestedWorkerCount} cannot be used against the shared public OrangeHRM demo. Select 1 worker or configure an isolated OrangeHRM instance with ORANGEHRM_BASE_URL.")
                    }

                    def workerCount = requestedWorkerCount

                    if (params.SPLIT_TESTS) {
                        def shardCount = params.SHARD_COUNT as Integer

                        echo 'Preparing the shared authentication state before starting shards'
                        bat 'call npx.cmd playwright test --project=setup --workers=1 --reporter=line'
                        stash(
                            name: 'playwright-auth-state',
                            includes: 'playwright/.auth/admin.json'
                        )

                        def shardStages = [:]
                        for (int shardNumber = 1; shardNumber <= shardCount; shardNumber++) {
                            def currentShard = shardNumber
                            shardStages["Shard ${currentShard}/${shardCount}"] = {
                                node(env.NODE_NAME) {
                                    nodejs(nodeJSInstallationName: 'nodejs') {
                                        checkout scm
                                        bat 'call npm.cmd ci'
                                        bat "call npx.cmd playwright install ${params.BROWSER}"
                                        unstash 'playwright-auth-state'

                                        def testCommand =
                                            'call npx.cmd playwright test ' +
                                            "\"${testTarget}\" " +
                                            "--project=${params.BROWSER} " +
                                            '--no-deps ' +
                                            "--shard=${currentShard}/${shardCount} " +
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

                                        dir('allure-results') {
                                            stash(
                                                name: "allure-results-${currentShard}",
                                                includes: '**/*',
                                                allowEmpty: true
                                            )
                                        }
                                        dir('playwright-report') {
                                            stash(
                                                name: "playwright-report-${currentShard}",
                                                includes: '**/*',
                                                allowEmpty: true
                                            )
                                        }
                                        dir('blob-report') {
                                            stash(
                                                name: "blob-report-${currentShard}",
                                                includes: '**/*',
                                                allowEmpty: true
                                            )
                                        }
                                        dir('test-results') {
                                            stash(
                                                name: "test-results-${currentShard}",
                                                includes: '**/*',
                                                allowEmpty: true
                                            )
                                        }
                                    }
                                }
                            }
                        }
                        parallel shardStages

                        for (int shardNumber = 1; shardNumber <= shardCount; shardNumber++) {
                            dir("allure-results/shard-${shardNumber}") {
                                unstash "allure-results-${shardNumber}"
                            }
                            dir("playwright-report/shard-${shardNumber}") {
                                unstash "playwright-report-${shardNumber}"
                            }
                            dir("blob-report/shard-${shardNumber}") {
                                unstash "blob-report-${shardNumber}"
                            }
                            dir("test-results/shard-${shardNumber}") {
                                unstash "test-results-${shardNumber}"
                            }
                        }
                    } else {
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
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'allure-results/**, playwright-report/**, blob-report/**, test-results/**, ai-results/**',
                allowEmptyArchive: true,
                fingerprint: true
            )

            script {
                if (fileExists('allure-results')) {
                    echo 'Generating and publishing the Allure report'
                    catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {
                        allure([
                            includeProperties: false,
                            jdk: '',
                            commandline: 'Allure',
                            results: params.SPLIT_TESTS
                                ? (1..(params.SHARD_COUNT as Integer)).collect {
                                    shard -> [path: "allure-results/shard-${shard}"]
                                }
                                : [[path: 'allure-results']]
                        ])
                    }
                } else {
                    echo 'No Allure results were generated; skipping the Allure report'
                }
            }

            archiveArtifacts(
                artifacts: 'allure-report/**',
                allowEmptyArchive: true,
                fingerprint: true
            )
            echo 'Test reports and artifacts archived when available'
        }
    }
}
