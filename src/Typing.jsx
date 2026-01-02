import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD page)

function Typing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Typing Course</h1>
        <p>Disha Institute of Technology</p>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/Typing course.png"
            alt="Typing Course"
            className="course-image"
          />

          <p>
            If you want to improve your typing speed and accuracy for office work,
            government exams, or data entry jobs, our Typing Course at Disha Institute
            of Technology is the perfect choice. This course is designed for beginners
            as well as learners who want to enhance their professional typing skills.
          </p><br />

          <h2>Why Learn Typing?</h2><br />

          <h3>Essential Skill for Office Jobs</h3>
          <p>
            Typing is a basic requirement in almost every office job today. From
            preparing documents to handling emails and data entry work, fast and
            accurate typing helps improve productivity and efficiency.
          </p><br />

          <h3>Helpful for Government & Private Exams</h3>
          <p>
            Many government and private sector exams require typing tests. Learning
            proper typing techniques will help you qualify these exams confidently.
          </p><br />

          <h3>Improve Speed and Accuracy</h3>
          <p>
            Our course focuses on correct finger placement, posture, and regular
            practice so that you can type faster with fewer mistakes.
          </p><br />

          <h2>What Will You Learn in Our Typing Course?</h2>

          <ul className="learn-list">
            <li>Typing Basics</li>
            <p>Introduction to keyboard, finger placement, posture, and typing techniques.</p>

            <li>English Typing</li>
            <p>Practice English typing with proper speed and accuracy using standard keyboards.</p>

            <li>Hindi Typing</li>
            <p>Learn Hindi typing (Kruti Dev / Mangal) for government and office requirements.</p>

            <li>Speed Building Practice</li>
            <p>Daily typing exercises to gradually increase typing speed.</p>

            <li>Error Correction Techniques</li>
            <p>Learn how to reduce typing mistakes and improve overall accuracy.</p>

            <li>Typing Test Preparation</li>
            <p>Practice real-time typing tests similar to government and private exams.</p>
          </ul>

          <h2>Course Duration & Training</h2>
          <p>
            The Typing Course duration is flexible and usually ranges from
            <b> 1 to 2 months</b>, depending on the learner’s practice and progress.
            Classes are conducted daily with full practical training.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "Who can join the Typing Course?",
              a: "Anyone who wants to improve typing skills can join. No prior experience is required."
            },
            {
              q: "Is Hindi typing also included?",
              a: "Yes, both English and Hindi typing are covered in the course."
            },
            {
              q: "Is this course useful for government exams?",
              a: "Yes, the course is designed to help students prepare for typing tests in government and private exams."
            },
            {
              q: "Will I get a certificate?",
              a: "Yes, a certificate will be provided after successful completion of the course."
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
              <li><a href="typing.html">Typing Course</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
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

export default Typing;
