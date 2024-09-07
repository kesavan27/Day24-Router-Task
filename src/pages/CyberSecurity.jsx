import IAM from './images/IAM.png'
import Endpoint from './images/EndPoint Security.png';
import Email from './images/Email Security.png';
import Network from './images/NetworkSecurity.png';
import Cloud from './images/CloudSecurity.png';
import VAPT from './images/VAPT.png';

const Data = [
    { 
        courseName: 'Identity and Access Management', 
        image: IAM, 
        courseId: '1',
        content: 'Identity and access management is the practice of controlling access to computer systems and network resources based on the principles of least privilege and separation of duties.' 
    },  
    { 
        courseName: 'Email Security', 
        courseId: '2',
        image: Email,
        content: 'Email security is the practice of protecting email communications from unauthorized access, use, or disclosure.' 
    },
    { 
        courseName: 'Endpoint Security', 
        courseId: '3', 
        image: Endpoint,
        content: 'Endpoint security is the practice of protecting computers, mobile devices, and servers from unauthorized access, use, or disclosure.' 
    },
    { 
        courseName: 'Network Security', 
        courseId: '4',
        image: Network,
        content: 'Network security is the practice of protecting computer networks and computer systems from unauthorized access, use, or disclosure.' 
    },
    { 
        courseName: 'Cloud Security', 
        courseId: '5',
        image: Cloud,
        content: 'Cloud security is the practice of protecting computer networks and computer systems from unauthorized access, use, or disclosure.' 
    },
    { 
        courseName: 'Vulnerability Assessment and Penetration Testing (VAPT)', 
        courseId: '6', 
        image: VAPT,
        content: 'Vulnerability Assessment and Penetration Testing (VAPT) are systematic processes for identifying, evaluating, and addressing security vulnerabilities.' 
    },
];

const CyberSecurity = () => {
    return (
        <div className="home-container">
        <h2 className="section-title">CyberSecurity Course</h2>
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

export default CyberSecurity;