import mahara from "@/../public/skillsImage/mahara.jpeg";
import meta from "@/../public/skillsImage/meta.jpeg";
import udacity from "@/../public/skillsImage/udacity.jpeg";
import proff from "@/../public/skillsImage/proff.jpeg";

export default function Certifications() {
    let Certifecations = [
        {
          title: "mahara tech",
          image: mahara,
          desc: "",
          link:
            "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=35649&code=Hr1jzjgr70&qrcode=1",
        },
        {
          title: "Introduction to Front-End Development",
          image: meta,
          desc: "",
          link:
            "https://www.coursera.org/account/accomplishments/verify/WV896WPB9U74",
        },
        {
          title: "The Web Development Chalenger Track",
          image: udacity,
          desc: "",
          link: "https://www.udacity.com/certificate/DYJMQGLN",
        },
        {
          title: "Professional Front-End Web Development",
          image: proff,
          desc: "",
          link: "https://www.udacity.com/certificate/EHSNCN9G",
        },
      ];
    
  return (
   <>

   </>
  )
}
