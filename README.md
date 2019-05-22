# Docker Workshop pt. 1 - Node API

### How to run API locally ?

```bash
yarn # Install Dependencies
yarn start # Start API at port 3030
```

### API endpoints explanation

- **GET /** - attempts to read content of `data/message.txt` and returns it as payload, or throws an `Error`.
- **POST /** - reads `application/json` content and puts everything from `text` property into `data/message.txt` file.

> Example POST request

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"text":"foo bar"}' \
http://127.0.0.1:3030
# {"status":"ok"}
```

> Example GET request

```bash
curl http://127.0.0.1:3030
# {"file":"foo bar"}
```

- **GET /blog** - reads all documents (records) from mongodb blog post collection.
- **POST /blog** - creates new blog document (record) from `title` and `text` body parameters (or sets default values).

> Example POST request

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"text":"foo bar", "title":"foo bar"}' \
http://127.0.0.1:3030/blog
# {"status":"ok"}
```

> Example GET request

```bash
curl http://127.0.0.1:3030/blog
# [ {"title": "....", "text": "...."} . . . ]
```
How node api connects to db
```
mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}`, {
  user: MONGO_DB_USER,
  pass: MONGO_DB_PASS,
  dbName: MONGO_DB_NAME,
})
```
Env variables needed for api to connect to db:
MONGO_HOST
MONGO_PORT
MONGO_DB_NAME
MONGO_DB_USER
MONGO_DB_PASS
