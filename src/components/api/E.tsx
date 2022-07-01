import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playE4() {
  synth.triggerAttackRelease('E4', '8n')
}

export function playE4Sharp() {
  synth.triggerAttackRelease('E#4', '8n')
}

export function playE5() {
  synth.triggerAttackRelease('E5', '8n')
}
