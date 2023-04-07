FROM node:lts-alpine AS build

WORKDIR /app
RUN npm install -g pnpm@8.1.1
COPY . .
RUN pnpm i && pnpm build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
