import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD)

function Python() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Python Programming Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ================= CONTENT ================= */}
        <main className="content">

          <img
            src="/python.png"
            alt="Python Course"
            className="course-image"
          />

          <p>
            Are you looking to learn one of the most versatile and in-demand programming languages?  
            The <b> Python Course at Disha Institute of Technology</b> is designed for beginners and
            professionals who want to build strong programming skills and practical experience.
            By the end of this course, you’ll be confident in developing real-world Python applications.
          </p>

          <h2>Why Choose Python?</h2>
          <p>
            Python is known for its simplicity, readability, and wide industry adoption. It is used
            in web development, data science, artificial intelligence, automation, and more.
            Learning Python opens doors to multiple career paths in the IT industry.
          </p>

          <h2>What Will You Learn?</h2>

          <h3>1. Python Basics</h3>
          <p>
            Variables, data types, operators, and conditional statements to control program flow.
          </p>

          <h3>2. Python Collections</h3>
          <p>
            Lists, tuples, sets, and dictionaries — access, modify, loop, sort, and manage data efficiently.
          </p>

          <h3>3. Object-Oriented Programming (OOP)</h3>
          <p>
            Classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
          </p>

          <h3>4. Functions & Modules</h3>
          <p>
            Create reusable functions and work with built-in and custom Python modules.
          </p>

          <h3>5. File Handling</h3>
          <p>
            Read and write files for data storage and real-world applications.
          </p>

          <h3>6. Exception Handling</h3>
          <p>
            Handle errors using try, except, and finally blocks.
          </p>

          <h3>7. Python Libraries</h3>
          <ul className="learn-list">
            <li>NumPy – numerical computations</li>
            <li>Pandas – data analysis</li>
            <li>SciPy – scientific computing</li>
            <li>Matplotlib – data visualization</li>
            <li>Tkinter – GUI development</li>
            <li>SQLite – database handling</li>
          </ul>

          <h3>8. Data Visualization</h3>
          <p>
            Create graphs, charts, histograms, and dashboards using Python libraries.
          </p>

          <h2>Course Duration</h2>
          <p>
            The Python Course duration is <b>6 months</b>, with daily classes focused on both theory
            and hands-on practice.
          </p>

          <h2>Why Choose Disha Institute of Technology?</h2>
          <ul className="learn-list">
            <li>Experienced industry trainers</li>
            <li>100% practical training</li>
            <li>Live projects</li>
            <li>Certification after completion</li>
            <li>Career guidance & job support</li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What is Python and why is it popular?",
              a: "Python is a high-level programming language known for its simplicity and versatility. It is widely used in web development, data science, AI, and automation."
            },
            {
              q: "Do I need prior programming experience?",
              a: "No, this course is beginner-friendly and starts from the basics."
            },
            {
              q: "How long is the Python course?",
              a: "The course duration is 6 months."
            },
            {
              q: "Will I receive a certificate?",
              a: "Yes, a recognized certificate is provided after course completion."
            },
            {
              q: "What job opportunities are available?",
              a: "Python Developer, Data Analyst, Automation Engineer, Backend Developer, and more."
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

        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">
          <div className="popular-courses">
            <h3>Popular Courses</h3>
            <ul>
              <li><a href="basic-computer.html">Basic Computer</a></li>
              <li><a href="dca.html">DCA</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="java.html">Java</a></li>
              <li><a href="c-cpp.html">C / C++</a></li>
              <li><a href="python.html">Python</a></li>
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

export default Python;
