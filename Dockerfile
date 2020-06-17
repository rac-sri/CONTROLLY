FROM node:12-stretch-slim
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm i
COPY . .


FROM alpine:3.10
RUN apk add --update nodejs-current
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/str
WORKDIR /home/node/src
COPY --from=0 --chown=node:node /build .
CMD ["npm","start"]

