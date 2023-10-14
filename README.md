# DynamoDB counter sample

This is a simple counter app using DynamoDB in local-stac.

# Instructions

The server and the client are separate applications.

The server requires docker which will host DynamoDB. It can be started with

```
docker-compose up -d
npm install
npm run build
npm run start
```

The client can be started with:

```
npm install
npm run start
```

Then, navigating to localhost:3000 will display the login page.
