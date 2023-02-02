import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import List from './pages/List';
import React from 'react';
import Product from './pages/Product';

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<List/>}/>
        <Route path="bicycle/:slug" element={<Product/>}/>
      </Route>
    </Routes>
  )
}

export default App
