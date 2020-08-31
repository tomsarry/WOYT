FROM node:slim as builder

WORKDIR /app
COPY . .

RUN yarn && yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80