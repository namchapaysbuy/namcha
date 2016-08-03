cd /var/jenkins_home/workspace/namcha.dev.unit-test

echo "get code"
git pull origin master

echo "build docker"
docker build -t namcha:latest .

echo "re-run docker"
docker rm -f namcha && docker run --restart=always -p 80:3000 -d --name namcha namcha