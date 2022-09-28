import { Col, Row } from "antd"
import { ITrack } from "types/track"
import TrackItem from "./TrackItem"

type Props = {
   tracks: ITrack[]
}

const TrackList: React.FC<Props> = ({ tracks }) => {
   return (
      <Row>
         {tracks.map(track =>
            <TrackItem
               key={track._id}
               track={track}
            />)}
      </Row>
   )
}

export default TrackList