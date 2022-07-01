import * as Tone from 'tone'

const synth = new Tone.MonoSynth().toDestination()

export function playC4() {
  synth.triggerAttackRelease('C4', '8n')
}

export function playC4Sharp() {
  synth.triggerAttackRelease('C#4', '8n')
}

export function playC5() {
  synth.triggerAttackRelease('C5', '8n')
}

export function playC5Sharp() {
  synth.triggerAttackRelease('C#5', '8n')
}
