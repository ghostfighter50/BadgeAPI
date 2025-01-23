pipeline {
    agent any
    tools {
        maven 'Maven'
    }
    stages {

        stage("SonarQube") {
            steps {
                script {
                    withSonarQubeEnv('SonarQube') {
                        sh 'mvn clean package sonar:sonar'
                    }
                }
            }
        }
        stage("deploy & OWASP Dependency-Check") {
            steps {
                dependencyCheck additionalArguments: '''
                    -o './'
                    -s './'
                    -f 'ALL'
                    --prettyPrint''', odcInstallation: 'owasp-dependency'
                dependencyCheckPublisher pattern: 'dependency-check-report.xml'
            }
        }

    }
}
