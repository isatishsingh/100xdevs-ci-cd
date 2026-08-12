"use client";

import Image from "next/image";
import { useState } from "react";

const confetti = Array.from({ length: 92 }, (_, index) => index);

export default function Home() {
  const [celebrating, setCelebrating] = useState(false);

  return (
    <main className="graduate-page">
      {celebrating && (
        <div className="celebration-layer" role="dialog" aria-modal="true" aria-labelledby="celebration-title">
          <div className="confetti" aria-hidden="true">
            {confetti.map((index) => (
              <span key={index} style={{
                "--left": `${(index * 37 + 3) % 100}%`,
                "--delay": `${(index % 18) * -0.12}s`,
                "--duration": `${2.7 + (index % 7) * 0.24}s`,
                "--spin": `${120 + (index % 9) * 75}deg`,
              } as React.CSSProperties} />
            ))}
          </div>
          <section className="celebration-card">
            <button className="close-popup" onClick={() => setCelebrating(false)} aria-label="Close celebration">×</button>
            <p className="kicker">Class of 2026</p>
            <div className="medallion" aria-hidden="true">✦</div>
            <h2 id="celebration-title">She did it.<br /><em>Master&apos;s degree earned.</em></h2>
            <p>Congratulations, Preeti. This distinction is a beautiful reflection of your dedication, courage, and hard work.</p>
            <button className="primary-button" onClick={() => setCelebrating(false)}>Celebrate Preeti</button>
          </section>
        </div>
      )}

      <nav className="site-nav">
        <span className="wordmark">PREETI RAI <i>·</i> MCA</span>
        <span className="nav-note">A proud moment · 2026</span>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="kicker">A milestone worth celebrating</p>
          <h1>Congratulations,<br /><em>Preeti.</em></h1>
          <p className="hero-text">Your determination turned every late night, every challenge, and every step forward into something extraordinary.</p>
          <button className="primary-button" onClick={() => setCelebrating(true)}>
            Celebrate her achievement <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="hero-portrait-wrap">
          <div className="arch" />
          <Image className="hero-portrait" src="/preeti/preeti-saree.jpg" alt="Preeti Rai smiling in a turquoise saree" width={663} height={1194} priority />
          <div className="degree-tag"><span>MASTER OF</span><strong>COMPUTER<br />APPLICATION</strong><span>2026</span></div>
          <span className="spark spark-one">✦</span><span className="spark spark-two">✦</span>
        </div>
      </section>

      <section className="achievement-strip" aria-label="Achievement details">
        <div><strong>7.99</strong><span>CGPA</span></div>
        <div><strong>First Class</strong><span>with Distinction</span></div>
        <div><strong>95 / 95</strong><span>Total credits earned</span></div>
        <div><strong>MCA</strong><span>Class of 2026</span></div>
      </section>

      <section className="story-section">
        <div className="story-image image-frame">
          <Image src="/preeti/preeti-formal.jpg" alt="Professional portrait of Preeti Rai" fill sizes="(max-width: 700px) 100vw, 32vw" />
        </div>
        <div className="story-copy">
          <p className="kicker">The achievement</p>
          <h2>A future built<br />with <em>brilliance.</em></h2>
          <p>Preeti Rai has completed her Master of Computer Application from Savitribai Phule Pune University, earning a First Class with Distinction.</p>
          <p>May this graduation be the first of many moments that remind you just how capable you are.</p>
          <div className="sign-off"><span />with love and endless pride</div>
        </div>
        <div className="memory-frame image-frame">
          <Image src="/preeti/memory.jpg" alt="A happy shared memory with Preeti" fill sizes="(max-width: 700px) 100vw, 30vw" />
          <span>Here&apos;s to every next chapter</span>
        </div>
      </section>

      <section className="result-section">
        <div>
          <p className="kicker">Official result</p>
          <h2>Proof of a<br /><em>beautiful win.</em></h2>
          <p>Summer Session 2026 · Second Year Master of Computer Application</p>
          <button className="text-button" onClick={() => document.getElementById("result-card")?.scrollIntoView({ behavior: "smooth" })}>See result details ↓</button>
        </div>
        <div className="result-card" id="result-card">
          <div className="result-card-top"><span>SPPU · 2026</span><span>VERIFIED RESULT</span></div>
          <Image src="/preeti/result.png" alt="Preeti Rai MCA university result" width={782} height={827} />
        </div>
      </section>

      <footer><span>FOR PREETI, WITH PRIDE</span><span>✦</span><span>THE NEXT CHAPTER STARTS NOW</span></footer>
    </main>
  );
}
