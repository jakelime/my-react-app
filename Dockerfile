# Backend Dockerfile
FROM node:22-bookworm-slim
WORKDIR /app
COPY ./client/ ./
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]