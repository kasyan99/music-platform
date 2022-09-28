import { render, screen } from '@testing-library/react'
import TrackList from '@/components/TrackList'
import { ITrack } from 'types/track'

const tracks: ITrack[] = [
  { _id: '1', artist: 'artist', audio: 'https://www.shazam.com/ru/track/475479420/giant', listens: 0, name: 'Name', text: 'dfsf', picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg', comments: [] },
  { _id: '2', artist: 'artist2', audio: 'https://www.shazam.com/ru/track/475479420/giant', listens: 0, name: 'Name 2', text: 'dfsf', picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg', comments: [] },
  { _id: '3', artist: 'artist3', audio: 'https://www.shazam.com/ru/track/475479420/giant', listens: 0, name: 'Name 3', text: 'dfsf', picture: 'https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/87/38/d7/8738d747-526c-fa8f-5cf0-36ac676bc232/886447461051.jpg/400x400cc.jpg', comments: [] },
]

describe('tracks list page', () => {
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

  it('tracks list length should be equal to props list length', () => {
    render(<TrackList tracks={tracks} />)

    const tracksList = screen.getAllByTestId('TrackItem')

    expect(tracksList.length).toEqual(tracks.length)
  })
})
