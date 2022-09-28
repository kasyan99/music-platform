import { Form, Input } from "antd"

const TrackInfo: React.FC = () => {
   return (
      <Form>
         <Input name="track name" placeholder="Track name" />
         <Input name="artist name" placeholder="Artist name" style={{ margin: '10px 0' }} />
         <Input.TextArea name="words to the song" placeholder="Words to the song" autoSize={true} />
      </Form>
   )
}

export default TrackInfo