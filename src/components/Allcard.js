import Card from "./Card";
import Laptop1 from '../assets/laptop1.jpg'
import Laptop2 from '../assets/laptop2.jpg'
import Laptop3 from '../assets/laptop3.jpg'

const Allcard = () => {
    return(
        <div className="allcard">
            <Card title="Card 1" paragraf="description1description1description1" img={Laptop1}/>
            <Card title="Card 2" paragraf="description2description2description2" img={Laptop2}/>
            <Card title="Card 3" paragraf="description3description3description3" img={Laptop3}/>
        </div>
    )
}

export default Allcard