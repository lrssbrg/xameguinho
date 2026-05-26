import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function DateInvite() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")

  const emailMap = {
    bruno: "larissabragadesouza00@gmail.com",
    lari: "contato@martinsbruno.com"
  }

  function handleNameChange(e) {
    const value = e.target.value
    setName(value)

    const key = value.toLowerCase()

    if (emailMap[key]) {
      setEmail(emailMap[key])
    } else {
      setEmail("")
    }
  }

  async function handleSend() {
    if (!name || !date || !email) {
      alert("preenche tudo 😠")
      return
    }

    const normalized = name.toLowerCase()

    let from_name = ""
    let to_name = ""

    if (normalized === "bruno") {
      from_name = "bruno"
      to_name = "moreco"
    } else if (normalized === "lari") {
      from_name = "lari"
      to_name = "momo"
    } else {
      alert("use apenas: bruno ou lari")
      return
    }

    try {
      await emailjs.send(
        "service_0o1s423",
        "template_1nm8dng",
        {
          from_name,
          to_name,
          date,
          to_email: email
        },
        "5wPKM0CLF7UUXsOXu"
      )

      alert(`convite enviado 💌 de ${from_name} para ${to_name}`)
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
          marginBottom: "20px"
        }}
      >
        convidar para um encontro
      </h2>

      {/* NOME */}
      <input
        type="text"
        placeholder="digite bruno ou lari"
        value={name}
        onChange={handleNameChange}
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      {/* EMAIL AUTO */}
      <input
        type="email"
        placeholder="email (auto)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      {/* DATA */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      <button onClick={handleSend} style={{ width: "101%" }}>
        ENVIAR 💌
      </button>
    </div>
  )
}