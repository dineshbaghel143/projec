import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD page)

function Photoshop() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Photoshop Course</h1>
        <p>Professional Photo Editing & Graphic Design Training</p>
      </header>

      {/* ===== PAGE LAYOUT ===== */}
      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/PhotoShop.png"
            alt="Photoshop Course"
            className="course-image"
          />

          <p>
            Are you passionate about photo editing and creative design? Our{" "}
            <strong>Photoshop Course at Disha Institute of Technology</strong>
            {" "}is designed to help you master Adobe Photoshop from basics to advanced level.
            Whether you are a beginner or want to sharpen your design skills, this course
            will prepare you for real-world creative projects.
          </p>

          <h2>Why Learn Photoshop?</h2>
          <p>
            Photoshop is one of the most powerful and widely used graphic design tools in the world.
            It is used by photographers, designers, marketers, and content creators to edit photos,
            create advertisements, design banners, and enhance visuals. Learning Photoshop opens
            doors to freelancing, creative jobs, and digital careers.
          </p>

          <h2>What Will You Learn in This Course?</h2>

          <ul className="learn-list">
            <li><b>Introduction to Photoshop</b></li>
            <p>Understanding the Photoshop interface, tools panel, menus, and workspace customization.</p>

            <li><b>Image Editing & Retouching</b></li>
            <p>Crop, resize, enhance photos, remove blemishes, adjust brightness, contrast, and colors.</p>

            <li><b>Layers & Masks</b></li>
            <p>Learn how to work with layers, layer styles, masks, and blending modes for non-destructive editing.</p>

            <li><b>Selection Tools</b></li>
            <p>Master selection tools like Lasso, Magic Wand, Quick Selection, and Pen Tool.</p>

            <li><b>Text & Typography</b></li>
            <p>Create professional text effects, typography designs, posters, and banners.</p>

            <li><b>Photo Manipulation</b></li>
            <p>Combine multiple images, create surreal designs, background replacement, and creative composites.</p>

            <li><b>Design for Social Media</b></li>
            <p>Create posters, Instagram creatives, YouTube thumbnails, and promotional banners.</p>

            <li><b>Export & Print Settings</b></li>
            <p>Learn correct export formats for web, print, and social media platforms.</p>

            <li><b>Practical Projects</b></li>
            <p>Work on real-life projects to build a strong design portfolio.</p>
          </ul>

          <h2>Course Duration & Certification</h2>
          <p>
            The Photoshop Course duration is <strong>2 to 3 months</strong> with flexible timings.
            After successful completion, students receive a <strong>certificate</strong> that helps
            in jobs, freelancing, and internships.
          </p>

          <h2>Career Opportunities</h2>
          <p>
            After completing the Photoshop course, you can work as a Graphic Designer, Photo Editor,
            Social Media Designer, Freelancer, or Creative Executive. Photoshop skills are highly
            demanded in advertising agencies, digital marketing companies, and media houses.
          </p>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "Is Photoshop easy to learn?",
              a: "Yes, Photoshop is beginner-friendly when taught step by step. Our course starts from basics and moves to advanced concepts."
            },
            {
              q: "Do I need prior design knowledge?",
              a: "No prior knowledge is required. This course is suitable for beginners as well as professionals."
            },
            {
              q: "Will I get practical training?",
              a: "Yes, the course is 100% practical with live projects and hands-on assignments."
            },
            {
              q: "Can I do this course part-time?",
              a: "Yes, flexible batch timings are available for students and working professionals."
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
              <li><a href="graphic-design.html">Graphic Design</a></li>
              <li><a href="photoshop.html">Photoshop</a></li>
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

export default Photoshop;
