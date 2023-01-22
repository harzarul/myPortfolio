
import { Navbar, Footer, Faq } from "../components";
import { Hero, Projects } from "../sections";
import styles from "../styles";

const Page = () => {
  return (
    <main className='bg-blue overflow-hidden w-full min-h-[100vh]'>
      <div className="flex justify-center items-center px-[2rem]">
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className="flex justify-center items-center px-[2rem]">
        <div className={`${styles.boxWidth} relative`}>
          <Hero/>
          <div className="gradient-03 z-0"/>
          <Faq/>
        </div>
      </div>
      <div className="flex justify-center items-center px-[2rem]">
        <div className={`${styles.boxWidth} relative`}>
          <div className="gradient-02 z-0"/>
          <Projects/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Page