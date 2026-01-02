import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function HtmlCss() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>HTML & CSS Course</h1>
        <p>Disha Institute of Technology</p>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/html,css.png"
            alt="HTML CSS Course"
            className="course-image"
          />

          <p>
            Begin your journey into web development with our <b>HTML & CSS Course</b> at{" "}
            <b>Disha Institute of Technology</b>. This course is designed for beginners and
            aspiring web designers who want to understand how modern websites are built,
            styled, and made responsive.
          </p>

          <h2>Why Learn HTML & CSS?</h2>
          <p>
            HTML and CSS are the foundation of every website. HTML structures the content,
            while CSS controls the design, layout, and responsiveness. Mastering these skills
            opens doors to careers in web design, front-end development, and UI/UX design.
          </p>

          <h2>HTML Course Overview</h2>
          <ul className="learn-list">
            <li>Introduction to HTML & Structure</li>
            <li>HTML5 Semantic Tags</li>
            <li>Forms, Tables & Multimedia</li>
            <li>Web Design Principles</li>
            <li>Responsive Website Basics</li>
            <li>Live Project Work</li>
          </ul>

          <h2>CSS Course Overview</h2>
          <ul className="learn-list">
            <li>CSS Selectors & Properties</li>
            <li>Box Model & Layouts</li>
            <li>Flexbox & Grid System</li>
            <li>Responsive Design Techniques</li>
            <li>CSS Animations & Transitions</li>
            <li>Bootstrap Introduction</li>
          </ul>

          <h2>100% Job Assistance</h2>
          <p>
            We provide complete career support including resume building, interview
            preparation, and placement guidance to help you secure a job in the web industry.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What is CSS?",
              a: "CSS (Cascading Style Sheets) is used to style and design web pages created with HTML."
            },
            {
              q: "Who can take this course?",
              a: "Beginners, students, job seekers, and professionals looking to build web design skills."
            },
            {
              q: "Do I get a certificate?",
              a: "Yes, you will receive a recognized certificate after successful course completion."
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

export default HtmlCss;
