# Dockerfile for Node.js API
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the API port
EXPOSE 3001

CMD ["node", "dist/index.js"]
