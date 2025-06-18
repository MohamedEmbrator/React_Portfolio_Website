import Lottie from "lottie-react";
import "./contact.css";
import emailAnimation from "../../animation/email.json";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="title">
        <i className="fa-solid fa-envelope"></i> <span>Contact us</span>
      </h1>
      <p>
        Contact us for more information and Get notified when i puplish
        domethimg new.
      </p>
      <div className="content">
        <form>
          <div>
            <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" required/>
          </div>
          <div>
            <label htmlFor="message">Your message: </label>
            <textarea  id="message" required></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="animation"><Lottie  className="email-animation" animationData={emailAnimation} style={{height: "360px"}} /></div>
      </div>
    </section>
  );
};

export default Contact;
