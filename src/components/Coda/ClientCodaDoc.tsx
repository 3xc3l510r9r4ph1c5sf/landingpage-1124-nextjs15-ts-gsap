'use client';

import { useState, useEffect } from 'react';

export default function ClientCodaDoc() {
  const [content, setContent] = useState('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCodaContent() {
      try {
        const res = await fetch('/api/coda');
        const data = await res.json();

        if (data.error) {
          setError(data.error);
          setContent('');
        } else {
          setContent(data.content);
          setError(null);
        }
      } catch (err) {
        setError('Failed to fetch content');
        setContent('');
      }
    }

    fetchCodaContent();
  }, []);

  return (
    <section className="coda-doc my-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Coda Case Study Content</h2>

      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded">
          <h3 className="font-bold">Error loading content</h3>
          <p>{error}</p>
        </div>
      ) : (
        <div className="prose max-w-none bg-white p-6 rounded shadow">
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
      )}
    </section>
  );
}
