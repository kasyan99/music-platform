import TrackPage from "@/components/TrackPage"
import axios from "axios"
import MainLayout from "layouts/MainLayout"
import { GetServerSideProps } from "next"
import { ITrack } from "types/track"

type Props = {
   track: ITrack
}

const TrackPageT: React.FC<Props> = ({ track }) => {
   return (
      <MainLayout
         title={'Music platform' + track.name + track.artist}
         keywords={`Music, artist, ${track.name}, ${track.artist}`}
      >
         <TrackPage track={track} />
      </MainLayout >
   )
}

export default TrackPageT

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
   const res = await axios.get('https://music-platform-api.herokuapp.com/tracks/' + params?.id)
   return {
      props: {
         track: res.data
      }
   }
}