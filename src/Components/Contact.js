import React from "react";
import '../Styles/style.css';
import '../Styles/utility.css';


class Contact extends React.Component{
    render(){
        return(
            <div>
                <section className = "contact container">
      <div className = "title">
        <h2>contact</h2>
        <div>
          <h2>get in touch</h2>
        </div>
      </div>

      <p className = "text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore, et dolores eum voluptas iusto voluptate, dicta iure mollitia atque, exercitationem deserunt laborum libero natus!</p>

      <div className = "row">
        <div className = "col-left">
          <h2>feel free to ask us!</h2>
          <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui soluta mollitia suscipit maxime sunt dolore deleniti quam nihil repellendus perferendis.</p>

          <div className = "contact-info">
            <span><i className = "fas fa-envelope-open"></i></span>
            <h3>
              <span className = "text">mail me</span> <br/>
              ckottary18@gmail.com
            </h3>
          </div>

          <div className = "contact-info">
            <span><i className = "fas fa-phone-square-alt"></i></span>
            <h3>
              <span className = "text">call me</span> <br/>
              9620311781
            </h3>
          </div>

          <div className = "contact-social-links">
            
          <a href = "https://twitter.com/kezy_c"  target="_blank"><i class = "fab fa-twitter"></i></a>
            <a href = "https://github.com/ChiragKottary" target="_blank"><i class = "fab fa-github"></i></a>
            <a href = "https://www.linkedin.com/in/chirag-kottary-b558ba200/" target="_blank"><i class = "fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className = "col-right">
          <form className = "contact-form">
            <div className = "form-group">
              <input type = "text" placeholder="your name"/>
              <input type = "email" placeholder="your email"/>
              <input type = "text" placeholder="your subject"/>
            </div>
            <textarea rows = "5"></textarea>
            <button type = "submit" className = "btn">send message</button>
          </form>
        </div>
      </div>
    </section>
            </div>

        )
    }
}
export default Contact;