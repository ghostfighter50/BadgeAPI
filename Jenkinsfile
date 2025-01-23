pipeline {
    agent any
    tools {
        maven 'Maven'
    }
    stages {

        stage("SonarQube") {
            steps {
                script {
                    withSonarQubeEnv('Sonarqube') {
                        sh 'mvn clean package sonar:sonar'
                    }
                }
            }
        }
        
    }
}
