// components/navbar/Links.js
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { name: "Homepage", id: "Homepage" },
    { name: "About", id: "About" },
    { name: "Experience", id: "Experience" },
    { name: "Competition", id: "Competition" },
    { name: "Projects", id: "Projects" },
    { name: "Skills", id: "Skills" },
    { name: "Contacts", id: "Contacts" },
  ];

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleLinkClick = (name) => {
    if (name === "Homepage") {
      navigate("/");
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(name);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map(({ name, id }) => (
        <motion.div
          key={id}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={name === "Homepage" ? "/#Homepage" : `/#${id}`}
            onClick={() => handleLinkClick(name)}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {name}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
