import { Typography } from "@mui/material";
// @mui icons
import FacebookIcon from "../../assets/Icons/facebookIcon";
import TwitterIcon from "../../assets/Icons/twitterIcon";
import YoutubeIcon from "../../assets/Icons/youtubeIcon";
import LinkedInIcon from "../../assets/Icons/linkedinIcon";

const date = new Date().getFullYear();

const siteData = {
  brand: {
    name: "ANSSD",
    route: "/about-us"
  },
  socials: [
    {
      icon: <FacebookIcon sx={{ height: "20px" }} />,
      link: "https://www.facebook.com/"
    },
    {
      icon: <TwitterIcon sx={{ width: "20px" }} />,
      link: "https://twitter.com/"
    },
    {
      icon: <YoutubeIcon sx={{ width: "22px" }} />,
      link: "https://www.youtube.com/"
    },
    {
      icon: <LinkedInIcon sx={{ height: "21.5px" }} />,
      link: "https://linkedin.com/"
    }
  ],
  menu1: [
    {
      name: "Most Viewed",
      items: [
        {
          name: "Our Team ",
          href: "#n"
        },
        {
          name: "Who We Are",
          href: "#"
        },
        {
          name: "What We Do",
          href: "#"
        },
        {
          name: "Operation & Safety",
          href: "#"
        },
        {
          name: "Personal Licensing",
          href: "#"
        }
      ]
    }
  ],
  menu2: [
    {
      name: "About Website",
      items: [
        { name: "Copyright", href: "#" },
        {
          name: "Privacy Policy",
          href: "#"
        },
        {
          name: "Disclaimer",
          href: "#"
        },
        {
          name: "Accessibility",
          href: "#"
        }
      ]
    }
  ],
  menu3: [
    {
      name: "Documents",
      items: [
        {
          name: "Civil Aviation Act, 2015",
          href: "#"
        },
        {
          name: "Civil Aviation Authority Act,",
          href: "#"
        },
        {
          name: "Civil Aviation Security Rule, 2016",
          href: "#"
        },
        {
          name: "Civil Aviation Security Rule - English",
          href: "#"
        },
        {
          name: "Various SOPs",
          href: "#"
        }
      ]
    }
  ],

  copyright: (
    <Typography variant="body1" textAlign="center">
      Copyright &copy; {date} - All Rights Reserved
    </Typography>
  )
};

export default siteData;
