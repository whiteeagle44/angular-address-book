FROM node:alpine as build
WORKDIR /app
COPY ./src .
COPY package*.json .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 4200
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
