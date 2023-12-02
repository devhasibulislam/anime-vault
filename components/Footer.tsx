import Image from "next/image";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();

  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
        onClick={() => router.replace("/")}
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          onClick={() =>
            router.replace("https://www.tiktok.com/@devhasibulislam")
          }
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          onClick={() => router.replace("https://www.instagram.com/devhasibulislam")}
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          onClick={() => router.replace("https://twitter.com/devhasibulislam")}
        />
      </div>
    </footer>
  );
}

export default Footer;
