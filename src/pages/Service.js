import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export const Service = () => {
    return (
         <Hero hero="serviceHero">
            <Banner title="The best service we offering">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
    )
}

export default Service;

