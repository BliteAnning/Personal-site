import tp from "../src/asset/TP.png";
import owass from "../src/asset/owass.png";
import cX from "../src/asset/CodeXtra.png";
import ig from "../src/asset/instagram.png";
import X from "../src/asset/twitter.png";
import ld from "../src/asset/linkedin.png";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Job = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_324pr3r', 'template_vv4ormo', form.current,'6z05a3DF8Z6ideRL-wDsG')
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log( error.text);
            },
          );
      };
    const handleClick = () =>{
        window.location.href = 'https://www.linkedin.com/in/bright-anning-3779a9262';
    };
    const handleClickX = () =>{
        window.location.href= 'https://x.com/Anning_Brown';
    };
    return ( 
        <section id="jobs">
            <div className="job">
                <h1 className="jobTitle">My Clients</h1>
                <p className="jobdesc">
                    I have had the opportunity to work with few business firms and organizations. Below are some of them;
                </p>
                <div className="jobImgs">
                    <img src={tp} alt="client" className="jobImg" />
                    <img src={owass} alt="client" className="jobImg" />
                    <img src={cX} alt="client" className="jobImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactMe">Contact Me</h1>
                <p className="contactMeDesc">For any work opportunity, meassage me below</p>

                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your name" name="your_name"/>
                    <input type="email" className="mail" placeholder="Your email" name="your_email"/>
                    <textarea className="msg" rows="5" placeholder="Your message" name="message"></textarea>
                    <button type="submit" className="submitbtn" value="send" >Submit</button>
                    <div className="socialMedia">
                        <img src={X} alt="" className="SMImgs" onClick={handleClickX} />
                        <img src={ig} alt="" className="SMImgs" />
                        <img src={ld} alt="" className="SMImgs" onClick={handleClick}/>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Job;