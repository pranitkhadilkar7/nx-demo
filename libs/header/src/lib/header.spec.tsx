import { render, screen } from '@testing-library/react'

import { Header } from './header'

describe('Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header text="Welcome" />)
    expect(baseElement).toBeTruthy()
    screen.getByText('Welcome')
  })
})
