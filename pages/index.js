
export default function Home() {
  return (
    <main
      style={{
        padding: 40,
        maxWidth: "900px",
        margin: "0 auto",
        background: "#fff",
      }}
    >
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      <h2>360 Photo Booth</h2>
      <img
        src="/360-photo-booth/photo1.jpg"
        width="300"
        style={{ display: "block", marginBottom: 20 }}
      />

      <h2>iPad Photo Booth</h2>
      <img
        src="/ipad-photo-booth/ipad1.jpg"
        width="300"
        style={{ display: "block", marginBottom: 20 }}
      />

      <p style={{ color: "red", fontWeight: "bold" }}>
        DEPLOY TEST — THIS TEXT MUST APPEAR
      </p>
    </main>
  );
}
