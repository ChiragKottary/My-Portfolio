import React from "react";
import '../Styles/style.css';
import '../Styles/utility.css';


class Footer extends React.Component{
    render(){
        return(
            <div>
               <footer class = "footer container">
      <div class = "row">
        <div class = "col">
          <h3 class = "footer-title">about</h3>
          <p class = "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quia, magnam et deleniti similique voluptates nulla iusto temporibus veritatis asperiores consectetur quidem doloremque id possimus!</p>
          <div class = "social-links">
            <a href = "https://twitter.com/kezy_c"  target="_blank"><i class = "fab fa-twitter"></i></a>
            <a href = "https://github.com/ChiragKottary" target="_blank"><i class = "fab fa-github"></i></a>
            <a href = "https://www.linkedin.com/in/chirag-kottary-b558ba200/" target="_blank"><i class = "fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div class = "col">
          <h3 class = "footer-title">links</h3>
          <div class = "footer-links">
            <a href = "./" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              home
            </a>
            <a href = "./About" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              about
            </a>
            <a href = "./Resume" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              resume
            </a>
            <a href = "./Skills" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              contact
            </a>
          </div>
        </div>

        <div class = "col">
          <h3 class = "footer-title">more</h3>
          <div class = "footer-links">
            <a href = "#" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              web design
            </a>
            <a href = "#" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              web development
            </a>
            <a href = "#" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              business strategy
            </a>
            <a href = "#" class = "text">
              <i class = "fas fa-long-arrow-alt-right"></i>
              graphics design
            </a>
          </div>
        </div>

        <div class = "col">
          <h3 class = "footer-title">have a question?</h3>
          <div>
            <span>
              <i class = "fas fa-map-marker-alt"></i>
            </span>
            <span class = "text">Mangalore,Karnataka</span>
          </div>

          <div>
            <span>
              <i class = "fas fa-phone"></i>
            </span>
            <span class = "text">+91 9620311781</span>
          </div>

          <div>
            <span>
              <i class = "fas fa-envelope"></i>
            </span>
            <span class = "text">ckottary@gmail.com</span>
          </div>
        </div>
      </div>

      <div class = "footer-text">
        <p class = "text">Copyright &copy; 2022 All rights reserved | Awesome Template Design</p>
      </div>
    </footer>
    </div>

        )
    }
}
export default Footer;