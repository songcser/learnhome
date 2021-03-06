FROM node:10.1.0-alpine

RUN mkdir /web
WORKDIR /web

COPY . /web
RUN npm install --registry=https://registry.npm.taobao.org --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
