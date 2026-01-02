import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function ADIWA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>ADIWA – Advance Diploma in Web Applications</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/web.webp"
            alt="ADIWA Course"
            className="course-image"
          />

          <p>
            Do you want to know about the ADIWA (Advance Diploma in Web Applications) course?
            In today’s fast-growing digital world, web applications and websites are essential for every business.
            The ADIWA course at Disha Institute of Technology is designed to provide in-depth knowledge of web designing,
            programming, and database technologies to build a successful career in IT.
          </p>

          <br />

          <h2>Why ADIWA Course Is Important?</h2>
          <br />

          <h3>High Demand in IT Industry</h3>
          <p>
            Web designers and web developers are in huge demand.
            From startups to multinational companies, every organization needs skilled professionals
            to manage their websites and web applications.
          </p>

          <br />

          <h3>Professional Diploma Certification</h3>
          <p>
            ADIWA provides a recognized diploma that enhances your resume
            and improves your chances of getting a job or freelance projects.
          </p>

          <br />

          <h3>Hands-On Practical Training</h3>
          <p>
            This course focuses on real-world practical training where students create
            live websites, dynamic pages, and database-driven applications.
          </p>

          <br />

          <h2>What Will You Learn in ADIWA?</h2>

          <ul className="learn-list">
            <li><b>Fundamentals of Information Technology</b> – Basics of IT systems and software</li>
            <li><b>Internet Fundamentals</b> – How internet, hosting & domains work</li>
            <li><b>Photoshop</b> – Website layouts, banners & UI designing</li>
            <li><b>HTML & DHTML</b> – Structure and design of web pages</li>
            <li><b>JavaScript</b> – Client-side scripting and interactivity</li>
            <li><b>FrontPage</b> – Web page creation and publishing</li>
            <li><b>ASP</b> – Server-side scripting fundamentals</li>
            <li><b>Core Java</b> – Object-oriented programming basics</li>
            <li><b>SQL</b> – Database creation and management</li>
            <li><b>Flash</b> – Multimedia and animations</li>
            <li><b>Project Work</b> – Live website & application development</li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What is the duration of ADIWA course?",
              a: "The duration of ADIWA (Advance Diploma in Web Applications) is one year."
            },
            {
              q: "Who can join ADIWA?",
              a: "Students who have completed matriculation and are interested in web designing and programming can join this course."
            },
            {
              q: "Is this course practical?",
              a: "Yes, the course includes hands-on practical sessions and live project work."
            },
            {
              q: "What career options are available after ADIWA?",
              a: "Web Designer, Web Developer, Frontend Developer, Backend Developer, Freelancer, and Software Assistant roles."
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

        </main>

        {/* ===== SIDEBAR ===== */}
        <aside className="sidebar">
          <div className="popular-courses">
            <h3>Popular Courses</h3>
            <ul>
              <li><a href="basic-computer.html">Basic Computer</a></li>
              <li><a href="adcs.html">ADCS</a></li>
              <li><a href="adiwa.html">ADIWA</a></li>
              <li><a href="digital-marketing.html">Digital Marketing</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="laravel.html">Laravel</a></li>
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

export default ADIWA;
