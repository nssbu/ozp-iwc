pipeline {
    agent {
        label 'KZ01_TI-141_OZP_CentOS'
    }
    stages {
        stage('Clear the workspace') {
            steps {
                sh 'sudo rm -rf *'
            }
        }
        stage('Checkout Repo') {
            steps {
                git url: 'http://www.github.com/mark-betters-ozp-forks/ozp-iwc.git', branch: 'master'
            }
        }
        stage('Build') {
            steps {
                sh '''
                  sudo npm install -g bower grunt-cli
                  npm install; npm run bower; npm run build; npm run tarDate
                  mv *.tar.gz iwc.tar.gz
                '''
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'iwc.tar.gz'
            }
        }
    }
}