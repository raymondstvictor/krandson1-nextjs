export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      <h2>360 Photo Booth</h2>
      <img src="/360-photo-booth/photo1.jpg" width="300" />
      <video controls width="400">
        <source src="/360-photo-booth/video1.mp4" type="video/mp4" />
      </video>

      <h2>iPad Photo Booth</h2>
      <img src="/ipad-photo-booth/ipad1.jpg" width="300" />
      <video controls width="400">
        <source src="/ipad-photo-booth/ipad-video.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
