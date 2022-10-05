import { Row } from "antd"
import axios from "axios"
import { GetServerSideProps, NextPage } from "next"
import { ITrack } from "types/track"
import TrackItem from "./TrackItem"

type Props = {
   tracks: ITrack[]
}

const TrackList: NextPage<Props> = ({ tracks }) => {
   return (
      <Row>
         {tracks && tracks.map(track =>
            <TrackItem
               key={track._id}
               track={track}
            />)}
      </Row>
   )
}

export default TrackList

export const getServerSideProps: GetServerSideProps = async () => {
   const res = await axios.get('https://music-platform-api.herokuapp.com/tracks')
   return {
      props: {
         tracks: res.data
      }
   }
}