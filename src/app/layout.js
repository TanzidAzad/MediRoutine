import './globals.css';

export const metadata = {
  title: 'RemedyRX',
  description: 'RemedyRX - Your Personal Medication Reminder',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
