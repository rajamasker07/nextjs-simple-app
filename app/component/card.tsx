import Image from "next/image";
import qr from "../../public/assets/image-qr-code.png";

export default function Card() {
  return (
    <div className="flex bg-white rounded-3xl shadow-md flex-col p-3 gap-5 max-w-[220px] place-items-center text-center">
      <div className="flex bg-blue-500 place-content-center p-1 w-full rounded-2xl">
        <Image src={qr} alt="qr-code" 
          width={180}
          height={180}
        />
      </div>
      <h1 className="font-bold text-xs">Improve your front-end skills by building projects</h1>
      <h2 className="text-xs text-gray-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
    </div>
  )
}
