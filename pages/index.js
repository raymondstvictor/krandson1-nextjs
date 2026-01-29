export default function Home() {
  return (
    <main
      style={{
        padding: "60px 20px",
        backgroundColor: "#0b0b0b",
        color: "#f5f5f5",
        fontFamily: "Georgia, serif",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#d4af37",
          fontSize: "42px",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        KRANDSON Photography
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#cccccc",
          marginBottom: "60px",
        }}
      >
        Luxury 360 Photo Booth Experiences
      </p>

      {/* 360 PHOTO BOOTH */}
      <section style={{ marginBottom: "80px" }}>
        <h2
          style={{
            color: "#d4af37",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          360 Photo Booth
        </h2>

        <img
          src="/360-photo-booth/photo1.jpg"
          alt="360 Photo Booth"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            border: "3px solid #d4af37",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        />
      </section>

      {/* IPAD PHOTO BOOTH */}
      <section>
        <h2
          style={{
            color: "#d4af37",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          iPad Photo Booth
        </h2>

        <img
          src="/ipad-photo-booth/ipad1.jpg"
          alt="iPad Photo Booth"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            border: "3px solid #d4af37",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        />
      </section>
          <a
  href="tel:9179074544"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    backgroundColor: "#d4af37",
    color: "#0b0b0b",
    padding: "16px 22px",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "16px",
    textDecoration: "none",
    boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
    zIndex: 9999,
  }}
>
  📞 Call / Text Now
</a>
    </main>
  );
}

