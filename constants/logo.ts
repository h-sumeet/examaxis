import aws from "@/public/logos/aws.png";
import azure from "@/public/logos/azure.png";
import cisco from "@/public/logos/cisco.png";
import googleCloud from "@/public/logos/google_cloud.png";
import servicenow from "@/public/logos/servicenow.png";
import type { StaticImageData } from "next/dist/shared/lib/image-external";

export interface LogoProps {
  src: StaticImageData;
  alt: string;
}

export interface LogoSectionProps {
   heading: string;
   description: string;
   items: LogoProps[];
}

export const LogoItems: LogoProps[] = [
  { src: aws, alt: 'AWS Logo' },
  { src: azure, alt: 'Azure Logo' },
  { src: cisco, alt: 'Cisco Logo' },
  { src: googleCloud, alt: 'Google Cloud Logo' },
  { src: servicenow, alt: 'ServiceNow Logo' },
];


export const logos: LogoSectionProps = {
    heading: "Trusted by Professional developers from leading companies",
    description: "People working at these companies trust Examaxis for their certification preparation.",
    items: LogoItems,
}