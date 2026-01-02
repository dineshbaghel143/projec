import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function DataEntry() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Data Entry Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/Data Entry.png"
            alt="Data Entry Course"
            className="course-image"
          />

          <p>
            In today’s digital world, data is the backbone of every organization.  
            The <b>Data Entry Course at Disha Institute of Technology</b> is designed to help students,
            job seekers, and professionals build strong data handling skills with accuracy and speed.
          </p>

          <br />

          <h2>Why Learn Data Entry?</h2>
          <p>
            Data entry is an essential skill required in almost every industry including healthcare,
            education, finance, banking, and corporate offices.  
            With proper training, you can secure office jobs, remote work opportunities,
            and freelancing projects.
          </p>

          <br />

          <h2>Course Overview</h2>
          <ul className="learn-list">
            <li><b>Introduction to Data Entry</b> – Understanding data handling and office workflow</li>
            <li><b>Typing Skills</b> – Improve speed and accuracy in English (and regional typing if required)</li>
            <li><b>MS Excel & Google Sheets</b> – Data entry, formatting, sorting, filtering</li>
            <li><b>Data Validation</b> – Error checking and accuracy techniques</li>
            <li><b>Practical Exercises</b> – Real-life office data entry tasks</li>
            <li><b>Advanced Data Handling</b> – Large datasets & automation basics</li>
          </ul>

          <h2>Benefits of This Course</h2>
          <ul className="learn-list">
            <li>100% Practical Training</li>
            <li>Industry-oriented syllabus</li>
            <li>Certification on completion</li>
            <li>Job & freelancing opportunities</li>
            <li>Affordable course fees</li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What is the duration of the Data Entry Course?",
              a: "The Data Entry course duration is approximately 45 days."
            },
            {
              q: "Who can join this course?",
              a: "Students, job seekers, housewives, and working professionals can join."
            },
            {
              q: "Is this course practical?",
              a: "Yes, the course is fully practical with real office-style data tasks."
            },
            {
              q: "Do you provide certification?",
              a: "Yes, a certificate is provided after successful completion."
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
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="graphic-design.html">Graphic Design</a></li>
              <li><a href="python.html">Python</a></li>
              <li><a href="java.html">Java</a></li>
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

export default DataEntry;
