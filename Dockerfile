FROM node:6.3.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY bower.json /usr/src/app/

RUN npm install
RUN npm install bower -g
RUN bower install --allow-root
COPY . /usr/src/app

CMD [ "npm", "start" ]