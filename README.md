# arjf-react [![Build Status](https://travis-ci.com/adzfaulkner/arjf-react.svg?branch=master)](https://travis-ci.com/adzfaulkner/arjf-react)
React version of my portfolio site

## Prerequisites

* Docker installed
* docker-compose (although optional if you can read the docker-compose.yml file featured in this repos root)
* Email-JS account (http://www.emailjs.com)

## Quick start dev environment

1. Clone this repo
2. Cd into the clone directory
2. Copy ./web/.env.sample to ./web/.env and modify as necessary.
3. Copy ./php/.env.sample to ./php/.env.sample and modify as necessary.
4. Copy ./php/wp/wp-config-sample.php to ./php/wp/wp-config.php and modify as necessary. 
5. Run `docker-compose -f ./docker-compose-dev.yml up`

## Run tests

1. Repeat 1-4 steps above
2. Run `docker-compose -f docker-compose-test.yml up`
