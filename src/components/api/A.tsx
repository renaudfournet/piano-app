import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playA4() {
  synth.triggerAttackRelease('A4', '8n')
}

export function playA4Sharp() {
  synth.triggerAttackRelease('A#4', '8n')
}
