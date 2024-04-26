FROM node:20.12.2-alpine3.19 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci --force
COPY . .
RUN npm run build
RUN npm prune --production --force

FROM node:20.12.2-alpine3.19
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
