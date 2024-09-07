import './AppStyle.css'; 

import Python from './images/Python.png';
import Statistics from './images/Statistics.png';
import MachineLearning from './images/ML.png';
import DataVisualization from './images/DataVisualization.png';
import BigData from './images/Bigdata.png';
import DeepLearning from './images/DeepLearing.png';

const Data = [
    { 
        courseName: 'Python for Data Science', 
        image: Python, 
        courseId: '1', 
        content: 'Python is a versatile programming language widely used in data science for data analysis, visualization, and machine learning.' 
    },
    { 
        courseName: 'Statistics', 
        image: Statistics, 
        courseId: '2', 
        content: 'Statistics is the study of the collection, analysis, interpretation, presentation, and organization of data.' 
    },
    { 
        courseName: 'Machine Learning', 
        image: MachineLearning, 
        courseId: '3', 
        content: 'Machine Learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to learn from data.' 
    },
    { 
        courseName: 'Data Visualization', 
        image: DataVisualization, 
        courseId: '4', 
        content: 'Data Visualization involves the graphical representation of data to help understand complex data sets and gain insights.' 
    },
    { 
        courseName: 'Big Data', 
        image: BigData, 
        courseId: '5', 
        content: 'Big Data refers to the large volume of data that inundates businesses on a day-to-day basis, which can be analyzed for insights.' 
    },
    { 
        courseName: 'Deep Learning', 
        image: DeepLearning, 
        courseId: '6', 
        content: 'Deep Learning is a subset of machine learning in artificial intelligence (AI) that has networks capable of learning from data.' 
    },
];

const DataScience = () => {
    return (
        <div className="data-science-container">
            <h2 className="section-title">Python</h2>
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

export default DataScience;
