import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playD4() {
  synth.triggerAttackRelease('D4', '8n')
}

export function playD4Sharp() {
  synth.triggerAttackRelease('D#4', '8n')
}

export function playD5() {
  synth.triggerAttackRelease('D5', '8n')
}

export function playD5Sharp() {
  synth.triggerAttackRelease('D#5', '8n')
}
