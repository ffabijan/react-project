// src/App.jsx
import React from 'react';
import AuthorCard from './components/AuthorCard';

function AuthorSingle() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Autor</h1>
      {/* Zamijeni ID/slug s onim što želiš prikazati */}
      <AuthorCard authorId={1} />
      {/* Ako želiš po slug-u: <AuthorCard authorId="ime-slug" /> */}
    </div>
  );
}

export default AuthorSingle;

