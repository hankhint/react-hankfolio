import React from 'react';
import coverImage from '../../assets/headshotsmall.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who is Hank Hint</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
Hi, I'm Hank.  I'm a full stack web developer interested in open source projects.  Solus Linux is my daily driver and I'm excited to get Linux on an M1 mac. 
        </p>
      </div>
    </section>
  );
}

export default About;
