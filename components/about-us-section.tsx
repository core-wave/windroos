import Image from "next/image";

export default async function AboutUsSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-background -mt-4 px-4 md:px-6 flex justify-center rounded-b-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        <div className="flex flex-col justify-center gap-6 text-center lg:text-left">
          <h2 className="text-2xl">Welkom op Boerderij De Windroos</h2>
          <p>
            Ontsnap aan de drukte en ervaar de rust van het uitgestrekte
            polderlandschap bij Boerderij De Windroos. Hier geniet u van pure
            natuur, weidse vergezichten en een authentieke boerderijbeleving –
            zonder de overlast van snelwegen of stadsdrukte.
          </p>
          <p>
            Ons comfortabel en volledig ingericht appartement biedt alles voor
            een ontspannen verblijf. Bij mooi weer kunt u heerlijk buiten zitten
            op het ruime terras of in de grote tuin, waar u volledig tot rust
            komt.
          </p>
          <p>
            Boerderij De Windroos is de ideale plek om te onthaasten en het
            landelijke leven van dichtbij te ervaren. We heten u van harte
            welkom!
          </p>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image src={"/huis.JPG"} alt={"alt"} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
