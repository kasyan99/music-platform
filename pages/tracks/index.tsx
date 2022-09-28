import TrackList from "@/components/TrackList"
import { Button, Card, Col, Row, Typography } from "antd"
import MainLayout from "layouts/MainLayout"
import { useRouter } from "next/router"
import { ITrack } from "types/track"

const TracksPage: React.FC = () => {
   const router = useRouter()

   const tracks: ITrack[] = [
      { _id: '1', artist: 'artist', audio: 'https://www.shazam.com/ru/track/475479420/giant', listens: 0, name: 'Name', text: 'dfsf', picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg', comments: [] },
      { _id: '2', artist: 'artist2', audio: 'https://www.shazam.com/ru/track/475479420/giant', listens: 0, name: 'Name 2', text: 'dfsf', picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg', comments: [] },
      { _id: '3', artist: 'artist3', audio: 'https://www.shazam.com/ru/track/475479420/giant', listens: 0, name: 'Name 3', text: 'dfsf', picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg', comments: [] },
   ]

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