"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaUserCircle, FaEnvelope, FaLock, FaCheckCircle } from "react-icons/fa";
import styles from "../Styles/Navbar.module.css";
import Link from "next/link";
import CTAButton from "./CTAButton";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({ email: "", password: "", confirm: "" })
  const [successMsg, setSuccessMsg] = useState("")
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);


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
          <Link href="/" className={mounted && pathname === "/" ? styles.active : ""}>Home</Link >
          <Link href="/about" className={mounted && pathname === "/about" ? styles.active : ""}>About</Link >
          <Link href="/machines" className={mounted && pathname === "/machines" ? styles.active : ""}>Our Machines</Link >
          <Link href="/catalog" className={mounted && pathname === "/catalog" ? styles.active : ""}>Product Catalog</Link >
          <Link href="/faq" className={mounted && pathname === "/faq" ? styles.active : ""}>FAQ</Link >
          <Link href="/contact" className={mounted && pathname === "/contact" ? styles.active : ""}>Contact</Link >
          <Link href="/blog" className={mounted && pathname === "/blog" ? styles.active : ""}>Blog</Link >
        </div>
        <div className={styles.ctaContainer}>
<CTAButton desktop={true} />
        </div>

      </nav>
    </>
  );
}
