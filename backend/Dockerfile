FROM node:18.12.1-alpine3.16

ADD . /backend
# COPY ./package.json /backend/package.json
# COPY ./src /backend/src
# COPY ./tsconfig.json /backend/tsconfig.json
# COPY .nvmrc /backend/.nvmrc
# COPY .env /backend/.env

WORKDIR /backend

EXPOSE 4000

RUN npm install
RUN npm install -g ts-node

ENTRYPOINT [ "ts-node", "src/index.ts" ]
