

'use client';



import { useEffect, useState } from 'react';



export default function CloudinaryGallery({ folder }) {

  const [media, setMedia] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    async function loadMedia() {

      try {

        const res = await fetch(

          `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/list/${folder}.json`

        );



        if (!res.ok) {

          throw new Error('Failed to load Cloudinary media');

        }



        const data = await res.json();

        setMedia(data.resources || []);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }



    loadMedia();

  }, [folder]);



  if (loading) {

    return <p style={{ textAlign: 'center' }}>Loading gallery...</p>;

  }



  return (

    <div style={grid}>

      {media.map((item) => (

        <div key={item.public_id} style={card}>

          {item.format === 'mp4' ? (

            <video controls style={mediaStyle}>

              <source

                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/${item.public_id}.mp4`}

                type="video/mp4"

              />

            </video>

          ) : (

            <img

              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.public_id}.${item.format}`}

              alt=""

              style={mediaStyle}

            />

          )}

        </div>

      ))}

    </div>

  );

}



const grid = {

  display: 'grid',

  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',

  gap: '20px',

};



const card = {

  borderRadius: '12px',

  overflow: 'hidden',

  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',

};



const mediaStyle = {

  width: '100%',

  height: 'auto',

};
