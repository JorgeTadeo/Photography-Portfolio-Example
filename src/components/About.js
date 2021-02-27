import './About.css'
import photo from './light.jpg'
function About() {
    return(
        <div>
                <img className="center" src={photo} width="350" height="350"></img>
                <div className="Info">
                    <h2>Hi There,</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus, tellus eget dignissim luctus, nunc dolor egestas urna, 
                        vel vehicula tellus dolor quis augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam nec sapien mollis neque 
                        porta semper vitae id est. Morbi vel nulla non est sodales tempor ac at est. Sed porta dapibus ultricies. Vivamus in vestibulum nibh. 
                        Suspendisse potenti. Proin molestie mi a mi lobortis mattis. Ut auctor mollis lacus, eu tincidunt urna tristique in.
                    </p>
                    <p>
                        Praesent vitae lacus nibh. Aenean varius nunc felis, eu condimentum mauris luctus ac. Vivamus gravida, mi eget sodales pellentesque, 
                        libero eros volutpat mi, vitae tempus ante est quis purus. Sed laoreet augue orci, nec tempus odio eleifend non. Praesent ullamcorper 
                        vel libero ut sollicitudin. Maecenas pellentesque eros eget turpis fermentum pretium. Vivamus ac lectus ultricies, posuere magna a, 
                        vestibulum ligula. Duis turpis quam, ultricies ut cursus non, aliquam non sapien. Vivamus id rhoncus erat, sed finibus neque. 
                        Sed fringilla mattis lobortis. Nunc ullamcorper erat eget nibh aliquet consequat. Phasellus sed mattis metus, dictum eleifend sapien. 
                        Morbi ultrices eleifend eleifend. Nunc sagittis, augue vel lobortis aliquam, dui ante ultrices eros, ac aliquam est elit eget ligula. 
                        Vivamus vestibulum ullamcorper arcu vitae pretium. Cras orci arcu, malesuada in blandit eget, sagittis sed augue.
                    </p>
                </div>
                
        </div>
    );
}

export default About;