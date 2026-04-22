import AllProjects from '@/components/AllProjects'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function MyProjects() {
  return (
    <>
      <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden">
        <Navbar />
        <AllProjects />
        <Footer />
      </div>
    </>
  )
}
