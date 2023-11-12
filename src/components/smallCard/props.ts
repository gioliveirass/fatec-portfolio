import { IconType } from "react-icons";

export default interface SmallCardProps {
  icon: IconType;
  text: string;
  link?: string;
  reverseColors?: boolean;
}
