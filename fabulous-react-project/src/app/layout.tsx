import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Fabulous React App',
  description: 'My App is precious',
}
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <html lang="en">
     <body>
      <div id="root">
        {children}
      </div>
     </body>
    </html>
  )
  }