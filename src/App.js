import logo from './asserts/logo.png';
import award from "./asserts/1.png";
import receiving_award from "./asserts/2.png";
import pump_sets from "./asserts/3.png";
import { BsDot, BsFacebook, BsFillTelephoneFill } from "react-icons/bs"
import { FaGlobe } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container flex-column">
        <header className="app-header flex-row justify-center">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main className='app-main flex-row'>
          <img src={award} className="app-main-img-left" alt="award" />
          <div className='app-main-right'>
            <div className='app-main-content'>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
              <div className='app-main-sub-content'>
                <div className='sub-content-wrapper flex-row'>
                  <BsDot size={40} />
                  <p className='sub-content'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                </div>
                <div className='sub-content-wrapper flex-row'>
                  <BsDot size={40} />
                  <p className='sub-content'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                  </p>
                </div>
              </div>
              <img src={receiving_award} className="app-main-img-right" />
            </div>
            <p className='app-main-content'>	Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </main>
        <section className='app-section section-pumpsets flex-column'>
          <p className='app-section-heading'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
          </p>
          <img src={pump_sets} className="pump-sets" alt="instruments" />
          <p className='align-self-center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
          </p>

        </section>
        <section className='app-section section-bottom flex-column'>
          <h3 className='section-bottom-heading align-self-center'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <div className='text-align-center'>
            <span className='section-keyword'>CHEMICALS & PROCESS</span>
            <span className='section-keyword'>POWER</span>
            <span className='section-keyword'>WATER & WASTE WATER</span>
            <span className='section-keyword'>OILS & GAS</span>
            <span className='section-keyword'>PHARMA</span>
            <span className='section-keyword'>SUGARS & DISTILLERIES</span>
            <span className='section-keyword'>PAPER & PULP</span>
            <span className='section-keyword'>MARINE & DEFENCE</span>
            <span className='section-keyword'> METAL & MINING</span>
            <span className='section-keyword'>FOOD & BEVERAGE</span>
            <span className='section-keyword'>PETROCHEMICAL & REFINERIES</span>
            <span className='section-keyword'> SOLAR</span>
            <span className='section-keyword'>BUILDING</span>
            <span className='section-keyword'>HVAC</span>
            <span className='section-keyword'>FIRE FIGHTING</span>
            <span className='section-keyword'>AGRICULTURE & RESIDENTIAL</span>
          </div>
        </section>
        <footer className='app-footer flex-row flex-wrap'>
          <div className="contact-wrapper flex-row">
            <BsFillTelephoneFill size={20} className='contact-icon' />
            <a className='contact-info align-self-end'>Toll free 1800 200 1234</a>
          </div>
          <div className="contact-wrapper flex-row">
            <BsFacebook className="social-icon" size={40} />
            <a className='contact-info align-self-end'>www.facebook.com/cripumps</a>
          </div>
          <div className="contact-wrapper flex-row">
            <FaGlobe className='social-icon' size={40} />
            <a className='contact-info align-self-end'>www.crigroups.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
