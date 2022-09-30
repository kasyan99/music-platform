import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TrackProgress from '@/components/TrackProgress'

const right = 100
const change = () => ({})

describe('TrackProgress', () => {

   it('input value should be 0', async () => {
      render(<TrackProgress left={0} right={right} onChange={change} />)

      const input = screen.getByTestId('progress')

      expect(input).toBeInTheDocument()
      expect(input.closest('input')?.value).toEqual(String(0))
   })

   it('input valur should be 40', async () => {
      render(<TrackProgress left={40} right={right} onChange={change} />)

      const input = screen.getByTestId('progress')

      expect(input).toBeInTheDocument()
      expect(input.closest('input')?.value).toEqual(String(40))
   })
})