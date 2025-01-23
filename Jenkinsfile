pipeline {
    agent any
    tools {
        maven 'Maven'
    }

    stages {

        stage('SonarQube Analysis') {
            steps {
                // Use the SonarQube environment configured in Jenkins
                withSonarQubeEnv('ServerNameSonar') {
                    // Replace localhost:9000 with the new SonarQube server URL
                    sh '''
                        mvn clean verify sonar:sonar \
                        -Dsonar.projectKey=ghostfighter50_BadgeAPI_d2e7776c-a772-4efb-b9c8-5403376242a7 \
                        -Dsonar.projectName='BadgeAPI' \
                        -Dsonar.host.url=http://localhost:9000
                    '''
                    echo 'SonarQube Analysis Completed'
                }
            }
        }
    }
}
