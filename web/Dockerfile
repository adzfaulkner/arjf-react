FROM node:14.4.0-stretch as builder
ARG react_scripts_version
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/
RUN npm install --silent && \
    npm install react-scripts@$react_scripts_version -g --silent
COPY . /app
RUN npm run test -- --coverage && \
    npm run build

FROM nginx:1.19.0-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf/default-prod.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app
COPY src/assets/rss.xml /app/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]