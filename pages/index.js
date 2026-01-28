import CloudinaryGallery from "../components/CloudinaryGallery";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>KRANDSON Photography</h1>
      <p>Luxury 360 Photo Booth Experiences</p>

      <section style={{ marginTop: "60px" }}>
        <h2>360 Photo Booth</h2>
        <CloudinaryGallery />
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2>iPad Photo Booth</h2>
        <CloudinaryGallery />
      </section>
    </main>
  );
}
