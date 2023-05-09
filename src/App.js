import {
  Navbar,
  Dropdown,
  Footer
} from './components';

import HOME_APP from './assets/images/mask.png';
import GIF_IMG from './assets/images/ezgif.com-gif-maker.gif'
import APP_ICON from './assets/images/Vector.png';
import WHIE_APPLE_ICON from './assets/images/white_apple.png';
import PLAY_ICON from './assets/images/Google Play logo.png';
import FRAME1269 from './assets/images/orange_img.png';
import FIRST_USER from './assets/images/Ellipse 180.png';
import SECOND_USER from './assets/images/Ellipse 180-3.png';
import THIRD_USER from './assets/images/Ellipse 180-2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Main Section */}
      <div className='main_container'>
        <div className='left'>
          <div className='left_content'>
            <marquee>Say goodbye to stuttering</marquee>
            {/* <h1>Say goodbye to stuttering</h1> */}
            <p>
              We strive to provide you with the tools and
              resources you need to overcome your stutter
              and improve your speech.
            </p>

            <button className='join_btn'>Join Speakerr</button>
            <div className='store_btn'>
              <button className='app_btn'>
                <img 
                  src={APP_ICON}
                  alt='apple_icon'
                />
                Get on iPhone
              </button>
              <button className='play_btn'>
                <img 
                  src={PLAY_ICON}
                  alt='apple_icon'
                />
                Get on Android
              </button>
            </div>
          </div>
        </div>
        <div className='right'>
          {/* <div className='circle' /> */}
          <img 
            src={HOME_APP}
            alt='img'
          />
        </div>
      </div>

      {/* Second Section */}
      <div className='feature_section'>
        <span>Features</span>
        <h2>What we offer</h2>
        <div className='feature_container'>
          <div className='left'>
            <div className='left_first'>
              <h3>Improve Your Speech with Our Effective Technique</h3>
              <p>Our exercises are based on the latest research in stuttering therapy and are proven to be effective in improving speech fluency.</p>
              <span>Learn more</span>
            </div>
            <div className='left_second'>
              <h3>Get Professional Help for Your Stuttering</h3>
              <p>We offer the opportunity to speak to a licensed speech therapist who specializes in treating stuttering.</p>
              <span>Learn more</span>
            </div>
            <div className='left_third'>
              <h3>Connect with Others Who Stutter and Share Your Story</h3>
              <p>Our community feature is a safe and welcoming space where people who stutter can come together to share experiences and build meaningful connections.</p>
              <span>Learn more</span>
            </div>
          </div>
          <div className='right'>
            <img
              src={GIF_IMG}
              alt='frame'
            />
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className='testimonial'>
        <h1>What People Say About Us</h1>

        <div className='testimonial_content'>
          <div className='left'>
            <img 
              src={FIRST_USER}
              alt='user'
            />
            <span>Before coming to this center, I 
              struggled to communicate
              with others
            </span>
            <h5>- John S</h5>
          </div>
          <div className='middle'>
            <img 
              src={THIRD_USER}
              alt='user'
            />
            <span>Before coming to this center, I 
              struggled to communicate
              with others
            </span>
            <h5>- John S</h5>
          </div>
          <div className='right'>
            <img 
              src={SECOND_USER}
              alt='user'
            />
            <span>Before coming to this center, I 
              struggled to communicate
              with others
            </span>
            <h5>- John S</h5>
          </div>
        </div>
      </div>

      {/* Download */}
      <div className='download'>
        <div className='download_content'>
          <div className='left'>
            <h1>Download our app</h1>
            <p>Speakerr has been used by more than 10,000 people from over 1 countries.</p>
            <div className='btns'>
              <button>
                <img 
                  src={WHIE_APPLE_ICON}
                  alt='apple_icon'
                />
                Get on iPhone
              </button>
              <button>
                <img 
                  src={PLAY_ICON}
                  alt='apple_icon'
                />
                Get on Android
              </button>
            </div>
          </div>
          <div className='right'>
            <img 
              src={FRAME1269}
              alt='app_image'
            />
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <Dropdown />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
