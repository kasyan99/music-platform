import TrackPage from "@/components/TrackPage"
import MainLayout from "layouts/MainLayout"

const TrackPageT: React.FC = () => {
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

   return (
      <MainLayout>
         <TrackPage track={track} />
      </MainLayout >
   )
}

export default TrackPageT