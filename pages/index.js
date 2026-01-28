
import GalleryTest from '../components/GalleryTest';

export default function Home() {
  return (
    <main style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>KRANDSON Photography</h1>

      <h2 style={{ marginTop: '50px' }}>360 Photo Booth</h2>
      <GalleryTest />

      <h2 style={{ marginTop: '50px' }}>Luxury LED iPad Photo Booth</h2>
      <GalleryTest />
    </main>
  );
}
