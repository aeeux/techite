function ContactForm() {
  return (
    <div className=" md:flex md:mx-0">
      <div className="w-1/3 md:w-2/h-24 md:h-screen bg-white md:bg-black py-12 px-6 space-y-12">
        <h2 className="text-black md:text-white text-2xl font-semibold mt-12 md:mx-5">
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
              className="placeholder:italic placeholder:text-slate-400 border-4 border-emerald-300"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Efternavn
            </span>
            <input
              type="lastname"
              placeholder="efternavn"
              className="placeholder:italic placeholder:text-slate-400 border-4 border-emerald-300"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              placeholder="email"
              className="placeholder:italic placeholder:text-slate-400 border-4 border-emerald-300"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Telefon
            </span>
            <input
              type="phone"
              placeholder="telefon"
              className="placeholder:italic placeholder:text-slate-400 border-4 border-emerald-300"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">
              Message
            </span>
            <input
              type="message"
              placeholder="message"
              className="placeholder:italic placeholder:text-slate-400 border-4 border-emerald-300"
            />
          </label>
        </div>
        <button className="border-4 border-emerald-300 float-right">
          Send Formular
        </button>
      </div>
    </div>
  )
}

export default ContactForm
