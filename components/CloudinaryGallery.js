
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

        if (!res.ok) throw new Error('Failed to load media');

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

  if (loading) return <p>Loading...</p>;
  if (!media.length) return <p>No media found.</p>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '16px',
        marginTop: '20px'
      }}
    >
      {media.map(item => (
        <img
          key={item.public_id}
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.public_id}.${item.format}`}
          alt=""
          style={{ width: '100%', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
}
