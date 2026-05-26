import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function DateInvite() {
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")
  const [fromName, setFromName] = useState("")

  // pega nome salvo (ou pede uma vez)
  useEffect(() => {
    const savedName = localStorage.getItem("fromName")

    if (savedName) {
      setFromName(savedName)
    } else {
      const name = prompt("Qual seu nome? 💌")
      if (name) {
        setFromName(name)
        localStorage.setItem("fromName", name)
      }
    }
  }, [])

  async function handleSend() {
    if (!date || !email) {
      alert("preenche tudo 😠")
      return
    }

    // destinatário fixo (mude se quiser)
    const toName = "Moreco"

    try {
      await emailjs.send(
        "service_0o1s423",
        "template_1nm8dng",
        {
          from_name: fromName,
          to_name: toName,
          date: date,
          to_email: email
        },
        "5wPKM0CLF7UUXsOXu"
      )

      localStorage.setItem("date", date)

      alert(`convite enviado 💌 de ${fromName} para ${toName}`)
    } catch (error) {
      console.log(error)
      alert("deu erro 😭")
    }
  }

  return (
    <div
      style={{
        border: "4px solid white",
        padding: "20px",
        marginTop: "20px",
        background: "#2b1240",
        width: "660px"
      }}
    >
      <h2
        style={{
          color: "#ff4f93",
          fontSize: "12px",
          textAlign: "center",
          lineHeight: "1.8",
          marginBottom: "20px"
        }}
      >
        convidar para um encontro
      </h2>

      <p style={{ color: "white", fontSize: "12px", textAlign: "center" }}>
        você está enviando como: <b>{fromName}</b>
      </p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      <input
        type="email"
        placeholder="email do momo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      <button
        onClick={handleSend}
        style={{
          width: "101%"
        }}
      >
        ENVIAR 💌
      </button>
    </div>
  )
}