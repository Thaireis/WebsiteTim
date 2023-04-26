FROM node:16.17.0-bullseye-slim as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN node_modules/.bin/ng build
FROM nginx as runtime
COPY --from=build /app/dist/MyAngularApp /usr/share/nginx/html
