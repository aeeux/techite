import Link from 'next/link'

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <h3 className="text-4xl lg:text-4xl font-semibold mb-12">Vores speciale</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500 w-full mb-20">
      Vi specialisere os i at skræddersy computere til netop dit behov, 
      med top kvalitets kundeservice, som stræber efter at være de bedste indenfor branchen. 
      Står du og mangler en ny PC så kontakt os idag.
      </p>
    </div>
  </div>
  <div className="w-full lg:w-4/12 md:w-5/12 w-11/12 ml-auto mr-auto px-4">
  <img
              className="float-right"
              src={
                "https://res.cloudinary.com/du4exu5u1/image/upload/v1652796764/speciale_lnzlbk.png"
              }
              alt="mockup"
            />
  </div>
</div>
</section>
        <section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">
  <div className="w-full mb-10 lg:w-4/12 w-11/12 md:w-5/12 ml-auto mr-auto px-4">
  <img
              className="float-right"
              src={
                "https://res.cloudinary.com/du4exu5u1/image/upload/v1652796479/byg_din_gamer_zflrkz.png"
              }
              alt="mockup"
            />
  </div>
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-8 xl:ml-24">
      <h3 className="text-4xl lg:text-4xl font-semibold mb-12">Byg din gamer kursus</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500 w-full mb-20">
      Som de eneste tilbyder vi kurser hvor børnene kan deltage i at bygge en computer. 
      Vi syntes det er vigtigt at formidle viden om computerens opbygning og derved give 
      dem mod på at bygge deres næste computer på egen hånd. 
      </p>
    </div>
  </div>
</div>
</section>
    </div>

  );
}

export default AboutUs;