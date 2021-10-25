import { ourTeamData } from "../../data/ourTeamData.js";
import image1 from '../../images/headshot1.png'
import image2 from '../../images/headshot2.jpg'
import image3 from '../../images/headshot3.jpg'
import image4 from '../../images/headshot4.jpg'
import image5 from '../../images/headshot5.jfif'
import image6 from '../../images/headshot6.jpg'
import './ourTeam.css'

const images = [image1, image2, image3, image4, image5, image6]

export default function OurTeam (){
    const teamMemberArticles = ourTeamData.map((member, index) => {
        return (
            <article key={index}>
                {/* <img src={require(`../../images/${member.imgName}`)} alt="Headshot of team member"/> */}
                <img src={images[index]} alt="Headshot of team member"/>
                <div className="team-member-info">  
                    <p className="team-member-name"><strong>{member.name}</strong></p>
                    <p className="team-member-position">{member.position}</p>
                    <p className="team-member-description">{member.description}</p>
                </div>
            </article>
        )
    })
    return (
        <div className="our-team-container">
            {/* <h3>Our Team</h3> */}
            <section className="our-team-section">
                {teamMemberArticles}      
            </section>
        </div>    
    )
}