import { useEffect } from 'react'
import { playA4, playA4Sharp } from './api/A'
import { playB4 } from './api/B'
import { playC4, playC4Sharp, playC5, playC5Sharp } from './api/C'
import { playD4, playD4Sharp, playD5, playD5Sharp } from './api/D'
import { playE4, playE5 } from './api/E'
import { playF4, playF4Sharp } from './api/F'
import { playG4, playG4Sharp } from './api/G'

// const tremolo = new Tone.Tremolo(9, 0.75).toDestination().start()

export default function Keys() {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === 'a') {
        playC4()
      }
      if (e.key === 'w') {
        playC4Sharp()
      }
      if (e.key === 's') {
        playD4()
      }
      if (e.key === 'e') {
        playD4Sharp()
      }
      if (e.key === 'd') {
        playE4()
      }
      if (e.key === 'f') {
        playF4()
      }
      if (e.key === 't') {
        playF4Sharp()
      }
      if (e.key === 'g') {
        playG4()
      }
      if (e.key === 'y') {
        playG4Sharp()
      }
      if (e.key === 'h') {
        playA4()
      }
      if (e.key === 'u') {
        playA4Sharp()
      }
      if (e.key === 'j') {
        playB4()
      }
      if (e.key === 'k') {
        playC5()
      }
    })
  })

  return (
    <div className="flex justify-center relative">
      <div
        onClick={playC4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playC4Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playD4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playD4Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playE4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div className="h-36 w-6 key"></div>
      <div
        onClick={playF4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playF4Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playG4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playG4Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playA4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playA4Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playB4}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div className="h-36 w-6 key"></div>
      <div
        onClick={playC5}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playC5Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playD5}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
      <div
        onClick={playD5Sharp}
        className="h-36 w-6 border border-black text-white-100 bg-black-100 black black-pressed key m-0 p-0 z-20"
      ></div>
      <div
        onClick={playE5}
        className="h-48 w-9 border border-black bg-white-100 white white-pressed key m-0 p-0 z-10"
      ></div>
    </div>
  )
}
