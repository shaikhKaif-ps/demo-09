import { Typewriter } from 'nextjs-simple-typewriter'

const SpotLight = () => {
  return (
    <main className="h-[100vh] w-full flex items-center justify-center">
      <h1 className="text-purple-600 lg:text-6xl md:text-4xl text-3xl font-semibold text-center">
        Your{' '}
        <Typewriter
          words={['Couries', 'Parcel ', 'Goods']}
          loop={0}
          cursor
          cursorStyle=''
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
          className="inline-block"
        />{' '}
        <br />
        Our Responsibility
      </h1>
    </main>
  )
}

export default SpotLight



// f8f7ff
// b8b8ff
// 9381ff