import Carousel from 'react-bootstrap/Carousel';
import image1 from "../Images/img1.jpg"
import image2 from "../Images/img2.jpg"
import image3 from "../Images/img3.jpg"

const Home = ()=>{
    return(
        <>
        <Carousel fade>
      <Carousel.Item>
        <img src={image1} width="1500px" height="600px"/>
        <Carousel.Caption>
          <h3>ForestFlow</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2}  width="1300px" height="600px"/>
        <Carousel.Caption>
          <h3>NatureGlide   </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3}  width="1300px" height="600px"/>
        <Carousel.Caption>
          <h3>EarthScroll</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </>
    )
}
export default Home;