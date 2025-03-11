import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.CODA_API_TOKEN;
  const docIdWithPage = process.env.CODA_DOC_ID;

  if (!token) {
    return NextResponse.json(
      { error: 'API token not found in environment variables' },
      { status: 500 }
    );
  }

  if (!docIdWithPage) {
    return NextResponse.json(
      { error: 'Document ID not found in environment variables' },
      { status: 500 }
    );
  }

  // Parse document ID and page ID
  const parts = docIdWithPage.split('/');
  if (parts.length < 2) {
    return NextResponse.json(
      { error: "Invalid CODA_DOC_ID format. Expected 'docId/pageId'" },
      { status: 400 }
    );
  }

  const docId = parts[0];
  const pageId = parts[1];

  try {
    // First check document access
    const docCheckUrl = `https://coda.io/apis/v1/docs/${docId}`;
    const docCheckRes = await fetch(docCheckUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!docCheckRes.ok) {
      return NextResponse.json(
        {
          error: `Cannot access document: ${docCheckRes.status} ${docCheckRes.statusText}`,
          hint: 'Make sure your token has access to this document and the document ID is correct',
        },
        { status: docCheckRes.status }
      );
    }

    // Document is accessible, now try to export the page
    const exportUrl = `https://coda.io/apis/v1/docs/${docId}/pages/${pageId}/export`;
    const exportRes = await fetch(exportUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ outputFormat: 'markdown' }),
    });

    if (!exportRes.ok) {
      return NextResponse.json(
        {
          error: `Export failed: ${exportRes.status} ${exportRes.statusText}`,
          hint: 'Make sure the page ID exists and your token has access to it',
        },
        { status: exportRes.status }
      );
    }

    const exportData = await exportRes.json();

    // If export is not complete immediately, we need to poll for it
    if (exportData.status === 'complete' && exportData.downloadLink) {
      const contentRes = await fetch(exportData.downloadLink);
      if (!contentRes.ok) {
        throw new Error(`Failed to download content: ${contentRes.status}`);
      }

      const markdown = await contentRes.text();
      return NextResponse.json({ content: markdown });
    } else if (exportData.href) {
      // For simplicity in this example, we're not implementing the polling
      // In a production app, you would implement polling here
      return NextResponse.json(
        {
          error:
            'Export requires polling which is not implemented in this example',
          exportData,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: 'Export failed, no download link or polling URL provided' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in Coda API:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
