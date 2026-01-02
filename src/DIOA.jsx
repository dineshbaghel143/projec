import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function DIOA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>DIOA – Diploma in Office Automation</h1>
        <p>Disha Institute of Technology</p>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/dioa.png"
            alt="Diploma in Office Automation"
            className="course-image"
          />

          <p>
            The <b>Diploma in Office Automation (DIOA)</b> at Disha Institute of Technology
            is designed to provide students with complete knowledge of modern office
            operations and computer applications. This course is ideal for students,
            job seekers, and professionals who want to build a strong career in office
            administration and clerical roles.
          </p>

          <h2>Why Choose Diploma in Office Automation?</h2>
          <p>
            Office automation skills are essential in almost every organization today.
            This course helps you master computer fundamentals, office software, and
            practical tools required to work efficiently in corporate and government offices.
          </p>

          <h2>Course Duration</h2>
          <p>
            The duration of the <b>DIOA course is 6 Months</b>. Classes are conducted
            with a practical-oriented approach to ensure real-world readiness.
          </p>

          <h2>What Will You Learn in DIOA?</h2>

          <ul className="learn-list">
            <li><b>PC Overview</b> – Understanding computer basics and system components</li>
            <li><b>Hardware Concepts</b> – Input/output devices and internal hardware</li>
            <li><b>Networking Concepts</b> – Basics of computer networking</li>
            <li><b>Windows</b> – Operating system fundamentals</li>
            <li><b>MS Word</b> – Document creation and formatting</li>
            <li><b>MS Excel</b> – Spreadsheets, formulas, and data management</li>
            <li><b>MS PowerPoint</b> – Presentation creation</li>
            <li><b>Internet Fundamentals</b> – Web browsing and online tools</li>
            <li><b>Page Maker</b> – Basic desktop publishing</li>
            <li><b>Corel Draw</b> – Graphic designing fundamentals</li>
            <li><b>Accountancy Fundamentals</b> – Basic accounting knowledge</li>
            <li><b>Tally / Access</b> – Accounting software & database basics</li>
          </ul>

          <h2>Career Opportunities After DIOA</h2>
          <p>
            After completing the Diploma in Office Automation, students can work as:
          </p>

          <ul className="learn-list">
            <li>Office Assistant</li>
            <li>Computer Operator</li>
            <li>Clerk</li>
            <li>Data Entry Operator</li>
            <li>Front Office Executive</li>
            <li>Administrative Assistant</li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "Who can join the DIOA course?",
              a: "Anyone who has completed basic schooling and wants to learn office computer skills can join this course."
            },
            {
              q: "Is prior computer knowledge required?",
              a: "No, the course starts from basic concepts and is suitable for beginners."
            },
            {
              q: "Is the course practical?",
              a: "Yes, the DIOA course is 100% practical with hands-on training."
            },
            {
              q: "Will I get a certificate?",
              a: "Yes, students receive a certification after successful completion."
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
              <li><a href="dca.html">DCA</a></li>
              <li><a href="dioa.html">DIOA</a></li>
              <li><a href="adcs.html">ADCS</a></li>
              <li><a href="adiwa.html">ADIWA</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
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

export default DIOA;
