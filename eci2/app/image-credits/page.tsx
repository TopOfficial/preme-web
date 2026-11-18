import type { Metadata } from "next";
import { PageIntro } from "@/components/catalogue";
export const metadata: Metadata = { title: "Image credits" };
const credits = [
  [
    "Naval opening photograph",
    "PH1 Robert McRill / U.S. Navy",
    "https://commons.wikimedia.org/wiki/File:USS_Mustin_(DDG-89).jpg",
  ],
  [
    "Air",
    "Todd Schannuth / U.S. Air Force",
    "https://commons.wikimedia.org/wiki/File:Edwards_AFB_50th_Anniversary_F-16_Fighting_Falcon_flies_over_the_desert_of_Southern_California_(8482509).jpg",
  ],
  [
    "Naval",
    "Ismael Martinez / U.S. Navy",
    "https://commons.wikimedia.org/wiki/File:U_S_Navy_Destroyer_Conducts_Freedom_of_Navigation_Operation_in_the_South_China_Sea_(8395632).jpg",
  ],
  [
    "Monitoring centre",
    "Josef Cole / U.S. Cyber Command",
    "https://www.dvidshub.net/image/6762560/us-cyber-command-integrated-intelligence-center-joint-operations-center",
  ],
  [
    "Mountain rescue",
    "Adeline Witherspoon / U.S. National Guard",
    "https://www.dvidshub.net/image/9137052/rainier-dustoff-rescue-washington-national-guard-aviators-train-medevac-missions-mount-st-helens",
  ],
  [
    "Maritime rescue",
    "Ryan Dickinson / U.S. Coast Guard",
    "https://www.dvidshub.net/image/6106129/coast-guard-air-station-savannah-conducts-search-and-rescue-demonstration-charleston",
  ],
];
export default function ImageCredits() {
  return (
    <>
      <PageIntro
        title="Image credits."
        description="Product photographs, project images and partner logos are supplied in the ECI company profile. Additional representative imagery illustrates the five product areas and sample entries."
        items={[{ name: "Image credits" }]}
      />
      <section className="container section">
        <p>
          Representative photographs do not identify confirmed ECI product models. The appearance of
          U.S. Department of Defense visual information does not imply or constitute DoD
          endorsement.
        </p>
        <div className="service-list">
          {credits.map(([title, credit, url]) => (
            <a href={url} key={title} target="_blank" rel="noopener noreferrer">
              <h3>{title}</h3>
              <p>{credit}</p>
            </a>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          Land equipment imagery and the ECI logo are supplied by ECI. Partner marks remain the
          property of their respective owners.
        </p>
      </section>
    </>
  );
}
