# Unified Health Interface (UHE): Documentation

This website hosts the documentation for the open source assets created for use by healthcare facilities and patients that will help them onboard to the ABDM (Ayushman Bharat Digital Mission).

### Installation

If you have `yarn`:
```
$ yarn
```

If you have `npm`:
```
$ npm i
```

### Local Development

If you have `yarn`:
```
$ yarn start
```

If you have `npm`:
```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

If you have `yarn`:
```
$ yarn build
```

If you have `npm`:
```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you're using `npm`, use these commands:

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
