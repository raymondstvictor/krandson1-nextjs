export default function Home() {
  return (
    <>
      <main style={{
        padding: 40,
        backgroundColor: "#000",
        color: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Georgia, serif"
      }}>

        <h1 style={{ color: "#C9A24D", fontSize: 42 }}>
          KRANDSON Photography
        </h1>

        <p style={{ fontSize: 18, marginBottom: 40 }}>
          Luxury 360 Photo Booth Experiences
        </p>

        <section style={{ marginBottom: 60 }}>
          <h2 style={{ color: "#C9A24D" }}>360 Photo Booth</h2>
          <img
            src="/360-photo-booth/photo1.jpg"
            width="320"
            style={{ borderRadius: 12, marginBottom: 20 }}
          />
        </section>

        <section style={{ marginBottom: 80 }}>
          <h2 style={{ color: "#C9A24D" }}>iPad Photo Booth</h2>
          <img
            src="/ipad-photo-booth/ipad1.jpg"
            width="320"
            style={{ borderRadius: 12 }}
          />
        </section>

        {/* Instagram Section */}
        <section style={{ textAlign: "center", marginBottom: 100 }}>
          <h2 style={{ color: "#C9A24D", marginBottom: 20 }}>
            Recent Events
          </h2>

          <div style={{
            borderTop: "1px solid #C9A24D",
            width: 120,
            margin: "0 auto 30px"
          }} />

          {/* PASTE YOUR INSTAGRAM EMBED BELOW THIS LINE */}
        </section>

      </main>

      {/* CALL / TEXT BUTTON */}
      <a
        href="tel:19179074544"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: "linear-gradient(135deg, #C9A24D, #F5D98B)",
          color: "#000",
          padding: "14px 22px",
          borderRadius: 999,
          fontWeight: "bold",
          textDecoration: "none",
          boxShadow: "0 0 18px rgba(201,162,77,0.6)",
          animation: "pulse 3.5s infinite",
          zIndex: 9999
        }}
      >
        Call / Text Now
      </a>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 10px rgba(201,162,77,0.4);
          }
          50% {
            box-shadow: 0 0 22px rgba(201,162,77,0.9);
          }
          100% {
            box-shadow: 0 0 10px rgba(201,162,77,0.4);
          }
        }
      `}</style>
    </>
  );
}
