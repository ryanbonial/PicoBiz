FROM node:alpine

EXPOSE 3030
ENV PATH /node_modules/.bin:$PATH

WORKDIR /usr
RUN mkdir  -p /usr/picoserver

ADD package.json /usr/picoserver
WORKDIR /usr/picoserver
RUN npm install

ADD ./app ./

CMD [ "node", "index.js" ]