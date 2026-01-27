

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

  if (loading) return <p>Loading media...</p>;
  if (!media.length) return <p>No media found.</p>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '15px',
        marginTop: '20px',
      }}
    >
      {media.map((item) =>
        item.resource_type === 'video' ? (
          <video
            key={item.public_id}
            src={item.secure_url}
            controls
            style={{ width: '100%', borderRadius: '8px' }}
          />
        ) : (
          <img
            key={item.public_id}
            src={item.secure_url}
            alt=""
            style={{ width: '100%', borderRadius: '8px' }}
          />
        )
      )}
    </div>
  );
}
