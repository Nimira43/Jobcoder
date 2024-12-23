import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Falcon Homes',
  keywords: 'rental, property, real estate',
  description: 'find the perfect property for your needs',
}

const MainLayout = ({ children}) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
    )
}
 
export default MainLayout
