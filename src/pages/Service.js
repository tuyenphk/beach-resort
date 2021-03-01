import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Title from '../components/Title'
import {Link} from 'react-router-dom'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaSpa, FaLuggageCart, FaGlassCheers, FaGift} from 'react-icons/fa'

export default class Service extends React.Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: 'Even better, we offer free cocktails around 5-6pm and discount 20% around 9-10pm, which is generally called "evening social receptions".'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'We offer the hiking tour with the guidance on Monday to Thursday, discount 20% ticket price on Friday to Sunday.'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'With the best services we bring to our customer, we offer the free shuttle from the local airport to our hotel in rounded ways.'
            },
            {
                icon: <FaLuggageCart />,
                title: "Luggage Forwarding",
                info: 'We offer the luggage forwarding service in order my guest travel worry-free, and visit without having to carry their non-essential belongs with them everywhere to go'
            },
            {
                icon: <FaBeer />,
                title: "Free Beer",
                info: 'We offer free beer in our restaurants.'
            },
            {
                icon: <FaSpa />,
                title: "Enjoy Spa",
                info: 'We offer the free spa on every Tuesday and Thursday from 9am to 5pm'
            },
            {
                icon: <FaGlassCheers />,
                title: "Wonderful anniversary",
                info: 'We offer 30% discount the Deluxe room for the anniversary of any couples'
            },
            {
                icon: <FaGift />,
                title: "Birthday Gift",
                info: 'We will have a suprising birthday gift for anyone who has a birthday on the day stay at our hotel'
            }
        ]
    }
    render(){
        return (
            <div>
            <Hero hero="serviceHero">
                <Banner title="The best service we offering">
                    <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
            <section className="services">
                 <Title title='services' />
                 <div className="services-center">
                     {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                              <span>{item.icon}</span>
                              <h6>{item.title}</h6>
                              <p>{item.info}</p>
                          </article>
                     })}
                 </div>
            </section>
           
            </div>
        );
    }
}



