import Header from "@/app/ui/component/header/Header"; 
import Layout from "@/app/ui/Layout";
import Footer from "@/app/ui/component/footer/Footer";
import { PopupProvider } from "@/context/PopupContext";
import Popup from "@/app/ui/Popup";
import { client } from "@/lib/sanity";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await client.fetch(`
    {
      "headerData": *[_type == "header"][0] {
        logo,
        buttonText
      },
      "footerData": *[_type == "footer"][0] {
         ctaHeading, ctaButton, logo, copyright, instagram, facebook, email, phone
      }
    }
  `, {}, { cache: 'no-store' });

  return (
    <div>
        <PopupProvider>
          <Layout>
            <Header data={data?.headerData}/>
            {children}
            <Footer data={data?.footerData}/>
          </Layout>
          <Popup/>
        </PopupProvider>
    </div>
  );
}