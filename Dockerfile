# Backend Dockerfile
FROM node:22-bookworm-slim
WORKDIR /app
COPY ./client/ ./
RUN npm install --quiet
RUN npm run build
RUN npm install --quiet -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]