import Link from 'next/link'

function Hero() {
  return (
    <div>
      <div className='lg:max-w-7xl mx-auto'>
        <h1 className="text-3xl md:text-7xl lg:text-8xl text-center mt-52 mb-10 font-semibold">Computer Specialists</h1>
        <h2 className="text-xl text-center mb-20">Hos Techite Gaming får du kraftfulde gaming computere til netop dit behov!</h2>
        <div className='center'>
        <img
              className="w-11/12 mx-auto"
              src={
                "https://res.cloudinary.com/dckwf6med/image/upload/v1652797271/erp/Rectangle_152_3_pcpwuc.png"
              }
              alt="mockup"
            />
            </div>
            </div>
    </div>

  );
}

export default Hero;