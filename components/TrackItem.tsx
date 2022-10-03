import { CaretRightFilled, PauseCircleFilled } from "@ant-design/icons"
import { Button, Card, Col, Row, Typography } from "antd"
import { useAppDispatch } from "hooks/redux"
import { useRouter } from "next/router"
import React from "react"
import { playerSlice } from "store/reducers/playerSlice"
import { ITrack } from "types/track"
import s from '../styles/TrackItem.module.scss'

type Props = {
   track: ITrack
   active?: boolean
}

const TrackItem: React.FC<Props> = ({ track, active = true }) => {
   const router = useRouter()

   const dispatch = useAppDispatch()
   const { pauseTrack, playTrack, setActiveTrack } = playerSlice.actions

   const play = (e: React.MouseEvent) => {
      e.stopPropagation()
      dispatch(setActiveTrack(track))
      dispatch(playTrack())
   }

   return (
      <Col span={24} className={s.track}>
         <Card onClick={() => router.push(`/tracks/${track._id}`)} data-testid='TrackItem'>
            <Row align="middle" justify="space-between">
               <Col>
                  <Button shape="circle"
                     icon={
                        active
                           ? <CaretRightFilled />
                           : <PauseCircleFilled />
                     }
                     className={s.btn}
                     onClick={play}
                  />
                  <img src={'https://music-platform-api.herokuapp.com/' + track.picture} alt={track.name} className={s.img} />
                  <Row style={{ display: 'inline-flex' }} >
                     <Col span={24}><Typography.Title level={3} style={{ margin: 0, marginBottom: 5 }}>{track.name}</Typography.Title></Col>
                     <Col span={24}>{track.artist}</Col>
                  </Row>
               </Col>
               <Col>
                  {active && <span>02:42/03:22</span>}
               </Col>
            </Row>
         </Card>
      </Col>
   )
}

export default TrackItem