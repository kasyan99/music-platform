import React from "react"

type Props = {
   left: number
   right: number
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   time?: boolean
}

const TrackProgress: React.FC<Props> = ({ left, right, onChange, time = false }) => {

   const roundRight = Math.round(right)
   const roundLeft = Math.round(left)

   const rightSeconds = roundRight % 60
   const rightMinutes = (roundRight - rightSeconds) / 60

   const leftSeconds = roundLeft % 60
   const leftMinutes = (roundLeft - leftSeconds) / 60

   const displayedLeftSeconds = leftSeconds < 10 ? '0' + leftSeconds : leftSeconds
   const displayedLeftMinutes = leftMinutes < 10 ? '0' + leftMinutes : leftMinutes

   const displayedRightSeconds = rightSeconds < 10 ? '0' + rightSeconds : rightSeconds
   const displayedRightMinutes = rightMinutes < 10 ? '0' + rightMinutes : rightMinutes

   return (
      <div style={{ display: 'flex' }}>
         <input
            type='range'
            min={0}
            max={right}
            value={left}
            onChange={onChange}
            data-testid='progress'
         />
         {!time &&
            <div>{left}/{right}</div>
         }
         {time &&
            <div>{displayedLeftMinutes}:{displayedLeftSeconds}/{displayedRightMinutes}:{displayedRightSeconds}</div>
         }
      </div>
   )
}

export default TrackProgress 