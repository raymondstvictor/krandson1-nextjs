
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: "Folder is required" });
  }

  try {
    const result = await cloudinary.v2.search
      .expression(`folder:${folder}`)
      .max_results(50)
      .execute();

    return res.status(200).json({ resources: result.resources });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
}
