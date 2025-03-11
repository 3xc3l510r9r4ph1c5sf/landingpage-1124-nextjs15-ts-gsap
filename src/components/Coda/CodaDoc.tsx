// src/components/Coda/CodaDoc.tsx

'use client';

import { useState, useEffect } from 'react';

export default function CodaDoc() {
  const [content, setContent] = useState<string>(
    'Loading content from Coda...'
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        setIsLoading(true);

        // Use our new API route that we've already set up
        const res = await fetch('/api/coda');

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(
            errorData.error || `HTTP error ${res.status}: ${res.statusText}`
          );
        }

        const data = await res.json();

        if (data.content) {
          setContent(data.content);
          setError(null);
        } else {
          throw new Error('No content returned from API');
        }
      } catch (err) {
        console.error('Error fetching Coda content:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        setContent('');
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  return (
    <section className="coda-doc my-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Coda Case Study Content</h2>

      {isLoading && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded">
          <p>Loading content from Coda...</p>
        </div>
      )}

      {!isLoading && error ? (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
          <h3 className="font-bold">Error loading content</h3>
          <p>{error}</p>
          <div className="mt-4 text-sm">
            <p>Troubleshooting tips:</p>
            <ul className="list-disc pl-5">
              <li>Check if your document ID and page ID are correct</li>
              <li>Make sure your API token has access to this document</li>
              <li>Try visiting the document directly in your browser</li>
            </ul>
          </div>
        </div>
      ) : !isLoading && content ? (
        <div className="prose max-w-none bg-white p-6 rounded shadow">
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
      ) : null}
    </section>
  );
}
