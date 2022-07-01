import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playF4() {
  synth.triggerAttackRelease('F4', '8n')
}

export function playF4Sharp() {
  synth.triggerAttackRelease('F#4', '8n')
}
