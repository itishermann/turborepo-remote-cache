# Turborepo Remote cache

Self-host your [turborepo remote cache](https://turborepo.org/docs/features/remote-caching) powerred by [Remix](https://remix.run/)

## Features
- Store artifacts where you want 
  - fs: file storage ([example](./docker-compose.fs.yml)) 
  - s3: [https://aws.amazon.com/s3/](https://aws.amazon.com/s3/) ([example](./docker-compose.s3.yml))
  - azure: [https://azure.microsoft.com/en-us/services/storage/blobs/](https://azure.microsoft.com/en-us/services/storage/blobs/)
- Manage users & teams
- Manage saved artifacts (list, delete, download)
- Manage tokens (generated by yourslef for a CI or generated by the turborepo cli)
- See sessions globally, by user or by teams
- See artifacts globally, by user or by teams
- Display times saved by using the remote caching
- Probably can be deployed anywhere that support Remix ([How top deploy a Remix  app?](https://remix.run/docs/en/v1/guides/deployment))
- Docker Image support [thibmarechal/turborepo-remote-cache](https://hub.docker.com/r/thibmarechal/turborepo-remote-cache)



## Configuration

### USER configuration
- ADMIN_USERNAME : admin
- ADMIN_NAME : Admin
- ADMIN_PASSWORD : turbo
- ADMIN_EMAIL

### TURBO configuration

### Storage configuration
- STORAGE_TYPE : the type of storage to use (default: fs, options: fs ,s3, azure)
#### fs (File Storage)
- STORAGE_FS_PATH : the path where to storage the cache,
#### s3 (Amazon S3)
- STORAGE_S3_ACCESS_KEY_ID
- STORAGE_S3_SECRET_ACCESS_KEY
- STORAGE_S3_FORCE_PATH_STYLE
- STORAGE_S3_ENDPOINT
- STORAGE_S3_REGION
- STORAGE_S3_SSL_ENABLED
- STORAGE_S3_BUCKET
#### azure (Azure blob storage)
- STORAGE_AZURE_STORAGE_ACCOUNT
- STORAGE_AZURE_STORAGE_ACCESS_KEY
- STORAGE_AZURE_STORAGE_CONTAINER

### Postgres configuration
- DATABASE_URL

## Repository configuration

```json
//.turbo/config.json
{
  "apiUrl": "http://localhost:8080/turbo/api",
  "loginUrl": "http://localhost:8080/turbo/login"
}
```
// Link the repository to this remote server caching
```
npx turbo login
npx turbo link
```

## Development

- Install dependencies
```sh
yarn install
```

- Launch a postgres database
  You can use Docker with the docker-commpose.db.yml file if you want
```sh
docker-compose -f docker-compose.db.yml up -d
```

- Launche the remix dev server
```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it.

You can also use the Dockerfile
