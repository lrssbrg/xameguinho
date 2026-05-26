import { useEffect, useState } from "react"

export default function DaysCounter() {
  const [date, setDate] = useState(() => {
    return localStorage.getItem("date")
      || ""
  })

  function calculateDays() {
    if (!date) {
      return "--"
    }

    const today = new Date()
    const target = new Date(date)

    const diff =
      target.getTime() - today.getTime()

    const days = Math.ceil(
      diff / (1000 * 60 * 60 * 24)
    )

    return days
  }

  useEffect(() => {
    localStorage.setItem("date", date)
  }, [date])

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
    quantos dias fatam pra matar a saudade
    </h2>

      <h1
        style={{
          fontSize: "50px",
          textAlign: "center"
        }}
      >
        {calculateDays()}
      </h1>

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
        style={{
          width: "97%",
          marginTop: "10px"
        }}
      />
    </div>
  )
}