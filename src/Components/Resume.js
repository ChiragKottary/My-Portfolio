import React from "react";
import '../Styles/style.css';
import '../Styles/utility.css';


class Resume extends React.Component{
    render(){
        return(
            <div>
                <section className = "resume container">
      <div className = "title">
        <h2>resume</h2>
        <div>
          <h2>resume</h2>
        </div>
      </div>

      <p className = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat consequatur ipsum dolores? Et consequuntur error, atque aliquid molestias, possimus sunt praesentium dolore, nam tenetur dicta!</p>

      <div className = "row">
       

        <div className = "item">
          <div className = "icon">
            <i className = "fas fa-graduation-cap"></i>
          </div>
          <span>July 2018- Present</span>
          <h2>Diploma  - <span>Diploma in Computer Science</span></h2>
          <p className = "text">P.A Polytechnic, Mangalore</p>
        </div>

        <div className = "item">
          <div className = "icon">
            <i className = "fas fa-graduation-cap"></i>
          </div>
          <span>2006 - 2017</span>
          <h2>high school - <span>Nithyadar high school </span></h2>
          <p className = "text"> Mangalore</p>
        </div>
      </div>
    </section>
            </div>

        )
    }
}
export default Resume;