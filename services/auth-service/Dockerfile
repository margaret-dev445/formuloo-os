FROM node:20-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY package*.json ./
COPY node_modules ./node_modules
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]