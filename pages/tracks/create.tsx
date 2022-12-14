import FileUpload from "@/components/stepsContent/FileUpload"
import TrackInfo from "@/components/stepsContent/TrackInfo"
import StepWrapper from "@/components/StepWrapper"
import { Card } from "antd"
import { useInput } from "hooks/useInput"
import MainLayout from "layouts/MainLayout"
import { useRouter } from "next/router"
import { useState } from "react"
import { trackAPI } from "services/TrackService"
import s from "../../styles/create.module.scss"

const TrackCreate: React.FC = () => {
   const [picture, setPicture] = useState<File | null>(null)
   const [audio, setAudio] = useState<File | null>(null)

   const name = useInput('')
   const artist = useInput('')
   const text = useInput('')

   const router = useRouter()

   const [createPost, { isLoading }] = trackAPI.useCreateTrackMutation()

   const onSubmit = () => {
      if (picture && audio) {
         const formData = new FormData()
         formData.append('name', name.value)
         formData.append('artist', artist.value)
         formData.append('text', text.value)
         formData.append('picture', picture)
         formData.append('audio', audio)
         createPost(formData)
            .then(() => router.push('/tracks'))
            .catch(() => alert('something went wrong'))
      }

   }

   return <MainLayout title="Music platform - create track">
      <Card className={s.container}>
         <StepWrapper
            firstContent={<TrackInfo name={name} artist={artist} text={text} />}
            secondContent={<FileUpload accept="image/*" setFile={setPicture} file={picture} />}
            thirdContent={<FileUpload accept="audio/*" setFile={setAudio} file={audio} />}
            onSubmit={onSubmit}
            isLoading={isLoading}
         />
      </Card>
   </MainLayout>
}

export default TrackCreate