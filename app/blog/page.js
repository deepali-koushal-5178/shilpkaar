
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/Styles/Blog.module.css";

const blogPosts = [
  {
    slug: "factory-made-furniture-indian-homes",
    title: "Why Factory-Made Furniture Is the Best Choice for Indian Homes",
    timeAgo: "5 hours ago",
    image: "/images/blog/factory-furniture.webp",
    tags: ["factory made furniture", "custom furniture"],
    excerpt:
      "Factory-made furniture offers better durability, customization, and long-term value for modern Indian homes.",
  },
  {
    slug: "furniture-for-compact-indian-homes",
    title: "Smart Furniture Ideas for Compact Indian Homes",
    timeAgo: "1 day ago",
    image: "/images/blog/compact-home-furniture.jpg",
    tags: ["space saving", "small homes"],
    excerpt:
      "From wall-mounted TV units to multi-functional counters, discover smart furniture ideas for compact spaces.",
  },
  {
    slug: "choosing-right-material-for-furniture",
    title: "How to Choose the Right Material for Your Furniture",
    timeAgo: "3 days ago",
    image: "/images/blog/furniture-materials.jpg",
    tags: ["wood types", "material guide"],
    excerpt:
      "Confused between solid wood, plywood and engineered boards? Here’s a simple, practical material guide.",
  },
  {
    slug: "furniture-care-maintenance-tips",
    title: "Easy Care & Maintenance Tips to Make Furniture Last Longer",
    timeAgo: "1 week ago",
    image: "/images/blog/furniture-care.jpg",
    tags: ["furniture care", "home tips"],
    excerpt:
      "Simple daily and monthly care routines that keep your furniture looking new for years.",
  },
];

