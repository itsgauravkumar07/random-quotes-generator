import { useEffect, useState } from "react";

function RanQuotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleCopy = () => {
    const fullQuote = `"${quote}" — ${author}`;
    navigator.clipboard.writeText(fullQuote)
      .then(() => alert("Quote copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div style={style.container}>
      <div style={style.card}>
        <h2 style={style.heading}>Random Quote</h2>

        <div style={style.quoteContainer}>
          <p style={style.quoteText}>“{quote}”</p>
        </div>

        <div style={style.authorContainer}>
          <p>── {author}</p>
        </div>

        <hr style={style.hr} />

        <div style={style.buttonGroup}>
          <button onClick={fetchQuotes} style={style.button}>New Quote</button>
          <button
            onClick={handleCopy}
            style={{ ...style.button, backgroundColor: "#00ADB5", marginLeft: "12px" }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

const style = {
  container: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  margin: 0,
  padding: 0,
  overflowX: "hidden",
  background: "linear-gradient(135deg, #1A1A2E, #16213E)",
  fontFamily: "'Poppins', sans-serif",
  color: "#EEEEEE",
  boxSizing: "border-box",
},


  card: {
    backgroundColor: "#0F3460",
    padding: "30px 25px",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "transform 0.2s ease-in-out",
  },

  heading: {
    fontSize: "24px",
    color: "#FFD369",
    marginBottom: "20px",
    fontWeight: "600"
  },

  quoteContainer: {
    marginBottom: "15px",
    height: "60px",         
    overflowY: "auto",         
  
  },

  quoteText: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#EEEEEE",
    lineHeight: "1.6"
  },

  authorContainer: {
    textAlign: "right",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#00ADB5",
    fontFamily: "monospace",
    marginBottom: "10px"
  },

  hr: {
    width: "70%",
    margin: "20px auto",
    border: "none",
    height: "1px",
    backgroundColor: "#393E46"
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px"
  },

  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    backgroundColor: "#393E46",
    color: "#FFFFFF",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  }
};

export default RanQuotes;
