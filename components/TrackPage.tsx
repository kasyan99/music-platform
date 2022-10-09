import { Button, Card, Col, Form, Input, Row, Typography } from "antd"
import { useInput } from "hooks/useInput"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { trackAPI } from "services/TrackService"
import { IComment, ITrack } from "types/track"
import { checkSrc } from "utils/checkSrc"

type Props = {
   track: ITrack
}

const TrackPage: React.FC<Props> = ({ track: serverTrack }) => {
   const [track, setTrack] = useState<ITrack>(serverTrack)

   const router = useRouter()
   const [form] = Form.useForm();

   const username = useInput('')
   const commentText = useInput('')

   const [createComment, { data }] = trackAPI.useCreateCommentMutation()

   const addComment = async () => {
      const comment = {
         username: username.value,
         text: commentText.value,
         trackId: track._id
      }

      await createComment(comment)
      username.clearValue()
      commentText.clearValue()
   }

   useEffect(() => {
      //to rerender page after add comment
      if (data) {
         setTrack({ ...track, comments: [...track.comments, data as IComment] })
      }

   }, [data])

   {/*api is deploed on heroku, so static folder(with pictures and audio) is cleared after short time*/ }
   {/*so, I add to db outer links to demonstrate how player works*/ }
   {/*this finction check is it outer src*/ }
   const src = checkSrc(track.picture)

   return (
      <div>
         <Button onClick={() => router.push('/tracks')} style={{ marginBottom: 10 }}>To list</Button>
         <Card>
            <Typography.Title level={2}>Info</Typography.Title>
            <Row style={{ marginBottom: 30 }}>
               <Col style={{ marginRight: 20 }}>
                  <div style={{ height: 200, width: 200 }}>
                     <img src={src} style={{ width: '100%' }} />
                  </div>
               </Col>
               <Col>
                  <Typography.Title level={3}>Song - {track?.name}</Typography.Title>
                  <Typography.Title level={3}>Artist - {track?.artist}</Typography.Title>
                  <Typography.Title level={3}>Listens: {track?.listens}</Typography.Title>
               </Col>
            </Row>
            <Typography.Title level={2}>Text of track</Typography.Title>
            <Typography.Text style={{ display: 'block' }}>{track?.text}</Typography.Text>
            <Typography.Title level={2}>Comments</Typography.Title>
            <Form
               wrapperCol={{ span: 14 }}
               layout='vertical'
               form={form}
            >
               <Form.Item label="Name">
                  <Input placeholder="input placeholder" {...username} />
               </Form.Item>
               <Form.Item label="Comment text">
                  <Input.TextArea placeholder="input placeholder" {...commentText} />
               </Form.Item>
               <Form.Item wrapperCol={{ span: 14 }}>
                  <Button type="primary" onClick={() => addComment()}>Submit</Button>
               </Form.Item>
            </Form>

            {track?.comments.map(c =>
               <Card key={Date.now() + Math.random()} style={{ marginBottom: 10 }}>
                  <Typography.Title level={4}>{c.username}</Typography.Title>
                  <Typography.Text>{c.text}</Typography.Text>
               </Card>)}
         </Card>
      </div>
   )
}

export default TrackPage