import CloudinaryGallery from '../components/CloudinaryGallery';


export default function Home() {

  return (

    <main style={{ padding: '80px 20px', textAlign: 'center' }}>

      <h1>KRANDSON Photography</h1>

      <p>Luxury 360 Photo Booth Experiences</p>
  <h2 style={{ marginTop: '50px' }}>360 Photo Booth</h2>

<CloudinaryGallery folder="360-photo-booth" />



<h2 style={{ marginTop: '50px' }}>Luxury LED iPad Photo Booth</h2>

<CloudinaryGallery folder="iPad-photo-booth" />



      <a

        href="tel:19179074544"

        style={{

          display: 'inline-block',

          marginTop: '25px',

          padding: '15px 30px',

          backgroundColor: 'gold',

          color: 'black',

          fontWeight: 'bold',

          textDecoration: 'none',

          borderRadius: '6px'

        }}

      >

        Call / Text Now

      </a>

    </main>

  )

}

