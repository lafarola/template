"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Fade-in observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-root">
      {/* ───────── HERO ───────── */}
      <section className="parallax-section hero-section">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
            transform: `translateY(${scrollY * 0.35}px)`,
          }}
        />
        <div className="parallax-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">✦ Destino Exclusivo 2026 ✦</p>
          <h1 className="hero-title">
            Vibe<span className="accent">Coding</span>
          </h1>
          <p className="hero-subtitle">
            No es un lugar. Es una vibra.
          </p>
          <a href="#descubre" className="cta-button">
            Descubre tu próximo destino →
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ───────── INTRO ───────── */}
      <section id="descubre" className="content-section">
        <div className="fade-section">
          <p className="section-eyebrow">Bienvenido al paraíso digital</p>
          <h2 className="section-title">¿Qué es Vibe Coding?</h2>
          <p className="section-text">
            Imagina un lugar donde la brisa del mar se mezcla con líneas de código,
            donde cada atardecer es un nuevo deploy y cada amanecer trae
            features frescos. <strong>Vibe Coding</strong> es el primer destino
            turístico pensado para quienes viven la tecnología como un estilo de vida.
          </p>
        </div>
        <div className="stats-row fade-section">
          <div className="stat-card">
            <span className="stat-number">365</span>
            <span className="stat-label">días de sol al año</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">∞</span>
            <span className="stat-label">líneas de código por viajero</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">0</span>
            <span className="stat-label">bugs en producción*</span>
          </div>
        </div>
        <p className="disclaimer fade-section">*resultados pueden variar</p>
      </section>

      {/* ───────── PARALLAX DIVIDER 1 ───────── */}
      <section className="parallax-section divider-section">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')`,
            transform: `translateY(${(scrollY - 900) * 0.3}px)`,
          }}
        />
        <div className="parallax-overlay dark-overlay" />
        <div className="divider-quote fade-section">
          <blockquote>
            &ldquo;Vine por el WiFi, me quedé por la vibra.&rdquo;
          </blockquote>
          <cite>— Turista anónimo, 2025</cite>
        </div>
      </section>

      {/* ───────── EXPERIENCES ───────── */}
      <section className="content-section dark-bg">
        <div className="fade-section">
          <p className="section-eyebrow light">Paquetes All-Inclusive</p>
          <h2 className="section-title light">Experiencias Exclusivas</h2>
        </div>
        <div className="experiences-grid fade-section">
          <div className="experience-card">
            <div className="experience-icon">🏄‍♂️</div>
            <h3>Surf & Deploy</h3>
            <p>Surfea las olas por la mañana, deploya tu app por la tarde. Tabla y laptop incluidos.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">🍹</div>
            <h3>Cocktail Driven Development</h3>
            <p>Pair programming frente al mar con mojitos artesanales. El código fluye diferente.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">🌅</div>
            <h3>Sunset Standup</h3>
            <p>Daily standups al atardecer. Sólo se reportan buenas vibras y features shipped.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">🧘</div>
            <h3>Mindful Debugging</h3>
            <p>Sesiones de meditación guiada mientras tu CI/CD pipeline corre en background.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">🎶</div>
            <h3>Lo-Fi Beach Sessions</h3>
            <p>DJ sets lo-fi en la playa. Beats to code/relax to — pero en vivo y con arena.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">🐢</div>
            <h3>Git Commit & Chill</h3>
            <p>Hamacas premium con monitores 4K. Merge conflicts se resuelven con brisa marina.</p>
          </div>
        </div>
      </section>

      {/* ───────── PARALLAX DIVIDER 2 ───────── */}
      <section className="parallax-section divider-section">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&q=80')`,
            transform: `translateY(${(scrollY - 2400) * 0.25}px)`,
          }}
        />
        <div className="parallax-overlay" />
        <div className="divider-quote fade-section">
          <blockquote>
            &ldquo;El mejor framework es el que usas descalzo en la playa.&rdquo;
          </blockquote>
          <cite>— Filosofía local de Vibe Coding</cite>
        </div>
      </section>

      {/* ───────── TESTIMONIALS ───────── */}
      <section className="content-section">
        <div className="fade-section">
          <p className="section-eyebrow">Lo que dicen nuestros viajeros</p>
          <h2 className="section-title">Testimonios</h2>
        </div>
        <div className="testimonials-grid fade-section">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>&ldquo;Llegué como junior, salí como senior. Y bronceado.&rdquo;</p>
            <div className="testimonial-author">
              <div className="avatar">👨‍💻</div>
              <div>
                <strong>Carlos M.</strong>
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>&ldquo;Mi startup levantó funding mientras yo levantaba la copa de piña colada.&rdquo;</p>
            <div className="testimonial-author">
              <div className="avatar">👩‍💼</div>
              <div>
                <strong>Ana R.</strong>
                <span>CEO & Viajera Serial</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p>&ldquo;Finalmente entendí qué es la nube. Estaba justo encima del resort.&rdquo;</p>
            <div className="testimonial-author">
              <div className="avatar">🧑‍🔬</div>
              <div>
                <strong>Pedro L.</strong>
                <span>Data Scientist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PARALLAX DIVIDER 3 ───────── */}
      <section className="parallax-section divider-section short-divider">
        <div
          className="parallax-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80')`,
            transform: `translateY(${(scrollY - 3800) * 0.2}px)`,
          }}
        />
        <div className="parallax-overlay warm-overlay" />
      </section>

      {/* ───────── CTA ───────── */}
      <section className="content-section cta-section">
        <div className="fade-section cta-content">
          <h2 className="cta-title">
            ¿Listo para la <span className="accent">vibra</span>?
          </h2>
          <p className="cta-text">
            Reserva tu experiencia Vibe Coding y descubre por qué miles de
            developers ya cambiaron la oficina por la playa.
          </p>
          <div className="cta-buttons">
            <a href="#" className="cta-button primary-cta">
              Reservar Ahora ✈️
            </a>
            <a href="#" className="cta-button secondary-cta">
              Ver Paquetes 📦
            </a>
          </div>
          <p className="cta-fine-print">
            * No es un viaje real. Pero la vibra sí lo es. <br />
            Hecho con 🤙 y Next.js + Tailwind + Shadcn + Supabase + Puppeteer
          </p>
        </div>
      </section>

      {/* ───────── FOOTER ───────── */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Vibe<span className="accent">Coding</span></h4>
            <p>Tu agencia de viajes al futuro del desarrollo.</p>
          </div>
          <div className="footer-col">
            <h4>Destinos</h4>
            <ul>
              <li>Playa React</li>
              <li>Isla TypeScript</li>
              <li>Bahía Next.js</li>
              <li>Costa Tailwind</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>📧 hola@vibecoding.travel</li>
              <li>📱 +51 999 VIBE</li>
              <li>📍 En algún coworking frente al mar</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Vibe Coding™ — Todos los derechos reservados (ninguno, es open source)</p>
        </div>
      </footer>
    </div>
  );
}
