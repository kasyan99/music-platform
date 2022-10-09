import { CaretRightFilled, PauseCircleFilled } from "@ant-design/icons"
import { Button, Card, Col, Row, Typography } from "antd"
import { useAppDispatch } from "hooks/redux"
import { useRouter } from "next/router"
import React from "react"
import { playerSlice } from "store/reducers/playerSlice"
import { ITrack } from "types/track"
import { checkSrc } from "utils/checkSrc"
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

   {/*api is deploed on heroku, so static folder(with pictures and audio) is cleared after short time*/ }
   {/*so, I add to db outer links to demonstrate how player works*/ }
   {/*this finction check is it outer src*/ }
   const src = checkSrc(track.picture)

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
                  <img src={src} alt={track.name} className={s.img} />
                  <Row style={{ display: 'inline-flex' }} >
                     <Col span={24}><Typography.Title level={3} style={{ margin: 0, marginBottom: 5 }}>{track.name}</Typography.Title></Col>
                     <Col span={24}>{track.artist}</Col>
                  </Row>
               </Col>
            </Row>
         </Card>
      </Col>
   )
}

export default TrackItem