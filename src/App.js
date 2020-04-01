import React from 'react';
import ButtonUp from './components/ButtonUp';
import './App.css';
import ContactSection from './components/ContactSection';
import Stats from './components/Stats';
import HollydayGallery from './components/HollydaysGallery';
import HollydayPlan from './components/HollydayPlan';
import PartyGallery from './components/PartyGallery';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs'
import AuthorRights from './components/AuthorRights';
import Hero from './components/Hero';


function App() {
    return (
        <div className="App">
            <header className="header">
                {/* HERO */}
                <Hero />

                {/* STATS */}
                <Stats />
            </header>
            <main>

                {/* HOLLYDAYS GALLERY */}
                <HollydayGallery />

                {/* CONTACT FORM */}
                <ContactSection isFirst={true} title={'Лучшие праздники'} text={'Реализуем самые смелые идеи'} />

                {/* HOLLYDAY PLAN */}
                <HollydayPlan />

                {/* PARTY GALLERY */}
                <PartyGallery />

                {/* REVIEWS */}
                <Reviews />
              
                {/* CONTACT FORM */}
                <ContactSection className="contact second" title={'Хотите к нам?'} text={'Оставь заявку перед посещением'} />

            </main>
            <footer>

                {/* CONTACT US */}
                <ContactUs />

                {/* AUTHOR RIGHTS */}
                <AuthorRights />

            </footer>
            <ButtonUp />

        </div>
    );
}

export default App;
