import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const [name, setName] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [messageContent, setMessage] = useState("");

  const [errorState, setErrorState] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_1fg5j09";
    const templateID = "template_kpg2eyp";
    const publicKey = "MXCeS60S_GI1FCk1A";

    const templateParams = {
      from_name: name,
      from_email: emailAddress,
      message: messageContent,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
        setErrorState(null);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
        setErrorState("Error sending message!");
        setSuccess(false);
      });
  };

  return (
    <motion.section
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact Information</motion.h1>
        <div className="contact-details">
          <motion.a
            href="mailto:sshukla@connect.ust.hk"
            className="item"
            variants={variants}
          >
            <h2>Mail</h2>
            <span>sshukla@connect.ust.hk</span>
          </motion.a>

          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>HKUST</span>
          </motion.div>

          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>+1 234 5678</span>
          </motion.div>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/saanvi-shukla-s12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://www.instagram.com/saanvishukla.__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>

          <a
            href="https://github.com/SaanviShuklaOct"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            opacity: 1,
          }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "20px",
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              borderRadius: "5px",
            }}
          />

          <input
            type="email"
            required
            placeholder="Email"
            name="user_email"
            value={emailAddress}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "20px",
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              borderRadius: "5px",
            }}
          />

          <textarea
            rows={8}
            placeholder="Message"
            name="user_message"
            value={messageContent}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              padding: "20px",
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
              borderRadius: "5px",
            }}
          />

          <button
            style={{
              padding: "20px",
              border: "none",
              backgroundColor: "orange",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Submit
          </button>

          {errorState && <div style={{ color: "red" }}>{errorState}</div>}
          {success && (
            <div style={{ color: "green" }}>Message sent successfully!</div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
