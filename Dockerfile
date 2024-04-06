FROM node:lts-alpine AS build

ENV PUBLIC_HYPEAPI="https://hypebot.dev"

WORKDIR /app
RUN npm install -g pnpm@8.15.6
COPY . .
RUN pnpm i && pnpm build

FROM httpd:2.4.59 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
