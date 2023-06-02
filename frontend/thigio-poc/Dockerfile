FROM node:18.12.1-alpine3.16

RUN apk add curl bash

ADD . /thigio-poc

WORKDIR /thigio-poc

RUN npm install

ENTRYPOINT [ "npm", "start" ]