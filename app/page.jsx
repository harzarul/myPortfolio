
import { Navbar, Footer } from "../components";
import { Hero } from "../sections";

const Page = () => {
  return (
    <main className='bg-blue overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default Page