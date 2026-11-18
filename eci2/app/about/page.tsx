import type { Metadata } from "next";
import { PageIntro, ContactBand } from "@/components/catalogue";
export const metadata: Metadata = { title: "About ECI" };
export default function About() {
  return (
    <>
      <PageIntro
        title="Experience that connects."
        description="Defence and security expertise, built on a foundation in networking and IT. Based in Bangkok. Working with you from the first conversation."
        items={[{ name: "About" }]}
      />
      <section className="container about-lead">
        <div>
          <h2>
            Established in 2000.
            <br />
            Focused on what comes next.
          </h2>
          <p>
            E&C Internetwork Co., Ltd. supplies equipment and supports systems for defence, security
            and technology projects.
          </p>
          <p>
            Our experience spans surveillance, radar, mobile command systems and IT infrastructure.
            We bring together hardware, software and practical support to meet each project’s
            requirements.
          </p>
        </div>
        <figure>
          <img
            src="/images/mobile-command-center-exterior.webp"
            alt="ECI project team with a Thai Maritime Enforcement Command Center vehicle"
          />
          <figcaption>Thai Maritime Enforcement Command Center · Company profile</figcaption>
        </figure>
      </section>
      <section className="values-section">
        <div className="container values-layout">
          <h2>How we work.</h2>
          <div>
            <p className="large-copy">
              Provide quality hardware and software. Share knowledge. Keep improving the way we
              solve problems.
            </p>
            <div className="values-list">
              {[
                ["People", "An open, supportive working environment."],
                ["Responsibility", "Transparency, accountability and ethical conduct."],
                ["Innovation", "New ideas that improve quality and performance."],
                ["Management", "Responsive service and effective use of time."],
                [
                  "Environment",
                  "Responsible use of resources through reuse, recycling and reduction.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>Our work, in the field.</h2>
          <p>
            A selection from the
            <br />
            ECI company profile.
          </p>
        </div>
        <div className="project-grid">
          <figure>
            <img
              src="/images/surveillance-radar-tower.webp"
              alt="Outdoor surveillance radar tower"
              loading="lazy"
            />
            <figcaption>Surveillance radar</figcaption>
          </figure>
          <figure>
            <img
              src="/images/defense-security-2025-booth.webp"
              alt="ECI exhibition booth at Defense and Security 2025"
              loading="lazy"
            />
            <figcaption>Defense & Security 2025</figcaption>
          </figure>
          <figure>
            <img
              src="/images/training-classroom-wide.webp"
              alt="Participants attending an ECI classroom training session"
              loading="lazy"
            />
            <figcaption>Knowledge and training</figcaption>
          </figure>
        </div>
      </section>
      <section className="partners-section container section">
        <div className="section-heading">
          <h2>Our partners.</h2>
          <p>
            Technology and product partners
            <br />
            featured in our company profile.
          </p>
        </div>
        <div className="partner-grid">
          <img
            className="partner-core"
            src="/images/partners-core-group.png"
            alt="Panasonic, Dell, Allied Telesis, LG, Fluke Networks, AMP NETCONNECT, i-PRO, Microsoft Windows, TOA, APC, Schneider Electric, Interlink, Cisco and Ubiquiti"
            loading="lazy"
          />
          {[
            ["thales", "Thales"],
            ["cambridge-pixel", "Cambridge Pixel"],
            ["mirasys", "Mirasys"],
            ["luxriot", "Luxriot"],
            ["gards", "GARDS"],
          ].map(([slug, name]) => (
            <div key={slug}>
              <img src={`/images/partner-${slug}.png`} alt={name} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
