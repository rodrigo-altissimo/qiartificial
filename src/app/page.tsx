import Image from "next/image";

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

      {/* Hero Section — Animated Gradient Blobs */}
      <section className="relative overflow-hidden section-light pt-32 pb-24 flex flex-col items-center text-center px-6 min-h-[90vh] justify-center">
        {/* Animated blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="relative z-10">
          <h1
            className="animate-fade-up text-5xl md:text-7xl lg:text-[80px] font-semibold leading-tight tracking-[-0.015em] text-[var(--color-text)] max-w-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Design que
            <br />
            transforma marcas.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed tracking-[0.011em]">
            Criamos experiências visuais que conectam pessoas a ideias.
            Design systems, identidade visual e interfaces digitais com a
            precisão que o seu negócio merece.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary">
              Iniciar um projeto
            </a>
            <a href="#work" className="btn-secondary">
              Ver trabalhos &rsaquo;
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-surface py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold text-center text-[var(--color-text)] tracking-[-0.003em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            O que fazemos.
          </h2>
          <p className="text-center text-[var(--color-text-muted)] text-lg mb-16 max-w-xl mx-auto">
            Três pilares para construir marcas que importam.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)]">
                  <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
              }
              title="Design Systems"
              description="Sistemas de design escaláveis que garantem consistência visual em todos os pontos de contato da sua marca."
            />
            <ServiceCard
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)]">
                  <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
                </svg>
              }
              title="Identidade Visual"
              description="Branding que comunica a essência do seu negócio — do logo à tipografia, da paleta de cores à linguagem visual."
            />
            <ServiceCard
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-secondary)]">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                </svg>
              }
              title="Interfaces Digitais"
              description="Experiências web e mobile que equilibram estética e funcionalidade. UI/UX que converte."
            />
          </div>
        </div>
      </section>

      {/* Work / Portfolio Section — Unsplash Images */}
      <section id="work" className="section-light py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <h2
            className="text-3xl md:text-5xl font-semibold text-center text-[var(--color-text)] tracking-[-0.003em] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Trabalhos recentes.
          </h2>
          <p className="text-center text-[var(--color-text-muted)] text-lg mb-16 max-w-xl mx-auto">
            Projetos que refletem nosso compromisso com excelência visual.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <WorkCard
              title="Fintech Rebrand"
              category="Identidade Visual"
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format"
            />
            <WorkCard
              title="SaaS Design System"
              category="Design System"
              image="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80&auto=format"
            />
            <WorkCard
              title="E-commerce Redesign"
              category="Interface Digital"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format"
            />
            <WorkCard
              title="Health App"
              category="UI/UX Mobile"
              image="https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&q=80&auto=format"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden section-surface py-24 px-6">
        <div className="max-w-[980px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80&auto=format"
                alt="Estúdio de design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2
              className="text-3xl md:text-5xl font-semibold text-[var(--color-text)] tracking-[-0.003em] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sobre o estúdio.
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-6">
              A QI Artificial é um estúdio de design fundado na crença de que
              grandes marcas merecem experiências visuais impecáveis.
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              Combinamos rigor estético com pensamento estratégico para criar
              soluções que não apenas encantam — mas funcionam. Cada pixel tem
              um propósito.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="relative overflow-hidden section-dark py-32 px-6">
        {/* Subtle gradient blob on dark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,113,227,0.4), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="max-w-[980px] mx-auto text-center relative z-10">
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
            <a href="#" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">
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
    <div className="service-card bg-white rounded-2xl p-8 text-center">
      <div className="flex justify-center mb-6">{icon}</div>
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
  image,
}: {
  title: string;
  category: string;
  image: string;
}) {
  return (
    <div className="work-card rounded-2xl aspect-[4/3] relative">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
      />
      <div className="work-card-overlay absolute inset-0 rounded-2xl" />
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
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
