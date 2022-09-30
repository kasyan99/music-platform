type Props = {
   left: number
   right: number
   onChange: () => void
}

const TrackProgress: React.FC<Props> = ({ left, right, onChange }) => {
   return (
      <div style={{ display: 'flex' }}>
         <input
            type='range'
            min={left}
            max={right}
            value={left}
            onChange={onChange}
            data-testid='progress'
         />
         <div>{left}/{right}</div>
      </div>
   )
}

export default TrackProgress 