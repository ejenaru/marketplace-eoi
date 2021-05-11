pipeline {
    agent any
    
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Example Deploy') {
            when {
                branch 'G1'
            }
            steps {
                 echo "Generando proyecto Angular Front"
                 sh 'cd deploy; docker-compose build --force-rm'
                 sh 'docker-compose up -d'
            }
        }
    }
}