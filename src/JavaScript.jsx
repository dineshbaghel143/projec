import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD)

function JavaScript() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>JavaScript Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/javascript.png"
            alt="JavaScript Course"
            className="course-image"
          />

          <p>
            Are you planning to build a career in web development or enhance your front-end skills?
            The <b> JavaScript Course at Disha Institute of Technology</b> is designed to give you
            a strong foundation in one of the most powerful and widely-used programming languages
            in the world. JavaScript is the backbone of modern interactive websites and web
            applications.
          </p>

          <p>
            From simple form validation to complex web applications, JavaScript plays a crucial role
            in creating fast, dynamic, and user-friendly websites. This course is suitable for
            students, beginners, job seekers, and professionals who want to master client-side
            scripting with real-world practical knowledge.
          </p>

          <h2>Why Learn JavaScript?</h2>

          <p>
            JavaScript is one of the core technologies of the web, along with HTML and CSS.
            Almost every website you visit today uses JavaScript to improve user experience.
            Learning JavaScript opens doors to multiple career paths such as front-end developer,
            full-stack developer, web designer, and software engineer.
          </p>

          <ul className="learn-list">
            <li>JavaScript is used in both Front-End and Back-End development</li>
            <li>Works with popular frameworks like React, Angular, and Node.js</li>
            <li>High demand in the job market</li>
            <li>Essential skill for modern web applications</li>
          </ul>

          <h2>What Will You Learn in JavaScript Course?</h2>

          <h3>JavaScript Basics</h3>
          <p>
            You will start from the fundamentals of JavaScript, including syntax, keywords,
            variables, and data types. This ensures that even students with no programming
            background can learn comfortably.
          </p>

          <h3>Variables, Data Types & Operators</h3>
          <p>
            Understand how to store and manipulate data using variables. Learn different data
            types such as numbers, strings, booleans, arrays, and objects. You will also master
            operators used for calculations and decision-making.
          </p>

          <h3>Conditions & Loops</h3>
          <p>
            Learn how to control program flow using <b>if, else, switch</b> statements and looping
            structures like <b>for, while, and do-while</b>.
          </p>

          <h3>Functions & Events</h3>
          <p>
            Functions allow code reusability and better structure. You will learn how to create
            and call functions, pass parameters, and handle browser events like clicks, keyboard
            inputs, and mouse actions.
          </p>

          <h3>DOM Manipulation</h3>
          <p>
            Learn how to dynamically change HTML content, styles, and attributes using JavaScript,
            making your websites interactive and responsive.
          </p>

          <h3>Form Validation</h3>
          <p>
            Learn how to validate forms using JavaScript to ensure correct user input.
          </p>

          <h3>Basic JavaScript Projects</h3>
          <p>
            You will work on mini projects such as calculators, image sliders, dynamic forms,
            and interactive UI components.
          </p>

          <h2>Course Duration</h2>
          <p>
            The JavaScript course duration is <b>2 to 3 months</b>, with regular practical sessions.
          </p>

          <h2>Career Opportunities After JavaScript</h2>
          <ul className="learn-list">
            <li>Front-End Developer</li>
            <li>Web Designer</li>
            <li>Junior JavaScript Developer</li>
            <li>UI Developer</li>
            <li>Full Stack Developer (with further learning)</li>
          </ul>

          <h2>Why Choose Disha Institute of Technology?</h2>
          <ul className="learn-list">
            <li>Experienced and skilled trainers</li>
            <li>100% practical training</li>
            <li>Live examples and real-world projects</li>
            <li>Student-friendly teaching approach</li>
            <li>Career-oriented curriculum</li>
          </ul>

          <p>
            At <b>Disha Institute of Technology</b>, our goal is to make students industry-ready by
            focusing on practical skills, logical thinking, and confidence-building.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "Is JavaScript good for beginners?",
              a: "Yes, JavaScript is beginner-friendly and widely used in web development."
            },
            {
              q: "Will this course be practical?",
              a: "Yes, the course includes hands-on practice and real-time examples."
            },
            {
              q: "Can I do this course part-time?",
              a: "Yes, flexible timings are available for students."
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
              <li><a href="python.html">Python</a></li>
              <li><a href="java.html">Java</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="c-cpp.html">C / C++</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
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

export default JavaScript;
