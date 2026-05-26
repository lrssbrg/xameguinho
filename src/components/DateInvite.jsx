import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function DateInvite() {
  const [date, setDate] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  
  const emailMap = {
    bruno: "larissabragadesouza@gmail.com",
    lari: "larissab.tarot@gmail.com"
  }

 
  useEffect(() => {
    const key = name.toLowerCase()

    if (emailMap[key]) {
      setEmail(emailMap[key])
    }
  }, [name])

  async function handleSend() {
    if (!date || !name || !email) {
      alert("preenche tudo 😠")
      return
    }

    const normalizedName = name.toLowerCase()

    let from_name = ""
    let to_name = ""


    if (normalizedName === "bruno") {
      from_name = "bruno"
      to_name = "moreco"
    } else if (normalizedName === "lari") {
      from_name = "lari"
      to_name = "momo"
    } else {
      alert("nome inválido (use bruno ou lari)")
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
        placeholder="digite seu nome (bruno ou lari)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      {/* EMAIL (auto preenchido, mas editável se quiser) */}
      <input
        type="email"
        placeholder="email"
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