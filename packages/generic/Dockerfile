FROM tiangolo/node-frontend:10 as build
WORKDIR /app
COPY /gui .
RUN npm install
RUN npm lerna:bootstrap
WORKDIR /app/packages/generic
RUN npm build

# Deployment
FROM nginx:1.17.6
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/packages/generic/dist /usr/share/nginx/html
