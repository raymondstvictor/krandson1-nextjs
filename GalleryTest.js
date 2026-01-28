'use client';

export default function GalleryTest() {
  const media = [
    'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '16px',
        marginTop: '30px',
      }}
    >
      {media.map((src, i) => (
        <img
          key={i}
          src={src + '?w=800'}
          style={{ width: '100%', borderRadius: '12px' }}
          alt=""
        />
      ))}
    </div>
  );
}
