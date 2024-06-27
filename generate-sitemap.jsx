const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");

async function generateSitemap() {
  const links = [
    { url: "/", changefreq: "monthly", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/services", changefreq: "monthly", priority: 0.8 },
    { url: "/repair", changefreq: "monthly", priority: 0.8 },
    { url: "/select", changefreq: "monthly", priority: 0.8 },
    { url: "/rental", changefreq: "monthly", priority: 0.8 },
    { url: "/products", changefreq: "monthly", priority: 0.8 },
    { url: "/amc", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
  ];

  const sitemap = new SitemapStream({
    hostname: "http://www.infosecmedia.com",
  });
  const writeStream = createWriteStream(
    resolve(__dirname, "public", "sitemap.xml")
  );

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);
}

generateSitemap()
  .then(() => {
    console.log("Sitemap generated successfully!");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
