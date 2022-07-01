import Keys from './Keys'

export default function Synth() {
  return (
    <div className="bg-black-100 h-screen">
      <div className="w-auto h-auto">
        <div className="flex justify-center pt-60">
          <div className="bg-wood-100 p-20 rounded-lg">
            <div>
              <Keys />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
