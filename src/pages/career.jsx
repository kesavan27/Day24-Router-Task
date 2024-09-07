import './career.css';

const careerData = [
    {
        title: 'Self-Assessment',
        description: 'Start by assessing your interests, strengths, values, and skills. What do you enjoy doing? What are you good at? What matters most to you in a career?'
    },
    {
        title: 'Research',
        description: 'Explore various industries, professions, and job roles. Look into the qualifications, responsibilities, and growth opportunities associated with different careers.'
    },
    {
        title: 'Set Goals',
        description: 'Define your short-term and long-term career goals. Where do you see yourself in the next few years? What achievements do you want to accomplish?'
    },
    {
        title: 'Education and Training',
        description: 'Determine if your desired career requires specific education or training. Consider pursuing relevant degrees, certifications, or apprenticeships to enhance your skills and qualifications.'
    },
    {
        title: 'Gain Experience',
        description: 'Seek out internships, part-time jobs, or volunteer opportunities to gain hands-on experience in your chosen field. This can help you validate your career choice and build a network of contacts.'
    },
    {
        title: 'Networking',
        description: 'Connect with professionals in your field of interest through networking events, online platforms, and informational interviews. Building relationships with industry insiders can provide valuable insights and opportunities.'
    },
    {
        title: 'Adaptability',
        description: 'Remain open to new possibilities and be willing to adapt your career path as you gain experience and knowledge. Flexibility and resilience are essential in today\'s dynamic job market.'
    },
    {
        title: 'Continuous Learning',
        description: 'Commit to lifelong learning and professional development. Stay updated on industry trends, acquire new skills, and pursue opportunities for growth and advancement.'
    },
    {
        title: 'Evaluate and Adjust',
        description: 'Periodically evaluate your career path to ensure it aligns with your goals, values, and interests. Be willing to make adjustments or changes if necessary.'
    }
];

const Career = () => {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Career path</h2>
            <div className="container">
                {careerData.map((item, index) => (
                    <div key={index} className="card">
                        <h4>{item.title}</h4>
                        <p style={{margin:'20px', fontSize:'15px'}}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Career;
