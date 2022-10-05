import { Card } from "antd"
import { ChangeEvent, useRef, useState } from "react"
import s from '../../styles/FileUpload.module.scss'
type Props = {
   file: File | null
   setFile: Function
   accept: 'image/*' | 'audio/*'
}


const AudioUpload: React.FC<Props> = ({ setFile, accept, file }) => {

   const pickFile = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         const file = e.target.files[0]
         setFile(file)
      }
   }

   return (
      <div
         // style={{ position: 'relative', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
         className={s.root}
      >
         <input
            type='file'
            accept={accept}
            // style={{ position: 'absolute', top: 0, left: 0, opacity: 0, width: '100%', height: '100%', zIndex: 99, cursor: 'pointer' }}
            onChange={(e) => pickFile(e)}
         />
         {!file &&
            <Card
               // style={{ border: '2px solid rgba(0,0,0,0.3)', height: '50%', width: '50%', backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
               className={s.dragAndDrop}
            >
               <div
                  // style={{ fontSize: '36px', opacity: '0.5' }}
                  className={s.text}
               >
                  Click or drag file
               </div>
            </Card>
         }
         {accept === 'image/*' &&

            <div style={{ height: '80%', position: 'absolute' }}>
               <img src={file ? URL.createObjectURL(file) : ''} style={{ height: '100%' }} />
            </div>
         }

         {accept === 'audio/*' && file &&
            <Card>
               {file?.name}
            </Card>
         }


      </div>
   )
}

export default AudioUpload