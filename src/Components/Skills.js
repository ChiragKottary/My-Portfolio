import React from "react";
import '../Styles/style.css';
import '../Styles/utility.css';


class Skills extends React.Component{
    render(){
        return(
            <div>
                 <section className = "skills container">
      <div className = "title">
        <h2>skills</h2>
        <div>
          <h2>my skills</h2>
        </div>
      </div>

      <p className = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab laudantium possimus molestias sapiente, saepe facilis dolore autem repellat, quo iure tempore nisi perspiciatis. Quasi?</p>

      <div className = "row">
        <div className = "item">
          <div className = "item-text">
            <span>HTML5</span>
            <span className = "w-90">90%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-90"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>React.js</span>
            <span className = "w-75">65%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-75"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>C</span>
            <span className = "w-85">70%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-85"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>CSS3</span>
            <span className = "w-80">80%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-80"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>Node.js</span>
            <span className = "w-60">60%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-60"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>Javascript</span>
            <span className = "w-68">68%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-68"></div>
          </div>
        </div>
      </div>
    </section>
            </div>

        )
    }
}
export default Skills;