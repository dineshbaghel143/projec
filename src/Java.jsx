import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD)

function Java() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Java Programming Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/java.png"
            alt="Java Course"
            className="course-image"
          />

          <p>
            If you’re aiming to boost your programming skills and dive deep into Java, the Java Course at
            <b> Disha Institute of Technology</b> is the perfect choice. This course is designed to give you
            a complete understanding of Java—from basic syntax to advanced concepts—so you can confidently
            step into the software development industry.
          </p>

          <h2>Why Learn Java?</h2>
          <p>
            Java is one of the most widely used programming languages in the world. It powers web
            applications, enterprise software, Android apps, and large-scale systems. Learning Java
            opens doors to a wide range of career opportunities in software development.
          </p>

          <h2>What Will You Learn?</h2>
          <ul className="learn-list">
            <li><b>Variables & Data Types</b> – Storing and manipulating data efficiently</li>
            <li><b>Operators</b> – Arithmetic, logical, and relational operations</li>
            <li><b>Control Statements</b> – if-else, loops, and jump statements</li>
            <li><b>Arrays & String Handling</b></li>
            <li><b>Functions & Methods</b></li>
            <li><b>Object-Oriented Programming</b> – Classes, objects, inheritance, polymorphism</li>
            <li><b>Method Overloading</b></li>
            <li><b>File Handling</b></li>
            <li><b>Collection Framework</b> – ArrayList, HashMap, HashSet, LinkedList</li>
            <li><b>Exception Handling</b></li>
            <li><b>Multithreading</b></li>
            <li><b>Java AWT & Swing</b> – GUI development</li>
            <li><b>Front-End & Back-End Basics</b></li>
          </ul>

          <h2>Course Duration</h2>
          <p>
            The Java Course duration is <b>6 months</b>, with regular classes designed to ensure strong
            conceptual understanding and practical exposure.
          </p>

          <h2>Career Opportunities</h2>
          <p>
            After completing the Java course, students can pursue roles such as Java Developer, Software
            Engineer, Backend Developer, Application Developer, and more.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What is the duration of the Java Course?",
              a: "The duration of the Java Course is 6 months."
            },
            {
              q: "Is this course suitable for beginners?",
              a: "Yes, this course is designed for beginners as well as experienced learners."
            },
            {
              q: "Is practical training included?",
              a: "Yes, the course includes hands-on practical sessions and live projects."
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
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="c-cpp.html">C / C++</a></li>
              <li><a href="java.html">Java</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="digital-marketing.html">Digital Marketing</a></li>
            </ul>

            <div className="social-links">
              <a href="#" className="social instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social youtube"><i className="fab fa-youtube"></i></a>
            </div>

          </div>
        </aside>

      </div>
    </>
  );
}

export default Java;
