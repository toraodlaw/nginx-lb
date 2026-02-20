FROM node:20-alpine

WORKDIR /load-balancing

COPY package.json .
RUN npm install

COPY . .

EXPOSE 6000

CMD ["node", "server.js"]
