# Build stage
FROM node:16-alpine AS build

WORKDIR /app
COPY . .
RUN npm install -g @aws-amplify/cli && \
    npm i --only=production
RUN ["npm", "run", "build"]

# Production stage
FROM nginx:1.23.3-alpine-slim
ENV NODE_ENV production
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]