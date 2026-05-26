import { useEffect, useState } from "react"

export default function SaudadeMeter({
  title,
  subtitle,
  storageKey
}) {
  const [value, setValue] = useState(() => {
    const saved =
      localStorage.getItem(storageKey)

    return saved ? Number(saved) : 0
  })

  const [lastVote, setLastVote] = useState(() => {
    return (
      localStorage.getItem(
        storageKey + "-date"
      ) || ""
    )
  })

  const today =
    new Date().toISOString().split("T")[0]

  const alreadyVoted = lastVote === today

  function handleVote(number) {
    if (alreadyVoted) {
      alert("você já votou hoje 😠")
      return
    }

    setValue(number)
    setLastVote(today)
  }

  function resetVote() {
    localStorage.removeItem(storageKey)

    localStorage.removeItem(
      storageKey + "-date"
    )

    setValue(0)
    setLastVote("")
  }

  useEffect(() => {
    localStorage.setItem(storageKey, value)
  }, [value])

  useEffect(() => {
    localStorage.setItem(
      storageKey + "-date",
      lastVote
    )
  }, [lastVote])

  return (
    <div
      style={{
        border: "4px solid #5b496d",
        background: "#2b1d3b",
        padding: "20px",
        marginTop: "20px",
        width: "300px",
        boxShadow:
          "0 0 0 4px #3d2c52 inset"
      }}
    >
      <h2
        style={{
          color: "#ff4f93",
          fontSize: "15px",
          textAlign: "center",
          lineHeight: "1.8",
          marginBottom: "15px"
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "12px",
          color: "#c8b6d9",
          textAlign: "center",
          marginBottom: "20px"
        }}
      >
        {subtitle}
      </p>

      <h1
        style={{
          fontSize: "30px",
          textAlign: "center"
        }}
      >
        {value}%
      </h1>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        disabled={alreadyVoted}
        onChange={(e) =>
          handleVote(Number(e.target.value))
        }
        style={{
          width: "90%"
        }}
      />

      {alreadyVoted && (
        <p
          style={{
            fontSize: "10px",
            textAlign: "center"
          }}
        >
          voto de hoje registrado 💖
        </p>
      )}

      <p
        style={{
          fontSize: "8px",
          textAlign: "center",
          marginTop: "15px",
          color: "#c8b6d9",
          lineHeight: "1.6"
        }}
      >
        última atualização:
        <br />
        {lastVote || "nunca"}
      </p>

      <button
        onClick={resetVote}
        style={{
          width: "100%",
          marginTop: "15px",
          fontSize: "8px"
        }}
      >
        RESETAR VOTO
      </button>
    </div>
  )
}