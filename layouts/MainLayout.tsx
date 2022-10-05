import { Menu } from 'antd'
import "antd/dist/antd.css"

import { Layout } from 'antd';
import React from 'react';
import Link from 'next/link';
import Player from '@/components/Player';
import Head from 'next/head';
const { Header, Content } = Layout;

type Props = {
   children: JSX.Element | string
   title?: string
   description?: string
   keywords?: string
}

const MainLayout: React.FC<Props> = ({ children, title, description, keywords }) => {
   return (<>
      <Head>
         <title>{title || 'Music platform'}</title>
         <meta name='description' content={'Music platform' + description} />
         <meta name='robots' content='index,follow' />
         <meta name='keywords' content={keywords || "Music, track"} />
         <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout style={{ minHeight: '100%' }}>
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
                        label: <Link href={'/tracks'}>Tracks</Link>
                     },
                     {
                        key: Date.now() + Math.random(),
                        label: <Link href={'/albums'}>Albums</Link>
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
   </>)
}


export default MainLayout;