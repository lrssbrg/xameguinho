import { useEffect, useState } from "react"

export default function BeijinhosCounter({
  title,
  storageKey
}) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(storageKey)

    if (saved !== null) {
      return Number(saved)
    }

    return 0
  })

  useEffect(() => {
    localStorage.setItem(storageKey, count)
  }, [count, storageKey])

  return (
    <div
        style={{
        border: "4px solid #5b496d",
        background: "#2b1d3b",
        padding: "20px",
        marginTop: "20px",
        width: "300px",
        boxShadow: "0 0 0 4px #3d2c52 inset"
        }}
    >
      <h2
        style={{
        color: "#ff4f93",
        fontSize: "14px",
        textAlign: "center",
        lineHeight: "1.6"
        }}
      >
        {title}
      </h2>

      <h1
        style={{
        color: "#ffe14f",
        fontSize: "50px",
        textAlign: "center",
        textShadow: "4px 4px 0px #b98d00"
        }}
      >
        {count}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center"
        }}
      >
        <button onClick={() => setCount(count + 1)}>
          +
        </button>

        <button
          onClick={() =>
            setCount(Math.max(0, count - 1))
          }
        >
          -
        </button>
      </div>
    </div>
  )
}