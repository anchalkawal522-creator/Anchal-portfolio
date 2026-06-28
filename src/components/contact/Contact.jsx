import { useState } from "react";
import "./contact.css";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxPbqwED5KQ6qDZYlK32xZooDs-IIIbcVpzyDYKOxrMAIZGwnHApu2K6FydOG4_ZvcG3w/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        },
      );

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading-contact">
          <h1>Contact</h1>
          <p>Feel free to reach out to me!</p>
        </div>

        <div className="main-contact">
          <div className="left">
            <div className="content-left">
              <div className="icon-contact">
                <IoMail />
              </div>
              <div className="text">
                <h4>Email</h4>
                <p>
                  <a href="mailto:anchalkawal522@gmail.com">
                    anchalkawal522@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="content-left">
              <div className="icon-contact">
                <FaLinkedin />
              </div>
              <div className="text">
                <h4>LinkedIn</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/anchal-thakur-6ab034384/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/anchal-thakur-6ab034384
                  </a>
                </p>
              </div>
            </div>

            <div className="content-left">
              <div className="icon-contact">
                <FaLocationDot />
              </div>
              <div className="text">
                <h4>Location</h4>
                <p>Mohali, India</p>
              </div>
            </div>

            <div className="content-left">
              <div className="icon-contact">
                <FaGithub />
              </div>
              <div className="text">
                <h4>GitHub</h4>
                <p>
                  <a
                    href="https://github.com/anchalkawal522-creator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/anchalkawal522-creator
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="main-right-co">
              <form className="form-field" onSubmit={handleSubmit}>
                <div className="top-f-f">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
