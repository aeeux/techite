import Link from 'next/link'

function History() {
  return (
    <div>
      <section className="max-w-7xl relative pt-12 bg-blueGray-50 mx-auto">
<div className="flex flex-wrap mt-20">
  <div className="w-full mb-10 lg:4/12 md:w-5/12 ml-auto mr-auto px-4">
  <h3 className="text-history-yellow">Vores Histore</h3>
  <h2 className="text-xl font-semibold w-80 mt-6">Vi leverer fremtidens gaming udstyr og computere.</h2>
  <div className="inline-block mb-6 rounded-full pr-5 lg:mt-96 mt-20 md:mt-80 md:pt-40 pt-0 lg:pt-20 xl:pt-0 line-height-username1">
  <img
              className="w-20 lg:w-3/12 mx-auto rounded-full float-left lg:h-24 lg:w-24 h-20"
              src={
                "https://res.cloudinary.com/du4exu5u1/image/upload/v1652846241/Ellipse_8_s5owqw.png"
              }
              alt="mockup"
            /> 
            <div>
            <p className="lg:ml-40 text-sm ml-28 md:w-60 lg:w-80">“ Som stifter af Techite Gaming sætter vi meget vægt på at hjælpe de enkelte, 
            for kan kunne servicere jer bedst muligt. Har i nogle spørgsmål er i velkomen til at kontakte os.</p>
            </div>
	</div>
  </div>
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <div className="">
      <h3 className="text-xl lg:text-2xl font-semibold mb-4">Hvordan vi startede</h3>
      <p className="mt-4 lg:w-10/12 text-sm leading-relaxed text-blueGray-500 w-full mb-10">
      Techite Gaming blev stiftet tilbage i 2021, og er en virksomhed baseret på to mål. 
      Det første mål værende det i at levere gaming udstyr og computere med stort fokus på service, 
      samt det i at uddanne vores kunder omkring opbyggelsen af computere.
      </p>
      <h3 className="text-xl lg:text-2xl font-semibold mb-4">Hvordan det går nu</h3>
      <p className="mt-4 lg:w-10/12 text-sm leading-relaxed text-blueGray-500 w-full mb-10">
      I øjeblikket fokusere vi på kurser, hvorpå vi uddanner jer i opbyggelsen af PC’er og hvordan man bygger en selv. 
      Vi hjælper jer med at formidle jeres viden i praktis. 
      Herudover sætter vi mange resourcer til rådighed for at give jer den bedste service, 
      samt hjælpe jer med at samle jeres computere for jer, hvis i vil have det.
      </p>
      <h3 className="text-xl lg:text-2xl font-semibold mb-4">Fremtidige planer</h3>
      <p className="mt-4 lg:w-10/12 text-sm leading-relaxed text-blueGray-500 w-full mb-10">
      Når vi så småt begynder at skalere, 
      har vi eventuelt tænkt os at komme med fysiske lokationer hvor du kan komme ned og få hjælp med diverse ting. 
      Herudover har vi også tænkt os at donere en procent del af indkomsten til velgørenhed.
      </p>
    </div>
  </div>
</div>
</section>
    </div>

  );
}

export default History;