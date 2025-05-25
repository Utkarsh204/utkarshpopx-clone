import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.bottomSection}>
        <h2 style={styles.heading}>Welcome to PopX</h2>
        <p style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button style={styles.primaryBtn} onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button style={styles.secondaryBtn} onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "24px",
    backgroundColor: "#f7f8f9",
  },
  bottomSection: {
    textAlign: "left",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  text: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "24px",
  },
  primaryBtn: {
    backgroundColor: "#6c25ff",
    color: "#f7f2ff",
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    marginBottom: "12px",
    cursor: "pointer",
  },
  secondaryBtn: {
    backgroundColor: "#cebafb",
    color: "rgb(70 67 76)",
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
