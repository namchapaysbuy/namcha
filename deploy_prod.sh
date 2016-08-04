echo "get code"
git pull origin master

echo "build docker"
sudo docker build -t namcha:latest .

echo "re-run docker"
sudo docker rm -f namcha
sudo docker run --restart=always -p 80:3000 -d --name namcha -e "MONGO_URI=mongodb://172.17.0.3:27017/namcha" namcha