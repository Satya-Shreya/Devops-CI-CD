pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = '/usr/local/bin/docker-compose'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/your-project.git'  // Replace with your GitHub repo URL
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yaml build
                    '''
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yaml up -d
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yaml ps
                    '''
                }
            }
        }

        stage('Teardown') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yaml down
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
