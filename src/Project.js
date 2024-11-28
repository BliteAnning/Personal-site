import image1 from '../src/asset/portfolio1.jpg';
import image2 from '../src/asset/portfolio2.jpg';
import image3 from '../src/asset/folio 3.jpg';
import image4 from '../src/asset/food1.jpg';
import image5 from '../src/asset/food2.jpg';
import image6 from '../src/asset/food3.jpg';


const Project = () => {
    return ( 
        <section id="project">
            <h2 className="projectTitle">My Portfolio</h2>
            <span className="projectDesc">I take pride in paying attention to small details and make sure my work is perfectly done to satisfy clients' need. I am excited to bring the skills I have acquired to contribute to life-changing projects.</span>
            <div className="projectImgs">
                <img src={image1} alt="" className="projectImg" />
                <img src={image2} alt="" className="projectImg" />
                <img src={image3} alt="" className="projectImg" />
                <img src={image4} alt="" className="projectImg" />
                <img src={image5} alt="" className="projectImg" />
                <img src={image6} alt="" className="projectImg" />
            </div>
            <button className="projectbtn">See more</button>
        </section>
     );
}
 
export default Project;