import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaPatreon, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { SiWebtoon } from "react-icons/si";

function Footer() {
  return (
    <div className="flex h-14 w-screen items-center justify-center gap-14 bg-stone-700 text-stone-200 dark:bg-zinc-700 dark:text-stone-200 max-sm:gap-10">
      <a href="https://www.patreon.com/koongbg" target="_blank">
        <FaPatreon size={25} />
      </a>
      <a
        href="https://www.webtoons.com/en/canvas/pointillism/list?title_no=835155"
        target="_blank"
      >
        <SiWebtoon size={25} />
      </a>
      {/* Facebook */}
      <a href="https://www.facebook.com/koongbg" target="_blank">
        <FaFacebook size={25} />
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/koong.bg" target="_blank">
        <FaInstagram size={26} />
      </a>
      {/* X */}
      <a href="https://twitter.com/koong_bg" target="_blank">
        <FaXTwitter size={24} />
      </a>
      {/* TikTok */}
      <a href="https://www.tiktok.com/@koongbg" target="_blank">
        <FaTiktok size={24} />
      </a>
    </div>
  );
}

export default Footer;
