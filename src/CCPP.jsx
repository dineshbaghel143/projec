import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN

function CCPP() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>C & C++ Programming Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/CC++.png"
            alt="C and C++ Programming Course"
            className="course-image"
          />

          <p>
            Are you looking to boost your programming skills and build a strong foundation in core software
            development concepts? The <b>C & C++ Programming Course</b> at <b>Disha Institute of Technology</b>
            is designed to equip students with essential programming knowledge and practical experience.
            C and C++ are powerful programming languages used in operating systems, software applications,
            embedded systems, and game development.
          </p>

          <br />

          <h2>Why Choose the C & C++ Course?</h2>

          <p>
            C and C++ form the backbone of modern programming. Whether you are a beginner or already have
            some experience, this course will help you master programming logic, memory management,
            and object-oriented concepts.
          </p>

          <ul className="learn-list">
            <li>In-depth learning from fundamentals to advanced concepts</li>
            <li>Hands-on practical training with real programs</li>
            <li>Expert guidance from experienced instructors</li>
            <li>Strong career opportunities in IT and software development</li>
          </ul>

          <br />

          <h2>What Will You Learn in the C & C++ Course?</h2>

          <h3>1. Introduction to Programming</h3>
          <p>
            Learn what programming is, how programs work, and the importance of C and C++ in modern
            software development. You will also learn how to set up compilers and IDEs for practice.
          </p>

          <h3>2. Basics of C and C++ Programming</h3>
          <p>
            Understand syntax, data types, variables, constants, operators, and expressions.
            Learn how to write clean and efficient programs.
          </p>

          <h3>3. Control Structures & Decision Making</h3>
          <p>
            Master conditional statements like if-else and switch, along with loops such as
            for, while, and do-while to control program flow.
          </p>

          <h3>4. Functions & Modular Programming</h3>
          <p>
            Learn how to create reusable functions, pass arguments, use return values,
            and implement recursion for problem solving.
          </p>

          <h3>5. Pointers & Memory Management</h3>
          <p>
            Understand pointers, dynamic memory allocation, and memory handling techniques
            that make C and C++ powerful programming languages.
          </p>

          <h3>6. Object-Oriented Programming (C++)</h3>
          <p>
            Learn classes, objects, encapsulation, inheritance, polymorphism,
            constructors, and destructors for building scalable applications.
          </p>

          <h3>7. File Handling</h3>
          <p>
            Read and write data to files, manage external data storage,
            and handle file-related errors effectively.
          </p>

          <h3>8. STL & Advanced Concepts</h3>
          <p>
            Work with Standard Template Library (STL) including vectors, lists,
            maps, algorithms, and iterators for efficient coding.
          </p>

          <h3>9. Debugging & Problem Solving</h3>
          <p>
            Learn to identify errors, debug programs, optimize code,
            and improve performance.
          </p>

          <h3>10. Practical Projects</h3>
          <p>
            Develop real-world projects such as calculator applications,
            file management systems, and mini software projects to strengthen skills.
          </p>

          <br />

          <h2>Course Duration & Certification</h2>
          <p>
            The C & C++ course duration is <b>2 months</b>. Students receive practical training,
            assignments, and live coding practice. After successful completion,
            students receive a recognized certification from Disha Institute of Technology.
          </p>

          <br />

          <h2>Career Opportunities</h2>
          <p>
            After completing this course, students can pursue careers in software development,
            system programming, embedded systems, IoT, game development, and more.
            The course also helps prepare students for technical interviews and competitive programming.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What are the eligibility criteria?",
              a: "Candidates should have completed matriculation or an equivalent qualification."
            },
            {
              q: "Is practical training included?",
              a: "Yes, the course includes extensive practical sessions and real-world programming exercises."
            },
            {
              q: "Can I do this course part-time?",
              a: "Yes, flexible timings are available for students and working professionals."
            },
            {
              q: "What career options are available after this course?",
              a: "Students can work as junior programmers, software developers, or continue with advanced programming courses."
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
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-designing.html">Web Designing</a></li>
              <li><a href="programming.html">Programming</a></li>
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

export default CCPP;
