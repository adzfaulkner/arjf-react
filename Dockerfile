FROM node:17-stretch
ARG react_scripts_version
RUN mkdir -p /app/build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./web/package.json /app
RUN npm install --silent  --save-dev && \
    npm install react-scripts@$react_scripts_version -g --silent
COPY ./web /app
RUN chown -R node: /app
USER node