import { client } from "@/lib/sanity"
import Privacy from "./PrivacyComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy | NMP Interior Design',
  description: 'Learn how NMP Interior Design collects, uses, and protects your personal data. Our commitment to privacy and data protection standards.',
}

const PrivacyPage = async () => {
  const data = await client.fetch(`
    *[_type == "privacy"][0] {
      title,
      policyBlocks[] {
        _key,
        heading,
        text
      },
      contactNote
    }
  `, {}, { cache: 'no-store' });

  return (
    <main> 
        <Privacy data={data} />
    </main>
  )
}

export default PrivacyPage