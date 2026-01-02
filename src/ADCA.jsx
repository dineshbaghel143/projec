import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function ADCA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <header className="page-header">
        <h1>ADCA – Advance Diploma in Computer Application</h1>
      </header>

      <div className="page-layout">
        {/* MAIN CONTENT */}
        <main className="content">
          <img
            src="/adca.webp"
            alt="ADCS Course"
            className="course-image"
          />

          <p>
            Do you want to know about the ADCA (Advance Diploma in Computer Application) Course in Disha Technical Institute?
            In today’s fast-growing digital world, advanced computer knowledge is no longer optional—it is essential.
            Whether you are a student planning a strong career in IT or a working professional looking to upgrade your
            technical skills, ADCA provides in-depth knowledge of computer applications, programming, and software tools.
          </p>

          <br />

          <h2>Why ADCA Course Is Important?</h2>

          <br />

          <h3>Advanced Skills for the Digital World</h3>
          <p>
            As technology continues to evolve, industries demand professionals with advanced computer skills.
            The ADCA course prepares students to handle real-world computer tasks such as software usage,
            programming basics, web technologies, and office automation.
            From creating professional documents to working with databases and designing web pages,
            these skills are essential for modern workplaces.
          </p>

          <br />

          <h3>Professional Certification to Strengthen Your Resume</h3>
          <p>
            Completing the ADCA course provides you with a recognized diploma certification that enhances your resume.
            This certification proves your expertise in computer science concepts, office applications, and programming tools,
            making you more competitive in the job market and increasing your chances of employment.
          </p>

          <br />

          <h3>Practical Knowledge for Real-World Applications</h3>
          <p>
            The ADCA course focuses heavily on practical training.
            Students gain hands-on experience with real software, tools, and computer systems.
            By practicing real tasks such as document creation, data management, internet usage,
            and programming logic, students develop confidence and job-ready skills.
          </p>

          <br />

          <h2>What Will You Learn in Our ADCA Course?</h2>

          <ul className="learn-list">
            <li><b>Computer Fundamentals & PC Overview</b></li>
            <p>
              We start with computer fundamentals, including an overview of computer systems.
              Students learn about hardware components, input-output devices, memory, storage,
              and how software and hardware work together.
            </p>
            <br />

            <li><b>Hardware, Networking & Operating Systems</b></li>
            <p>
              This module covers hardware concepts, basic networking fundamentals,
              and operating systems such as MS-DOS and Windows.
              Students learn system operations, file handling, and system configuration basics.
            </p>
            <br />

            <li><b>MS Office Applications</b></li>
            <p>
              MS Office is a core part of professional computer work.
              Students receive detailed training in MS Word, MS Excel, and MS PowerPoint.
              They learn document formatting, spreadsheet management, formulas, charts,
              and professional presentation creation.
            </p>
            <br />

            <li><b>Internet Fundamentals & Email Management</b></li>
            <p>
              Students learn effective internet usage, web searching techniques,
              online safety, and digital communication.
              Email management training includes writing professional emails,
              attachments, inbox organization, and email etiquette.
            </p>
            <br />

            <li><b>Programming Fundamentals</b></li>
            <p>
              This module introduces students to programming fundamentals.
              They learn basic programming logic, concepts, and problem-solving techniques,
              which help build a foundation for advanced programming languages.
            </p>
            <br />

            <li><b>Web Designing Technologies</b></li>
            <p>
              In the second semester, students learn HTML, DHTML, and JavaScript.
              These technologies help students understand website structure,
              design layouts, and create interactive web pages.
            </p>
            <br />

            <li><b>Designing & Publishing Tools</b></li>
            <p>
              Training in Page Maker and Corel Draw helps students learn graphic design
              and desktop publishing concepts.
              These tools are useful for designing brochures, posters, and promotional material.
            </p>
            <br />

            <li><b>Accounting Software & Database Basics</b></li>
            <p>
              Students gain knowledge of Accountancy fundamentals,
              Tally, and MS Access.
              This module helps students understand financial data handling,
              database management, and basic accounting operations.
            </p>
            <br />

            <li><b>Practical & Hands-On Training</b></li>
            <p>
              Our experienced instructors focus on practical learning through live exercises,
              assignments, and real-life examples.
              Students apply theoretical knowledge in lab sessions,
              which helps build confidence and technical accuracy.
            </p>

            <p>
              We also guide students on how to apply their skills in the job market,
              helping them move forward in their <b>career</b> with confidence.
            </p>
          </ul>

          {/* FAQ */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          <div className="faq">
            {[
              {
                q: "What is the duration of ADCA course?",
                a: "The duration of ADCA course is generally 12 months divided into two semesters."
              },
              {
                q: "Who can join ADCA course?",
                a: "Students who have completed matriculation or higher education can join this course."
              },
              {
                q: "Is ADCA a practical course?",
                a: "Yes, ADCA is fully practical with hands-on training on real software and tools."
              },
              {
                q: "What jobs can I get after ADCA?",
                a: "After ADCS, students can work as Computer Operator, Office Executive, Data Entry Operator, or pursue advanced IT courses."
              }
            ].map((item, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.q}
                </button>

                <div
                  className="faq-answer"
                  style={{ display: openIndex === index ? "block" : "none" }}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="popular-courses">
            <h3>Popular Courses</h3>
            <ul>
              <li><a href="basic-computer.html">Basic Computer</a></li>
              <li><a href="dca.html">DCA</a></li>
              <li><a href="adcs-course.html">ADCA</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="digital-marketing.html">Digital Marketing</a></li>
            </ul>

            <div className="social-links">
              <a href="#" className="social instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default ADCA;
