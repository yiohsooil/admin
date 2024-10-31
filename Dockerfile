FROM node:alpine

WORKDIR /app

COPY package*.json .


RUN rm -rf node_modules
RUN npm install

COPY . .

RUN npm install @rollup/rollup-linux-x64-gnu --save-optional

EXPOSE 3000

ENTRYPOINT  [ "npm", "run", "dev" ]