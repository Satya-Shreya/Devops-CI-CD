pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = '/usr/local/bin/docker-compose'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Satya-Shreya/Devops-CI-CD'  // Replace with your GitHub repo URL
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yml build
                    '''
                }
            }
        }

        stage('Run Containers') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yml up -d
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yml ps
                    '''
                }
            }
        }

        stage('Teardown') {
            steps {
                script {
                    sh '''
                    docker-compose -f docker-compose.yml down
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
