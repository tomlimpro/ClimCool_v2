# climcool_website

## BUILD DOCKER
docker build -t climcool .

## LANCER IMAGE
docker rm
docker run -d -p 80:80 -it --name climcool climcool

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
