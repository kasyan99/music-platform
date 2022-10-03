import TrackList from "@/components/TrackList"
import { Button, Card, Col, Row, Typography } from "antd"
import MainLayout from "layouts/MainLayout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { trackAPI } from "services/TrackService"

const TracksPage: React.FC = () => {
   const router = useRouter()

   // const tracks: ITrack[] = [
   //    {
   //       _id: '1',
   //       artist: 'artist',
   //       audio: 'https://cdn3.sefon.pro/prev/ViQK4qdKipbZ8CnVqagF4A/1664827236/304/%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD%D0%B0%20%D0%A5%D0%B0%D0%BC%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%20feat.%20Milana%20Star%20-%20%D0%9B%D0%9F%20%28192kbps%29.mp3',
   //       listens: 0,
   //       name: 'Name',
   //       text: 'dfsf',
   //       picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg',
   //       comments: [

   //       ]
   //    },
   //    {
   //       _id: '2',
   //       artist: 'artist2',
   //       audio: 'https://cdn6.sefon.pro/prev/xvweSHXgWHekJUpY7IsFQQ/1664831697/80/%D0%95%D0%B3%D0%BE%D1%80%20%D0%9A%D1%80%D0%B8%D0%B4%20feat.%20%D0%A4%D0%B8%D0%BB%D0%B8%D0%BF%D0%BF%20%D0%9A%D0%B8%D1%80%D0%BA%D0%BE%D1%80%D0%BE%D0%B2%20-%20%D0%A6%D0%B2%D0%B5%D1%82%20%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%A7%D1%91%D1%80%D0%BD%D1%8B%D0%B9%20%28192kbps%29.mp3',
   //       listens: 0,
   //       name: 'Name2',
   //       text: 'dfsf',
   //       picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg',
   //       comments: [

   //       ]
   //    },
   //    {
   //       _id: '3',
   //       artist: 'artist3',
   //       audio: 'https://cdn3.sefon.pro/prev/ViQK4qdKipbZ8CnVqagF4A/1664827236/304/%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD%D0%B0%20%D0%A5%D0%B0%D0%BC%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%20feat.%20Milana%20Star%20-%20%D0%9B%D0%9F%20%28192kbps%29.mp3',
   //       listens: 0,
   //       name: 'Name3',
   //       text: 'dfsf',
   //       picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg',
   //       comments: [

   //       ]
   //    },
   // ]
   const { data: tracks } = trackAPI.useFetchAllTracksQuery('')

   console.log(tracks);


   useEffect(() => {
   }, [])

   return (
      <MainLayout>
         <>
            <Card title={
               <Row>
                  <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <Typography.Title style={{ margin: 0 }}>List of Tracks</Typography.Title>
                     <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                  </Col>
               </Row>
            }
               bordered={false} style={{ width: 900 }}
            >
               <TrackList tracks={tracks} />
            </Card>
         </>
      </MainLayout>
   )
}

export default TracksPage