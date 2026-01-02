import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER DESIGN (AutoCAD CSS)

function CorelDraw() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>CorelDRAW Course</h1>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/CorelDRAW.png"
            alt="CorelDRAW Course"
            className="course-image"
          />

          <p>
            Are you looking to build a creative career in graphic design? Our <b>CorelDRAW Course</b> at
            <b> Disha Institute of Technology</b> is designed to help you master professional design skills.
            This course is ideal for beginners as well as learners who want to enhance their design knowledge
            and work confidently with CorelDRAW software.
          </p>

          <h2>Why Learn CorelDRAW?</h2>

          <p>
            CorelDRAW is one of the most widely used graphic designing tools in the printing,
            advertising, branding, and digital media industries. Learning CorelDRAW opens doors
            to multiple creative career opportunities such as graphic designer, print designer,
            logo designer, and advertising professional.
          </p>

          <h3>Creative Career Opportunities</h3>
          <p>
            Graphic design is a fast-growing field. Skilled CorelDRAW designers are always in demand
            in printing presses, advertising agencies, digital marketing companies, and freelance platforms.
          </p>

          <h3>Easy to Learn & Powerful Tool</h3>
          <p>
            CorelDRAW is known for its user-friendly interface and powerful design tools.
            Even beginners can start creating professional-quality designs in a short time.
          </p>

          <h2>What Will You Learn in the CorelDRAW Course?</h2>

          <ul className="learn-list">
            <li><b>Introduction to CorelDRAW</b></li>
            <p>
              Understanding the CorelDRAW interface, tools, workspace setup, rulers,
              grids, and basic navigation.
            </p>
            <br />

            <li><b>Drawing & Shape Tools</b></li>
            <p>
              Learn to create vector shapes using rectangle, ellipse, polygon,
              freehand, pen, and Bezier tools.
            </p>
            <br />

            <li><b>Text & Typography</b></li>
            <p>
              Working with artistic and paragraph text, font styling,
              text effects, alignment, spacing, and typography basics.
            </p>
            <br />

            <li><b>Color Theory & Fill Tools</b></li>
            <p>
              Learn color modes, gradients, patterns, fountain fills,
              outlines, and professional color combinations.
            </p>
            <br />

            <li><b>Image Editing & Effects</b></li>
            <p>
              Importing images, cropping, masking, transparency,
              shadows, and applying creative effects.
            </p>
            <br />

            <li><b>Logo & Branding Design</b></li>
            <p>
              Create logos, visiting cards, letterheads,
              banners, flex designs, and brand identities.
            </p>
            <br />

            <li><b>Print & Export Settings</b></li>
            <p>
              Learn correct page sizes, bleed, margins,
              CMYK color mode, and export files for print and digital use.
            </p>
          </ul>

          <h2>Course Duration & Training Style</h2>
          <p>
            The CorelDRAW course is designed as a <b>short-term practical program</b>.
            Classes focus on hands-on training with live projects, ensuring that students
            gain real-world design experience.
          </p>

          <h2>Who Can Join This Course?</h2>
          <p>
            This course is perfect for students, job seekers, business owners,
            printing professionals, and anyone interested in graphic designing.
            No prior design experience is required.
          </p>

          <h2>Career Opportunities After CorelDRAW</h2>
          <p>
            After completing the course, you can work as:
            Graphic Designer, Print Designer, Flex Designer, Logo Designer,
            Advertising Assistant, or start freelance design work.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "Is CorelDRAW easy to learn?",
              a: "Yes, CorelDRAW is beginner-friendly and easy to learn with proper guidance and practice."
            },
            {
              q: "Do I need prior graphic design knowledge?",
              a: "No, this course starts from basics and is suitable for beginners."
            },
            {
              q: "Is this course practical?",
              a: "Yes, the course is fully practical with live design projects."
            },
            {
              q: "Can I do this course part-time?",
              a: "Yes, flexible timings are available for students and working professionals."
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
              <li><a href="graphic-design.html">Graphic Design</a></li>
              <li><a href="web-development.html">Web Development</a></li>
              <li><a href="corel-draw.html">CorelDRAW</a></li>
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

export default CorelDraw;
