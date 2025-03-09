// src/components/Coda/CodaDoc.tsx
import React from 'react';

// Helper function to request a Markdown export for the given page.
async function getCodaPageMarkdown(): Promise<string> {
  const { CODA_API_TOKEN, CODA_DOC_ID } = process.env;
  if (!CODA_API_TOKEN || !CODA_DOC_ID) {
    throw new Error('Missing Coda API credentials');
  }
  // Split the provided value into docId and pageId
  const parts = CODA_DOC_ID.split('/');
  if (parts.length < 2) {
    throw new Error("Invalid CODA_DOC_ID format. Expected 'docId/pageId'");
  }
  const docId = parts[0];
  const pageId = parts[1];

  const baseUrl = 'https://coda.io/apis/v1';
  const exportUrl = `${baseUrl}/docs/${docId}/pages/${pageId}/export`;

  // Initiate export request for Markdown content
  const exportRes = await fetch(exportUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CODA_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ outputFormat: 'markdown' }),
  });
  const exportData = await exportRes.json();

  // NOTE: In production, if exportData.status !== "complete",
  // you would poll exportData.href until complete.
  if (exportData.status !== 'complete' || !exportData.downloadLink) {
    throw new Error('Export not complete. Please try again later.');
  }

  // Fetch the exported Markdown content
  const contentRes = await fetch(exportData.downloadLink);
  const markdownContent = await contentRes.text();
  return markdownContent;
}

// The CodaDoc component fetches and renders the exported Markdown.
export default async function CodaDoc() {
  let markdown = '';
  try {
    markdown = await getCodaPageMarkdown();
  } catch (error) {
    console.error('Error fetching Coda doc content:', error);
    markdown = 'Failed to load content.';
  }

  return (
    <section className="coda-doc my-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Coda Case Study Content</h2>
      {/* Here we simply output the Markdown as preformatted text.
          In a real app, you might convert Markdown to HTML using a library like remark */}
      <div className="prose max-w-none">
        <pre>{markdown}</pre>
      </div>
    </section>
  );
}
