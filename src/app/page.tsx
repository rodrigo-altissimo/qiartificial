export default function Home() {
  return (
    <>
      {/* Navigation — Frosted Glass */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 h-12 flex items-center justify-center">
        <div className="max-w-5xl w-full px-6 flex items-center justify-between">
          <a
            href="/"
            className="text-[var(--color-text-primary)] font-semibold text-sm tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            QI Artificial
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Serviços
            </a>
            <a href="#work" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Trabalhos
            </a>
            <a href="#about" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section — Animated Gradient Blobs */}
      <section className="relative overflow-hidden section-light pt-32 pb-24 flex flex-col items-center text-center px-6 min-h-[90vh] justify-center">
        {/* Animated blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="relative z-10">
          <h1
            className="animate-fade-up text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.0] tracking-[-0.03em] text-[var(--color-text-primary)] max-w-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Clone o DNA.
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-transform)" }}>
              Ship a marca.
            </span>
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Extraímos o design system de qualquer site e entregamos um
            brandbook completo como código vivo. 1500+ tokens. 4 horas.
            Precisão automatizada.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Iniciar um projeto
            </a>
            <a href="#work" className="btn-secondary">
              Ver demo ao vivo &rsaquo;
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-surface py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold text-center text-[var(--color-text-primary)] tracking-[-0.02em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que fazemos.
          </h2>
          <p className="text-center text-[var(--color-text-secondary)] text-lg mb-16 max-w-xl mx-auto">
            Três pilares para construir marcas que importam.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-primary)]">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
              }
              title="Design Systems"
              description="Sistemas de design escaláveis que garantem consistência visual em todos os pontos de contato da sua marca."
            />
            <ServiceCard
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent-warm)]">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                </svg>
              }
              title="Identidade Visual"
              description="Branding que comunica a essência do seu negócio — do logo à tipografia, da paleta de cores à linguagem visual."
            />
            <ServiceCard
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent-cool)]">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                </svg>
              }
              title="Interfaces Digitais"
              description="Experiências web e mobile que equilibram estética e funcionalidade. UI/UX que converte."
            />
          </div>
        </div>
      </section>

      {/* Work / Portfolio Section — QI Artificial Gradients */}
      <section id="work" className="section-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold text-center text-[var(--color-text-primary)] tracking-[-0.02em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trabalhos recentes.
          </h2>
          <p className="text-center text-[var(--color-text-secondary)] text-lg mb-16 max-w-xl mx-auto">
            Projetos que refletem nosso compromisso com excelência visual.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <WorkCard
              title="Fintech Rebrand"
              category="Identidade Visual"
              gradient="radial-gradient(ellipse at 30% 20%, rgba(124,77,255,0.6) 0%, rgba(180,154,255,0.3) 40%, rgba(15,11,26,0.95) 100%)"
              accent="conic-gradient(from 180deg at 50% 70%, rgba(20,184,168,0.3), transparent 60%)"
            />
            <WorkCard
              title="SaaS Design System"
              category="Design System"
              gradient="radial-gradient(ellipse at 70% 80%, rgba(255,107,74,0.5) 0%, rgba(124,77,255,0.3) 50%, rgba(15,11,26,0.95) 100%)"
              accent="radial-gradient(circle at 20% 30%, rgba(250,248,255,0.06) 0%, transparent 50%)"
            />
            <WorkCard
              title="E-commerce Redesign"
              category="Interface Digital"
              gradient="linear-gradient(135deg, rgba(15,11,26,0.98) 0%, rgba(124,77,255,0.4) 50%, rgba(20,184,168,0.5) 100%)"
              accent="radial-gradient(circle at 80% 20%, rgba(250,248,255,0.08) 0%, transparent 40%)"
            />
            <WorkCard
              title="Health App"
              category="UI/UX Mobile"
              gradient="radial-gradient(ellipse at 50% 50%, rgba(124,77,255,0.5) 0%, rgba(255,107,74,0.2) 50%, rgba(15,11,26,0.9) 70%)"
              accent="conic-gradient(from 90deg at 30% 60%, rgba(20,184,168,0.3), rgba(124,77,255,0.15), transparent 50%)"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden section-surface py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse at 40% 40%, rgba(124,77,255,0.5) 0%, rgba(255,107,74,0.2) 40%, rgba(15,11,26,0.95) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "conic-gradient(from 220deg at 60% 70%, rgba(20,184,168,0.3), rgba(124,77,255,0.15), transparent 40%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "radial-gradient(circle at 80% 20%, rgba(250,248,255,0.12) 0%, transparent 30%)",
                }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-5xl font-semibold text-[var(--color-text-primary)] tracking-[-0.02em] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sobre o estúdio.
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              A QI Artificial é um estúdio de design fundado na crença de que
              grandes marcas merecem experiências visuais impecáveis.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Combinamos rigor estético com pensamento estratégico para criar
              soluções que não apenas encantam — mas funcionam. Cada pixel tem
              um propósito.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="relative overflow-hidden section-dark py-32 px-6">
        {/* Gradient blob on dark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,77,255,0.5), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2
            className="text-3xl md:text-5xl font-semibold text-[var(--color-text-inverse)] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vamos criar algo incrível.
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-xl mx-auto">
            Conte-nos sobre o seu projeto. Respondemos em até 24 horas.
          </p>
          <a href="mailto:contato@qiartificial.com.br" className="btn-primary">
            Falar com o estúdio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t" style={{ background: "var(--color-bg-dark)", borderColor: "rgba(212, 196, 255, 0.1)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; 2025 QI Artificial. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-inverse)] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-inverse)] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-inverse)] transition-colors">
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
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="service-card bg-white rounded-2xl p-8 text-center" style={{ borderRadius: "var(--radius-xl)" }}>
      <div className="flex justify-center mb-6">{icon}</div>
      <h3
        className="text-2xl font-semibold text-[var(--color-text-primary)] tracking-[-0.01em] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function WorkCard({
  title,
  category,
  gradient,
  accent,
}: {
  title: string;
  category: string;
  gradient: string;
  accent: string;
}) {
  return (
    <div className="work-card aspect-[4/3] relative overflow-hidden" style={{ borderRadius: "var(--radius-xl)" }}>
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      />
      <div
        className="absolute inset-0"
        style={{ background: accent }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <p className="text-xs text-white/60 uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-mono)" }}>
          {category}
        </p>
        <h3
          className="text-2xl font-semibold text-white tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
