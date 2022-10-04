import TrackList from "@/components/TrackList"
import { Button, Card, Col, Row, Typography } from "antd"
import MainLayout from "layouts/MainLayout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { trackAPI } from "services/TrackService"

const TracksPage: React.FC = () => {
   const router = useRouter()

   const { data: tracks } = trackAPI.useFetchAllTracksQuery('')

   return (
      <MainLayout title="Music platform - tracks">
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