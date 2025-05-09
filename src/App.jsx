// src/App.jsx
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Hero />
      <section className="bg-gradient-to-b from-[#219EBC] via-[#0077B6] to-[#8ECAE6]">
        <HowItWorks />
        <WhyChooseUs />
      </section>
      {/* <HowItWorks />
      <WhyChooseUs /> */}
            <section className="bg-gradient-to-b from-[#8ECAE6] via-[#219EBC] to-[#023047]">
      <Testimonials />
      <ContactForm />
      </section>
    </div>
  );
};

export default App;
