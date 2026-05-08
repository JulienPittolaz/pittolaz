const contactHref =
  "mailto:julien@pittolaz.com?subject=Demande%20de%20projet";

const situations = [
  {
    title: "Processus trop manuels",
    text: "Vos équipes perdent du temps avec des tâches répétitives et des outils dispersés.",
    icon: "clock",
  },
  {
    title: "Ressaisie de données",
    text: "Les mêmes informations sont saisies plusieurs fois, avec un risque d'erreurs élevé.",
    icon: "database",
  },
  {
    title: "Outil existant difficile à faire évoluer",
    text: "L'outil ne suit plus vos besoins et freine votre efficacité.",
    icon: "puzzle",
  },
];

const offers = [
  {
    title: "Audit & cadrage",
    text: "Analyse de vos besoins et de vos processus pour définir la solution la plus pertinente.",
    icon: "clipboard",
  },
  {
    title: "Application web métier",
    text: "Conception et développement d'applications sur mesure, sécurisées et intuitives.",
    icon: "window",
  },
  {
    title: "Évolution d'un outil existant",
    text: "Amélioration, nouvelles fonctionnalités et optimisation des performances.",
    icon: "trend",
  },
];

const method = [
  {
    title: "Comprendre",
    text: "Je m'immerge dans votre métier et vos enjeux.",
  },
  {
    title: "Cadrer",
    text: "Je définis le périmètre, les priorités et la solution adaptée.",
  },
  {
    title: "Construire",
    text: "Je développe de manière itérative, transparente et sécurisée.",
  },
  {
    title: "Faire évoluer",
    text: "J'assure le suivi, les ajustements et les évolutions.",
  },
];

function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="lineIcon">
      {name === "clock" && (
        <>
          <circle cx="32" cy="32" r="24" />
          <path d="M32 15v19l13 8" />
        </>
      )}
      {name === "database" && (
        <>
          <ellipse cx="32" cy="16" rx="20" ry="9" />
          <path d="M12 16v28c0 5 9 9 20 9s20-4 20-9V16" />
          <path d="M12 30c0 5 9 9 20 9s20-4 20-9" />
        </>
      )}
      {name === "puzzle" && (
        <path d="M26 10h12v7a6 6 0 1 0 8 8h8v15H42a6 6 0 1 0-8 8v6H18V40h-7V25h15V10Z" />
      )}
      {name === "clipboard" && (
        <>
          <path d="M20 12h24v8h8v34H12V20h8v-8Z" />
          <path d="M23 12h18" />
          <path d="M23 31h18M23 41h14" />
        </>
      )}
      {name === "window" && (
        <>
          <rect x="12" y="16" width="40" height="34" rx="2" />
          <path d="M12 26h40" />
          <path d="M20 21h2M27 21h2" />
        </>
      )}
      {name === "trend" && (
        <path d="M10 48 28 30l10 10 18-24M44 16h12v12" />
      )}
    </svg>
  );
}

function DashboardIllustration() {
  return (
    <div className="dashboardWrap" aria-hidden="true">
      <div className="wash" />
      <div className="dashboard">
        <div className="browserDots">
          <span />
          <span />
          <span />
        </div>
        <aside className="sidebar">
          <span>⌂</span>
          <span>▦</span>
          <span>♙</span>
          <span>▥</span>
          <span>⚙</span>
        </aside>
        <main className="panel">
          <h2>Tableau de bord</h2>
          <div className="stats">
            <div>
              <small>Projets actifs</small>
              <strong>24</strong>
            </div>
            <div>
              <small>Utilisateurs</small>
              <strong>7</strong>
            </div>
            <div>
              <small>Tâches du jour</small>
              <strong>12</strong>
            </div>
            <div className="chart">
              <small>Activité</small>
              <svg viewBox="0 0 120 60">
                <path d="M5 48 18 34l13 8 14-18 15 8 14-15 15 18 12-9 14 5" />
              </svg>
            </div>
          </div>
          <div className="dashboardGrid">
            <div className="activity">
              <h3>Dernières activités</h3>
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="quick">
              <h3>Actions rapides</h3>
              <p>+ Nouveau projet</p>
              <p>♙ Exporter un rapport</p>
              <p>⌕ Ajouter un utilisateur</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="sectionTitle">
      {children}
      <span />
    </h2>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#" className="brand" aria-label="Julien Pittolaz accueil">
          <strong>Julien Pittolaz</strong>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#offre">Offre</a>
          <a href="#methode">Méthode</a>
          <a href="#apropos">À propos</a>
          <a href={contactHref}>Contact</a>
        </nav>
        <a className="button headerButton" href={contactHref}>
          Discuter de votre projet
        </a>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Développeur freelance</p>
          <h1>
            Applications web métiers pour PME et organisations en Suisse
            romande
          </h1>
          <p>
            Je conçois et développe des applications web sur mesure pour
            simplifier vos processus, fiabiliser vos données et donner du temps
            à vos équipes.
          </p>
          <p>
            Des solutions intuitives, robustes et évolutives, pensées pour vos
            métiers.
          </p>
          <div className="heroActions">
            <a className="button" href={contactHref}>
              Discuter de votre projet <span>→</span>
            </a>
            <a className="textLink" href="#methode">
              Voir ma méthode <span>→</span>
            </a>
          </div>
        </div>
        <DashboardIllustration />
      </section>

      <section id="apropos" className="section">
        <SectionTitle>Situations dans lesquelles je peux vous aider</SectionTitle>
        <div className="threeGrid">
          {situations.map((item) => (
            <article className="feature" key={item.title}>
              <Icon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="offre" className="section compactSection">
        <SectionTitle>Ce que je peux concevoir</SectionTitle>
        <div className="threeGrid">
          {offers.map((item) => (
            <article className="feature" key={item.title}>
              <Icon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="methode" className="method">
        <div className="methodTitle">
          <span />
          <SectionTitle>Ma méthode en 4 étapes</SectionTitle>
          <span />
        </div>
        <div className="steps">
          {method.map((step, index) => (
            <article className="step" key={step.title}>
              <div className="number">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contactBand">
        <div className="contactBlob" />
        <div>
          <h2>Vous avez un outil métier à créer, améliorer ou stabiliser ?</h2>
          <a className="button" href={contactHref}>
            Discuter de votre projet <span>→</span>
          </a>
        </div>
        <a className="emailLink" href={contactHref}>
          julien@pittolaz.com
        </a>
      </section>

      <footer>
        <span className="shield">◆</span>
        <span>Basé en Suisse romande</span>
        <span>•</span>
        <span>Informatique fiable, claire et durable.</span>
      </footer>
    </main>
  );
}
