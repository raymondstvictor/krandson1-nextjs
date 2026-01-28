import cloudinary from "cloudinary";

// ✅ 1. Cloudinary config (ADD THIS — do not remove)
cloudinary.v2.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// ✅ 2. API route
export default async function handler(req, res) {
  const { folder } = req.query;

  if (!folder) {
    return res.status(400).json({ error: "Folder is required" });
  }

  try {
    // ✅ 3. QUOTED folder search (THIS IS THE FIX)
    const result = await cloudinary.v2.search
      .expression(`folder:"${folder}"`)
      .max_results(50)
      .execute();

    return res.status(200).json({
      resources: result.resources,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
