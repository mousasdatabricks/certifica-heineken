import { useMemo, useState } from 'react'
import { Search, Users, TrendingUp, Sparkles, Globe } from 'lucide-react'
import { participants, type Participant } from './data'

// Mapeamento EN (CSV) -> PT-BR + rank de cor
const INTEREST: Record<string, { label: string; rank: number }> = {
  'Extremely interested': { label: 'Extremamente interessado', rank: 4 },
  'Very interested': { label: 'Muito interessado', rank: 3 },
  'Moderately interested': { label: 'Moderadamente interessado', rank: 2 },
  'Slightly interested': { label: 'Levemente interessado', rank: 1 },
}
const COUNTRY_PT: Record<string, string> = {
  Brazil: '🇧🇷 Brasil', Poland: '🇵🇱 Polônia', 'Viet Nam': '🇻🇳 Vietnã', Haiti: '🇭🇹 Haiti',
}

const AVATAR_COLORS = ['#008200', '#1565c0', '#6a1b9a', '#e65100', '#00897b', '#5d4037', '#c2185b', '#455a64']
function avatarColor(seed: string) {
  let h = 0
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) % AVATAR_COLORS.length
  return AVATAR_COLORS[h]
}
function initials(name: string) {
  const p = name.trim().split(/\s+/)
  return ((p[0]?.[0] ?? '') + (p[1]?.[0] ?? '')).toUpperCase() || name.slice(0, 2).toUpperCase()
}

function interestMeta(v: string) {
  const m = INTEREST[v]
  return { label: m?.label ?? 'Sem resposta', rank: m?.rank ?? 0 }
}

export default function App() {
  const [q, setQ] = useState('')
  const [country, setCountry] = useState('all')
  const [interest, setInterest] = useState('all')

  const countries = useMemo(
    () => Array.from(new Set(participants.map((p) => p.country).filter(Boolean))),
    [],
  )

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return participants.filter((p) => {
      if (country !== 'all' && p.country !== country) return false
      if (interest !== 'all' && String(interestMeta(p.interest).rank) !== interest) return false
      if (needle && !(`${p.name} ${p.email}`.toLowerCase().includes(needle))) return false
      return true
    })
  }, [q, country, interest])

  const total = participants.length
  const highInterest = participants.filter((p) => interestMeta(p.interest).rank >= 3).length
  const newcomers = participants.filter((p) => p.newToDatabricks === 'Yes').length

  return (
    <div className="app">
      {/* Topbar */}
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            <span className="brand-star">★</span>
            <span className="brand-name">HEINEKEN <span>Brasil</span></span>
            <span className="brand-divider" />
            <span className="brand-dbx"><span className="dot" /> Databricks</span>
          </div>
          <span className="topbar-tag">Programa de Certificação</span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <span className="lna-pill">LNA · LEVANTAMENTO DE NECESSIDADES DE APRENDIZAGEM</span>
          <h1>Participantes do LNA Databricks</h1>
          <p>
            Estes são os colaboradores da HEINEKEN que responderam ao Levantamento de
            Necessidades de Aprendizagem (LNA) e demonstraram interesse na jornada de
            certificação Databricks. A lista é o ponto de partida para desenhar as trilhas
            de capacitação e as turmas de certificação.
          </p>
        </div>
      </section>

      {/* KPIs */}
      <div className="wrap">
        <div className="kpis">
          <div className="kpi">
            <div className="kpi-icon"><Users size={20} /></div>
            <div className="kpi-val">{total}</div>
            <div className="kpi-label">Participantes do LNA</div>
          </div>
          <div className="kpi">
            <div className="kpi-icon"><TrendingUp size={20} /></div>
            <div className="kpi-val">{Math.round((highInterest / total) * 100)}%</div>
            <div className="kpi-label">Alto interesse (muito/extremamente)</div>
          </div>
          <div className="kpi">
            <div className="kpi-icon"><Sparkles size={20} /></div>
            <div className="kpi-val">{newcomers}</div>
            <div className="kpi-label">Novos no Databricks</div>
          </div>
          <div className="kpi">
            <div className="kpi-icon"><Globe size={20} /></div>
            <div className="kpi-val">{countries.length}</div>
            <div className="kpi-label">Países representados</div>
          </div>
        </div>
      </div>

      {/* Lista */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Lista de participantes</h2>
            <span className="count">{filtered.length} de {total} exibidos</span>
          </div>

          <div className="filters">
            <div className="search">
              <Search size={16} />
              <input
                placeholder="Buscar por nome ou e-mail…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="all">Todos os países</option>
              {countries.map((c) => (
                <option key={c} value={c}>{COUNTRY_PT[c] ?? c}</option>
              ))}
            </select>
            <select value={interest} onChange={(e) => setInterest(e.target.value)}>
              <option value="all">Todos os níveis de interesse</option>
              <option value="4">Extremamente interessado</option>
              <option value="3">Muito interessado</option>
              <option value="2">Moderadamente interessado</option>
              <option value="1">Levemente interessado</option>
              <option value="0">Sem resposta</option>
            </select>
          </div>

          <div className="table-card">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Colaborador</th>
                  <th>País</th>
                  <th>Interesse em certificação</th>
                  <th className="col-hide">Nuvens</th>
                  <th className="col-hide">Experiência</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => <Row key={p.email} p={p} />)}
                {filtered.length === 0 && (
                  <tr><td colSpan={5} style={{ textAlign: 'center', padding: 32, color: 'var(--brand-text-muted)' }}>
                    Nenhum participante corresponde aos filtros.
                  </td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>HEINEKEN Brasil · Programa de Certificação Databricks — LNA</span>
          <span>Fonte: User Summary · 23/06/2026 · {total} participantes únicos</span>
        </div>
      </footer>
    </div>
  )
}

function Row({ p }: { p: Participant }) {
  const { label, rank } = interestMeta(p.interest)
  return (
    <tr>
      <td>
        <div className="u-name">
          <span className="avatar" style={{ background: avatarColor(p.email) }}>{initials(p.name)}</span>
          <div>
            <div className="nm">{p.name}</div>
            <div className="em">{p.email}</div>
          </div>
        </div>
      </td>
      <td className="flag">{COUNTRY_PT[p.country] ?? p.country ?? '—'}</td>
      <td><span className={`badge int-${rank}`}>{label}</span></td>
      <td className="col-hide">
        {p.clouds.length ? p.clouds.map((c) => <span key={c} className="cloud">{c}</span>) : <span className="muted">—</span>}
      </td>
      <td className="col-hide">
        {p.newToDatabricks === 'Yes'
          ? <span className="badge tag-new">Novo</span>
          : p.newToDatabricks === 'No'
            ? <span className="badge tag-exp">Experiente</span>
            : <span className="muted">—</span>}
      </td>
    </tr>
  )
}
