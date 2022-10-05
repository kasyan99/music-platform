import { Form, Input } from "antd"
import { UseInputResult } from "hooks/useInput";
import { ChangeEvent } from "react";

type Props = {
   name: UseInputResult | {}
   artist: UseInputResult | {}
   text: UseInputResult | {}
}

const TrackInfo: React.FC<Props> = ({ name, artist, text }) => {
   return (
      <Form>
         <Input name="track name" placeholder="Track name" data-testid='track name input' {...name} />
         <Input name="artist name" placeholder="Artist name" style={{ margin: '10px 0' }} {...artist} />
         <Input.TextArea name="words to the song" placeholder="Words to the song" autoSize={true} {...text} />
      </Form>
   )
}

export default TrackInfo