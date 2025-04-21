import './globals.css'

export const metadata = {
  title: 'Cantonese Pronunciation Guide',
  description: 'Learn Cantonese pronunciation with audio examples',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
