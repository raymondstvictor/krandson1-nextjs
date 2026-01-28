import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.cloudinary_Cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: 'Folder is required' });
  }

  try {
    const result = await cloudinary.v2.search
      .expression(`folder="${folder}"`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    res.status(200).json({ resources: result.resources });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
