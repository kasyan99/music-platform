import styles from '@/pages/index.module.css'
import "antd/dist/antd.css"

import React from 'react';
import Home from '@/components/Home';
import MainLayout from 'layouts/MainLayout';


const App = () => (
  <MainLayout>
    <Home />
  </MainLayout>
)



export default App;