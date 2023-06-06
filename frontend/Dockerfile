FROM node:18.12.1-alpine3.16

ADD . /thigio-poc

WORKDIR /thigio-poc

RUN npm install

ENTRYPOINT [ "npm", "start" ]