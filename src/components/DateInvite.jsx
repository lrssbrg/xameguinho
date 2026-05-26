import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function DateInvite() {
  const [date, setDate] = useState("")
  const [email, setEmail] = useState("")

  async function handleSend() {
    if (!date || !email) {
      alert("preenche tudo 😠")
      return
    }

    try {
      await emailjs.send(
        "service_0o1s423",
        "template_1nm8dng",
        {
          from_name: "Lari",
          to_name: "Momo",
          date: date,
          to_email: email
        },
        "5wPKM0CLF7UUXsOXu"
      )

      localStorage.setItem("date", date)

      alert("convite enviado 💌")
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

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
        style={{
          width: "97%",
          marginBottom: "10px"
        }}
      />

      <input
        type="email"
        placeholder="email do momo"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
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