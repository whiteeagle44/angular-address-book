FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000

FROM node:alpine
COPY --from=build /app/dist .
ENTRYPOINT [ "node", "dist/index.js" ]
