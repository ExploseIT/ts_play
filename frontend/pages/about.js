// frontend/pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('/api/pages/about/')
      .then(res => res.json())
      .then(setContent)
      .catch(console.error);
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
}

