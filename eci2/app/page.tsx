import { areas } from "@/lib/catalogue";
import { Arrow } from "@/components/icons";
import { ContactBand } from "@/components/catalogue";
import { Reveal } from "@/components/reveal";
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img
          className="hero-image"
          src="/images/hero.jpg"
          alt="Naval vessel underway at sea"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <Reveal className="container hero-content" duration={900}>
          <h1>
            E &amp; C
            <br />
            Internetwork
          </h1>
          <div className="hero-bottom">
            <p>
              Connecting your requirements with the right
              <br className="desktop-break" /> equipment, systems and support.
            </p>
            <a className="button button-white" href="#about">
              Discover our company <Arrow diagonal />
            </a>
          </div>
        </Reveal>
        <span className="hero-caption">Representative naval imagery</span>
      </section>
      <section className="company-story" id="about">
        <div className="container story-grid">
          <Reveal className="story-image" direction="left">
            <img
              src="/images/project-command.webp"
              alt="Interior of an ECI mobile command vehicle"
              loading="lazy"
            />
            <span>Mobile command systems · ECI company profile</span>
          </Reveal>
          <Reveal className="story-copy" direction="right" delay={100}>
            <span className="section-eyebrow">About us</span>
            <h2>
              Technology is only
              <br />
              part of the picture.
            </h2>
            <p>Understanding the people, the environment and the task comes first.</p>
            <p>
              Established in 2000, E &amp; C Internetwork brings a background in networking and IT
              to defence and security requirements. We connect product supply with consultation,
              system design, installation and maintenance.
            </p>
            <a href="/about" className="text-link">
              About E &amp; C Internetwork <Arrow diagonal />
            </a>
          </Reveal>
        </div>
      </section>
      <section className="container section support-preview" id="support">
        <div className="section-heading">
          <h2>
            Support, from the
            <br />
            first conversation.
          </h2>
          <p>
            Practical expertise around
            <br />
            the equipment we supply.
          </p>
        </div>
        <div className="service-list">
          {[
            ["Consultation", "Start with your requirements and operating environment."],
            ["System design", "Bring equipment and systems together around your project."],
            ["Installation & maintenance", "Support equipment through setup and ongoing use."],
          ].map(([name, description], index) => (
            <Reveal key={name} delay={index * 70}>
              <a href="/support">
                <h3>{name}</h3>
                <p>{description}</p>
                <Arrow diagonal />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container section product-overview" id="products">
        <div className="section-heading">
          <h2>
            Built around
            <br />
            your environment.
          </h2>
          <div>
            <p>
              Five areas of focus.
              <br />
              One team to bring them together.
            </p>
            <a href="/products/all" className="text-link">
              View all products <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="area-grid">
          {areas.map((a, index) => (
            <Reveal className={`area-card area-${a.slug}`} key={a.slug} delay={(index % 3) * 70}>
              <a href={`/products/${a.slug}`}>
                <div className="area-image">
                  <img src={a.image} alt={a.alt} loading="lazy" />
                </div>
                <div className="area-card-text">
                  <h3>{a.name}</h3>
                  <Arrow diagonal />
                </div>
                <p>{a.description}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
