import {Link} from 'react-scroll';
import hireMe from '../src/asset/briefcase.png';
import mypic from '../src/asset/personal pic.jpg';

const Home = () => {
    return (  
        <section id="home-content">
            <div className="description">
                <span className="hello">Hello,</span>
                <span className="desc">I am <span className="myname">Anning</span><br />A Website Developer</span>
                <p className="brief-desc">I am an innovative full stack React website developer with an experience in creating <br /> visual appealing and user friendly website</p>
                <Link><button className="hireMebtn"><img src={hireMe} alt="" className="hire-me" />Hire Me</button></Link>
            </div>
            <img src={mypic} alt="pic" className="Mypic" />
            
        </section>
    );
}
 
export default Home;