FROM node:latest

RUN mkdir /src
WORKDIR /src

RUN apt-get install -y libstdc++6
RUN npm install nodemon -g

ADD package.json /src/package.json
ADD nodemon.json /src/nodemon.json
RUN npm install

ADD . /src/app

EXPOSE 3000

CMD npm run docker-start
