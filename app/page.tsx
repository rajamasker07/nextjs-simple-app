import Card from "./component/card"

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen p-24 place-items-center justify-center gap-10 flex-col">
      <Card/>
      <div className="text-xs justify-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blue-500 underline">Frontend Mentor</a>. 
        Coded by <a href="#" className="text-blue-500 underline">Rajamasker</a>.
      </div>
    </main>
  )
}
