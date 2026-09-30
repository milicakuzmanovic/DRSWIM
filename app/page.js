import Image from "next/image";

const trainings = [
  ["TEHNIČKI TRENING", "Usavršavanje tehnike i plivačke ekonomičnosti.", "〰"],
  ["KONDICIONI TRENING", "Razvoj izdržljivosti, snage i brzine.", "▥"],
  ["PRIPREMA ZA TAKMIČENJA", "Ciljani programi za masters mitinge.", "🏆"],
  ["OPEN WATER", "Treninzi i priprema za plivanje na otvorenim vodama.", "≈"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">
          <Image src="/logo.jpeg" alt="DR SWIM Vladimir Antonijević" width={250} height={100} priority />
        </a>
        <nav>
          <a className="active" href="#top">POČETNA</a>
          <a href="#about">O NAMA</a>
          <a href="#training">TRENING</a>
          <a href="#races">TAKMIČENJA</a>
          <a href="#swimmers">NAŠI PLIVAČI</a>
          <a href="#gallery">GALERIJA</a>
          <a href="#contact">KONTAKT</a>
        </nav>
        <a className="nav-cta" href="#contact">PRIDRUŽI SE</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-water" />
        <div className="hero-copy">
          <p className="eyebrow">DR SWIM MASTERS</p>
          <h1>VIŠE OD<br /><span>TRENINGA.</span></h1>
          <p className="lead">Zajednica plivača koji nikada<br />nisu prestali da vole vodu.</p>
          <div className="actions">
            <a className="button primary" href="#contact">PRIDRUŽI NAM SE →</a>
            <a className="button ghost" href="#training">SAZNAJ VIŠE</a>
          </div>
        </div>
        <div className="hero-side">
          <span>TEHNIKA</span>
          <span>KONDIICIJA</span>
          <span>TAKMIČENJA</span>
          <span>OPEN WATER</span>
          <span>ZAJEDNICA</span>
        </div>
      </section>

      <section className="highlights">
        <div><b>〰</b><strong>ZA SVE NIVOE</strong><small>Od rekreativaca do takmičara</small></div>
        <div><b>♙</b><strong>STRUČAN TIM</strong><small>Iskustvo, znanje i individualni pristup</small></div>
        <div><b>♜</b><strong>TAKMIČENJA</strong><small>Masters mitingi, državna, evropska i svetska prvenstva</small></div>
        <div><b>♒</b><strong>ZAJEDNICA</strong><small>Ljudi koji dele istu strast – plivanje</small></div>
      </section>

      <section className="about" id="about">
        <div className="about-image"><div>ONE<br />TEAM.<br /><span>MORE<br />MILES.</span></div></div>
        <div className="about-copy">
          <p className="eyebrow dark">O NAMA</p>
          <h2>VIŠE OD TRENINGA.<br /><span>ZAJEDNICA PLIVAČA.</span></h2>
          <p><b>DR SWIM Masters</b> je zajednica plivača različitog nivoa i iskustva, od rekreativaca do takmičara. Naš cilj je da kroz stručno vođene treninge, podršku i zajedništvo pomognemo svakom plivaču da napreduje, uživa u vodi i postiže svoje ciljeve.</p>
          <a className="button primary small" href="#contact">SAZNAJ VIŠE →</a>
        </div>
        <div className="stats">
          <div><b>10+</b><span>GODINA ISKUSTVA</span></div>
          <div><b>100+</b><span>ZADOVOLJNIH PLIVAČA</span></div>
          <div><b>50+</b><span>TAKMIČENJA</span></div>
          <div><b>1</b><span>ISTA STRAST<br />PLIVANJE</span></div>
        </div>
      </section>

      <section className="training" id="training">
        <p className="eyebrow">TRENING</p>
        <h2>PLANIRANO. STRUČNO. <span>EFEKTIVNO.</span></h2>
        <div className="cards">
          {trainings.map(([title, text, icon]) => (
            <article className="card" key={title}>
              <div className="card-image"><i>{icon}</i></div>
              <h3>{title}</h3><p>{text}</p><a href="#contact">→</a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow">DR SWIM MASTERS</p><h2>SPREMAN/NA ZA SLEDEĆI TRENING?</h2><p>Javi nam se i priključi se ekipi.</p></div>
        <a className="button primary" href="mailto:drswim@example.com">KONTAKTIRAJ NAS →</a>
      </section>

      <footer><Image src="/logo.jpeg" alt="DR SWIM" width={170} height={68} /><span>© 2026 DR SWIM Masters · Vladimir Antonijević</span></footer>
    </main>
  );
}
