'use client';

import { useEffect, useState } from 'react';

export default function CloudinaryGallery({ folder }) {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMedia() {
      try {
        const res = await fetch(`/api/cloudinary?folder=${folder}`);
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

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
      {media.map((item) => (
        <img
          key={item.public_id}
          src={item.secure_url}
          alt=""
          style={{ width: '100%', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
}
