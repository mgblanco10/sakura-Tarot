FROM node:20-alpine
WORKDIR /usr/src/app/
COPY . .
RUN cd app/ && npm install
WORKDIR /usr/src/app/app
EXPOSE 3000
CMD ["npm", "run", "server"]
