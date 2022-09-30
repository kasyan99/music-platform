import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StepWrapper from '@/components/StepWrapper'

describe('StepWrapper', () => {
   beforeAll(() => {
      Object.defineProperty(window, "matchMedia", {
         writable: true,
         value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
         }))
      })
   })

   it('first should be in the document after render', () => {
      const firstCText = 'first component'
      const secondText = 'second component'
      const thirdText = 'third component'

      render(
         <StepWrapper
            firstContent={<div>{firstCText}</div>}
            secondContent={<div>{secondText}</div>}
            thirdContent={<div>{thirdText}</div>}
         />
      )

      const firstC = screen.getByText(firstCText)

      expect(firstC).toBeInTheDocument()


      const nextBtn = screen.getByTestId('nextBtn')

      expect(nextBtn).toBeInTheDocument()
      fireEvent.click(nextBtn)

      const firstCAfterNext = screen.queryByText(firstCText)
      expect(firstCAfterNext).not.toBeInTheDocument()

   })


   it('first should NOT be in the document after click next btn', () => {
      const firstCText = 'first component'
      const secondText = 'second component'
      const thirdText = 'third component'

      render(
         <StepWrapper
            firstContent={<div>{firstCText}</div>}
            secondContent={<div>{secondText}</div>}
            thirdContent={<div>{thirdText}</div>}
         />
      )

      const firstC = screen.getByText(firstCText)

      expect(firstC).toBeInTheDocument()


      const nextBtn = screen.getByTestId('nextBtn')

      expect(nextBtn).toBeInTheDocument()
      fireEvent.click(nextBtn)

      const firstCAfterNext = screen.queryByText(firstCText)
      expect(firstCAfterNext).not.toBeInTheDocument()

   })

})