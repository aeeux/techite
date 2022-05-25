function ContactForm() {
  return (
    <div className=" md:flex md:mx-0">
      <div className="w-1/3 md:w-2/h-24 md:h-screen bg-white md:bg-black py-12 px-6 space-y-12">
        <h2 className="text-black md:text-white md:text-3xl text-2xl font-semibold mt-12 md:mx-5">
          Kontakt informationer
        </h2>
        <p className="text-black md:text-white font-semibold md:mx-5">
          Udfyld formularen, og vores team vender tilbage til dig indenfor 24
          timer
        </p>
        <p className="text-black md:text-white font-semibold md:mx-5">
          +45 12 34 56 78
        </p>
        <p className="text-black md:text-white font-semibold md:mx-5">
          hello@gmail.com
        </p>
        <p className="text-black md:text-white font-semibold md:mx-5">
          Fjeldhammervej 15{' '}
        </p>
      </div>
      <div className="py-12 px-6 md:w-1/2 h-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Fornavn
            </span>
            <input
              type="name"
              placeholder="fornavn"
              className="placeholder:italic placeholder:text-slate-400 border border-gray-400 rounded-md w-full mt-4 py-1"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Efternavn
            </span>
            <input
              type="lastname"
              placeholder="efternavn"
              className="placeholder:italic placeholder:text-slate-400 border border-gray-400 rounded-md w-full mt-4 py-1"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              placeholder="eksempel@email.dk"
              className="placeholder:italic placeholder:text-slate-400 border border-gray-400 rounded-md w-full mt-4 py-1"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Telefon
            </span>
            <input
              type="phone"
              placeholder="telefon"
              className="placeholder:italic placeholder:text-slate-400 border border-gray-400 rounded-md w-full mt-4 py-1"
            />
          </label>
        </div>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700 mt-10">
              Message
            </span>
            <input
              type="message"
              placeholder="Skriv en besked til os her"
              className="placeholder:italic placeholder:text-slate-400 border-b border-black w-full mt-4 py-1 mb-10"
            />
          </label>
        <button className="float-right font-semibold rounded-md bg-button-b hover:bg-blue-600 text-white mt-4 text-sm py-2 px-10">
          Send Formular
        </button>
      </div>
    </div>
  )
}

export default ContactForm
