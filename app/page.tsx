import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
        <Image
          src="/title_NCP.png"
          alt="Nonchalant Pictures"
          width={700}
          height={200}
          priority
          layout="responsive"
        />
      </div>
      <p className="clever-font">
        No Rules Just ART
      </p>
      <p className="clever-font">
        Pilot Project <br></br>LoveIsColdMinus: Cooking.<br></br>
        Will Serve Soon <br></br>
        Ps: Webpage will update soon..
      </p>
      <footer style={{ marginTop: '22rem', fontSize: '1rem', color: '#888888' }} className="clever-font">
        <p>Nonchalantpictures (c) copyright 2026</p>
      </footer>
    </main>
  );
}
