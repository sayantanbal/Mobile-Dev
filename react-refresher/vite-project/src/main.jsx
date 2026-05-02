import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// created root and take control of the div with id 'root' 
// HMR --> Hot Module Replacement
// jsx --> js + html (javascript xml) it is a syntax extension for javascript, which allows us to write html-like syntax in our javascript code. It is not a part of javascript, but it is transpiled to javascript by tools like babel. It makes it easier to write and understand the structure of the UI components.

// const h1 = React.createElement('h1', null, 'Hello, World!') // takes 3 args, // 1. type of element to create (h1, div, etc.) // 2. props (attributes)(classname, ids etc.) of the element (null in this case) // 3. children (content inside the element)

// const h2 = React.createElement('h2', {
//   className: 'heading',
//   id: 'heading-id'
// }, 'Welcome to React Refresher!')

createRoot(document.getElementById('root')).render(
  // <div>
  //   <h1>Hello, World!</h1>
  //   {h2} // why curly braces? because we are embedding a javascript expression (h2) inside the jsx. Curly braces are used to indicate that we are embedding a javascript expression inside the jsx.
  // </div>
  <App />
)