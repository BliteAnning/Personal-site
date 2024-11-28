import UI from '../src/asset/ui.png';
import db from '../src/asset/database.png';
import Java from '../src/asset/java.png';
import Web from '../src/asset/Web dev.png';

const Skills = () => {
    return ( 
        <section id="skills">
            <span className="skillHeading">What I do</span>
            <span className="skillDescription">I am skilled in Object-Oriented programming with Java, Web Development with M.E.R.N. I am proficient  in designing user friendly website and database technologies. I have an excellent problem-solving and communication skills and demonstrates a passion for learning and implementing new technologies.  </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Web} alt="Web Dev" className="skillBarimg" />
                    <div className="skillBarText">
                        <h2>FRONT AND BACKEND WEB DEVELOPMENT</h2>
                        <p>Skilled in developing a user friendly and responsive user interface of website using React and smooth backend with nodeJs, MongoDB and Express</p>
                    </div>
                    
                </div>
                <div className="skillBar">
                    <img src={UI} alt="ui/ux" className="skillBarimg" />
                    <div className="skillBarText">
                        <h2>UI/UX DESIGN</h2>
                        <p>Master in developing an attractive and user friendly interface with figma and Adobe for frontend development </p>
                    </div>
                    
                </div>
                <div className="skillBar">
                    <img src={db} alt="Database" className="skillBarimg" />
                    <div className="skillBarText">
                        <h2>DATABASE DEVELOPMENT</h2>
                        <p>Proficient in designing and developing Database with MongoDB, Microsoft SQL and MySQL</p>
                    </div>
                    
                </div>
                <div className="skillBar">
                    <img src={Java} alt="java" className="skillBarimg" />
                    <div className="skillBarText">
                        <h2>JAVA PROGRAMMING</h2>
                        <p>Skilled in writing algorithms and efficient programming with Java especially in OOP</p>
                    </div>
                    
                </div>
            </div>
        </section>
     );
}
 
export default Skills;