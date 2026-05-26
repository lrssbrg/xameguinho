import BeijinhosCounter from "./components/BeijinhosCounter"
import DaysCounter from "./components/DaysCounter"
import SaudadeMeter from "./components/SaudadeMeter"
import DateInvite from "./components/DateInvite"

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px"
      }}
    >
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          width: "100%",
          marginLeft: "-45px",
          maxWidth: "660px",
          marginBottom: "20px"
        }}
      >
        <BeijinhosCounter
          title="BEIJINHOS QUE O MOMO ME DEVE"
          storageKey="momo"
        />

        <BeijinhosCounter
          title="BEIJINHOS QUE EU DEVO PRO MOMO"
          storageKey="eu"
        />
      </div>

      {/* DAYS */}
      <DaysCounter />

      {/* SAUDADE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          width: "100%",
          maxWidth: "660px",
          marginTop: "20px",
          marginLeft: "-45px",
          marginBottom: "20px"
        }}
      >
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