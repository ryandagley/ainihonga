const About = () => {
  return (
    <div id='about' className='w-full p-2 flex items-center py-20 '>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <h2 className='py-4'>About A.I. Nihonga</h2>
                <p className='py-2 text-gray-600'>Welcome to A.I. Nihonga, where technology and tradition converge to create a unique fusion of artistry. Our journey begins at the crossroads of artificial intelligence and the rich heritage of Japanese Nihonga painting. With a passion for both innovation and reverence for the past, we harness the power of AI to craft stunning artworks that pay homage to the timeless beauty of Nihonga. Each piece embodies the spirit of traditional Japanese art while exploring new horizons, inviting you to embark on a visual odyssey that bridges the gap between history and the future. Join us in celebrating the harmonious blend of technology and tradition, where the past inspires the present, and the present shapes the future of art.</p>
                <h2 className='py-4'>About the Curator</h2>
                <p className='py-2 text-gray-600'>Ryan Dagley, a Japanese and American enthusiast of AI, BBQ aficionado, and software engineer, finds fascination in the harmonious blend of both cultures, embracing the best of both worlds in his journey through life.  Ryan currently lives in the Pacific Northwest.</p>
            
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
                <img className='rounded-xl' src="https://ai-nihonga-media.s3.us-west-2.amazonaws.com/public/nihonga-avatar1.jpeg"></img>

            </div>
            </div>
        </div>
  )
}

export default About