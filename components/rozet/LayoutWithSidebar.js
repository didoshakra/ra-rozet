import Link from "next/link"
import Image from "next/image"
import buromobelexperte_brands from "@/public/icon_svg/ecomerc/buromobelexperte_brands.svg"
// import promo_banner from "/public/baners/promo_baner.jpg"
import promo_banner from "/public/images/home/VitrynaBakal-930-620.jpg"

export default function LayoutWithSidebar() {
  return (
    <section className=" bg-red-100 px-2 pb-[50px] pt-[25px]">
      <div className="mx-auto max-w-[1160px] bg-red-200">
        {/*  */}
        <div className="flex flex-col justify-between md:flex-row md:gap-3">
          <div className="p-1 max-w-[232px] mt-4  bg-red-300">
            <Link href="/">
              <Image src={buromobelexperte_brands} width={16} height={16} alt={"icon"} />
            </Link>
            <ul>
              <li className="break-words">
                1111111111111122222 2222222222222 2222222222222222 22222222222222222 222222221111
              </li>
              <li>333333333333333 333333333333333 333333333333333 3333333333333 333333333333333 33333333333333 3333</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
              <li>111111111111111111</li>
            </ul>
            <p className="mt-4 text-xs text-white">
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae vulputate eu vitae tristique.
            </p>
          </div>
          {/* <div className="flex flex-col gap-1 bg-orange-500"> */}
          {/* <div className="max-h-[220px] bg-orange-500"> */}
          <div className="p-1 bg-orange-500">
            {/* <div className=" relative max-h-[220px] bg-slate-200"> */}
            <div className="p-1 bg-slate-200">
              {/* overflow-:перелив по висоті: hidden-обрізає/visibble-не обрізає/scroll-скрол/auto-скрол*/}
              {/* <div className="p-1 h-[200px] w-[400px] max-h-[300px] overflow-hidden rounded-xl"> */}
              <div className="max-h-[300px] overflow-hidden">
                {/* / показує картинку по розмірах заданій у батьку */}
                <Image className="h-auto w-full max-w-full" src={promo_banner} alt={"baner"} />
              </div>
              <p className="mt-4 text-xs text-white">Знижки в категоріях діють до 01.08.2023 23:59 </p>
            </div>
            {/*  */}
            <div className="p-1 sm:gap-3 sm:max-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-lime-200">
              <div className="mt-4  bg-lime-300">
                <p className="text-xl font-medium text-white ">General</p>
                <ul>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-4  bg-lime-300">
                <p className="text-xl font-medium text-white ">Policies</p>
                <ul>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Security safeguards
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Terms of service
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>
              {/* col-span-2=2-ширина на 2-і колонки */}
              <div className="col-span-2 mt-4 md:col-span-1  bg-lime-300">
                <p className="text-xl font-medium text-white ">Get in touch</p>
                <p className="mt-2 text-xs text-white">
                  Follow us on social media and stay updated with the latest information about our services
                </p>
                <ul className=" mt-2 flex items-center sm:gap-3">
                  <li>
                    <Link href="/">
                      <p className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors  hover:bg-bluviolet">
                        {/* <Image src={facebook} width={24} height={24} alt={"icon"} /> */}
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      <p className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors  hover:bg-bluviolet">
                        {/* <Image src={twitter} width={24} height={24} alt={"icon"} /> */}
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors hover:text-bluviolet" href="/">
                      <p className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors  hover:bg-bluviolet">
                        {/* <Image src={instagram} width={24} height={24} alt={"icon"} /> */}
                      </p>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm text-white transition-colors  hover:text-bluviolet" href="/">
                      <p className="flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors  hover:bg-bluviolet">
                        {/* <Image src={youtube} width={24} height={24} alt={"icon"} /> */}
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" font-normaltext- mt-10 text-center text-xs  tracking-[-0.24px] text-[#BDB9B9]">
          2022 - @OUTSCHOOL all right deserved
        </p>
      </div>
    </section>
  )
}
