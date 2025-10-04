// Type declarations to fix React 19 compatibility with react-icons
declare module 'react-icons/fa' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = ComponentType<IconBaseProps>;
  
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaTwitter: IconType;
  export const FaYoutube: IconType;
  export const FaHeart: IconType;
  export const FaGlobe: IconType;
  export const FaEnvelope: IconType;
  export const FaArrowUp: IconType;
  export const FaTimes: IconType;
  export const FaBars: IconType;
  export const FaCode: IconType;
  export const FaUsers: IconType;
  export const FaMountain: IconType;
  export const FaHandshake: IconType;
  export const FaCheckCircle: IconType;
  export const FaPaperPlane: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaPhone: IconType;
  export const FaRocket: IconType;
  export const FaArrowRight: IconType;
  export const FaInstagram: IconType;
  export const FaDiscord: IconType;
}
declare module 'react-icons/si' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = ComponentType<IconBaseProps>;
  
  export const SiDiscord: IconType;
}

declare module 'react-icons' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export type IconType = ComponentType<IconBaseProps>;
}