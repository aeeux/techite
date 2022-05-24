import Link from 'next/link'

function Newsletter() {
  return (
    <div>
        <div className='lg:max-w-7xl mx-auto pb-10'>
        <h1 className='text-center my-20 pt-20 pb-0 text-4xl md:text-6xl font-bold'>
        Tilmeld dig vores  <br/>nyhedsbrev
        </h1>
        <div className="mx-auto flex justify-center">
            <input
              type="email"
              className="m-1 p-2 pl-8 appearance-none rounded-full text-gray-500 text-sm focus:outline-none border-none w-10/12 sm:w-7/12 md:w-6/12 lg:w-5/12 xl:w-4/12 bg-gray-200"
              placeholder="Enter your e-mail"
            />
            <button
              className="w-28 md:w-36 lg:w-36 m-1 p-2 md:pl-10 py-4 px4 md:pr-10 -ml-24 text-sm bg-gray-900 text-white rounded-full font-semibold uppercase transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-700 "
            >
              Tilmeld
            </button>
          </div>
          </div>
    </div>

  );
}

export default Newsletter;