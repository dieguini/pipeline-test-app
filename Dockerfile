# Build stage
FROM node:16.19.0-bullseye AS build

WORKDIR /app
COPY . .
## Amplify Configuration
ARG APP_ID
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY
ARG ENV
RUN npm install -g @aws-amplify/cli
RUN rm -rf amplify && rm -rf src/aws-exports.js && \
chmod +x amplify_config.sh && \
sh amplify_config.sh -a ${APP_ID} -e ${ENV} -k ${AWS_ACCESS_KEY_ID} -s ${AWS_SECRET_ACCESS_KEY}
RUN npm i --only=production
RUN ["npm", "run", "build"]

# Production stage
FROM nginx:1.23.3-alpine-slim
ENV NODE_ENV production
COPY --from=build /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]