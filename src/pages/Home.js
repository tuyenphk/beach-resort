import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
       <Hero>
           <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at $499">
               <Link to="/room" className="btn-primary">Our Rooms</Link>
           </Banner>
       </Hero>
    )
}

export default Home;
