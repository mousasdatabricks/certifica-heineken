import { useState } from 'react'
import { Map, ChevronRight, ExternalLink, ArrowLeft, GraduationCap, BookOpen } from 'lucide-react'
import { trails, CERTIFICA_APP_URL, type Level, type Trail } from './trailsData'

const LEVELS: { key: Level; label: string }[] = [
  { key: 'fundamentos', label: 'Fundamentos' },
  { key: 'associate', label: 'Associate' },
  { key: 'professional', label: 'Professional' },
]
const LEVEL_BADGE: Record<Level, string> = {
  fundamentos: 'lvl-fund',
  associate: 'lvl-assoc',
  professional: 'lvl-prof',
}

export default function Trails() {
  const [sel, setSel] = useState<number | null>(null)
  const trail = sel != null ? trails[sel] : null

  if (trail) return <TrailDetail trail={trail} onBack={() => setSel(null)} />

  return (
    <div className="wrap section page">
      <div className="section-head">
        <h2><Map size={19} style={{ verticalAlign: -3, marginRight: 6 }} />Trilhas de certificação</h2>
        <span className="count">{trails.length} trilhas · {trails.reduce((n, t) => n + t.classes.length, 0)} cursos</span>
      </div>
      <p className="muted" style={{ marginBottom: 14, maxWidth: 680 }}>
        Réplica do programa de certificação Databricks. Escolha uma trilha para ver os cursos
        oficiais da Databricks Academy, organizados por nível, com a certificação-alvo.
      </p>
      <a className="trail-app-cta" href={CERTIFICA_APP_URL} target="_blank" rel="noreferrer">
        <GraduationCap size={17} />
        <span>Acessar a plataforma Certifica — simulados, flashcards e progresso</span>
        <ExternalLink size={15} />
      </a>
      <div className="trail-grid">
        {trails.map((t, i) => (
          <button key={i} className="trail-card" onClick={() => setSel(i)}>
            <div className="trail-card-top">
              <span className="trail-icon"><GraduationCap size={20} /></span>
              <ChevronRight size={18} className="trail-chev" />
            </div>
            <h3>{t.name}</h3>
            <p className="muted">{t.description}</p>
            <div className="trail-card-foot">
              <span className="badge cert-badge">{t.certificationName.replace('Databricks Certified ', '')}</span>
              <span className="muted" style={{ fontSize: 12 }}><BookOpen size={12} style={{ verticalAlign: -2 }} /> {t.classes.length} cursos</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function TrailDetail({ trail, onBack }: { trail: Trail; onBack: () => void }) {
  return (
    <div className="wrap section page">
      <button className="link-btn" onClick={onBack}><ArrowLeft size={15} style={{ verticalAlign: -2 }} /> Voltar às trilhas</button>

      <div className="trail-hero">
        <h2>{trail.name}</h2>
        <p>{trail.description}</p>
        <div className="trail-hero-cert">
          <GraduationCap size={16} />
          <span>Certificação-alvo: <b>{trail.certificationName}</b></span>
        </div>
        <div>
          <a className="trail-hero-cta" href={CERTIFICA_APP_URL} target="_blank" rel="noreferrer">
            Praticar no Certifica <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {LEVELS.map(({ key, label }) => {
        const group = trail.classes.filter((c) => c.level === key)
        if (!group.length) return null
        return (
          <div key={key} className="trail-level">
            <h3 className="trail-level-h">
              <span className={`badge ${LEVEL_BADGE[key]}`}>{label}</span>
              <span className="muted" style={{ fontSize: 12, fontWeight: 600 }}>{group.length} cursos</span>
            </h3>
            <div className="trail-classes">
              {group.map((c) => (
                <a key={c.id} className="trail-class" href={c.url} target="_blank" rel="noreferrer">
                  <span className="trail-class-ic"><ExternalLink size={15} /></span>
                  <div style={{ flex: 1 }}>
                    <h4>{c.title}</h4>
                    <div className="trail-class-meta">
                      <span className="badge tag-free">Gratuito</span>
                      <span>{c.duration}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )
      })}

      <p className="muted" style={{ fontSize: 12, marginTop: 20 }}>
        Cursos hospedados na Databricks Academy (catálogo em português). O link abre em nova aba.
      </p>
    </div>
  )
}
