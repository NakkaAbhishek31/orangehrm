
pipeline {
    agent any

    tools {
        nodejs 'nodejs'
        allure 'Allure'
    }

    parameters {
    choice(
        name: 'TEST_FILE',
        choices: [
            'all',
            'tests/login.spec.ts',
            'tests/logout.spec.ts',
            'tests/PIM/pim-employee.spec.ts',
            'tests/PIM/pim-employee-list.spec.ts',
            'tests/PIM/pim-pagination.spec.ts',
            'tests/PIM/pim-attachments.spec.ts'
        ],
        description: 'Select the Playwright spec file'
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
            '@security'
        ],
        description: 'Select the test tag'
    )
}

stage('Run Playwright Tests') {
    steps {
        script {
            def testCommand =
                'npx playwright test'

            if (params.TEST_FILE != 'all') {
                testCommand +=
                    " \"${params.TEST_FILE}\""
            }

            testCommand +=
                ' --project=chromium'

            if (params.TEST_TAG != 'all') {
                testCommand +=
                    " --grep \"${params.TEST_TAG}\""
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

    post {
        always {
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )

            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )
        }
    }
}