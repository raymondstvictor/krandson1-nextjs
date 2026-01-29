export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      <section style={{ marginTop: "60px" }}>
        <h2>360 Photo Booth</h2>

        <img src="/360-photo-booth/photo1.jpg" style={{ width: "250px", marginRight: "10px" }} />
        <img src="/360-photo-booth/photo2.jpg" style={{ width: "250px" }} />

        <video src="/360-photo-booth/video1.mp4" controls width="400" />
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>iPad Photo Booth</h2>

        <img src="/ipad-photo-booth/ipad1.jpg" style={{ width: "250px", marginRight: "10px" }} />
        <img src="/ipad-photo-booth/ipad2.jpg" style={{ width: "250px" }} />

        <video src="/ipad-photo-booth/ipad-video.mp4" controls width="400" />
      </section>
    </main>
  );
}
