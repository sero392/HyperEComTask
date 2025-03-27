import { createRoot } from 'react-dom/client'
import './Root/index.css'
import App from './Root/App.jsx'
import { Provider } from 'react-redux'
import { store } from './Root/Store.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
