# arjf-react [![Actions Status](https://github.com/adzfaulkner/arjf-react/actions/workflows/push.yml/badge.svg)](https://github.com/adzfaulkner/arjf-react/actions)

React version of my portfolio site

## Prerequisites

- Docker installed
- docker-compose (although optional if you can read the docker-compose.yml file featured in this repos root)
- Email-JS account (http://www.emailjs.com)

## Quick start dev environment

1. Clone this repo
2. Cd into the clone directory
3. Copy ./web/.env.sample to ./web/.env and modify as necessary.
4. Copy ./php/.env.sample to ./php/.env.sample and modify as necessary.
5. Copy ./php/wp/wp-config-sample.php to ./php/wp/wp-config.php and modify as necessary.
6. Run `docker-compose -f ./docker-compose-dev.yml up`

## Run tests

1. Repeat 1-4 steps above
2. Run `docker-compose -f docker-compose-test.yml up`
