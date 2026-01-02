import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function GraphicDesigning() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Graphic Designing Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/Graphic Design.png"
            alt="Graphic Designing Course"
            className="course-image"
          />

          <p>
            Are you passionate about creativity, visuals, and design? The{" "}
            <b>Graphic Designing Course at Disha Institute of Technology</b> is designed
            for students who want to turn their creative ideas into professional designs.
            Whether you are a beginner or want to upgrade your skills, this course prepares
            you for a successful career in the creative industry.
          </p>

          <h2>Why Learn Graphic Designing?</h2>

          <p>
            In today’s digital world, graphic design plays a vital role in branding,
            marketing, advertising, and social media. Every business needs attractive
            visuals to communicate with its audience. Learning graphic design helps you
            create impactful designs that not only look good but also deliver the right message.
          </p>

          <h2>Why Choose Disha Institute of Technology?</h2>

          <ul className="learn-list">
            <li><b>Expert Trainers:</b> Learn from experienced professionals with real industry exposure.</li>
            <li><b>Practical Learning:</b> Work on live projects instead of just theory.</li>
            <li><b>Industry Tools:</b> Master tools used by professionals.</li>
            <li><b>100% Job Assistance:</b> Career guidance and placement support.</li>
            <li><b>Certification:</b> Industry-recognized certificate after completion.</li>
          </ul>

          <h2>What Will You Learn?</h2>

          <ul className="learn-list">
            <li><b>Logo Design:</b> Create professional brand identities.</li>
            <li><b>Brochure & Poster Design:</b> Design attractive marketing materials.</li>
            <li><b>Business Cards & Letterheads:</b> Build corporate branding assets.</li>
            <li><b>Adobe Photoshop:</b> Image editing, retouching & manipulation.</li>
            <li><b>Figma:</b> UI/UX design, wireframes & prototypes.</li>
            <li><b>Canva:</b> Fast designs for social media & marketing.</li>
            <li><b>Animation Basics:</b> Motion graphics fundamentals.</li>
          </ul>

          <h2>Course Duration</h2>
          <p>
            The Graphic Designing Course is a <b>3-month intensive program</b> focusing
            on both theory and practical training. Classes are structured to help students
            build a strong portfolio.
          </p>

          <h2>Career Opportunities</h2>
          <p>After completing this course, you can work as a:</p>

          <ul className="learn-list">
            <li>Graphic Designer</li>
            <li>UI/UX Designer</li>
            <li>Social Media Designer</li>
            <li>Brand Designer</li>
            <li>Freelancer</li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "How long is the Graphic Designing Course?",
              a: "The course duration is 3 months with regular practical sessions."
            },
            {
              q: "Do I need prior experience?",
              a: "No prior experience is required. This course is beginner-friendly."
            },
            {
              q: "Is this course practical?",
              a: "Yes, the course is 100% practical with live projects."
            },
            {
              q: "Will I get a certificate?",
              a: "Yes, you will receive a recognized certificate after completion."
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
              <li><a href="graphic-design.html">Graphic Designing</a></li>
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

export default GraphicDesigning;
