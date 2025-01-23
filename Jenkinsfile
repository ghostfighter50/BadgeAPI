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
                    --nvdApiKey 'bfaa6a2f-8b05-488e-907d-84ed2b993c0e'
                    --prettyPrint''', odcInstallation: 'Dependency-Check'
                
                dependencyCheckPublisher pattern: 'dependency-check-report.xml'
            }
        }

    }
}
