
import './AppStyle.css'; 
import CyberSecurity from './images/CyberSecurity.png';
import FullStackDevelopment from './images/FullStack.png';
import DataScience from './images/DataScience.png';

const careerData = [
    { 
        title: 'Cybersecurity Professional', 
        image: CyberSecurity, 
        description: 'Protect computer systems, networks, and data from cyber threats. Implement security measures, monitor for breaches, and respond to incidents.' 
    },
    { 
        title: 'Full Stack Developer', 
        image: FullStackDevelopment, 
        description: 'Proficient in front-end and back-end technologies, design, develop, and maintain web applications, ensuring functionality and user experience.' 
    },
    { 
        title: 'Data Scientist', 
        image: DataScience, 
        description: 'Analyze complex datasets, use statistical techniques and machine learning algorithms to extract insights and drive innovation.' 
    }
];

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to EduWebNet - Unlocking Your Potential</h1>
            <p>
                At EduWebNet, we believe in the power of education to transform lives. Whether you&apos;re a student, a professional looking to upskill, or someone simply passionate about learning, you&apos;ve come to the right place.
            </p>
            
            <div className="home-container">
            <h2 style={{ marginTop: '40px' }}>Explore Our Courses</h2>
            <div className="courses-row">
                {careerData.map((item, index) => (
                    <div key={index} className="course-card">
                        <img src={item.image} alt={item.courseName} className="course-image"/>
                        <div className="course-details">
                            <h3>{item.courseName}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <h2>Community & Support</h2>
            <p>
                Learning is not just about acquiring knowledge; it&apos;s also about connecting with others who share your interests and goals. Join our vibrant community of learners, and receive support and guidance every step of the way.
            </p>
            <h2>Start Your Learning Journey Today</h2>
            <p>
                Whether you&apos;re embarking on a new career path, exploring a hobby, or seeking personal growth, [Site Name] is here to help you achieve your goals. Browse our courses, connect with our community, and start your learning journey today.
            </p>
            <p>Ready to unlock your potential? Let&apos;s get started.</p>
        </div>
    );
};

export default HomePage;
