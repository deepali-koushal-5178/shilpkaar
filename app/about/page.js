import Image from "next/image";
import styles from "@/Styles/About.module.css";
import { FaCogs, FaUsers, FaHandshake, FaLeaf } from "react-icons/fa";

export const metadata = {
    title: "About Us | Furnkaar – The Signature Collection by Shilpkaar Furnitures",
    description:
        "Discover Furnkaar – The Signature Collection by Shilpkaar Furnitures. A perfect blend of craftsmanship, technology, and timeless design for homes and offices.",
};

export default function AboutPage() {
    return (
        <main className={styles.about}>
            <section className={styles.intro}>
                <div className={styles.text}>
                    <h1>About Furnkaar</h1>
                    <p>
                        <strong>Furnkaar</strong> is the <em>Signature Collection by Shilpkaar Furnitures</em> —
                        a premium line that brings together artistic craftsmanship,
                        advanced technology, and elegant design to create furniture
                        that stands apart.
                    </p>
                    <p>
                        At <strong>Shilpkaar Furnitures</strong>, we’ve built a legacy of
                        precision engineering and fine detailing. <strong>Furnkaar</strong>
                        carries this heritage forward — offering refined, factory-finished
                        furniture that blends beauty, comfort, and durability. Each piece
                        is thoughtfully designed to represent a perfect balance of art
                        and functionality.
                    </p>
                    <p>
                        Based in Indore, our in-house facility is powered by modern
                        <strong> CNC</strong> and <strong>German edge-banding</strong>
                        technology. From modular kitchens and wardrobes to statement
                        pieces and luxury interiors, Furnkaar by Shilpkaar ensures every
                        product is crafted with unmatched precision and timeless aesthetics.
                    </p>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/about-factory.jpg"
                        alt="Furnkaar by Shilpkaar Furnitures factory in Indore"
                        width={500}
                        height={400}
                        className={styles.image}
                        priority
                    />
                </div>
            </section>

            <section className={styles.values}>
                <h2>Our Core Values</h2>
                <div className={styles.grid}>
                    <div>
                        <FaCogs className={styles.icon} />
                        <h3>Crafted with Precision</h3>
                        <p>
                            Every creation is built using CNC and edge-banding machines for
                            millimeter-perfect accuracy and a flawless factory finish.
                        </p>
                    </div>
                    <div>
                        <FaUsers className={styles.icon} />
                        <h3>Design Personalization</h3>
                        <p>
                            We believe every space has its own identity. Our designs are
                            customized to match your style, needs, and vision.
                        </p>
                    </div>
                    <div>
                        <FaHandshake className={styles.icon} />
                        <h3>Integrity & Trust</h3>
                        <p>
                            Built on transparency, commitment, and excellence — ensuring a
                            seamless and professional experience from design to delivery.
                        </p>
                    </div>
                    <div>
                        <FaLeaf className={styles.icon} />
                        <h3>Sustainable Craftsmanship</h3>
                        <p>
                            We follow eco-conscious practices using sustainable materials
                            and optimized production to minimize waste and protect the planet.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.callout}>
                <h2>Furnkaar – The Signature Collection by Shilpkaar Furnitures</h2>
                <p>
                    Redefining Indian craftsmanship through design innovation and factory precision.
                    From homes to offices, we deliver furniture that blends elegance, efficiency,
                    and the artistry of true craftsmanship.
                </p>
                <a href="/contact" className={styles.button}>
                    Book a Free Design Consultation
                </a>
            </section>
        </main>
    );
}
