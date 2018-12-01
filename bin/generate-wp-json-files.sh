#!/bin/bash

pwd=${PWD}

curl http://localhost/wp/wp-json/wp/v2/posts -o $pwd/web/src/json/posts.json
curl http://localhost/wp/wp-json/wp/v2/categories -o $pwd/web/src/json/categories.json
