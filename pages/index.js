
export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      {/* 360 PHOTO BOOTH */}
      <section style={{ marginTop: 60 }}>
        <h2>360 Photo Booth</h2>

        <img
          src="/360-photo-booth/photo1.jpg"
          alt="360 Booth"
          style={{ width: "300px", marginRight: 20 }}
        />

        <img
          src="/360-photo-booth/photo2.jpg"
          alt="360 Booth"
          style={{ width: "300px" }}
        />

        <video
          src="/360-photo-booth/video1.mp4"
          controls
          style={{ width: "300px", display: "block", marginTop: 20 }}
        />
      </section>

      {/* IPAD PHOTO BOOTH */}
      <section style={{ marginTop: 60 }}>
        <h2>iPad Photo Booth</h2>

        <img
          src="/ipad-photo-booth/ipad1.jpg"
          alt="iPad Booth"
          style={{ width: "300px", marginRight: 20 }}
        />

        <img
          src="/ipad-photo-booth/ipad2.jpg"
          alt="iPad Booth"
          style={{ width: "300px" }}
        />

        <video
          src="/ipad-photo-booth/ipad-video.mp4"
          controls
          style={{ width: "300px", display: "block", marginTop: 20 }}
        />
      </section>
    </main>
  );
}
