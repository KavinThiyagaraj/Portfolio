import { useState } from 'react'
import viteLogo from '/vite.svg'
import myAvatar from './assets/my-avatar.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const showSection = (sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
  };

  return (
    <div className="container">
      {/* Left Bar */}
      <div className="left-bar">
        <div className="profile-pic">
          <img src={myAvatar} alt="Profile Picture" />
        </div>
        <h2>Kavin T</h2>
        <p className="tagline">
          Passionate ECE Student<br />
          Bridging Hardware and Software
        </p>
        <div className="info">
          <div className="info-row">
            <div className="info-heading"><strong>Phone:</strong></div>
            <div className="info-value">+91 9843599288</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Email:</strong></div>
            <div className="info-value">tkavin.thiyagaraj@gmail.com</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Address:</strong></div>
            <div className="info-value">Coimbatore, Tamil Nadu</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>College:</strong></div>
            <div className="info-value">Sri Krishna College of Engineering and Technology</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Degree:</strong></div>
            <div className="info-value">Bachelor of Engineering </div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Branch:</strong></div>
            <div className="info-value">Electronics and Communication</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Year:</strong></div>
            <div className="info-value">2nd Year</div>
          </div>
          <div className="info-row">
            <div className="info-heading"><strong>Programming Languages:</strong></div>
            <div className="info-value">C, C++, Java, Python, JavaScript, Assembly</div>
          </div>
        </div>
      </div>

      {/* Right Bar */}
      <div className="right-bar">
        <nav className="navbar">
          <a href="#home" onClick={() => showSection('home')}>Home</a>
          <a href="#skills" onClick={() => showSection('skills')}>Skills</a>
          <a href="#project" onClick={() => showSection('project')}>Project</a>
          <a href="#contact" onClick={() => showSection('contact')}>Contact</a>
        </nav>
        <div id="home" className={`content-section ${activeSection === 'home' ? 'active' : ''}`}>
          <div className="home_container">
            <h2>Hello,</h2>
            <h2>I am Kavin T</h2>
            <p class="descrption">I am an enthusiastic Electronics and Communication Engineering (ECE) graduate with a strong passion for innovation, problem-solving, and cutting-edge technology. My academic journey has provided me with a deep understanding of core subjects such as embedded systems, digital electronics, communication networks, and VLSI design.</p>
            <p class="descrption">
            Throughout my academic and project experiences, I have worked extensively with microcontrollers, sensors, and IoT-based systems, developing solutions that bridge the gap between hardware and software.</p>
            <p class="descrption">
            I am a proactive learner who enjoys collaborating on innovative projects and staying updated with the latest advancements in electronics and communication. My problem-solving approach, coupled with strong analytical thinking and teamwork, allows me to contribute effectively to challenging tasks.
            </p>
          </div>
          <div className="home_container">
            <h2>Education</h2>
            <dl>
              <dt>
                <h3>University of Engineering</h3>
              </dt>
              <dd>Sri Krishna College of engineering and Technology, Coimbatore — B.E.ECE</dd>
              <dd>Nov 2023<br />I sem CGPA: 7.9</dd>
              <dt>
                <h3>High School Education</h3>
              </dt>
              <dd>GKD School, Coimbatore — HSC</dd>
              <dd>Mar 2023<br />percentage: 82.5</dd>
            </dl>
          </div>
        </div>
        <div id="project" className={`content-section ${activeSection === 'project' ? 'active' : ''}`}>
          <div class="project_container">
            <h2>Low-Power VLSI-Based ALU Design</h2>
            <p class="descrption">This project focuses on designing an Arithmetic Logic Unit (ALU) using Very Large Scale Integration (VLSI) techniques, optimizing it for low power consumption and high efficiency. The ALU is a fundamental component of a processor, responsible for executing arithmetic and logic operations. By implementing advanced low-power design methodologies such as clock gating, power gating, and dynamic voltage scaling, the project aims to reduce overall power dissipation while maintaining high performance. The ALU is designed using Verilog HDL and synthesized using CAD tools like Cadence or Xilinx.🔌⚡📟</p>
          </div>
          <div class="project_container">
            <h2>Temperature-Controlled Fan System</h2>
            <p class="descrption">This mini embedded system project uses a temperature sensor and a microcontroller to automatically adjust a fan's speed based on ambient temperature. The sensor detects temperature, and the microcontroller controls the fan via a PWM signal and motor driver. It helps in energy-efficient cooling for homes, offices, or electronics.🌀
</p>
          </div>
          <div class="project_container">
            <h2>Smart Doorbell System</h2>
            <p class="descrption">
            A smart doorbell system enhances home security by integrating a motion sensor, camera, and wireless communication module (such as Wi-Fi or Bluetooth). When someone approaches the door, the sensor detects movement, triggering the camera to capture an image or video. The system then sends a notification to the homeowner’s smartphone, allowing them to see and communicate with visitors remotely. This project provides convenience and security, making it a great household automation solution. 🚪📱</p>
          </div>
          <div class="project_container">
            <h2>Smart Irrigation System</h2>
            <p class="descrption">
            A smart irrigation system optimizes water usage in agriculture by automatically watering crops based on soil moisture levels. Using sensors, a microcontroller (such as Arduino or ESP8266), and a water pump, the system monitors soil conditions and activates irrigation when moisture drops below a set threshold. It can be enhanced with IoT connectivity for remote monitoring and control via a mobile app. This project helps conserve water, reduce manual labor, and improve crop yield, making farming more efficient. 🌾💧
            </p>
          </div>
        </div>
        <div id="skills" className={`content-section ${activeSection === 'skills' ? 'active' : ''}`}>
          <div className="skills_container">
            <h2>Technical Skills</h2>
            <ul>
              <li>Problem Solving</li>
              <li>Data Structures and Algorithms</li>
              <li>Web development</li>
              <li>Database Management System</li>
              <li>JDBC connectivity</li>
              <li>Android App Development</li>
              <li>Digital System Design</li>
              <li>Embedded System</li>
              <li>Circuit analysis</li>
              <li>Electronic Circuits</li>
            </ul>
          </div>
          <div className="skills_container">
            <h2>Programming Skills</h2>
            <ul>
              <li>Assembly Programming</li>
              <li>C Programming</li>
              <li>C++ Programming</li>
              <li>JAVA Programming</li>
              <li>Python Programming</li>
              <li>MySQL</li>
              <li>Bash</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skills_container">
            <h2>Languages</h2>
            <ul>
              <li>Tamil</li>
              <li>English</li>
              <li>Hindi</li>
              <li>Kannada</li>
              <li>Malayalam</li>
            </ul>
          </div>
        </div>
        <div id="contact" className={`content-section ${activeSection === 'contact' ? 'active' : ''}`}>
          <div id="info_container" className="info">
            <div className="info-row">
              <div className="info-heading"><strong>Phone:</strong></div>
              <div className="info-value">+91 9843599288</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>Email:</strong></div>
              <div className="info-value">tkavin.thiyagaraj@gmail.com</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>WhatsApp:</strong></div>
              <div className="info-value">+91 9843599288</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>College:</strong></div>
              <div className="info-value">Sri Krishna College of Engineering and Technology</div>
            </div>
            <div className="info-row">
              <div className="info-heading"><strong>Address:</strong></div>
              <div className="info-value">
                79/1,sindhu nagar, <br />
                samichetty palayam, <br />
                Coimbatore-641047.
              </div>
            </div>
          </div>
          <div className="social-icons">
            <h3>Socials</h3><br />
            <a href="#" className="social-link" style={{ fontSize: '30px', color: '#25D366' }}>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="#" className="social-link" style={{ fontSize: '30px', color: 'rgb(26, 108, 176)' }}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="#" className="social-link" style={{ fontSize: '30px', color: 'white' }}>
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a href="#" className="social-link" style={{ fontSize: '30px', color: '#E1306C' }}>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
