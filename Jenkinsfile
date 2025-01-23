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
                    bat '''
                        mvn clean verify sonar:sonar \
                        -Dsonar.projectKey=BadgeAPI \
                        -Dsonar.projectName='BadgeAPI' \
                        -Dsonar.host.url=http://localhost:9000
                    '''
                    echo 'SonarQube Analysis Completed'
                }
            }
        }
    }
}
