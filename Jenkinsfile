checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '88869e91-dad9-4c05-ab31-131d800e1e8d', url: 'https://github.com/ravichandranjv/bdd-travis']]])

pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
  
            }
        }
        stage('Test'){
            steps {
                npm test
            }
        }
        stage('Deploy') {
            steps {
                
            }
        }
    }
}
