# Talent Frontend 

## Docker Run, build, push

### Build
`docker build -t "talent-frontend" .`

### Run 
`docker run -d -p 9080:80 talent-frontend:latest `

### Push
```bash
docker tag talent-frontend:latest ecr.amazon/talent-frontend:latest
docker push 
```

[ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)

## CI configration 
- Settings > CI/CD > Environment variables 
- Add these env CI_REGISTRY, CI_REGISTRY_USER, CI_REGISTRY_PASSWORD, CI_REGISTRY_IMAGE

## npm commands

`npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`
`npm run build`

###### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

###### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

###### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

###### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

###### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

###### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
