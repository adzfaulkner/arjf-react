FROM node:9.6.1 as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /app
RUN npm run test -- --coverage
RUN npm run build

FROM nginx:1.15.2-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf/default-prod.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /app
COPY src/assets/rss.xml /app/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]