import TrackList from "@/components/TrackList"
import { Button, Card, Col, Input, Row, Typography } from "antd"
import useDebounce from "hooks/useDebounce"
import MainLayout from "layouts/MainLayout"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { trackAPI } from "services/TrackService"
import { ITrack } from "types/track"

const TracksPage: React.FC = () => {
   const router = useRouter()
   const { data: tracks, refetch } = trackAPI.useFetchAllTracksQuery('')
   const [actualTracks, setActualTracks] = useState<ITrack[]>(tracks)

   const [query, setQuery] = useState('')
   const { data: searchedTracks } = trackAPI.useSearchTracksQuery(query)

   //use debounce to prevent request on every change
   const debouncedQuery = useDebounce(query, 500)

   const search = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value
      setQuery(query)
   }

   useEffect(() => {
      setActualTracks(searchedTracks)
   }, [debouncedQuery])

   useEffect(() => {
      setActualTracks(tracks)
   }, [tracks])

   //to apdate trackss list after create new track
   useEffect(() => {
      refetch()
   }, [])

   return (
      <MainLayout title="Music platform - tracks">
         <>
            <Card title={
               <Row>
                  <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <Typography.Title style={{ margin: 0 }}>List of Tracks</Typography.Title>
                     <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
                  </Col>
               </Row>
            }
               bordered={false}
            >
               <Input
                  value={query}
                  onChange={search}
               />
               <TrackList tracks={actualTracks} />
            </Card>
         </>
      </MainLayout>
   )
}

export default TracksPage