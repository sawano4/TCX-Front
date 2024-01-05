import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-white bottom-0 z-[100] border-t-2 border-[#0077B6]">
      <div className="w-full px-[8vw] bg-white">
        <div className=" py-[4vh]">
          <div className="flex md:flex-row flex-col md:justify-between gap-[6vh] items-center">
            <ul className="flex gap-[4vw] text-[1.5rem]">
              <li className="text-[#0077B6] text-[1.1rem]">
                <Link to="/Glossary" className="font-Gilroy">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            <ul className="flex gap-[4vw] text-[1.5rem]">
              <li className="text-[#0077B6] text-[1.1rem]">
                <Link to="/Glossary" className="font-Gilroy">
                ©2023, All right reserved.
                </Link>
              </li>
            </ul>

            <div className="flex gap-[1vw]">
              <img src={"/LinkedIn.png"} alt="LinkedIn" />
              <img src={"/Facebook.png"} alt="Facebook" />
              <img src={"/Instagram.png"} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;