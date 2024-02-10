import style from './AboutUs.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import imagen1 from '../../../assets/AboutUs/lucas.jpg';

const AboutUs = () => {
  const members = [
    {
      name: "Lucas Emir sorroza",
      description: "Soy Lucas, tengo 24 años y me gusta programar.",
      linkedin: "https://www.linkedin.com/in/lucas-emir-sorroza-18241b242/",
      image: assets/AboutUs/lucas.jpeg.jpeg
    }
  ];

  return (
    <div>
      <h1 className={style.title}>¿Quien soy?</h1>
      <div className={`row ${style.aboutUs}`}>
        {members.map((member, index) => (
          <div key={index} className={`col-12 col-md-6 col-lg-3 col-xl-3 ${style.memberCard}`}> 
            <div>
              <img src={member.image} alt={member.name} className={style.memberImage}/>
              <h2 className={style.memberName}>{member.name}</h2>
              <p className={style.memberDescription}>{member.description}</p>
              <div className={style.socialIcons}>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <i className={`bi bi-linkedin ${style.linkedinIcon}`}></i>
                </a>
                <a href={member.github} target="_blank" rel="noreferrer">
                  <i className={`bi bi-github ${style.githubIcon}`}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;