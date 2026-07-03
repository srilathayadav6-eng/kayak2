import { NextResponse } from "next/server";

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Kayak AI Blog</title>
    <link>https://kayak.ai/blog</link>
    <description>Insights on enterprise AI, media technology, EdTech, broadcast automation, and knowledge management.</description>
    <language>en-us</language>
    <item>
      <title>Kayak AI Launches NewsForge 2.0 with Advanced AI Automation</title>
      <link>https://kayak.ai/blog/kayak-ai-launches-newsforge-2-0</link>
      <description>The latest version of NewsForge brings real-time AI transcription, automated rundown generation, and MOS 3.0 support.</description>
      <pubDate>Sun, 28 Jun 2026 00:00:00 GMT</pubDate>
    </item>
    <item>
      <title>The Future of AI in Education: Personalization at Scale</title>
      <link>https://kayak.ai/blog/future-of-ai-in-education</link>
      <description>How adaptive AI tutoring systems are transforming learning outcomes for millions of students.</description>
      <pubDate>Sat, 20 Jun 2026 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
