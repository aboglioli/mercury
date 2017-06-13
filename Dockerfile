FROM node:latest

RUN mkdir /src

RUN npm install nodemon -g

WORKDIR /src
ADD package.json /src/package.json
RUN npm install

RUN ls -l

ADD nodemon.json /src/nodemon.json

EXPOSE 3000

CMD npm start
