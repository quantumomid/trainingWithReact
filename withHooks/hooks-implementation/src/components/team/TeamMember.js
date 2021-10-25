export default function TeamMember (props){
    const { member, index, images } = props

    return (
        <article>
            <img src={`/images/${member.imgName}`} alt="Headshot of team member"/>
            {/* <img src={images[index]} alt="Headshot of team member"/> */}
            <div className="team-member-info">  
                <p className="team-member-name"><strong>{member.name}</strong></p>
                <p className="team-member-position">{member.position}</p>
                <p className="team-member-description">{member.description}</p>
            </div>
        </article> 

    )
}

// // IMAGES
// // METHOD 1 - loading images into variables in parent component and passing through as props to here 
// // METHOD 2 - For above to work had to put the images folder inside public and inside src and notice the src path style i.e. "/images/......"
// // METHOD 3 (AJAYA method) - http://localhost:3000/static/media/NAMEOFIMAGEFILEHERE
//// ^ see Ajaya assignment in React Training with Himanshu from 22 Oct 2021 about 15 min 37s in.