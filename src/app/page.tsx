'use client';

import dynamic from 'next/dynamic';
import '../styles/index.scss';
import '../styles/App.scss';

const App = dynamic(() => import('../App'), { ssr: false });

export default function Page() {
  return <App />;
}
