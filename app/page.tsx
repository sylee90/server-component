import Image from 'next/image'

export default async function Home() {
  return (
    <div className="container mx-auto max-w-md p-4">
      <Image
        src="/image.png"
        width={500}
        height={500}
        alt="ebichu"
      />
    </div>
  )
}