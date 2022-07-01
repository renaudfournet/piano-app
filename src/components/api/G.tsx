import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playG4() {
  synth.triggerAttackRelease('G4', '8n')
}

export function playG4Sharp() {
  synth.triggerAttackRelease('G#4', '8n')
}
