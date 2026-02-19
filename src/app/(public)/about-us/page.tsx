import { client } from "@/lib/sanity"
import AboutComponent from "./AboutComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NMP Interior Design | Noralyn Matusalem Pitts",
  description: "Meet Noralyn Matusalem Pitts, the creative force behind NMP. With over 25 years of experience in high-end hospitality and refined residential interiors across the UK.",
  keywords: [
    "Noralyn Matusalem Pitts",
    "NMP Interior Design Profile",
    "Interior Designer London",
    "Luxury Hospitality Design Experience",
    "Residential Interiors UK",
    "About NMP Studio"
  ],
  openGraph: {
    title: "About NMP Interior Design | Noralyn Matusalem Pitts",
    description: "Meet the founder. Over 25 years of expertise in creating refined residential and boutique hospitality spaces.",
    url: "https://nmpinteriors.co.uk/about-us",
    siteName: "NMP Interior Design",
    locale: "en_GB",
    type: "profile",
  },
}

const AboutPage = async () => {
  const data = await client.fetch(`
    *[_type == "about"][0] {
      title,
      description1,
      description2,
      quote,
      mainImage,
      secondaryImage,   
      secondaryDescription1,
      secondaryDescription2
    }
  `, {}, { cache: 'no-store' });

  return (
    <main> 
       <AboutComponent data={data} />
    </main>
  )
}

export default AboutPage