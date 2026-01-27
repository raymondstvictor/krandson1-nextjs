'use client';

import { useEffect, useState } from 'react';

export default function CloudinaryGallery({ folder }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function loadMedia() {
      try {
        const res = await fetch(
          `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/list/${folder}.json`
        );

        if (!res.ok) throw new Error('Failed to load media');

        const data = await res.json();
        setMedia(data.resources || []);
      } catch (err) {
        console.error(err);
      }
    }

    loadMedia();
  }, [folder]);

  if (!media.length) {
    return <p style={{ opacity: 0.6 }}>No media found.</p>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        marginTop: '20px'
      }}
    >
      {media.map((item) => (
        <div key={item.public_id}>
          <img
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.public_id}.${item.format}`}
            alt=""
            style={{
              width: '100%',
              borderRadius: '12px'
            }}
          />
        </div>
      ))}
    </div>
  );
}
