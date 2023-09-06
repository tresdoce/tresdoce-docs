ARG NODE_VERSION=18.17.0
ARG APP_PORT=80
ARG IMAGE_NAME=docusaurus


FROM node:${NODE_VERSION}-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# ---

FROM nginx:alpine
LABEL name=${IMAGE_NAME}

USER node
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE ${APP_PORT}

CMD ["nginx", "-g", "daemon off;"]
