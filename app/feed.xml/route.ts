import { projects, site } from "@/lib/site-data";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = projects
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${site.url}${p.href}</link>
      <description>${escapeXml(p.summary)}</description>
      <category>${escapeXml(p.type)}</category>
      <pubDate>${new Date(`${p.year}-01-01`).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — ${escapeXml(site.role)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.tagline)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
