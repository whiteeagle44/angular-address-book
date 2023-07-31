FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm i -g @angular/cli
RUN npm i
ENTRYPOINT ["ng", "serve"]

