FROM node:14.11.0-alpine3.10

WORKDIR /root

RUN mkdir -p /root/fase6/
COPY package.json /root/fase6/
RUN npm install
COPY hello_world.js /root/fase6/

CMD node /root/fase6/hello_world.js
EXPOSE 8080