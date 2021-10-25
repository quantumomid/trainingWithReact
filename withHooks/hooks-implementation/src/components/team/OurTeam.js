import { ourTeamData } from "../../data/ourTeamData.js";
import TeamMember from "./TeamMember.js";
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
        return <TeamMember key={index} member={member} index={index} images={images}/>
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