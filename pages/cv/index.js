import React from "react";
import headshot from "../../assets/ChasHeadShot.jpg";
import styles from "./Resume.module.css";
import Image from "next/image";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <header className={styles.headr}>
        <div className={styles.headerImage}>
          <Image src={headshot} alt="Charlie Head Shot" />
        </div>
        <div className={styles.intro}>
          <h1>Charlie May</h1>
          <p>
            I am a full stack web developer. I love coffee, traveling, and my
            dogs.
          </p>
        </div>
      </header>
      <div>
        <h2>Education</h2>
        <div className={styles.company}>
          <p className={styles.degree}>
            Bachelor of Science in Business Administration
          </p>
          <p>Graduation Date August 2016</p>
        </div>

        <p className={styles.school}>University of Nebraska at Omaha</p>
        <br />
        <div className={styles.company}>
          <p className={styles.degree}>Fullstack Software Engineer</p>
          <p>Graduation Date April 2022</p>
        </div>
        <p className={styles.school}>Bloomtech</p>
        <br />
      </div>
      <div>
        <h2>Technical Skills</h2>
        <div>
          <p>
            <strong>Frontend:</strong> React.js, Redux, Hooks, Context API,
            Axios, JavaScript, HTML, CSS
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Express, SQL, Postgres, Knex.js,
            Jest
          </p>
          <p>
            <strong>Additional Skills:</strong> Algorithms, Debugging,
            Deployment, Heroku, Machine learning, Python, GitHub, VS Code,
            Postman
          </p>
        </div>
      </div>
      <br />
      <div className={styles.work}>
        <h2>Work Experience</h2>
        <div className={styles.company}>
          <p className={`${styles.name} ${styles.company}`}>
            Fiserv, Omaha, NE
          </p>
          <p>January 2019 - Present</p>
        </div>
        <hr size="3" noshade />
        <p className={styles.title}>Project Manager</p>
        <p>
          ● Reengineered incentive program to save $500,000+ while increasing
          output run rates 8%
        </p>
        <p>
          ● Leveraged Microsoft Excel to create a data model to manage the
          incentive program
        </p>
        <p>
          ● Created Last-Mile Program which saved 632 operator hours and
          generated 2,370,271 additional mail sets in the first two months
        </p>
        <p>
          ● Lead operations project for $2M+ installation of output tracking
          technology
        </p>
        <p>
          ● Developed a machine learning algorithm using random forest
          regression to predict runtime and generate standards in our print/mail
          shops
        </p>
        <br />
        <div className={styles.company}>
          <p className={`${styles.name} ${styles.company}`}>
            Nebraska Furniture Mart, Omaha, NE
          </p>
          <p>May 2018 - January 2019</p>
        </div>
        <hr size="3" noshade />
        <p className={styles.title}>SalesPerson</p>
        <p>
          ● Sold 25.62% more product than the average furniture salesperson
          during the first six months
        </p>
        <p>
          ● Sold 44.67% more add-on products than the average furniture
          salesperson during the first six months
        </p>
        <p>
          ● Generated more sales in the first month than any previous
          salesperson
        </p>
        <br />
        <div className={styles.company}>
          <p className={`${styles.name} ${styles.company}`}>
            Securities America, LaVista, NE{" "}
          </p>
          <p>February 2016 - October 2016</p>
        </div>
        <hr size="3" noshade />
        <p className={styles.title}>Due Diligence Analyst</p>
        <p>
          ● Built financial models for $240 million in private equity real
          estate deals
        </p>
        <p> ● Analyzed and reviewed $160 million in oil and gas deals</p>
        <p>
          ● Reviewed over 400 mutual fund prospectuses and found previously
          unknown fee waivers, saving clients millions
        </p>
      </div>
      <br />
      <div className="Entreprnuership">
        <h2>Entrepreneurship </h2>
        <div className={styles.company}>
          <p className={`${styles.name} ${styles.company}`}>Storkwear</p>
          <p>May 2016 - January 2019</p>
        </div>
        <hr size="3" noshade />
        <p className={styles.title}>Founder</p>
        <p>
          ● Raised a family and friends round of money and built out a baby
          clothes subscription company
        </p>
        <p>
          ● Overcame lack of technical skill in founding team by working with a
          local developer and their team to build storkwear.com
        </p>
        <p>
          ● Worked with Drip and Instapage to create automated sales funnel
          around weekly content for pregnant moms
        </p>
        <p>
          ● Worked with Drip and Instapage to build automated sales funnel
          around weekly content for pregnant moms
        </p>
        <p>
          ● Sourced and purchased clothes for boys and girls from newborn to age
          24 months
        </p>
        <p>● Built an inventory management and distribution system</p>
        <p>● Branded the company with the help of local graphic designers</p>
      </div>
      <br />
      <div className="miliatry">
        <h2>Military Service</h2>
        <div className={styles.company}>
          <p className={`${styles.name} ${styles.company}`}>
            United States Air Force
          </p>
          <p>October 2006 - October 2010</p>
        </div>
        <hr size="3" noshade />
        <p className={styles.title}>Aerospace Medical Technician (Medic)</p>
        <p>
          ● Lead inbound and outbound air evacuation missions from the wars in
          Iraq and Afghanistan
        </p>
        <p>
          ● Trained new medics as they joined the air evacuation team in
          evacuation procedures and advanced wound care
        </p>
        <p>
          ● Became first senior airmen (E-4) to be named lead trainer for the
          Honor Guard at Joint Base Andrews
        </p>
      </div>
    </div>
  );
};

export default Resume;
