import './AppStyle.css'; // Assuming you have your styles in this file

// Importing images
import HTMLImage from './images/HTML.png';
import CSSImage from './images/CSS.png';
import JavaScriptImage from './images/JS.png';
import ReactImage from './images/React.png';
import NodeJSImage from './images/NodeJS.png';
import DataImage from './images/DB.png';

const Data = [
    { 
        courseName: 'HTML', 
        image: HTMLImage, 
        courseId: '1', 
        content: 'HTML is the standard markup language for creating web pages and web applications.' 
    },
    { 
        courseName: 'CSS', 
        image: CSSImage, 
        courseId: '2', 
        content: 'CSS is a style sheet language used for describing the presentation of a document written in HTML or XML.' 
    },
    { 
        courseName: 'JavaScript', 
        image: JavaScriptImage, 
        courseId: '3', 
        content: 'JavaScript is a programming language commonly used in web development. It allows you to implement complex features on web pages.' 
    },
    { 
        courseName: 'React', 
        image: ReactImage, 
        courseId: '4', 
        content: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.' 
    },
    { 
        courseName: 'Node.js', 
        image: NodeJSImage, 
        courseId: '5', 
        content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to build scalable network applications.' 
    },
    { 
        courseName: 'Database', 
        image: DataImage, 
        courseId: '6', 
        content: 'Databases are organized collections of data that are easily accessible, manageable, and updateable. Understanding database management is crucial for backend development.' 
    },
];

const Home = () => {
    return (
        <div className="home-container">
            <h2 className="section-title">FullStack Course</h2>
            <div className="courses-row">
                {Data.map((item, index) => (
                    <div key={index} className="course-card">
                        <img src={item.image} alt={item.courseName} className="course-image"/>
                        <div className="course-details">
                            <h3>{item.courseName}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
