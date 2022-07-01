import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playB4() {
  synth.triggerAttackRelease('B4', '8n')
}

export function playB4Sharp() {
  synth.triggerAttackRelease('B#4', '8n')
}
