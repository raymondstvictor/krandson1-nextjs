
'use client';

import { useEffect, useState } from 'react';

export default function CloudinaryGallery({ folder }) {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMedia() {
      try {
        setLoading(true);
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
  }, [folder]); // ✅ THIS is the critical fix

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {media.map((item) => (
        <img
          key={item.public_id}
          src={item.secure_url}
          alt=""
          style={{ width: '300px', borderRadius: '12px' }}
        />
      ))}
    </div>
  );
}
