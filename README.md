# Installation

This application requires Docker to work, turn on docker then run the following command to start:

```bash
$ docker-compose up -d
```

# Trying the app

After containers are up, the api will be available at [http://localhost:3000](http://localhost:3000)

## Locally without Docker
If you'd like to run locally, offside the container, follow the next steps:

### Create .env from .sample
- Copy .env.sample and rename it to .env

After containers are up, turn of the app container and run the following commands:

### Run migrations

```bash
$ npm run update-migrations
```

### Install dependencies
```bash
$ npm install
```

### Run the app

```bash
# development
$ npm run dev
```

## Running with kubernetes

Make sure your docker is running and you have kubernetes installed. Then run:

```bash
$ npm run config-k8s
```
## DOCS

You can see the swagger documentation [here](docs/swagger.yaml) and if you'd like you can import the insomnia file in the same folder on insomnia to have a complete list of the endpoints
