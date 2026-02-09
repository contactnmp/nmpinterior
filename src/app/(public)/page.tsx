import FeaturedProjects from "../ui/component/info/FeaturedProjects"
import HeroInfo from "../ui/component/info/HeroInfo"
import OurApproach from "../ui/component/OurApproach"
import Project from "../ui/component/projects/Project"
import Reviews from "../ui/component/review/Reviews"
import Slider from "../ui/component/slider/Slider"
import WhyNmp from "../ui/component/whyNmp/WhyNmp"
import { client } from "@/lib/sanity"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NMP Interior Design | Luxury Residential & Hospitality Studio London",
  description: "Led by Noralyn Matusalem Pitts, NMP creates refined, high-end interiors for residential homes and boutique hospitality projects across the UK and Ireland.",
  keywords: [
    "Interior Design London",
    "Luxury Interior Design",
    "Residential Interiors",
    "Boutique Hospitality Design",
    "Noralyn Matusalem Pitts",
    "NMP Studio",
    "High-end Renovation UK",
    "Commercial Interior Design"
  ],
  openGraph: {
    title: "NMP Interior Design | London",
    description: "Refined residential and boutique hospitality interior design studio led by Noralyn Matusalem Pitts.",
    url: "https://nmpinterior.co.uk",
    siteName: "NMP Interior Design",
    locale: "en_GB",
    type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NMP Interior Design Portfolio",
        },
      ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

const Home = async () => {
  const data = await client.fetch(`
    {
      "sliderData": *[_type == "slider"][0] {
        heroSlider[] { asset, _key }
      },
      "heroData": *[_type == "heroInfo"][0] {
        title,
        description,
        buttonText
      },
      "featuredData": *[_type == "featuredInfo"][0] {
        tagline,
        heading,
        description
      },
      "projectsList": *[_type == "project"] | order(_createdAt desc)[0...4] {
        _id,
        title,
        description,
        mainImage
      },
      "whyNmpData": *[_type == "whyNmp"][0] {
        heading,
        subheading,
        cards[] {
          title,
          subtitle,
          description
        }
      },
      "ourApproachData": *[_type == "ourApproach"][0] {
        tagline,
        heading1,
        heading2,
        description,
        buttonText,
        image
      },
      "reviewsData": *[_type == "reviews"][0] {
        tagline,
        heading,
        list[] {
          _key,
          name,
          text
        }
      }
    }
  `, {}, { cache: 'no-store' });

  return (
    <div>
      <Slider images={data?.sliderData?.heroSlider} />
      
      <HeroInfo 
        title={data?.heroData?.title} 
        description={data?.heroData?.description} 
        buttonText={data?.heroData?.buttonText}
      />
      
      <FeaturedProjects 
        tagline={data?.featuredData?.tagline} 
        heading={data?.featuredData?.heading} 
        description={data?.featuredData?.description}
      />
      
      <Project projects={data?.projectsList} />
      
      <WhyNmp data={data?.whyNmpData}/>

      <OurApproach data={data?.ourApproachData} />
      
      <Reviews data={data?.reviewsData}/>
    </div>
  )
}

export default Home