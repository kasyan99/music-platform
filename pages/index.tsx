import styles from '@/pages/index.module.css'
import "antd/dist/antd.css"

import { Layout } from 'antd';
import React from 'react';
import Home from '@/components/Home';
import MainLayout from 'layouts/MainLayout';
const { Header, Footer, Sider, Content } = Layout;


const App = () => (
  <MainLayout>
    <Home />
  </MainLayout>
)



export default App;