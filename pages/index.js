
import CloudinaryGallery from '../components/CloudinaryGallery';

export default function Home() {
  return (
    <main>
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      {/* 360 PHOTO BOOTH */}
      <section style={{ marginTop: '60px' }}>
        <h2>360 Photo Booth</h2>
        <CloudinaryGallery folder="360-photo-booth" />
      </section>

      {/* IPAD PHOTO BOOTH */}
      <section style={{ marginTop: '60px' }}>
        <h2>iPad Photo Booth</h2>
        <CloudinaryGallery folder="ipad-photo-booth" />
      </section>
    </main>
  );
}
