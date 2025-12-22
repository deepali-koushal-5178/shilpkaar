"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaUserCircle, FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";
import styles from "../Styles/Navbar.module.css";
import Link from "next/link";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "", confirm: "" })
  const [successMsg, setSuccessMsg] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleAuthMode = () => {
    setIsSignup(!isSignup)
    setFormData({ email: "", password: "", confirm: "" })
    setSuccessMsg("")
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignup && formData.password !== formData.confirm) {
      setSuccessMsg("Passwords do not match")
      return;
    }

    setSuccessMsg(isSignup ? "Signup Successful!" : "Login Successful!")
    setFormData({ email: "", password: "", confirm: "" })

    setTimeout(() => {
      setSuccessMsg("")
      setShowLogin(false)
    }, 2000)
  };

  return (
    <>
      <nav
        className={`${styles.navbar} 
          ${scrolled ? styles.scrolled : ""} 
          ${pathname !== "/" ? styles.notHome : ""}`}
      >
        <div className={styles.logo}>
          Furnkaar 
          <span className={styles.tagline}>
            The Signature Collection by Shilpkaar Furnitures
          </span>
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link  href="/" className={pathname === "/" ? styles.active : ""}>Home</Link >
          <Link  href="/about" className={pathname === "/about" ? styles.active : ""}>About</Link >
          <Link  href="/machines" className={pathname === "/machines" ? styles.active : ""}>Our Machines</Link >
          <Link  href="/catalog" className={pathname === "/catalog" ? styles.active : ""}>Product Catalog</Link >
          <Link  href="/faq" className={pathname === "/faq" ? styles.active : ""}>FAQ</Link >
          <Link  href="/contact" className={pathname === "/contact" ? styles.active : ""}>Contact</Link >
        </div>

        {/* <div className={styles.actions}>
          <button
            className={styles.loginIcon}
            onClick={() => {
              setShowLogin(true);
              setIsSignup(false);
              setFormData({ email: "", password: "", confirm: "" });
              setSuccessMsg("");
            }}
            aria-label="Login"
          >
            <FaUserCircle />
          </button>
        </div> */}
      </nav>

      {/* {showLogin && (
        <div className={styles.loginOverlay} onClick={() => setShowLogin(false)}>
          <div className={styles.loginModal} onClick={(e) => e.stopPropagation()}>
            <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <FaEnvelope className={styles.inputIcon} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <FaLock className={styles.inputIcon} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {isSignup && (
                <div className={styles.inputGroup}>
                  <FaLock className={styles.inputIcon} />
                  <input
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    value={formData.confirm}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              <button type="submit" className={styles.loginBtn}>
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            {successMsg && (
              <div className={styles.successMsg}>
                <FaCheckCircle /> {successMsg}
              </div>
            )}

            <p>
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <a href="#" onClick={toggleAuthMode}>Login</a>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <a href="#" onClick={toggleAuthMode}>Sign Up</a>
                </>
              )}
            </p>

            <button className={styles.closeBtn} onClick={() => setShowLogin(false)}>
              ✖
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}
