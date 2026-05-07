FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
copy node_modules ./node_modules
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main"]