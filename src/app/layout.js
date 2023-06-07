import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import ProtectRoutes from './components/ProtectRoutes';
import { ReduxProvider } from './redux/ReduxProvider';
import Header from './components/Header';
import ToastModel from './components/ToastModel';

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

        <ReduxProvider>
          <ToastModel />
          <ProtectRoutes>
            <Header />
            {children}
          </ProtectRoutes>
        </ReduxProvider>

      </body>
    </html>
  )
}
