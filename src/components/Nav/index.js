import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
<<<<<<< HEAD
  const  categories = [
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }
=======
  const categories = [
    { name: "portfolio", description: "here are the codes" },
    { name: "resume", description: "not just puff" },
  ];

  const handleClick = () => {
    console.log("click handled");
  };
>>>>>>> feature/about

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
<<<<<<< HEAD
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
=======
          <span role="img" aria-label="camera"></span> Hankfolio
>>>>>>> feature/about
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
<<<<<<< HEAD
            <span onClick={() => handleClick()}>
              Contact
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
=======
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
>>>>>>> feature/about
        </ul>
      </nav>
    </header>
  );
}

<<<<<<< HEAD
export default Nav;
=======
export default Nav;
>>>>>>> feature/about
