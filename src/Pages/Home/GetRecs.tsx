import BrandonProfile from "../../assets/Recommendations/BrandonProfile.jpeg";
import MadiProfile from "../../assets/Recommendations/MadiProfile.jpeg";
import PaulProfile from "../../assets/Recommendations/PaulProfile.jpeg";
import MoProfile from "../../assets/Recommendations/MoProfile.jpeg";

export interface Rec {
  title: string;
  relationship: string;
  profileImage: string;
  profileLink: string;
  rec: string;
}
export function getMadiRecommendation(): Rec {
  return {
    title: "Designer at Modii",
    relationship: "Worked with Edward",
    profileImage: MadiProfile,
    profileLink: "https://www.linkedin.com/in/madisoningram/",
    rec: `Working with EJ was an incredible experience. We had some riveting debates and discussions, and through it all, we taught each other a lot about communication and teamwork. The best part was that even when we disagreed or debated, we always walked out of the meeting as friends, ready to tackle the next challenge together.`,
  };
}

export function getMoRecommendation(): Rec {
  return {
    title: "HR at Modii",
    relationship: `Was Edward's HR contact`,
    profileImage: MoProfile,
    profileLink: "https://www.linkedin.com/in/maureenmccanna/",
    rec: `He is adaptable, reliable, proactive, collaborative and excited by hands-on opportunities to explore his way through problems. EJ’s humility shows each time he presents an impressive new feature that elevates our product, turning his technical achievements into shared celebrations for the team. EJ is known for his kindness toward others and genuine care for solving pain points for users, and he'll surprise you with his delightful humor!`,
  };
}

export function getBrandonRecommendation(): Rec {
  return {
    title: "Engineering Manager at Nutrien",
    relationship: "Managed Edward directly",
    profileImage: BrandonProfile,
    profileLink: "https://www.linkedin.com/in/brandon-dehamer/",
    rec: `He promptly delivers functionality usually assigned to Senior Software Engineers. Engineers, including those with significantly more experience, seek Edward’s advice when dealing with complex problems. Edward’s engineering abilities greatly outpace his years of experience. Edward is patient with his teammates and is quick to volunteer when someone needs assistance. Edward performs at a Senior Software Engineer level. I hope to work with Edward again someday.`,
  };
}
export function getPaulRecommendation(): Rec {
  return {
    title: "DevSecOps/Software Engineer at DoD",
    relationship: "Was a senior to Edward",
    profileImage: PaulProfile,
    profileLink: "https://www.linkedin.com/in/paulqualls/",
    rec: `Edward is one of those people that you want on your team because he's always either trying to learn, or share what he has learned. He takes a "lean in" approach to new technologies, and is often the guy on the team that finds the breakthrough way to get something done more elegantly or efficiently.`,
  };
}
