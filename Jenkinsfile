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
        
    }
}
