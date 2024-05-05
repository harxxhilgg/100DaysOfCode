import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a', 
//   props: {
//     href: 'https://www.google.com/', 
//     target: '_blank'
//   },
//   children: 'Click me to Visit Google'
// }

const anotherElement = (
  <a href="https://www.google.com/" target='_blank'>Visit Google</a>
)

const anotherUser = "Butterfly Knife | Doppler";

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com/', target: '_blank'},
  'Click me to Visit Google',
  anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
