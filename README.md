## Installation

### Create .env from .sample
- Copy .env.sample and rename it to .env

### Up containers

```bash
$ docker-compose up -d
```

If you'd like to run locally, offside the container, make sure the app container is off and the database is on then run:

### Run migrations

```bash
$ npm run update-migrations
```

### Install dependencies
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

## DOCS

After app starts running, go to [http://localhost:3000/doc](http://localhost:3000/doc) to check the swagger doc.