import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD design)

function WebDevelopment() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Web Development Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/web development.png"
            className="course-image"
            alt="Web Development Course"
          />

          <p>
            Searching for a <b>Web Development Course</b>? Website development is a crucial
            skill in today’s digital landscape. At <b>Disha Institute of Technology</b>,
            our Web Development course is designed to give you strong practical knowledge
            to build and manage modern websites.
          </p><br />

          <h2>Why Choose Disha Institute of Technology?</h2><br />
          <p>
            We focus on <b>hands-on learning</b> with real-world projects. Our industry-expert
            trainers ensure that students not only understand concepts but also apply
            them practically.
          </p><br />

          <h2>Tools and Platforms You Will Learn</h2>

          <ul className="learn-list">
            <li><b>PHP</b> – Create dynamic and data-driven websites</li>
            <li><b>MySQL</b> – Database creation and management</li>
            <li><b>jQuery</b> – Interactive UI elements and animations</li>
            <li><b>WordPress</b> – CMS-based website development</li>
          </ul><br />

          <h2>What Will You Learn?</h2>
          <p>
            You will learn to build dynamic websites using PHP, manage databases
            using MySQL, enhance user experience with jQuery, and create professional
            websites using WordPress.
          </p><br />

          <h2>Certification & Job Opportunities</h2>
          <p>
            After completing the course, students receive a certification from
            <b> Disha Institute of Technology</b> along with job assistance support.
          </p><br />

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2><br />

          {[
            {
              q: "What is the duration of the Web Development Course?",
              a: "Course duration depends on the selected module. Please contact us for exact details."
            },
            {
              q: "Is there practical training included?",
              a: "Yes, the course is 100% practical with live projects."
            },
            {
              q: "Can I do this course part-time?",
              a: "Yes, flexible timings are available."
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
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-development.html">Web Development</a></li>
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

export default WebDevelopment;
