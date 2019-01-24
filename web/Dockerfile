FROM node:9.6.1 as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /app

RUN npm run build

FROM nginx:1.15.2-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY ssl/arjf.key /etc/ssl/arjf.key
COPY ssl/www.arjf.co.uk.crt /etc/ssl/www.arjf.co.uk.crt
RUN chmod 0400 /etc/ssl/www.arjf.co.uk.crt /etc/ssl/arjf.key && \
    mv  /etc/nginx/conf.d/default-prod.conf /etc/nginx/conf.d/default.conf && \
    rm /etc/nginx/conf.d/default-dev.conf
COPY --from=builder /app/build /app
COPY src/repositories/json/rss.xml /app/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]