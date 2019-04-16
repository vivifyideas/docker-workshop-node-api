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
