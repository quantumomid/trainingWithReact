import { render, screen } from "@testing-library/react";
import TeamMember from "./TeamMember";
import { ourTeamData } from "../../data/ourTeamData.js";
import image1 from '../../images/headshot1.png'
import image2 from '../../images/headshot2.jpg'
import image3 from '../../images/headshot3.jpg'
import image4 from '../../images/headshot4.jpg'
import image5 from '../../images/headshot5.jfif'
import image6 from '../../images/headshot6.jpg'

const images = [image1, image2, image3, image4, image5, image6];

test("check for one card with Alexander the Great team member",  () => {
    render(<TeamMember member={ourTeamData[2]} index={2} images={images} />);
    const cardTitleElement = screen.getByText(/alexander the great/i);
    expect(cardTitleElement).toBeInTheDocument();

});