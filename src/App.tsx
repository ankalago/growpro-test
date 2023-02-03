import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import List from './pages/List';
import React from 'react';
import Bike from './pages/Bike';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { isProduction } from './constants';

const queryClient = new QueryClient()

const App: React.FC = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<List/>}/>
          <Route path="bicycle/:slug" element={<Bike/>}/>
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={isProduction} />
    </QueryClientProvider>
  )
}

export default App
