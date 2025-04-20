import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="matrix-content resources-content">
      <h1 className="matrix-header">💻 CS Club Resources</h1>

      {/* AP Computer Science A Section */}
      <section className="resource-section">
        <h2 className="resource-header">AP Computer Science A</h2>
        <p>
          AP Computer Science A is an introductory college-level course focusing on Java programming. Here are some resources to help you succeed:
        </p>
        <ul className="resource-list">
          <li>
            <a href="https://apcentral.collegeboard.org/courses/ap-computer-science-a" target="_blank" rel="noopener noreferrer">
              College Board AP CSA Course Page
            </a>: Official course description, exam details, and resources.
          </li>
          <li>
            <a href="https://code.org/educate/curriculum/ap-computer-science-a" target="_blank" rel="noopener noreferrer">
              Code.org AP CSA Curriculum
            </a>: Free curriculum with lessons, activities, and Java practice.
          </li>
          <li>
            <a href="https://www.codecademy.com/learn/study-for-the-ap-computer-science-a-exam-java" target="_blank" rel="noopener noreferrer">
              Codecademy AP CSA Skill Path
            </a>: Learn Java fundamentals and prepare for the AP exam.
          </li>
          <li>
            <a href="https://codehs.com/apcsa" target="_blank" rel="noopener noreferrer">
              CodeHS AP CSA Resources
            </a>: Practice problems, labs, and a digital textbook for AP CSA.
          </li>
          <li>
            <strong>Recommended Tool</strong>: Use <a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">IntelliJ IDEA</a> or <a href="https://www.eclipse.org/downloads/" target="_blank" rel="noopener noreferrer">Eclipse</a> for Java development.
          </li>
        </ul>
      </section>

      {/* Introduction to Computer Science Section */}
      <section className="resource-section">
        <h2 className="resource-header">Introduction to Computer Science</h2>
        <p>
          New to computer science? These resources will help you learn the basics of programming and computational thinking:
        </p>
        <ul className="resource-list">
          <li>
            <a href="https://code.org/learn" target="_blank" rel="noopener noreferrer">
              Code.org Learn
            </a>: Free introductory courses with block-based and text-based programming.
          </li>
          <li>
            <a href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">
              Scratch by MIT
            </a>: Create interactive stories, games, and animations using block-based coding.
          </li>
          <li>
            <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" rel="noopener noreferrer">
              Khan Academy Intro to Programming
            </a>: Learn JavaScript and the basics of computer science.
          </li>
          <li>
            <a href="https://csfirst.withgoogle.com/" target="_blank" rel="noopener noreferrer">
              Google CS First
            </a>: Fun activities to learn coding with Scratch.
          </li>
          <li>
            <strong>Recommended Language</strong>: Start with Python using <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python</a> and an editor like <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a>.
          </li>
        </ul>
      </section>

      {/* App Development Section */}
      <section className="resource-section">
        <h2 className="resource-header">App Development</h2>
        <p>
          Interested in building mobile or web apps? These resources will get you started:
        </p>
        <ul className="resource-list">
          <li>
            <a href="https://appinventor.mit.edu/" target="_blank" rel="noopener noreferrer">
              MIT App Inventor
            </a>: Build Android apps using a block-based interface.
          </li>
          <li>
            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
              React Native
            </a>: Create mobile apps for iOS and Android using JavaScript and React.
          </li>
          <li>
            <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
              Android Studio
            </a>: Official IDE for Android app development with Java or Kotlin.
          </li>
          <li>
            <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">
              Xcode
            </a>: Build iOS apps using Swift (requires a Mac).
          </li>
          <li>
            <a href="https://www.coursera.org/learn/introduction-to-mobile-development" target="_blank" rel="noopener noreferrer">
              Coursera Intro to Mobile Development
            </a>: Learn the basics of mobile app development.
          </li>
        </ul>
      </section>

      {/* Internships and Opportunities Section */}
      <section className="resource-section">
        <h2 className="resource-header">Internships and Opportunities</h2>
        <p>
          Looking to gain real-world experience or explore computer science further? Check out these opportunities:
        </p>
        <ul className="resource-list">
          <li>
            <a href="https://www.inspiritai.com/ai-scholars" target="_blank" rel="noopener noreferrer">
              Inspirit AI Scholars Program
            </a>: Learn AI and programming through project-based learning with mentors from Stanford, Harvard, and MIT.
          </li>
          <li>
            <a href="https://www.amazonfutureengineer.com/scholarship" target="_blank" rel="noopener noreferrer">
              Amazon Future Engineer Scholarship
            </a>: Up to $10,000/year scholarship plus a guaranteed summer internship at Amazon for AP CS students.
          </li>
          <li>
            <a href="https://tandon.nyu.edu/academics/precollege-programs/cs4cs" target="_blank" rel="noopener noreferrer">
              NYU CS4CS Program
            </a>: Free 3-week program for high schoolers to learn computer science and cybersecurity (NYC residents only).
          </li>
          <li>
            <a href="https://www.aeop.com/programs/high-school-apprenticeships" target="_blank" rel="noopener noreferrer">
              AEOP High School Apprenticeship
            </a>: Summer research program at university labs with a stipend.
          </li>
          <li>
            <a href="https://simons.berkeley.edu/programs/summer-research-program" target="_blank" rel="noopener noreferrer">
              Simons Summer Research Program
            </a>: Conduct research with faculty mentors at Stony Brook University (includes stipend).
          </li>
          <li>
            <a href="https://internshala.com/internships/computer-science-internship" target="_blank" rel="noopener noreferrer">
              Internshala Computer Science Internships
            </a>: Find paid internships in software development, data science, and more.
          </li>
          <li>
            <a href="https://www.girlswhocode.com/programs/summer-immersion-program" target="_blank" rel="noopener noreferrer">
              Girls Who Code Summer Immersion Program
            </a>: Free program for high school girls to learn coding and work on projects.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="resource-section">
        <h2 className="resource-header">Contribute to Our Resources</h2>
        <p>
          Have a favorite resource, internship experience, or opportunity to share? Let us know by emailing the club at <a href="mailto:csclub@example.com">csclub@example.com</a>!
        </p>
      </section>
    </div>
  );
};

export default Resources;