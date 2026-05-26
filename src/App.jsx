import BeijinhosCounter from "./components/BeijinhosCounter"
import DaysCounter from "./components/DaysCounter"
import SaudadeMeter from "./components/SaudadeMeter"
import DateInvite from "./components/DateInvite"

export default function App() {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "12px",
    paddingRight: "12px",
    boxSizing: "border-box"
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "660px",
    marginBottom: "20px"
  }

  const saudadeGridStyle = {
    ...gridStyle,
    marginTop: "20px"
  }

  return (
    <div style={containerStyle}>
      <h1
        style={{
          fontSize: "32px",
          color: "#ff4f93",
          marginBottom: "10px",
          textAlign: "center"
        }}
      >
        ♥ xameguinho.com ♥
      </h1>

      <p
        style={{
          fontSize: "8px",
          color: "#c8b6d9",
          marginBottom: "30px",
          textAlign: "center"
        }}
      >
        sua fonte oficial de monitoramento romântico
      </p>

      {/* CONTADORES */}
      <div style={gridStyle}>
        <BeijinhosCounter
          title="beijinho que o momo me deve"
          storageKey="momo"
        />

        <BeijinhosCounter
          title="beijinhos que o moreco me deve"
          storageKey="eu"
        />
      </div>

      {/* DAYS */}
      <DaysCounter />

      {/* SAUDADE */}
      <div style={saudadeGridStyle}>
        <SaudadeMeter
          title="saudade do moreco"
          subtitle="assinado: bruno"
          storageKey="moreco"
        />

        <SaudadeMeter
          title="saudade do momo"
          subtitle="assinado: lari"
          storageKey="momo-saudade"
        />
      </div>

      {/* DATE */}
      <DateInvite />
    </div>
  )
}