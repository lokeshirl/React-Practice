# Switch Branch to see different assignments and mini projects

## Chapter 1 - Introduction to React & Setup

  
- **Assignment 1** : If we delete `node_modules`. How to run our app again successfully ?


- **Assignment 2** : How to remove double `console.logs` from React ? [ it is not needed in real life to remove them, its just an assignment problem ].  [ *Hint: Some special Component at top level is of App is causing it* ]. We explore more about  - why this is needed in later videos.

### Special Assignments ==============

- **Assignment 3** : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

- **Assignment 4** : Try to build a react app using other toolchains like `Vite`

## Solution of Chapter - 1

- **Assignment 1** : If we delete `node_module`. we can not run our application again, if we want to run our application we need to install node modules using command `npm install` this will install required node modules (refered from package.json)

- **Assignment 2** : Double console.log is beacuse of 
`<React.StrictMode>` in main.jsx
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```



---