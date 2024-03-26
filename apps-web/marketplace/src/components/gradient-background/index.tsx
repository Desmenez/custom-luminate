import Image from 'next/image'

import RedBackground from './assets/red.png'
import YellowBackground from './assets/yellow.png'

export const GradientBackground = () => {
  return (
    <div className="absolute inset-0 w-screen overflow-hidden -z-10 opacity-40">
      <div className="absolute left-0 right-0 h-[calc(50%+800px)] bg-[#0D0A2C]" />
      <Image
        src={RedBackground.src}
        alt=""
        width={500}
        height={600}
        className="absolute top-[100px] left-0 blur-[310px] w-[1200px]"
      />
      <Image
        src={YellowBackground.src}
        alt=""
        width={500}
        height={600}
        className="absolute top-[100px] -right-[200px] blur-[310px] w-[1400px]"
      />
      <div className="absolute left-0 right-0 top-1/2 bg-gradient-to-t from-gray-950 to-transparent h-[800px]"></div>
    </div>
  )
}
