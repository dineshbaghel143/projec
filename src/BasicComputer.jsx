import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)
import { Link } from "react-router-dom";


function BasicComputer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div className="course-page-wrapper">

    {/* ===== HEADER ===== */}
    <header className="page-header">
      <h1>Basic Computer Course</h1>
    </header>


      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/basic.webp"
            alt="Basic Computer Course"
            className="course-image"
          />

          <p>
            Do you want to know about Basic Computer Course. In today’s digital age, having strong computer skills is more than just a benefit—it’s a necessity. Whether you’re a student starting out in your career or a professional looking to improve your abilities, knowing the basics of computer use is essential. We offer top-notch basic computer courses in Disha Institute of Technology designed to equip you with practical skills and significantly enhance your job prospects.
          </p>

          <br />

          <h2>Why Computer Courses Are Important?</h2>

          <br />

          <h3>Essential Skills for the Digital World</h3>
          <p>
            As our world becomes more digital, being comfortable with computers is increasingly important. From writing emails and creating documents to browsing the web and using different software programs, these skills are necessary for almost every job. Our courses at Punjab Computer Center will teach you these vital skills, giving you a strong foundation to build on.
          </p>

          <br />

          <h3>Certification to Improve Your Resume</h3>
          <p>
            Completing a computer course gives you a valuable certification that can make your resume stand out. This certification proves that you have the essential computer skills that most employers are looking for, helping you in your job search.
          </p>

          <br />

          <h3>Practical Knowledge for Real-World Use</h3>
          <p>
            Our course is all about hands-on experience with everyday computer tasks. By learning practical skills, you’ll be able to handle various job duties confidently and efficiently. Whether it’s using MS Office to create documents or doing online research, our course will prepare you for real-world situations.
          </p>

          <br />

          <h2>What Will You Learn in Our Computer Course?</h2>

          <ul className="learn-list">
            <li><b>Computer Basics</b></li>
            <p>
              We begin with the essentials, making sure you have a solid grasp of the basics. You’ll learn about the key parts of a computer, including both hardware and software, and how they work together. This is important for anyone new to computers.
            </p>
            <br />

            <li><b>Basic Concepts and Computer Care</b></li>
            <p>
              Knowing how to use a computer effectively is crucial. We cover things like file management, system maintenance, and basic troubleshooting. You’ll also learn how to take care of your computer to keep it running smoothly.
            </p>
            <br />

            <li><b>MS Office</b></li>
            <p>
              Microsoft Office is a staple in many workplaces. Our course gives you thorough training in MS Word, MS Excel, and MS PowerPoint. You’ll learn how to create and format documents, manage spreadsheets, and develop presentations—skills that are highly valued in any office setting.
            </p>
            <br />

            <li><b>Internet and Web Searching</b></li>
            <p>
              Being able to use the internet effectively is a must. We’ll teach you how to search the web efficiently, navigate websites, and use online resources. You’ll learn how to find the information you need quickly and accurately.
            </p>
            <br />

            <li><b>Email Management</b></li>
            <p>
              Email is a primary way to communicate in the professional world. Our course covers the basics of email management, including how to write, send, and organize emails. You’ll also learn about proper email etiquette and how to keep your inbox organized.
            </p>
            <br />

            <li><b>PDF Management</b></li>
            <p>
              Managing PDF files is a common task in many jobs. You’ll learn how to create, edit, and manage PDFs, which are often used to share and preserve documents.
            </p>
            <br />

            <li><b>Practical Training</b></li>
            <p>
              Our instructors are experienced professionals committed to providing high-quality education. They share practical tips and advice that are relevant to the local job market.
            </p>
            <p>
              Our courses are designed to be practical and hands-on. You’ll not only learn the theory but also apply it in real-world situations, helping you learn and build confidence.
            </p>
            <p>
              We guide you on how to use your new skills in the job market, helping you move forward in your <b>career</b>.
            </p>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What Is The General Duration Of The Basic Computer Course?",
              a: "The general duration of our Basic Computer Course at Punjab Computer Centre is typically 3 to 6 months, depending on the pace of the learner and the specific modules included in the program. This course is designed to provide a comprehensive understanding of essential computer skills, including word processing, spreadsheets, presentations, internet usage, and basic troubleshooting. The course duration may vary based on individual learning needs, and we offer flexible scheduling to accommodate your personal timetable."
            },
            {
              q: "What Are The Admission Criteria for the Basic Computer Course?",
              a: "To gain admission in a basic computer course at Disha Institute of Technology, candidates should have passed their matriculation from any recognized board or equivalent qualification."
            },
            {
              q: "Are There Practical Classes?",
              a: "Yes, there are practical sessions conducted during this program where students can apply theoretical knowledge to real-life situations."
            },
            {
              q: "Can I Do This Course Part-Time?",
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
              <li><Link to="/courses/basic-computer">Basic Computer</Link></li>
              <li><Link to="/courses/dca">DCA</Link></li>
              <li><Link to="/courses/digital-marketing">Digital Marketing</Link></li>
              <li><Link to="/courses/tally-gst">Tally & GST</Link></li>
              <li><Link to="/courses/coding">Coding Courses</Link></li>
              <li><Link to="/courses/web-development">Web Development</Link></li>
              <li><Link to="/courses/data-structure">Data Structures</Link></li>
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
    </div>
  );
}

export default BasicComputer;
