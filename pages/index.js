
import CloudinaryGallery from '../components/CloudinaryGallery';

export default function Home() {
  return (
    <main style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      <h2 style={{ marginTop: '50px' }}>360 Photo Booth</h2>
      <CloudinaryGallery folder="360-photo-booth" />

      <h2 style={{ marginTop: '50px' }}>Luxury LED iPad Photo Booth</h2>
      <CloudinaryGallery folder="ipad-photo-booth" />

      <a
        href="tel:19179074544"
        style={{
          display: 'inline-block',
          marginTop: '40px',
          padding: '15px 30px',
          background: '#d4af37',
          color: '#000',
          borderRadius: '6px',
          fontWeight: 'bold',
        }}
      >
        Call / Text Now
      </a>
    </main>
  );
}
