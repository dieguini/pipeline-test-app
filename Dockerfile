# Build stage
FROM node:latest AS build

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install -g @aws-amplify/cli && \
    npm i --only=production

# FROM node:14-bullseye-slim
# RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY package*.json /usr/src/app/
# COPY --chown=node:node . /usr/src/app
# COPY . /usr/src/app
# RUN npm ci --only=production
# RUN npm install -g @aws-amplify/cli
# USER node
# #RUN npm i
# RUN npm run build

# Production stage
FROM node:14-bullseye-slim
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
CMD ["dumb-init", "node", "server.js"]