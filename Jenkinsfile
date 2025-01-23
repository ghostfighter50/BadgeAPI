node {
    stage('SCM') {
        // Checkout code from the source control management (SCM) system
        checkout scm
    }

    stage('SonarQube Analysis') {
        // Use the default Maven tool configured in Jenkins
        def mvn = tool 'Maven';

        // Use SonarQube environment configured in Jenkins
        withSonarQubeEnv() {
            // Run Maven with SonarQube analysis
            sh "${mvn}/bin/mvn clean verify sonar:sonar -Dsonar.projectKey=ghostfighter50_BadgeAPI_d2e7776c-a772-4efb-b9c8-5403376242a7 -Dsonar.projectName='BadgeAPI'"
        }
    }
}
