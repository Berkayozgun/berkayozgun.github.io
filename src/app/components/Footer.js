import React from "react";
import MailSVG from "../images/MailSVG";
import LinkedinLogo from "../images/LinkedinLogo";
import GithubLogo from "../images/GithubLogo";

function Footer() {
  return (
    <footer className='flex flex-row items-center justify-center self-end text-center w-full py-4 bg-gray-800 mt-auto text-white gap-4'>
      <div className='flex flex-row items-center justify-center text-center gap-4'>
        © 2024 Berkay Özgün
        <span className='text-white'>|</span>
        <a href='mailto:berkayozgun001@gmail.com'>
          <MailSVG />
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/berkayozgun'>
          <LinkedinLogo />
        </a>
      </div>
      <div className='flex flex-row items-center justify-center text-center gap-4'>
        <a href='https://www.github.com/Berkayozgun/'>
          <GithubLogo />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
