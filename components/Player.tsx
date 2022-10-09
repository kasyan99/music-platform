import { CaretRightFilled, PauseCircleFilled, SoundFilled } from "@ant-design/icons"
import { Button, Col, Row, Typography } from "antd"
import { useAppDispatch, useAppSelector } from "hooks/redux"
import React, { useEffect } from "react"
import { playerSlice } from "store/reducers/playerSlice"
import { checkSrc } from "utils/checkSrc"
import s from '../styles/Player.module.scss'
import TrackProgress from "./TrackProgress"

let audio: HTMLAudioElement

const Player: React.FC = () => {
   const dispatch = useAppDispatch()
   const { active, currentTime, duration, pause, volume } = useAppSelector(state => state.player)
   const { pauseTrack, playTrack, setActiveTrack, setCurrentTime, setDuration, setVolume } = playerSlice.actions

   // const track = {
   //    _id: '1',
   //    artist: 'artist',
   //    audio: 'https://cdn3.sefon.pro/prev/ViQK4qdKipbZ8CnVqagF4A/1664827236/304/%D0%9C%D0%B8%D0%BB%D0%B0%D0%BD%D0%B0%20%D0%A5%D0%B0%D0%BC%D0%B5%D1%82%D0%BE%D0%B2%D0%B0%20feat.%20Milana%20Star%20-%20%D0%9B%D0%9F%20%28192kbps%29.mp3',
   //    listens: 0,
   //    name: 'Name',
   //    text: 'dfsf',
   //    picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg',
   //    comments: [
   //       { _id: '132', username: 'user1', text: 'super song' },
   //       { _id: '133', username: 'user2', text: 'wow' },
   //       { _id: '134', username: 'user3', text: 'dfgdfgdfg sondfgfdgdfgdfgdfgdfgdfgdfgg' },
   //    ]
   // }

   useEffect(() => {
      if (!audio) {
         audio = new Audio
      } else {
         initAudio()
         play()
      }
   }, [active])

   const initAudio = () => {
      if (active) {
         // audio.src = 'https://music-platform-api.herokuapp.com/' + active.audio

         {/*api is deploed on heroku, so static folder(with pictures and audio) is cleared after short time*/ }
         {/*so, I add to db outer links to demonstrate how player works*/ }
         audio.src = checkSrc(active.audio)
         audio.volume = volume / 100
         audio.onloadedmetadata = () => {
            dispatch(setDuration(audio.duration))
         }
         audio.ontimeupdate = () => {
            dispatch(setCurrentTime(audio.currentTime))
         }
      }
   }

   const play = () => {
      if (pause) {
         dispatch(playTrack())
         audio.play()
      } else {
         dispatch(pauseTrack())
         audio.pause()
      }
   }

   const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
      const volume = Number(e.target.value)

      dispatch(setVolume(volume))
      audio.volume = volume / 100
   }

   const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentTime = Number(e.target.value)

      dispatch(setCurrentTime(currentTime))
      audio.currentTime = currentTime
   }

   if (!active) {
      return null
   }

   return (<div className={s.player} >
      <div className="container">
         <Row align="middle" justify="space-between" style={{ width: 920 }}>
            <Col>
               <Row align="middle" justify="space-between">
                  <Col style={{ marginRight: 10 }}>
                     <Button shape="circle"
                        icon={
                           pause
                              ? <CaretRightFilled />
                              : <PauseCircleFilled />
                        }
                        className={s.btn}
                        onClick={() => play()}
                     />
                  </Col>
                  <Col>

                     <Row style={{ display: 'inline-flex' }} >
                        <Col span={24}><Typography.Title level={3} style={{ margin: 0, marginBottom: 5 }}>{active?.name}</Typography.Title></Col>
                        <Col span={24}>{active?.artist}</Col>
                     </Row>
                  </Col>
               </Row>
            </Col>
            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} time={true} />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
               <SoundFilled style={{ marginRight: 5 }} />
               <TrackProgress left={volume} right={100} onChange={changeVolume} />
            </div>
         </Row>
      </div>
   </div>)
}

export default Player