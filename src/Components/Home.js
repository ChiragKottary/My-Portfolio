import React from "react";
import '../Styles/style.css';
import '../Styles/utility.css';


class Home extends React.Component{
    render(){
        return(
            <div>
                <section className = "home container">
      <div className = "row">
        <div className = "row-left">
          <h3>hello!</h3>
          <h1>i'm <span>Chirag Kottary</span></h1>
          <h2>a Full-Stack Web Developer</h2>
          <div className = "home-pg-btn">
            <button type = "button" className = "btn" > hire me</button>
            <button type = "button" className = "btn">my works</button>
          </div>
        </div>

      <div className = "row-right">
          <div className = "img-border">
            <div className = "img-container">
              <img src = "./assets/project-img-1.jpg" alt = "my photo"/>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>

        )
    }
}
export default Home;