// src/pages/about.js

import Image from 'next/image';
import profilePic from '../images/profile.jpg'; 

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Image src={profilePic} alt="Profile Picture" width={150} height={150} />
      <p>Hello! I'm [Your Name], a [Your Profession/Title]. I have experience in [your skills or technologies you work with].</p>
      <p>I enjoy working on projects that involve [your interests or fields of expertise].</p>
    </div>
  );
};

export default About;
