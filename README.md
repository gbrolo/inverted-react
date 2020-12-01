<div align="center">
  <h1>Inverted-React</h1>
  <p>Front end made with React to consume our inverted-api, and show inverted strings</p>
</div>

## Important folders
```app/axios``` contains Axios instance to make api calls.
```app/components``` contains React function components used in containers or screens.
```app/containers``` contains React components as web app pages, including files for reducer, actions, constants and sagas for async calls.
```app/images``` contains favicon and icon used for PWA.

## Development server
Run the development server with:

```
npm start
```

This will start the dev server at ```localhost:8000```.

## Production server
To run production, run:

```
npm run start:production
```

This will run tests, build binaries and serve contents generated in ```build``` at ```localhost:8000```.

## Redux support
Used Redux and sagas to fetch string invertions and store them at global state.

## Important notes
This project initially used react-boilerplate to do the initial project setup. You can observe diffs at GitHub to better analyze this project's contents and changes throughout time.