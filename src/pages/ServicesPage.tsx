import Packages from '../components/Packages'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import { useEffect } from 'react';
import AboutSection from '../components/About';

const ServicesPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className=''>
      <AboutSection/>
      <Packages/>
      <Testimonial/>
      <Blog/>

    </div>
  )
}

export default ServicesPage