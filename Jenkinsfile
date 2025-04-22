pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "thrift_store"
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "Cloning repo..."
                // If your job already clones repo, skip this
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "Building Docker containers..."
                sh 'docker-compose -f docker-compose.yml build'
            }
        }

        stage('Run Containers') {
            steps {
                echo "Running containers with Docker Compose..."
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }

        stage('Health Check') {
            steps {
                echo "Checking container status..."
                sh 'docker ps'
            }
        }

        stage('Teardown (Optional)') {
            steps {
                echo "Tearing down Docker containers..."
                // Uncomment if you want to shut containers after build
                // sh 'docker-compose down'
            }
        }
    }
}
