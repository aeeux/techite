import Link from 'next/link'

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 pt-5 mx-auto">
        <div className=" px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto max-w-6xl">
          <div className="p-5">
            <div className="text-sm uppercase font-bold text-button-b">Kontakt</div>
            <a href="https://www.google.com/maps/place/Fjeldhammervej+15,+2610+R%C3%B8dovre/@55.6744384,12.4382089,17z/data=!3m1!4b1!4m5!3m4!1s0x4652513a3ff7424b:0x286f7a03636f42b!8m2!3d55.6744384!4d12.4403976" className="my-3 block" >Techite ApS <span className="text-teal-600 text-xs p-1"></span></a>
            <a href="https://www.google.com/maps/place/Fjeldhammervej+15,+2610+R%C3%B8dovre/@55.6744384,12.4382089,17z/data=!3m1!4b1!4m5!3m4!1s0x4652513a3ff7424b:0x286f7a03636f42b!8m2!3d55.6744384!4d12.4403976" className="my-3 block" >Fjeldhammervej 15 <span className="text-teal-600 text-xs p-1"></span></a>
            <a href="https://www.google.com/maps/place/Fjeldhammervej+15,+2610+R%C3%B8dovre/@55.6744384,12.4382089,17z/data=!3m1!4b1!4m5!3m4!1s0x4652513a3ff7424b:0x286f7a03636f42b!8m2!3d55.6744384!4d12.4403976" className="my-3 block" >2610 Rødovre <span className="text-teal-600 text-xs p-1"></span></a>
            <a className="my-3 block" >CVR 40633510</a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-button-b font-bold">KUNDESERVICE</div>
            <Link href="/">
            <a className="my-3 block" >Kontakt os <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
            <Link href="tel:004571963369">
            <a className="my-3 block" >+45 71 963 369 <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
            <Link href="mailto:mail@erpgruppen.dk">
            <a className="my-3 block" >Salg@techite.dk <span className="text-teal-600 text-xs p-1"></span></a>
            </Link>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-button-b font-bold">INFORMATION</div>
            <a className="my-3 block" >Handelsbetingelser <span className="text-teal-600 text-xs p-1"></span></a><a href="/" className="my-3 block" >Persondatapolitik <span className="text-teal-600 text-xs p-1"></span></a> <a href="/" className="my-3 block" >Udvidet garanti <span className="text-teal-600 text-xs p-1"></span></a><a href="/" className="my-3 block" >Returformular <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-button-b font-bold">SOCIAL MEDIA</div>
            <a className="my-3 block" href="/" >Facebook <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/" >Instagram <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/" >LinkedIn <span className="text-teal-600 text-xs p-1"></span></a>
          </div>
        </div>
        <div className="sm:flex sm:flex-wrap mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">

        <div className="bg-gray-100 w-full" ><div className="float-right bg-gray-100 w-full text-center pr-10 mb-6">
          <p className=" bg-gray-100 w-full inline-block text-center p-3 pb-0 mb-0">Copyright © 2022 Techite A/S</p>
        </div>
        </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;