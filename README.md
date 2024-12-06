# Simple react application

## Quickstart - For development

```shell
cd client
npm install
npm start
```

## Quickstart - For Dev, START-UP project creation

```shell
npx create-react-app client
cd client
npm i web-vitals --save-dev
npm start
```

## Production build

```shell
cd client # cd to app directory
npm install # install node dependencies
npm run build # build into `build` folder
npm install -g serve # production server application
serve -s build # serves from the build folder
```

## Docker development

```shell
docker cp "./src-frontend/client/src/." 78d3570f9404:/app/src
docker exec -it 78d3570f9404 bash
npm run build
exit
docker compose stop frontend
docker compose start frontend
```