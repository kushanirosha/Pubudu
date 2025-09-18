import Packages from '../components/Packages'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import { useEffect } from 'react';

const ServicesPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className=''>

      <Packages/>
      <Testimonial/>
      <Blog/>

    </div>
  )
}

export default ServicesPage