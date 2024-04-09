import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/9.jpg"
import Mountain4 from "../assets/8.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
const Destination=()=>{
    return(
     <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
     <DestinationData
     className="first-des"
     heading="Taal Volcano, Batangas"
     text="One of the most iconic views in Luzon, Mt. Taal
     boasts a volcano inside a lake inside an island. If you fancy a closer
     look, the hike up to the crater is a mere 45 minutes, and is
     easy enough for beginners. Guides will assist you most of the way, and 
     you'll see the peculiar environment found on an active volcano,
     including volcanic rocks and steam vents. The hike can be dusty and hot,
     so plan for an early morning trip, and then unwind with some bulalo before heading back home! "
     img1={Mountain3}
     img2={Mountain4}
     />

     <DestinationData
     className="first-des-reverse"
     heading="
     Banaue Rice Terraces, Ifugao"
     text="Nestled amidst the verdant mountains of Ifugao province, the Banaue Rice Terraces are a testament to the ingenuity and skill of the indigenous people who carved these stunning landscapes over 2,000 years ago. Embark on a journey to witness these awe-inspiring terraces, often referred to as the 
     'Eighth Wonder of the World'. While trekking through the terraced fields, you'll be treated to panoramic views of cascading
      rice paddies that stretch as far as the eye can see. Don't miss the chance to interact with the local Ifugao communities
       and learn about their traditional farming techniques and vibrant culture. After a day of exploration, savor a hearty meal 
       of local delicacies like pinikpikan and inasinan, immersing yourself in the rich flavors of the Cordillera region. "
     img1={Mountain1}
     img2={Mountain2}
     />

     </div>
    );
}

export default Destination;