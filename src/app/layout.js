import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectRoutes from './components/ProtectRoutes';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
      >
        <ProtectRoutes>
          {children}
        </ProtectRoutes>
      </body>
    </html>
  )
}