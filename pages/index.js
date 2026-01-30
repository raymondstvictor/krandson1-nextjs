
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Instagram embed script (Next.js safe) */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />

      <main className="container">
        <h1 className="title">KRANDSON Photography</h1>
        <p className="subtitle">Luxury 360 Photo Booth Experiences</p>

        {/* CALL / TEXT BUTTON */}
        <a href="tel:9179074544" className="cta">
          📞 Call / Text Now
        </a>

        {/* 360 PHOTO BOOTH */}
        <section className="section">
          <h2>360 Photo Booth</h2>
          <img
            src="/360-photo-booth/photo1.jpg"
            alt="360 Photo Booth"
            className="media"
          />
        </section>

        {/* IPAD PHOTO BOOTH */}
        <section className="section">
          <h2>iPad Photo Booth</h2>
          <img
            src="/ipad-photo-booth/ipad1.jpg"
            alt="iPad Photo Booth"
            className="media"
          />
        </section>

        {/* INSTAGRAM FEED */}
        <section className="section">
          <h2>Latest on Instagram</h2>

          <div
            className="instagram"
            dangerouslySetInnerHTML={{
              __html: `
<blockquote class="instagram-media"
  data-instgrm-permalink="https://www.instagram.com/reel/Cf4I3owlcTk/"
  data-instgrm-version="14"
  style="margin: auto; max-width:540px;">
</blockquote>
              `,
            }}
          />
        </section>

        {/* DEPLOY TEST */}

        {/* STYLES */}
        <style jsx>{`
          body {
            background: #000;
          }

          .container {
            background: #000;
            color: #fff;
            min-height: 100vh;
            padding: 40px 20px;
            text-align: center;
            font-family: "Georgia", serif;
          }

          .title {
            color: gold;
            font-size: 42px;
            margin-bottom: 10px;
          }

          .subtitle {
            color: #d4af37;
            margin-bottom: 30px;
            letter-spacing: 1px;
          }

          .cta {
            display: inline-block;
            margin: 20px auto 40px;
            padding: 14px 30px;
            color: #000;
            background: linear-gradient(90deg, gold, #d4af37);
            border-radius: 40px;
            font-weight: bold;
            text-decoration: none;
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.7);
            animation: pulse 2.5s infinite;
          }

          .section {
            margin-bottom: 80px;
          }

          h2 {
            color: gold;
            margin-bottom: 20px;
          }

         .media {
  width: 100%;
  max-width: 520px;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.4);
  margin: 0 auto;
  display: block;
}
          }

          .instagram {
            margin-top: 20px;
          }

          .deploy-test {
            margin-top: 40px;
            color: red;
            font-weight: bold;
          }

          @keyframes pulse {
            0% {
              box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
            }
            50% {
              box-shadow: 0 0 35px rgba(212, 175, 55, 1);
            }
            100% {
              box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
            }
          }
        `}</style>
      </main>
    </>
  );
}
