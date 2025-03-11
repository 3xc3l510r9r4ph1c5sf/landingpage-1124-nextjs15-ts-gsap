import { NextResponse } from 'next/server';

export async function GET() {
  // Extract env vars
  const token = process.env.CODA_API_TOKEN || '';
  const docIdWithPage = process.env.CODA_DOC_ID || '';

  // Parse document ID
  let docId = '';
  let pageId = '';

  if (docIdWithPage) {
    const parts = docIdWithPage.split('/');
    docId = parts[0] || '';
    pageId = parts.length > 1 ? parts[1] : '';
  }

  // List all docs the token has access to
  let docsData = null;
  let docsError = null;

  try {
    const docsResponse = await fetch('https://coda.io/apis/v1/docs', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (docsResponse.ok) {
      docsData = await docsResponse.json();
    } else {
      docsError = `${docsResponse.status}: ${docsResponse.statusText}`;
    }
  } catch (error) {
    docsError = error instanceof Error ? error.message : 'Unknown error';
  }

  return NextResponse.json({
    tokenStatus: token
      ? 'Present (first 4 chars: ' + token.substring(0, 4) + '...)'
      : 'Missing',
    docIdWithPage: {
      raw: docIdWithPage,
      parsed: {
        docId,
        pageId,
      },
    },
    availableDocs: docsData ? docsData.items : null,
    docsError,
  });
}
