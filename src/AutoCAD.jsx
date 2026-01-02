import { useState } from "react";
import "./AutoCAD.css";

function AutoCAD() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>AutoCAD Course</h1>
        <p>Certificate in AutoCAD – Professional Design Training</p>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/AutoCad.png"
            alt="AutoCAD Course"
            className="course-image"
          />

          <p>
            AutoCAD is one of the most widely used computer-aided design (CAD) software in engineering, architecture,
            interior designing, and construction industries. The AutoCAD Course at <b>Disha Institute of Technology</b> is
            designed to provide practical, job-oriented training for students, professionals, and beginners who want to
            master technical drawing and drafting skills.
          </p>

          <h2>Why Learn AutoCAD?</h2>

          <p>
            AutoCAD skills are in high demand across multiple industries. Whether you want to work as a draftsman,
            designer, or engineer, AutoCAD knowledge gives you a strong technical advantage. This course helps you
            understand professional drawing standards and prepares you for real-world projects.
          </p>

          <h2>What Will You Learn in the AutoCAD Course?</h2>

          <ul className="learn-list">
            <li><b>Computer & Windows Basics</b> – Understanding system basics for smooth AutoCAD usage.</li>
            <li><b>Introduction to AutoCAD</b> – Interface, tools, commands, and drawing setup.</li>
            <li><b>2D Drawing Tools</b> – Line, circle, arc, polyline, rectangle, and advanced drawing commands.</li>
            <li><b>Modify Commands</b> – Move, copy, rotate, mirror, scale, trim, extend, and offset.</li>
            <li><b>Layers & Properties</b> – Managing layers, colors, line types, and dimensions.</li>
            <li><b>Text & Dimensioning</b> – Creating professional drawings with proper annotations.</li>
            <li><b>Blocks & References</b> – Creating reusable drawing components.</li>
            <li><b>Layouts & Printing</b> – Paper space, model space, plotting, and printing drawings.</li>
            <li><b>Practical Projects</b> – Real-world drawing projects for hands-on experience.</li>
          </ul>

          <h2>Course Duration</h2>
          <p>
            The AutoCAD Course duration is flexible and typically completed within <b>2 to 3 months</b>, depending on
            learning pace and practice sessions.
          </p>

          <h2>Career Opportunities After AutoCAD</h2>
          <p>After completing the AutoCAD course, students can work as:</p>

          <ul className="learn-list">
            <li>AutoCAD Draftsman</li>
            <li>Architectural Assistant</li>
            <li>Civil / Mechanical Designer</li>
            <li>Interior Design Draftsman</li>
            <li>Freelance CAD Designer</li>
          </ul>

          <h2>Why Choose Disha Institute of Technology?</h2>

          <ul className="learn-list">
            <li>Industry-oriented practical training</li>
            <li>Experienced faculty</li>
            <li>Live project-based learning</li>
            <li>Certification after completion</li>
            <li>Career guidance & job assistance</li>
          </ul>

          {/* ===== FAQ SECTION ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          <div className="faq">
            {[
              {
                q: "What is AutoCAD used for?",
                a: "AutoCAD is used for creating precise 2D and 3D technical drawings in engineering, construction, architecture, and design industries."
              },
              {
                q: "Who can join the AutoCAD course?",
                a: "Students, diploma holders, engineers, architects, and beginners interested in design and drafting can join this course."
              },
              {
                q: "Is this course practical?",
                a: "Yes, the course is 100% practical with live drawing projects and hands-on training."
              },
              {
                q: "Will I get a certificate?",
                a: "Yes, a recognized certificate is provided after successful course completion."
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

        {/* ===== SIDEBAR ===== */}
        <aside className="sidebar">
          <div className="popular-courses">
            <h3>Popular Courses</h3>
            <ul>
              <li><a href="basic-computer.html">Basic Computer</a></li>
              <li><a href="dioa.html">DIOA</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="python.html">Python</a></li>
              <li><a href="java.html">Java</a></li>
              <li><a href="c-cpp.html">C / C++</a></li>
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

export default AutoCAD;
