import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TrackInfo from '@/components/stepsContent/TrackInfo'

describe('track info form', () => {

   it('input should contain value aftep typing', async () => {
      render(<TrackInfo />)

      const input = screen.getByTestId('track name input')

      expect(screen.queryByDisplayValue('hello')).toBe(null)

      await userEvent.type(input, 'hello')

      const input2 = screen.getByDisplayValue('hello')

      expect(input2).toBeInTheDocument()

   })

})