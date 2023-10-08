import type { Metadata } from 'next';
import { WeatherProvider } from '@/contexts/WeatherContext';

export const metadata: Metadata = {
  title: 'WeatherWiz',
  description: 'View your local weather with your best wizard right now!',
  themeColor: '#000000',
  applicationName: 'WeatherWiz',
  authors: [{ name: 'Alberto Santos', url: 'https://albertosantos.dev' }],
  keywords: [
    'weather',
    'weather-wizard',
    'rainy',
    'sunny',
    'card',
    'openweathermapAPI',
    'API consuming',
    'web',
    'frontend',
    'reactjs',
    'ui',
    'website',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <WeatherProvider>
          <div id="root">{children}</div>
        </WeatherProvider>
      </body>
    </html>
  );
}
