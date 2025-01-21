pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh '''
                if ! [ -x "$(command -v talisman)" ]; then
                    echo "Talisman is not installed or not in PATH!"
                    exit 1
                fi
                talisman --version
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
