import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar/Sidebar';
import Sidecontent from './components/layout/Sidecontent/Sidecontent';

// Pages
import Home from './pages/Home'
import Library from './pages/Library'
import Store from './pages/Store'

import styles from './App.module.css';


function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className={styles.App}>
          <Sidebar />
          <Sidecontent>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/store" element={<Store/>} />
              <Route exact path="/library" element={<Library/>} />
            </Routes>
          </Sidecontent>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
