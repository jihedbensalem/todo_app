
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { StrictMode } from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>,
  </StrictMode>
)