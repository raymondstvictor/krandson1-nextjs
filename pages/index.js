export default function Home() {
  return (
    <main style={{
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    }}>

      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        KRANDSON Photography
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        Luxury 360 Photo Booth Experiences
      </p>

      {/* 360 PHOTO BOOTH */}
      <section style={{ marginBottom: "60px" }}>
        <h2>360 Photo Booth</h2>
        <img
          src="/360-photo-booth/photo1.jpg"
          alt="360 Photo Booth"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
        />
      </section>

      {/* IPAD PHOTO BOOTH */}
      <section>
        <h2>iPad Photo Booth</h2>
        <img
          src="/ipad-photo-booth/ipad1.jpg"
          alt="iPad Photo Booth"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
        />
      </section>

    </main>
  );
}
