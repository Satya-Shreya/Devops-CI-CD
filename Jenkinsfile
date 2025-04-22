pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                // Cloning from the master branch of your GitHub repository
                git branch: 'master', url: 'https://github.com/Satya-Shreya/Devops-CI-CD.git'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Repository cloned successfully.'
                // Customize the deployment step based on your hosting method
                // If deploying to a static website or server, you could use commands like:
                
                // Example: Deploy to a web server (Apache/Nginx)
                // sh 'scp -r * user@server:/path/to/web/directory'

                // If you're using a build tool or script, add those commands:
                // For example, running a deploy script like:
                // sh 'npm run deploy'

                // Example if you are deploying to a GitHub Pages branch:
                // sh 'git push origin gh-pages'

                echo 'Deployment step goes here.'
            }
        }
    }
}
