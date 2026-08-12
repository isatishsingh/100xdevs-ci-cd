"use client";

import { useState } from "react";

const confetti = Array.from({ length: 92 }, (_, index) => index);

export default function Home() {
  const [celebrating, setCelebrating] = useState(false);

  const startCelebration = () => setCelebrating(true);

  return (
    <main className="birthday-page">
      {celebrating && (
        <div className="winning-overlay" role="dialog" aria-modal="true" aria-labelledby="winner-title">
        <div className="confetti" aria-hidden="true">
          {confetti.map((index) => (
            <span
              key={index}
              style={{
                "--left": `${(index * 37 + 3) % 100}%`,
                "--delay": `${(index % 18) * -0.12}s`,
                "--duration": `${2.7 + (index % 7) * 0.24}s`,
                "--spin": `${120 + (index % 9) * 75}deg`,
              } as React.CSSProperties}
            />
          ))}
        </div>
          <section className="winner-popup">
            <button className="close-popup" onClick={() => setCelebrating(false)} aria-label="Close celebration">×</button>
            <p className="winner-label">You&apos;re the birthday star</p>
            <div className="trophy" aria-hidden="true">★</div>
            <h2 id="winner-title">You win<br /><em>the whole year.</em></h2>
            <p>More joy. More memories. More moments that feel like magic. This year is ready for you.</p>
            <div className="popup-actions">
              <button className="popup-primary" onClick={() => setCelebrating(false)}>Claim your crown</button>
              <span>12 wishes remaining</span>
            </div>
          </section>
        </div>
      )}

      <nav className="topbar">
        <span className="brand">a little celebration</span>
        <span className="date">12 · 08 · 2026</span>
      </nav>

      <section className="hero">
        <div className="sun" aria-hidden="true" />
        <p className="eyebrow">Today is entirely yours</p>
        <h1>Happy<br />Birthday,<br /><em>Bestie.</em></h1>
        <p className="intro">
          Here&apos;s to the person who makes ordinary days brighter, loud laughs
          better, and every memory worth keeping.
        </p>
        <button
          className="celebrate-button"
          onClick={startCelebration}
        >
          <span>Make a wish</span>
          <span aria-hidden="true">↗</span>
        </button>
      </section>

      <section className="message-card">
        <div className="card-topline">
          <span>one more year of you</span>
          <span>♥</span>
        </div>
        <blockquote>
          “May this next chapter bring you soft mornings, spontaneous adventures,
          and every little thing your heart has been hoping for.”
        </blockquote>
        <div className="signature">
          <div className="signature-line" />
          <span>with all my love</span>
        </div>
      </section>

      <footer>
        <span>made for someone truly special</span>
        <span>✦</span>
      </footer>
    </main>
  );
}
