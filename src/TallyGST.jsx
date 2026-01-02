import { useState } from "react";
import "./AutoCAD.css"; // 🔒 MASTER CSS (AutoCAD page)

function TallyGST() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="page-header">
        <h1>Tally & GST Course</h1>
        <p>Disha Institute of Technology</p>
      </header>

      <div className="page-layout">

        {/* ===== MAIN CONTENT ===== */}
        <main className="content">

          <img
            src="/Tally.webp"
            alt="Tally GST Course"
            className="course-image"
          />

          <p>
            If you aim to build a strong foundation in accounting and tax management,
            enrolling in our <b>Tally & GST course at Disha Institute of Technology</b>
            is an excellent choice. This course is designed to equip you with the
            practical skills and industry-relevant knowledge required to succeed in
            accounting, finance, and taxation roles.
          </p><br />

          <h2>Why Choose the Tally & GST Course?</h2>
          <p>
            Our Tally & GST course is ideal for students, job seekers, and professionals
            who want to strengthen their accounting and taxation skills. The program
            follows a structured learning approach that balances theory with extensive
            hands-on practice, ensuring you are ready for real-world accounting tasks.
          </p><br />

          <h2>Why You Should Learn Tally & GST?</h2><br />

          <h3>High Demand for Accounting Professionals</h3>
          <p>
            Every business needs skilled accounting professionals. Knowledge of Tally
            and GST significantly increases employability across industries.
          </p><br />

          <h3>Updated Industry Knowledge</h3>
          <p>
            GST has reshaped India’s taxation system. Learning GST ensures you stay
            updated with current tax laws and compliance requirements.
          </p><br />

          <h3>Practical Real-Life Application</h3>
          <p>
            Tally is widely used accounting software. You will learn to manage daily
            accounting tasks, generate reports, and ensure tax compliance efficiently.
          </p><br />

          <h3>Career Growth & Entrepreneurship</h3>
          <p>
            With Tally & GST skills, you can work as an accountant, tax assistant,
            freelancer, or manage your own business finances confidently.
          </p><br />

          <h2>Course Duration & Structure</h2>
          <p>
            The Tally & GST course duration is <b>3 months</b>, with classes held
            <b> 1 hour daily</b>. The course is divided into <b>Theory</b> and
            <b> Practical</b> modules.
          </p><br />

          <h3>Theory</h3>
          <ul>
            <li>Basic Accounting Rules</li>
            <li>Journal Entries</li>
            <li>Ledger Management</li>
            <li>Cash Book</li>
            <li>Trial Balance</li>
            <li>Shortcut Keys in Tally</li>
          </ul><br />

          <h3>Practical</h3>
          <ul>
            <li>Data Entry</li>
            <li>Bills & Vouchers</li>
            <li>Inventory Management</li>
            <li>Export & Import</li>
            <li>Backup & Restore</li>
            <li>Profit & Loss Account</li>
            <li>Balance Sheet</li>
            <li>Day Book</li>
          </ul><br />

          <h2>Comprehensive GST Training</h2>
          <ul>
            <li>GST Meaning & Overview</li>
            <li>GST Slabs</li>
            <li>Types of GST (CGST, SGST, IGST)</li>
            <li>GST Journal Entries</li>
            <li>Purchase & Sales Bills</li>
          </ul><br />

          <h2>Why Choose Disha Institute of Technology?</h2>
          <ul>
            <li>Experienced Industry Trainers</li>
            <li>100% Practical Training</li>
            <li>Job Assistance</li>
            <li>Recognized Certification</li>
            <li>Affordable Course Fees</li>
          </ul>

          {/* ===== FAQ ===== */}
          <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>

          {[
            {
              q: "What is Tally software?",
              a: "Tally is accounting software used by businesses to manage financial transactions, inventory, and tax compliance."
            },
            {
              q: "What is GST?",
              a: "GST (Goods and Services Tax) is a unified indirect tax system in India."
            },
            {
              q: "Is prior accounting knowledge required?",
              a: "No, the course starts from basic concepts and is suitable for beginners."
            },
            {
              q: "Can I get a job after completing this course?",
              a: "Yes, this course opens opportunities in accounting, taxation, and finance-related roles."
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
              <li><a href="adcs.html">ADCS</a></li>
              <li><a href="adiwa.html">ADIWA</a></li>
              <li><a href="digital-marketing.html">Digital Marketing</a></li>
              <li><a href="tally-gst.html">Tally & GST</a></li>
              <li><a href="web-development.html">Web Development</a></li>
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

export default TallyGST;
