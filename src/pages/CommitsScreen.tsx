import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CommitsScreen : FC = () => {
  return (
    <main>
      <h5>Commits Screen</h5>
      <div>
        <Link to="/">
          Go to Commits
        </Link>
      </div>
    </main>
  )
}
