export default function Home() {
  return (
    <>
      {/* Navigation — Frosted Glass */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50 h-11 flex items-center justify-center border-b border-[var(--color-border)]/30">
        <div className="max-w-[980px] w-full px-6 flex items-center justify-between">
          <a
            href="/"
            className="text-[var(--color-text)] font-semibold text-sm tracking-tight"
          >
            QI Artificial
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              Serviços
            </a>
            <a href="#work" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              Trabalhos
            </a>
            <a href="#about" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-light pt-32 pb-20 flex flex-col items-center text-center px-6">
        <h1
          className="text-5xl md:text-7xl lg:text-[80px] font-semibold leading-tight tracking-[-0.015em] text-[var(--color-text)] max-w-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Design que
          <br />
          transforma marcas.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed tracking-[0.011em]">
          Criamos experiências visuais que conectam pessoas a ideias.
          Design systems, identidade visual e interfaces digitais com a
          precisão que o seu negócio merece.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact" className="btn-primary">
            Iniciar um projeto
          </a>
          <a href="#work" className="btn-secondary">
            Ver trabalhos &rsaquo;
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-surface py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold text-center text-[var(--color-text)] tracking-[-0.003em] mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que fazemos.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Design Systems"
              description="Sistemas de design escaláveis que garantem consistência visual em todos os pontos de contato da sua marca."
            />
            <ServiceCard
              title="Identidade Visual"
              description="Branding que comunica a essência do seu negócio — do logo à tipografia, da paleta de cores à linguagem visual."
            />
            <ServiceCard
              title="Interfaces Digitais"
              description="Experiências web e mobile que equilibram estética e funcionalidade. UI/UX que converte."
            />
          </div>
        </div>
      </section>

      {/* Work / Portfolio Section */}
      <section id="work" className="section-light py-20 px-6">
        <div className="max-w-[980px] mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold text-center text-[var(--color-text)] tracking-[-0.003em] mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trabalhos recentes.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <WorkCard
              title="Fintech Rebrand"
              category="Identidade Visual"
              color="#1d1d1f"
            />
            <WorkCard
              title="SaaS Design System"
              category="Design System"
              color="#0071e3"
            />
            <WorkCard
              title="E-commerce Redesign"
              category="Interface Digital"
              color="#86868b"
            />
            <WorkCard
              title="Health App"
              category="UI/UX Mobile"
              color="#1d1d1f"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-surface py-20 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-semibold text-[var(--color-text)] tracking-[-0.003em] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sobre o estúdio.
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            A QI Artificial é um estúdio de design fundado na crença de que
            grandes marcas merecem experiências visuais impecáveis. Combinamos
            rigor estético com pensamento estratégico para criar soluções que
            não apenas encantam — mas funcionam.
          </p>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="section-dark py-24 px-6">
        <div className="max-w-[980px] mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-semibold text-[#f5f5f7] tracking-[-0.003em] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Vamos criar algo incrível.
          </h2>
          <p className="text-lg text-[#86868b] mb-10 max-w-xl mx-auto">
            Conte-nos sobre o seu projeto. Respondemos em até 24 horas.
          </p>
          <a href="mailto:contato@qiartificial.com.br" className="btn-primary">
            Falar com o estúdio
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1f] py-8 px-6 border-t border-[#333336]">
        <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#86868b]">
            &copy; 2025 QI Artificial. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center">
      <h3
        className="text-2xl font-semibold text-[var(--color-text)] tracking-[0.009em] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>
      <p className="text-[var(--color-text-muted)] text-base leading-relaxed tracking-[-0.022em]">
        {description}
      </p>
    </div>
  );
}

function WorkCard({
  title,
  category,
  color,
}: {
  title: string;
  category: string;
  color: string;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 relative"
      style={{ backgroundColor: color }}
    >
      <div className="relative z-10">
        <p className="text-xs text-white/60 uppercase tracking-wider mb-2">
          {category}
        </p>
        <h3
          className="text-2xl font-semibold text-white tracking-[0.004em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
