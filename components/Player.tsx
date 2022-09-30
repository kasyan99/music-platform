import { CaretRightFilled, PauseCircleFilled, SoundFilled } from "@ant-design/icons"
import { Button, Col, Row, Typography } from "antd"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import { playerSlice } from "store/reducers/playerSlice"
import s from '../styles/Player.module.scss'
import TrackProgress from "./TrackProgress"

const Player: React.FC = () => {
   const dispatch = useAppDispatch()
   const { active, currentTime, duration, pause, volume } = useAppSelector(state => state.player)
   const { pauseTrack, playTrack, setActiveTrack, setCurrentTime, setDuration, setVolume } = playerSlice.actions
   const track = {
      _id: '1',
      artist: 'artist',
      audio: 'https://mp3name.co/singer/kalush-orchestra/',
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

   const play = () => {
      // e.stopPropagation()
      console.log('click');

      if (pause) {
         dispatch(playTrack())
      } else {
         dispatch(pauseTrack())
      }
   }

   return (<div className={s.player} >
      <div className="container">
         <Row align="middle" justify="space-between" style={{ width: 920 }}>
            <Col>
               <Row align="middle" justify="space-between">
                  <Col style={{ marginRight: 10 }}>
                     <Button shape="circle"
                        icon={
                           !pause
                              ? <CaretRightFilled />
                              : <PauseCircleFilled />
                        }
                        className={s.btn}
                        onClick={() => play()}
                     />
                  </Col>
                  <Col>

                     <Row style={{ display: 'inline-flex' }} >
                        <Col span={24}><Typography.Title level={3} style={{ margin: 0, marginBottom: 5 }}>{track.name}</Typography.Title></Col>
                        <Col span={24}>{track.artist}</Col>
                     </Row>
                  </Col>
               </Row>
            </Col>
            <TrackProgress left={0} right={100} onChange={() => ({})} />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
               <SoundFilled style={{ marginRight: 5 }} />
               <TrackProgress left={0} right={100} onChange={() => ({})} />
            </div>

            <Col>
               {active && <span>02:42/03:22</span>}
            </Col>
         </Row>
      </div>
   </div>)
}

export default Player