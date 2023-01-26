import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const plants = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-g-900">Bringing Nature to Your Doorstep</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Buy from us and discover the difference in quality, with plants that are hand-picked and carefully nurtured to ensure they thrive in your home or garden.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Link href='/plants/val'>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-g-50 p-6 rounded-lg md:text-left text-center">
                  <Image className="h-80 rounded w-full object-cover object-center mb-6" height={700} width={500} src="https://dummyimage.com/720x400" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </Link>
            <Link href='/plants/val'>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-g-50 p-6 rounded-lg md:text-left text-center">
                  <Image className="h-80 rounded w-full object-cover object-center mb-6" height={700} width={500} src="https://dummyimage.com/721x401" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </Link>
            <Link href='/plants/val'>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-g-50 p-6 rounded-lg md:text-left text-center">
                  <Image className="h-80 rounded w-full object-cover object-center mb-6" height={700} width={500} src="https://dummyimage.com/722x402" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </Link>
            <Link href='/plants/val'>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-g-50 p-6 rounded-lg md:text-left text-center">
                  <Image className="h-80 rounded w-full object-cover object-center mb-6" height={700} width={500} src="https://dummyimage.com/723x403" alt="content" />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default plants