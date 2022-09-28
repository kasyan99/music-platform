import { Menu } from 'antd'
import "antd/dist/antd.css"

import { Layout } from 'antd';
import React from 'react';
import Link from 'next/link';
import Player from '@/components/Player';
const { Header, Content } = Layout;

type Props = {
   children: JSX.Element | string
}

const MainLayout: React.FC<Props> = ({ children }) => {
   return <Layout style={{ minHeight: '100%' }}>
      <Header>
         <div className='container'>
            <Menu
               theme="dark"
               mode="horizontal"
               defaultSelectedKeys={['2']}
               items={[
                  {
                     key: Date.now() + Math.random(),
                     label: <Link href={'/'}>Home</Link>
                  },
                  {
                     key: Date.now() + Math.random(),
                     label: <Link href={'tracks'}>Tracks</Link>
                  },
                  {
                     key: Date.now() + Math.random(),
                     label: <Link href={'albums'}>Albums</Link>
                  },
               ]
               }
            />
         </div>
      </Header>

      <div className='container'>
         <Content>
            {children}
         </Content>

      </div>
      <Player />
   </Layout>
}


export default MainLayout;