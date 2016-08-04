echo "get code"
git pull origin master

echo "bower install"
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install -g bower
bower install

echo "build docker"
docker build -t namcha:latest .

echo "re-run docker"
docker rm -f namcha
docker run --restart=always -p 80:3000 -d -e "MONGO_URI=mongodb://172.17.0.3:27017/namcha" --name namcha namcha