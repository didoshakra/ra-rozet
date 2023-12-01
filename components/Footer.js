import Link from "next/link";
import Image from "next/image";
import outschool from "../../public/outschool.svg";
import facebook from "../../public/Social/facebook.svg";
import twitter from "../../public/Social/twitter.svg";
import instagram from "../../public/Social/instagram.svg";
import youtube from "../../public/Social/youtube.svg";

export default function Footer() {
  return (
    <section className=" bg-[#1B1B1B] px-2 pb-[50px] pt-[25px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="max-x-[232px] mt-4 p-1">
            <Link href="/">
              <Image src={outschool} alt={"outschool"} />
            </Link>
            <p className="mt-4 text-xs text-white">
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
              vulputate eu vitae tristique.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:max-w-full sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
            <div className="mt-4">
              <p className="text-xl font-medium text-white ">General</p>
              <ul>
                <li>
                  <Link
                    className="hover:text-bluviolet p-1 text-sm text-white transition-colors"
                    href="/"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Courses
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-xl font-medium text-white ">Policies</p>
              <ul>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Security safeguards
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            {/* col-span-2=2-ширина на 2-і колонки */}
            <div className="col-span-2 mt-4 md:col-span-1">
              <p className="text-xl font-medium text-white ">Get in touch</p>
              <p className="mt-2 text-xs text-white">
                Follow us on social media and stay updated with the latest
                information about our services
              </p>
              <ul className=" mt-2 flex items-center gap-3">
                <li>
                  <Link href="/">
                    <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                      <Image
                        src={facebook}
                        width={24}
                        height={24}
                        alt={"icon"}
                      />
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                      <Image
                        src={twitter}
                        width={24}
                        height={24}
                        alt={"icon"}
                      />
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white transition-colors"
                    href="/"
                  >
                    <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                      <Image
                        src={instagram}
                        width={24}
                        height={24}
                        alt={"icon"}
                      />
                    </p>{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-bluviolet text-sm text-white  transition-colors"
                    href="/"
                  >
                    <p className="hover:bg-bluviolet flex h-7 w-7 items-center justify-center rounded-full bg-white  transition-colors">
                      <Image
                        src={youtube}
                        width={24}
                        height={24}
                        alt={"icon"}
                      />
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
