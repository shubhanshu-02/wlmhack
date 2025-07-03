same as my .env (try not to change)

```
MONGO_URI=mongodb://root:secret@localhost:27017
JWT_SECRET=your_jwt_secret
PORT=3000
```

# Docker Mongodb setup

```bash
docker run -d \
  --name local-mongo \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo:latest
```

run with `npm run dev` ('@' alias points to 'src')
