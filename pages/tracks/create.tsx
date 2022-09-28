import FileUpload from "@/components/stepsContent/FileUpload"
import TrackInfo from "@/components/stepsContent/TrackInfo"
import StepWrapper from "@/components/StepWrapper"
import { Card } from "antd"
import MainLayout from "layouts/MainLayout"
import { useState } from "react"

const TrackCreate: React.FC = () => {
   const [image, setImage] = useState<File | null>(null)
   const [audio, setAudio] = useState<File | null>(null)

   return <MainLayout>
      <Card style={{ width: 920 }}>
         <StepWrapper
            firstContent={<TrackInfo />}
            secondContent={<FileUpload accept="image/*" setFile={setImage} file={image} />}
            thirdContent={<FileUpload accept="audio/*" setFile={setAudio} file={audio} />}
         />
      </Card>
   </MainLayout>
}

export default TrackCreate