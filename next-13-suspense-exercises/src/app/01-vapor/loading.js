import React from 'react';
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';

export const dynamic = 'force-dynamic';

async function VaporLoading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p></p>
      </header>
      <div className="game-grid">
          {Array.from(Array(12)).map( () => <LibraryGameCardSkeleton /> )}
      </div>
    </section>
  );
}

export default VaporLoading;
