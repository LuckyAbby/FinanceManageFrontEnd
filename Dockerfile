FROM node

RUN npm config set unsafe-perm true
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install -g http-server

RUN mkdir -p /usr/src/node
WORKDIR /usr/src/node
COPY . /usr/src/node

RUN cnpm install
RUN npm run build

EXPOSE 8888

CMD ["http-server","./dist","-p","8888"]
