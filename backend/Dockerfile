FROM node:18.12.1-alpine3.16

ADD . /backend

WORKDIR /backend

EXPOSE 4000

RUN npm install
RUN npm install -g ts-node

ENTRYPOINT [ "ts-node", "src/index.ts" ]
