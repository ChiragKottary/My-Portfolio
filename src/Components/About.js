import React from "react";
import '../Styles/style.css';
import '../Styles/utility.css';


class About extends React.Component{
    render(){
        return(
            <div>
                <section className = "about container">
      <div className = "title">
        <h2>about</h2>
        <div>
          <h2>about me</h2>
        </div>
      </div>

      <div className = "row">
        <div className = "row-left">
          <img src = "./assets/project-img-2.jpg" alt = "about photo"/>
        </div>

        <div className = "row-right">
          <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio praesentium numquam alias soluta incidunt? Similique assumenda, voluptatibus saepe quae iusto ratione dicta consectetur nesciunt perspiciatis!</p>
          <div className = "about-content">
            <ul>
              <li className = "text">
                <span>Name: </span>
                <span>Chirag Kottary</span>
              </li>
              <li className = "text">
                <span>Date of Birth: </span>
                <span>October 20 2002</span>
              </li>
              <li className = "text">
                <span>Address: </span>
                <span>Mangalore,Karnataka</span>
              </li>
              <li className = "text">
                <span>Email: </span>
                <span>ckottary18@gmail.com</span>
              </li>
              <li className = "text">
                <span>Zip code: </span>
                <span>575017</span>
              </li>
              <li className = "text">
                <span>Phone: </span>
                <span>9620311781</span>
              </li>
            </ul>
          </div>

          <h3>6 <span>Project complete</span></h3>
          <button type = "button" className = "btn"><a href="./assets/Resume-converted.pdf" target="new">download cv</a></button>
        </div>
      </div>
    </section>
            </div>

        )
    }
}
export default About;