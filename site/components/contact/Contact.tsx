import Link from 'next/link'
import styles from './contact.module.css'

function Contact() {
  return (
    <div className={styles.Ccontent}>


<div className="max-w-7xl mx-auto p-5">
  <div className="grid grid-cols-1 md:grid-cols-12 border">
    <div className="bg-gray-900 md:col-span-4 p-10 text-white">
      <p className="mt-4 text-sm leading-7 font-regular uppercase">
        Kontakt os
      </p>
      <h3 className="text-3xl leading-normal font-extrabold tracking-tight">
      Kontakt Informationer
      </h3>
      <p className="mt-4 leading-7 text-gray-200">
      Udfyld formularen, og vores team vender tilbage til dig indenfor 24 timer
      </p>
      
      
      <div className="flex items-center mt-5">
        
        <span className="text-sm">+45 12 34 56 78</span>
      </div>
      <div className="flex items-center mt-5">
        
        <span className="text-sm">hello@gmail.com</span>
      </div>
      <div className="flex items-center mt-5">
        
        <span className="text-sm">Fjeldhammervej 15</span>
      </div>
      
      
    </div>
      <form className="md:col-span-8 p-10">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Fornavn
      </label>
      <input className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="Fornavn" aria-label="Full name" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Efternavn
      </label>
      <input className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="Efternavn" aria-label="Full name" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      E-mail
      </label>
      <input className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="eksempel@email.dk" aria-label="Full name" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Telefon
      </label>
      <input className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200" type="text" placeholder="+45 12 34 56 78" aria-label="Full name" />
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Message
      </label>
      <textarea className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none" placeholder="Skriv en besked til os her" aria-label="Full name">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
        <label className="block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">
          Tilmeld dig vores nyhedsbrev!
          </span>
        </label>
      </div>
      <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
        Send formular
      </button>
    </div>
      
  </div>
    
</form>
    
  </div>
</div>



    </div>

  );
}

export default Contact;