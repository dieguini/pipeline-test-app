# Build stage
FROM node:lts-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install 
RUN npm install -g @aws-amplify/cli
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  