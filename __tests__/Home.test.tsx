import { render, screen } from '@testing-library/react'
import Home from '@/components/Home'

describe('Home', () => {
  it('renders a text', () => {
    render(<Home />)

    const text = screen.getByText(/Music Platform/i)

    expect(text).toBeInTheDocument()
  })
})