export default function BlogListPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <main className={styles.blogPage}>
      {/* Page heading */}
      <section className={styles.heroSection}>
        <h1>Furnkaar Blog</h1>
        <p>
          Insights, ideas and practical tips about factory-made furniture,
          modern interiors and smart layouts for Indian homes.
        </p>
      </section>

      {/* Blog cards grid */}
      <section className={styles.gridSection}>
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className={styles.card}
            onClick={() => openModal(post)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className={styles.cardImage}
              />
            </div>

            <div className={styles.cardContent}>
              <span className={styles.timeAgo}>{post.timeAgo}</span>

              <h2 className={styles.cardTitle}>{post.title}</h2>

              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()} // prevent overlay click
          >
            <button className={styles.modalClose} onClick={closeModal}>
              ×
            </button>

            <article className={styles.modalBody}>
                  <div className={styles.modalImageWrapper}>
    <Image
      src={selectedPost.image}
      alt={selectedPost.title}
      fill
      sizes="(min-width: 1024px) 720px, 100vw"
      className={styles.modalImage}
    />
  </div>
              <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
              <p className={styles.modalMeta}>Updated for 2025 · Furniture Guide</p>

              {/* Yahan har slug ke hisaab se content render karenge */}
              <div className={styles.modalContent}>
                {selectedPost.slug ===
                  "factory-made-furniture-indian-homes" && (
                  <>
                    <p>
                      The furniture inside a home is more than decoration. It
                      decides how comfortably you sit, sleep, work and host
                      guests every single day. When it comes to Indian homes,
                      many people still compare factory-made furniture with
                      generic ready-stock items that look attractive in
                      pictures but do not always last long.
                    </p>
                    <p>
                      Factory-made furniture is created in a controlled workshop
                      environment with proper machines, accurate measurements
                      and professional supervision. This process helps deliver
                      consistency in quality, finishing and durability that is
                      difficult to achieve with random off-the-shelf pieces.
                    </p>

                    <h3>1. Built to Match the Exact Layout of Your Home</h3>
                    <p>
                      One of the biggest advantages of factory-made furniture is
                      precise sizing. Every Indian home has a different layout –
                      narrow passages, beams, columns, bay windows or uneven
                      corners. Instead of forcing a standard size into your
                      space, made-to-order furniture is designed around your
                      room measurements.
                    </p>
                    <p>
                      TV units, wardrobes, tall storage, partitions, wash
                      units, study tables and dining setups can all be planned
                      according to the wall length, ceiling height and daily
                      usage. This reduces awkward gaps, improves movement space
                      and makes cleaning easier.
                    </p>

                    <h3>2. Strong Core Materials for Everyday Use</h3>
                    <p>
                      Another important benefit of factory-made furniture is
                      control over materials. Good quality plywood or
                      engineered boards, proper edge-banding and reliable
                      hardware give the furniture a strong internal structure.
                    </p>
                    <p>
                      In many low-cost ready items, the surface may look shiny
                      but the core can be weak. That kind of furniture may bend,
                      swell or chip within a short time, especially in humid or
                      coastal areas. A well-managed factory setup focuses on
                      the internal strength first and finishing second, so the
                      furniture can handle daily wear and tear in Indian
                      conditions.
                    </p>

                    <h3>3. Finishing That Looks Premium and Stays Consistent</h3>
                    <p>
                      Machine-finished furniture brings neat edges, smooth
                      surfaces and symmetrical lines. When boards are cut,
                      pressed, sanded and finished in a workshop using proper
                      tools, the end result looks cleaner and more premium.
                    </p>
                    <p>
                      This is especially visible in details like shutter
                      alignment, drawer movement, gap levels between panels and
                      the way light reflects on the surface. In a home, these
                      small finishing points make a big visual difference and
                      create a more refined interior.
                    </p>

                    <h3>4. Long-Term Value Instead of Short-Term Attraction</h3>
                    <p>
                      Price is always a factor while buying furniture, but the
                      lowest price is not always the best decision. Cheap
                      pieces that start bending, swelling or fading after a few
                      seasons finally become more expensive because they need
                      frequent replacement.
                    </p>
                    <p>
                      Factory-made furniture is designed as a long-term
                      investment. The focus is on structure, finish and
                      practicality so that each piece can serve for several
                      years with normal care. When the lifespan is longer, the
                      cost per year automatically becomes lower and the value
                      for money improves.
                    </p>

                    <h3>5. More Storage, Better Planning and Hidden Utilities</h3>
                    <p>
                      Indian homes often need extra storage for seasonal clothes,
                      bedding, utensils, documents and festive decor. Custom
                      factory furniture makes it easier to add useful storage
                      without making a room feel heavy or crowded.
                    </p>
                    <p>
                      Tall units, overhead cabinets, drawers built into beds,
                      closed sections under counters and concealed shelves
                      inside partitions are all possible when furniture is
                      designed thoughtfully in a factory. Even electrical
                      points, lighting, wires and appliances can be integrated
                      neatly into units so that the final result stays clean and
                      organised.
                    </p>

                    <h3>6. Easier Maintenance and Repair Support</h3>
                    <p>
                      Factory-made furniture is more systematic to maintain
                      because the same team that built it understands how it is
                      assembled. If a hinge becomes loose, a shutter needs
                      alignment or a surface requires repolishing, it is easier
                      to get help.
                    </p>
                    <p>
                      The fittings used are usually standard hardware that can
                      be replaced, not rare or unknown parts. This means small
                      issues do not force you to change the entire unit and the
                      furniture can continue to perform well with occasional
                      servicing.
                    </p>

                    <h3>7. Flexibility for Future Changes</h3>
                    <p>
                      Life needs change over time. A guest room becomes a
                      children&apos;s room, a work-from-home corner is added to
                      the living space, or extra storage is needed near the
                      entry. When furniture has been made in a factory with
                      modular thinking, it is easier to add new pieces that
                      match the existing style and finish.
                    </p>
                    <p>
                      This flexibility is very useful for growing families or
                      evolving lifestyles. Instead of throwing away old items,
                      you can extend, modify or reuse them smartly.
                    </p>

                    <h3>Conclusion</h3>
                    <p>
                      For modern Indian homes, factory-made furniture brings a
                      balance of strength, style and practicality. Accurate
                      sizing, strong core materials, neat finishing, hidden
                      storage and easier maintenance all work together to create
                      a better living experience.
                    </p>
                    <p>
                      When planning a home interior or upgrading existing rooms,
                      it is worth looking beyond quick ready-stock options and
                      considering well-planned factory-made furniture. The
                      difference shows every day – in how the space looks, how
                      comfortably it works and how long the furniture stays
                      with you.
                    </p>
                  </>
                )}

                {selectedPost.slug === "furniture-for-compact-indian-homes" && (
             <>
  <p>
    Compact homes are becoming increasingly common in India, especially
    in metros and tier-1 cities. Limited floor space demands smart
    planning, practical storage and multi-functional furniture that
    improves comfort without making the rooms feel crowded. The right
    furniture layout can visually expand a home, create more walking
    space and reduce daily clutter — all without compromising on design.
  </p>

  <p>
    Factory-made modular furniture is ideal for compact interiors because
    every piece can be sized accurately, fitted against walls, combined
    with vertical storage and designed to match the homeowner’s lifestyle.
    Instead of buying random ready-stock items that rarely use space
    efficiently, made-to-order pieces solve real space challenges smartly.
  </p>

  <h3>1. Floating TV Units for Free Floor Area</h3>
  <p>
    Instead of heavy TV cabinets that sit on the floor, a wall-mounted TV
    unit instantly frees up walking space, improves cleaning access and
    gives a modern aesthetic. When factory-made, the unit can be tailored
    with hidden wiring, mood lighting, compact drawers and open shelves
    for decor. The floating effect adds visual spaciousness without
    occupying actual floor area.
  </p>

  <h3>2. Versatile Breakfast Counter Instead of a Full Dining Table</h3>
  <p>
    Compact kitchens and living rooms benefit greatly from a multi-purpose
    counter that works as a mini dining setup, serving area, workspace or
    evening tea spot. Factory-made counters can offer additional drawers,
    power sockets for appliances, under-counter lighting and even small
    display shelves. The top can be stone or engineered material for
    durability, while the width can be customized to ensure comfortable
    movement.
  </p>

  <h3>3. Sofa-Cum-Bed or Compact Seating Solutions</h3>
  <p>
    When space is limited, a sofa-cum-bed can be extremely useful for
    overnight guests. During the day, it works like a standard sofa, while
    at night it converts into a comfortable sleeping area. Factory-made
    versions offer better cushioning, more practical hinges and stronger
    frames compared to generic low-cost ready furniture. The upholstery,
    color and dimensions can be selected to match room proportions.
  </p>

  <h3>4. Tall Storage Units That Use Vertical Space</h3>
  <p>
    Compact homes rarely struggle with floor space — they struggle with
    horizontal storage. Tall wall units, slim partitions, bookshelves and
    overhead cabinetry effectively use vertical space to store seasonal
    items, decor, files, dinnerware or linens. Factory-made tall units are
    more stable because the dimensions are precise and the fittings are
    chosen according to load requirement.
  </p>

  <h3>5. Multi-Functional Beds With Concealed Storage</h3>
  <p>
    Beds take maximum space in most bedrooms. Instead of a plain frame,
    factory-made storage beds can include drawers, hydraulic lift
    sections, bedding compartments, charging points and cushioned
    backrests. This avoids the need for additional cupboards or trunks,
    keeps items dust-free and improves overall room organization.
  </p>

  <h3>6. Mini Work-From-Home Corners</h3>
  <p>
    Compact homes can incorporate a small workspace by using a foldable or
    wall-mounted study table. Factory-made modular studies allow cable
    management, open shelving, hidden drawers and soft lighting for long
    working hours. The table folds up when not in use, keeping the room
    tidy and spacious.
  </p>

  <h3>7. Slim Room Partitions</h3>
  <p>
    When one space performs multiple roles — living, dining, workspace,
    or entry section — slim partitions help define different zones without
    blocking light or movement. Slatted wooden dividers, frosted glass
    frames or open shelf partitions look elegant while giving partial
    privacy. Since each space is different, precise factory sizing ensures
    stability, usability and consistent aesthetics.
  </p>

  <h3>8. Bathroom & Wash Units With Built-In Storage</h3>
  <p>
    Compact bathrooms also benefit from factory-made wash units designed
    with drawers, tall cabinets, mirror storage and ambient lighting. This
    creates clutter-free vanity areas and keeps toiletries organized. A
    floating wash unit further improves cleaning access and makes the
    bathroom look larger.
  </p>

  <h3>Why Factory-Made Works Best for Small Spaces</h3>
  <p>
    The reason modular factory furniture is effective in compact homes is
    accuracy. Corners, niches, beams or awkward structures that normally
    waste space can be converted into functional storage. Because the
    furniture is made after measuring the house, every inch is utilized in
    a clean and seamless way.
  </p>

  <p>
    Another benefit is flexibility. Over time, if your needs change, more
    sections or matching modules can be added to the same design without
    disturbing existing layouts. This is difficult to achieve with random
    ready furniture sets that never match in color, finish or proportion.
  </p>

  <h3>Conclusion</h3>
  <p>
    Small homes do not require compromise — they require smarter planning.
    When designed thoughtfully, factory-made furniture transforms compact
    rooms into beautiful, comfortable and highly organized living spaces.
    Accurate measurements, modular fittings, vertical storage and hidden
    functionality make everyday life easier and more spacious.
  </p>

  <p>
    If you are planning interiors for a compact home, always evaluate
    modular factory-made solutions before deciding on random ready-stock
    items. The difference reflects daily — in how the home feels, how well
    it functions and how effortlessly it stays clutter-free.
  </p>
</>

                )}

                {selectedPost.slug === "choosing-right-material-for-furniture" && (
                 <>
  <p>
    Selecting the right material for furniture is one of the most important
    decisions in home interiors. The way a bed, wardrobe, study, tall unit
    or TV wall performs over time depends heavily on the material inside
    the structure — not just the surface finish. Indian climate conditions,
    daily usage and long-term maintenance must be kept in mind before
    finalizing anything.
  </p>

  <p>
    When furniture is factory-made, materials are selected with more precision,
    thickness, edge sealing and internal stability. This ensures cleaner
    finishing and longer durability, especially when compared to random
    ready-stock items that may look attractive on the outside but are not
    designed for long-term use.
  </p>

  <h3>1. Solid Wood — Traditional Strength With Distinct Aesthetics</h3>
  <p>
    Solid wood has been used in Indian homes for decades because of its
    strength, natural texture and timeless beauty. It performs well in beds,
    dining tables, sofa frames and accent furniture. Solid wood is stable,
    can be polished multiple times and ages gracefully.
  </p>
  <p>
    However, solid wood can be heavier and slightly more expensive. For
    large wardrobes, modular kitchens or tall storage, engineered solutions
    are often more practical. Still, for premium pieces where natural grain
    is desired, solid wood remains unmatched.
  </p>

  <h3>2. Plywood — Best Balance of Durability and Practicality</h3>
  <p>
    Plywood is one of the most reliable and widely used materials for Indian
    furniture. Made by bonding multiple wood layers together, plywood offers
    excellent internal strength and resistance to bending. It works well in
    beds, wardrobes, tall units, TV consoles, partitions and kitchen
    cabinetry.
  </p>
  <p>
    When factory-made furniture uses plywood, the cutting and pressing
    machines ensure clean edges, aligned shutters and consistent strength.
    With proper laminates, finishing and edge-banding, plywood can easily
    handle daily weight, humidity and long-term wear.
  </p>

  <h3>3. MDF — Smooth Finishing and Decorative Detailing</h3>
  <p>
    MDF (Medium Density Fiberboard) is widely used for interior shutters,
    fluted panels, decorative trims, partitions and furniture with detailed
    carving. Its surface is extremely smooth, making it ideal for painting,
    CNC patterns and seamless finishing.
  </p>
  <p>
    MDF is not recommended for places where heavy load or constant water
    exposure is expected. However, when used thoughtfully for paneling,
    wardrobes, wall trims or decorative furniture with proper sealing,
    it delivers excellent aesthetics at a practical cost.
  </p>

  <h3>4. Engineered Wood / Laminated Boards — Value for Budget Projects</h3>
  <p>
    Engineered boards are commonly used for budget-friendly modular
    furniture. They are lightweight, easy to install and ideal for renting
    or temporary setups. The surface laminates and textures make them appear
    stylish and uniform.
  </p>
  <p>
    These materials perform well when kept dry and used for lighter storage.
    However, the internal load capacity is lower than plywood or solid wood.
    Therefore, they are better suited for shelves, partitions, compact TV
    units and decor pieces.
  </p>

  <h3>5. Why Edge-Banding Matters</h3>
  <p>
    Many people judge furniture only by surface laminate or polish, but the
    real longevity comes from proper edge-banding. Edge-banding seals the
    edges of the boards, preventing moisture entry, chipping and warping.
    In factory-made furniture, automatic edge-banding machines ensure a
    tight and seamless seal that improves performance and appearance.
  </p>

  <h3>6. Hardware and Fittings</h3>
  <p>
    Even the strongest material will underperform without proper hinges,
    channels, screws and supporting hardware. Factory-built furniture uses
    standardized fittings that match load requirements, shutter movement
    and drawer durability. This ensures quiet operation, longer life and
    easier maintenance.
  </p>

  <h3>7. Choosing the Right Material Based on Location</h3>
  <p>
    Indian homes experience humidity, seasonal changes and varying usage
    levels. For coastal areas or monsoon states, properly sealed plywood
    performs best. For decorative panels and trims, MDF is excellent. For
    structural weight like beds or tall storage, plywood or a combination
    of plywood and solid wood is ideal.
  </p>

  <p>
    Bedrooms need more storage and heavy load support. Living rooms need
    lighter modular TV units and partitions. Kitchens require moisture
    resistance and stable cabinets. Understanding these functional
    differences helps in the right selection.
  </p>

  <h3>Conclusion</h3>
  <p>
    Furniture materials should be chosen based on durability, internal
    strength, moisture response, aesthetics and long-term maintenance.
    While ready-stock options may look stylish, their internal stability
    is often uncertain.
  </p>
  <p>
    Factory-made furniture gives more control over materials, thickness,
    sealing and internal structure. With proper edge-banding, reliable
    finishing and standardized hardware, the furniture not only looks
    premium but also performs consistently for several years.
  </p>

  <p>
    If you are planning interiors for bedrooms, living rooms or kitchens,
    prioritizing the right material will ensure comfort, longevity and
    better value. Always evaluate the internal build, not just the outer
    appearance, and consult with professionals who understand modular
    manufacturing.
  </p>
</>

                )}

                {selectedPost.slug === "furniture-care-maintenance-tips" && (
             <>
  <p>
    Well-designed furniture can last for many years when it is maintained
    properly. Whether it is a bed, wardrobe, TV wall unit, study table or
    dining setup, regular care keeps the surface fresh, prevents moisture
    damage and improves overall usability. Most issues in furniture do not
    come from poor material — they come from everyday neglect and lack of
    simple upkeep.
  </p>

  <p>
    Factory-made modular furniture is easier to maintain because the surface
    sealing, edge-banding, joinery and finishing are more precise. The better
    the structure, the easier the cleaning and servicing becomes. With a few
    simple habits, furniture stays clean, sturdy and looking premium for
    longer periods of time.
  </p>

  <h3>1. Protect Furniture From Moisture and Spills</h3>
  <p>
    Water is one of the biggest reasons behind swelling, stains and surface
    dullness. Wipe spills immediately with a dry cloth and avoid leaving wet
    cups, bottles or plates directly on wooden surfaces. If you are in a
    monsoon or high-humidity region, ensure regular ventilation and avoid
    keeping furniture pressed tightly against damp walls.
  </p>
  <p>
    For dining tables and counters, use coasters and mats. This avoids heat
    marks, ring stains and unnecessary moisture exposure. Factory-made
    furniture with proper edge-banding and sealing handles moisture better,
    but prevention is always smarter than repair.
  </p>

  <h3>2. Clean With Gentle and Non-Chemical Methods</h3>
  <p>
    Avoid harsh chemicals or abrasive powders on furniture surfaces. They can
    remove finishing, scratch laminates and dull the polish. For everyday dust,
    use a microfiber cloth or a soft brush. For deeper cleaning, a slightly
    damp cloth followed by a dry wipe is ideal.
  </p>
  <p>
    Upholstery and cushions can be vacuumed periodically to remove dust. If
    cushions have covers, wash them occasionally to prevent odor and moisture
    buildup. Leatherette or fabric sofas also stay fresh with mild wiping and
    regular aeration.
  </p>

  <h3>3. Keep Furniture Away From Direct Sunlight</h3>
  <p>
    Continuous sunlight can fade polished wood, fabric upholstery or laminate
    shades. If a window receives strong light, use curtains, blinds or a sheer
    filter. Sunlight is fine in moderation, but long direct exposure can dry
    the surface and reduce its natural shine.
  </p>
  <p>
    This is especially important for wall trims, beds with headboards,
    partitions, dining tables and floating TV units that sit near a balcony or
    south-facing window.
  </p>

  <h3>4. Prevent Bending and Overloading</h3>
  <p>
    Shelves, wall units and wardrobes are designed based on weight capacity.
    Overloading them with heavy books or random storage can bend surfaces over
    time. Make sure shelves are evenly used and avoid stacking extremely heavy
    items unless the internal support is designed for it.
  </p>
  <p>
    Factory-made furniture is usually more stable because thickness and
    hardware are selected according to load requirement. Still, respecting
    realistic capacity ensures the furniture stays aligned and quiet.
  </p>

  <h3>5. Tighten Fixtures When Needed</h3>
  <p>
    Hinges, drawer channels and screws can loosen slightly with months of
    usage. Instead of waiting for visible misalignment, tighten screws gently
    during routine cleaning. If a shutter starts making sound or rubbing
    against another panel, minor alignment correction keeps it performing well
    without long-term stress.
  </p>
  <p>
    One advantage of factory-made furniture is that hardware is standardized.
    Replacement becomes easy, and servicing does not require dismantling the
    entire unit.
  </p>

  <h3>6. Regular Polishing and Surface Refresh</h3>
  <p>
    Furniture with solid wood, veneer or textured surfaces looks best with
    periodic polishing. This restores shine, protects the surface and fills
    micro scratches caused by everyday usage. For laminate surfaces, a soft
    wipe with mild soap water and thorough drying is enough for a fresh look.
  </p>
  <p>
    Avoid furniture polish sprays containing strong chemicals. Gentle
    maintenance done once every few months keeps furniture naturally glossy and
    reduces long-term wear.
  </p>

  <h3>7. Protect Beds and Sofas From Dust and Humidity</h3>
  <p>
    Bedrooms are prone to stored bedding, winter clothes and occasional
    humidity. If your bed has concealed storage, open it occasionally to let
    air circulate. For upholstered sofas, regular vacuuming helps prevent dust
    settlement, especially in high-traffic living rooms.
  </p>

  <h3>8. Allow Furniture to Breathe</h3>
  <p>
    Furniture performs best when air circulation is available. Leaving a small
    gap between the wall and wardrobes prevents moisture trapping. The same is
    true for tall storage placed in corners. Good ventilation reduces odor,
    keeps panels dry and avoids hidden swelling.
  </p>

  <h3>Conclusion</h3>
  <p>
    Furniture care is simple when done consistently. Gentle cleaning, moisture
    protection, sunlight control, periodic tightening and occasional polishing
    together ensure furniture lasts comfortably for several years.
  </p>
  <p>
    When furniture is factory-made, its internal structure, edge-banding and
    hardware quality already provide a strong base. With mindful maintenance,
    the furniture remains elegant, aligned and highly durable — a true balance
    of function and aesthetics.
  </p>
</>

                )}
              </div>
            </article>
          </div>
        </div>
      )}
    </main>
  );
}
