import React, { useState } from "react";
import JobModal from "./JobModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <ul style={styles.navbarList}>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Home
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Find Jobs
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Find Talent
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              About Us
            </a>
          </li>
          <li style={styles.navbarItem}>
            <a href="/" style={styles.navbarLink}>
              Testimonials
            </a>
          </li>
          <li style={styles.navbarItem}>
            <button style={styles.createJobButton} onClick={openModal}>
              Create Job
            </button>
          </li>
        </ul>
      </nav>

      {isModalOpen && <JobModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

const styles = {
  navbar: {
    boxSizing: "border-box",
    position: "absolute",
    width: "700px",
    height: "60px",
    left: "calc(50% - 350px)",
    top: "21px",
    background: "#FFFFFF",
    border: "1px solid #FCFCFC",
    boxShadow: "0px 0px 20px rgba(127, 127, 127, 0.15)",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navbarList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  navbarItem: {
    fontSize: "14px",
    fontWeight: "500",
  },
  navbarLink: {
    textDecoration: "none",
    color: "#000",
    padding: "8px 12px",
    borderRadius: "25px",
    transition: "background 0.3s",
  },
  createJobButton: {
    background: "linear-gradient(145deg, #5513ab, #3d0c78)",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "10px 20px",
    cursor: "pointer",
    boxShadow:
      "4px 4px 8px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.3)",
    transition: "all 0.3s",
  },
};

export default Navbar;
