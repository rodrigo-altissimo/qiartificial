export default function Home() {
  return (
    <>
      {/* Navigation — Frosted Glass */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-center">
        <div className="max-w-6xl w-full px-6 flex items-center justify-between">
          <a
            href="/"
            className="text-[var(--color-text-primary)] font-bold text-base tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            QI Artificial
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Serviços
            </a>
            <a href="#work" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Trabalhos
            </a>
            <a href="#about" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Sobre
            </a>
            <a href="#contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "14px" }}>
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section — Immersive */}
      <section className="relative overflow-hidden section-light pt-28 pb-20 flex flex-col items-center text-center px-6 min-h-[100vh] justify-center">
        {/* Animated blobs (mais intensos) */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        {/* Glow atrás do headline */}
        <div className="hero-glow" />

        <div className="relative z-10 max-w-5xl">
          {/* Badge */}
          <div className="animate-fade-up mb-8 flex justify-center">
            <span className="badge-glow" style={{ fontFamily: "var(--font-mono)" }}>
              <span style={{ fontSize: "10px", opacity: 0.7 }}>&#9679;</span>
              Clone &amp; Ship Engine &mdash; Design Systems em 4h
            </span>
          </div>

          <h1
            className="animate-fade-up animate-delay-1 text-5xl md:text-7xl lg:text-[88px] font-bold leading-[0.95] tracking-[-0.04em] text-[var(--color-text-primary)] max-w-5xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Clone o DNA.
            <br />
            <span className="hero-gradient-text">
              Ship a marca.
            </span>
          </h1>

          <p
            className="animate-fade-up animate-delay-2 mt-8 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Extraímos o design system de qualquer site e entregamos um
            brandbook completo como código vivo.{" "}
            <strong className="text-[var(--color-text-primary)]">1500+ tokens. 4 horas. Precisão automatizada.</strong>
          </p>

          <div className="animate-fade-up animate-delay-3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Iniciar um projeto
            </a>
            <a href="#work" className="btn-secondary">
              Ver trabalhos &rsaquo;
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up animate-delay-4 mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="stat-item">
              <div className="stat-number">1500+</div>
              <div className="stat-label">tokens extraídos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4h</div>
              <div className="stat-label">de entrega</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">código vivo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* Services Section */}
      <section id="services" className="section-surface py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm font-medium text-[var(--color-brand-primary)] tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Serviços
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              O que fazemos.
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
              Três pilares para construir marcas que importam.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-primary)]">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
              }
              title="Design Systems"
              description="Sistemas de design escaláveis que garantem consistência visual em todos os pontos de contato da sua marca."
              iconBg="rgba(124, 77, 255, 0.1)"
            />
            <ServiceCard
              icon={
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent-warm)]">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                </svg>
              }
              title="Identidade Visual"
              description="Branding que comunica a essência do seu negócio — do logo à tipografia, da paleta de cores à linguagem visual."
              iconBg="rgba(255, 107, 74, 0.1)"
            />
            <ServiceCard
              icon={
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent-cool)]">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                </svg>
              }
              title="Interfaces Digitais"
              description="Experiências web e mobile que equilibram estética e funcionalidade. UI/UX que converte."
              iconBg="rgba(20, 184, 168, 0.1)"
            />
          </div>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="gradient-divider" />

      {/* Work / Portfolio Section */}
      <section id="work" className="section-light py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm font-medium text-[var(--color-accent-warm)] tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Portfolio
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Trabalhos recentes.
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
              Projetos que refletem nosso compromisso com excelência visual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <WorkCard
              title="Fintech Rebrand"
              category="Identidade Visual"
              description="Redesign completo de marca para fintech de pagamentos com 2M+ usuários"
              gradient="linear-gradient(160deg, #1E0A4E 0%, #7C4DFF 40%, #B49AFF 70%, #14B8A8 100%)"
              accentGlow="rgba(124, 77, 255, 0.4)"
            />
            <WorkCard
              title="SaaS Design System"
              category="Design System"
              description="1200+ tokens extraídos e documentados em brandbook navegável"
              gradient="linear-gradient(160deg, #120630 0%, #FF6B4A 35%, #7C4DFF 70%, #1E0A4E 100%)"
              accentGlow="rgba(255, 107, 74, 0.4)"
            />
            <WorkCard
              title="E-commerce Redesign"
              category="Interface Digital"
              description="Plataforma de e-commerce com conversão 3.2x maior após redesign"
              gradient="linear-gradient(160deg, #0F0B1A 0%, #14B8A8 35%, #7C4DFF 65%, #120630 100%)"
              accentGlow="rgba(20, 184, 168, 0.4)"
            />
            <WorkCard
              title="Health App"
              category="UI/UX Mobile"
              description="App de saúde com design system completo para iOS e Android"
              gradient="linear-gradient(160deg, #1E0A4E 0%, #9B6FFF 30%, #FF6B4A 60%, #14B8A8 100%)"
              accentGlow="rgba(155, 111, 255, 0.4)"
            />
          </div>
        </div>
      </section>

      {/* About Section — Dark */}
      <section id="about" className="relative overflow-hidden section-dark py-28 px-6 noise-overlay">
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,77,255,0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,107,74,0.1), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-square" style={{ borderRadius: "var(--radius-2xl)" }}>
              {/* Gradient artístico mais vibrante */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #7C4DFF 0%, #FF6B4A 50%, #14B8A8 100%)",
                }}
              />
              {/* Noise overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.2) 0%, transparent 40%)",
                }}
              />
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Central glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p
              className="text-sm font-medium text-[var(--color-brand-primary)] tracking-widest uppercase mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Sobre nós
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--color-text-inverse)] tracking-[-0.03em] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              O estúdio que clona{" "}
              <span className="hero-gradient-text">
                DNA visual.
              </span>
            </h2>
            <p className="text-lg text-[var(--color-neutral-400)] leading-relaxed mb-6">
              A QI Artificial é um estúdio de design fundado na crença de que
              grandes marcas merecem experiências visuais impecáveis.
            </p>
            <p className="text-lg text-[var(--color-neutral-400)] leading-relaxed">
              Combinamos rigor estético com pensamento estratégico para criar
              soluções que não apenas encantam — mas funcionam.{" "}
              <strong className="text-[var(--color-text-inverse)]">Cada pixel tem um propósito.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="relative overflow-hidden py-32 px-6" style={{ background: "linear-gradient(180deg, #120630, #0F0B1A)" }}>
        {/* Multiple gradient blobs */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,77,255,0.3), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,107,74,0.2), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-inverse)] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vamos criar algo{" "}
            <span className="hero-gradient-text">
              incrível.
            </span>
          </h2>
          <p className="text-lg text-[var(--color-neutral-400)] mb-12 max-w-xl mx-auto">
            Conte-nos sobre o seu projeto. Respondemos em até 24 horas.
          </p>
          <a href="mailto:contato@qiartificial.com.br" className="btn-primary" style={{ fontSize: "18px", padding: "16px 40px" }}>
            Falar com o estúdio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ background: "var(--color-bg-dark)", borderTop: "1px solid rgba(124, 77, 255, 0.1)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-neutral-500)]">
            &copy; 2025 QI Artificial. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-[var(--color-neutral-500)] hover:text-[var(--color-text-inverse)] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-[var(--color-neutral-500)] hover:text-[var(--color-text-inverse)] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-[var(--color-neutral-500)] hover:text-[var(--color-text-inverse)] transition-colors">
              Behance
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  iconBg,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}) {
  return (
    <div
      className="service-card bg-white rounded-2xl p-8"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <h3
        className="text-xl font-bold text-[var(--color-text-primary)] tracking-[-0.02em] mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-[var(--color-text-secondary)] text-[15px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WorkCard({
  title,
  category,
  description,
  gradient,
  accentGlow,
}: {
  title: string;
  category: string;
  description: string;
  gradient: string;
  accentGlow: string;
}) {
  return (
    <div
      className="work-card aspect-[4/3] relative overflow-hidden group"
      style={{ borderRadius: "var(--radius-xl)" }}
    >
      {/* Gradient background com movimento no hover */}
      <div
        className="work-card-inner"
        style={{ background: gradient }}
      />
      {/* Glow accent no hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentGlow}, transparent 70%)`,
        }}
      />
      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Bottom overlay para texto */}
      <div className="work-card-overlay absolute inset-0" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <p
          className="text-xs text-[var(--color-brand-primary)] uppercase tracking-wider mb-2 font-medium"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {category}
        </p>
        <h3
          className="text-2xl font-bold text-white tracking-[-0.02em] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
