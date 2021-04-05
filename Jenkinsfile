pipeline {
    agent any
    environment{
        PORT_FRONT=21100
        PORT_BACK=22101
    }
    tools { 
        maven 'Maven3.6.3' 
        jdk 'jdk8'  
    }
    stages {
        stage('FASE INICIO') {
            steps {
                echo 'Construyendo...'
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                '''
            }
        }
        stage('FASE BUILD') {
            failFast true
            parallel {
                stage('DESARROLLO') {
                    stages {
                        stage('<< Generación de artefactos Java >>') {
                            steps {
                                /*sh 'cd FalmBack; mvn clean install -DskipTests;'*/
                                                            
                                                               
                            }
                        }

                        stage('<< Generación de artefactos Docker Back >>'){
                            steps{
                                echo "Generando Docker Back"
                                /*sh 'docker rm -f ifalm || true'
                                sh 'cd FalmBack;docker build -t dfalm /var/lib/jenkins/workspace/falm/FalmBack'
                                sh 'docker run -it -d --name ifalm -p ${PORT_BACK}:8080 -p 28000:28000 -v FalmVolume:/opt:rw dfalm'*/

                            }
                        }
						
						
						 stage('<< Generación de artefactos Docker Front >>'){
                            steps{
                                echo "Generando Docker Front"
                                /*sh 'docker rm -f iffalm || true'
                                sh 'cd FalmFront;docker build -t dffalm /var/lib/jenkins/workspace/falm/FalmFront'
                                sh 'docker run -it -d --name iffalm  -p ${PORT_FRONT}:80 dffalm'*/

                            }
                        }


                        
                    }
                }
            }
        }
    }
    post {
        success {
            /*mail to: "aquira@gmail.com", subject:"SUCCESS: ${currentBuild.fullDisplayName}", body: "Hecho"*/
            echo 'Finalizado con éxito'
        }
        failure {
            echo 'Ha fallado'
        }
        always {
            echo 'Process finished'
        }
    }
}
