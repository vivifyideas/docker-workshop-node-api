# docker-workshop-node-api

```js
yarn
yarn start
```

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
