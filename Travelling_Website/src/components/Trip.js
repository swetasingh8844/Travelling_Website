import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations
                using Google Maps.
            </p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Embark on a journey through Indonesia and discover a land of breathtaking natural beauty, rich cultural heritage, and endless adventure. From the lush landscapes of Bali to the majestic temples of Java, each corner of this archipelago offers a unique experience. Dive into crystal-clear waters to explore vibrant coral reefs, hike through dense jungles teeming with exotic wildlife, or simply immerse yourself in the warmth of Indonesian hospitality. Whether you're seeking relaxation on pristine beaches or exhilarating outdoor activities, Indonesia beckons with an array of unforgettable experiences waiting to be explored."
                />
                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Embark on an unforgettable adventure in Malaysia, where vibrant cities, lush rainforests, and idyllic islands await. Explore the bustling streets of Kuala Lumpur, where towering skyscrapers stand alongside historic mosques and bustling markets. Journey into the heart of Borneo to encounter orangutans in their natural habitat, or trek through the ancient jungles of Taman Negara National Park. Indulge in the diverse culinary delights of Malaysia, from savory satay to mouthwatering laksa. Relax on the pristine beaches of Langkawi or dive into the turquoise waters of the Perhentian Islands. With its rich cultural tapestry and natural splendor, Malaysia promises a truly unforgettable experience for every traveler."
                />
                <TripData
                image={Trip3}
                heading="Trip in France"
                text="Embark on a captivating journey through France, a land renowned for its romantic allure, rich history, and exquisite cuisine. Wander through the charming streets of Paris, where iconic landmarks like the Eiffel Tower and Notre-Dame Cathedral captivate the imagination. Immerse yourself in art and culture at world-class museums such as the Louvre and Musée d'Orsay. Explore the picturesque vineyards of Bordeaux or the sun-drenched landscapes of Provence, where fields of lavender stretch to the horizon. Indulge in the gastronomic delights of French cuisine, from delicate pastries in a Parisian café to sumptuous cheeses and wines in the countryside. Whether strolling along the Seine River, admiring the grandeur of Versailles, or savoring a leisurely meal in a quaint village bistro, France offers a timeless charm and endless opportunities for discovery."
                />
                </div>
            </div>
    );
}

export default Trip;