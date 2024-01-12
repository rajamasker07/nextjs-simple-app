import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen p-24 place-items-center justify-center">
      <div className="bg-white p-1 h-fit gap-1 w-96 flex place-items-center rounded">
        <div className="bg-slate-300 rounded-full size-12"></div>
        <div className="text-wrap text-red-500">
          <h1>Sample</h1>
        </div>
      </div>
    </main>
  )
}
