import { Button, Card, Col, Form, Input, Radio, Row, Typography } from "antd"
import MainLayout from "layouts/MainLayout"
import { useRouter } from "next/router"

const TrackPage: React.FC = () => {

   const track = {
      _id: '1',
      artist: 'artist',
      audio: 'https://www.shazam.com/ru/track/475479420/giant',
      listens: 0,
      name: 'Name',
      text: 'dfsf',
      picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg',
      comments: [
         { _id: '132', username: 'user1', text: 'super song' },
         { _id: '133', username: 'user2', text: 'wow song' },
         { _id: '134', username: 'user3', text: 'dfgdfgdfg sondfgfdgdfgdfgdfgdfgdfgdfgg' },
      ]
   }
   const router = useRouter()
   const [form] = Form.useForm();
   return <MainLayout>
      <div style={{ minWidth: 700 }}>
         <Button onClick={() => router.push('/tracks')} style={{ marginBottom: 10 }}>To list</Button>
         <Card>
            <Typography.Title level={2}>Info</Typography.Title>
            <Row style={{ marginBottom: 30 }}>
               <Col style={{ marginRight: 20 }}>
                  <div style={{ height: 200, width: 200 }}>
                     <img src={track.picture} style={{ width: '100%' }} />
                  </div>
               </Col>
               <Col>
                  <Typography.Title level={3}>Song - {track.name}</Typography.Title>
                  <Typography.Title level={3}>Artist - {track.artist}</Typography.Title>
                  <Typography.Title level={3}>Listens: {track.listens}</Typography.Title>
               </Col>
            </Row>
            <Typography.Title level={2}>Text of track</Typography.Title>
            <Typography.Text style={{ display: 'block' }}>{track.text}</Typography.Text>
            <Typography.Title level={2}>Comments</Typography.Title>
            <Form
               wrapperCol={{ span: 14 }}
               layout='vertical'
               form={form}
            >
               <Form.Item label="Name">
                  <Input placeholder="input placeholder" />
               </Form.Item>
               <Form.Item label="Comment text">
                  <Input.TextArea placeholder="input placeholder" />
               </Form.Item>
               <Form.Item wrapperCol={{ span: 14 }}>
                  <Button type="primary">Submit</Button>
               </Form.Item>
            </Form>

            {track.comments.map(c =>
               <Card key={Date.now() + Math.random()} style={{ marginBottom: 10 }}>
                  <Typography.Title level={4}>{c.username}</Typography.Title>
                  <Typography.Text>{c.text}</Typography.Text>
               </Card>)}
         </Card>
      </div>
   </MainLayout >
}

export default TrackPage