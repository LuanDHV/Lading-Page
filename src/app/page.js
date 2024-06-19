import FourCheck from "@/components/FourCheck";
import MainTable from "@/components/MainTable";
import OneCheck from "@/components/OneCheck";
import ThreeCheck from "@/components/ThreeCheck";
import TwoCheck from "@/components/TwoCheck";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className="relative">
          <div className="mx-auto h-[336px] w-[390px] bg-gradient-to-b from-[#7715F9] to-[#D63DFF] md:w-[1440px]">
            <div className="relative mx-auto flex h-[80px] w-[390px] items-center justify-between rounded-[20px] bg-gradient-to-t from-[#D1D1D126] to-[#6666660D] px-5 md:top-[20px] md:w-[1108px]">
              <div className="hidden h-[22px] w-[463px] gap-16 text-sm font-medium text-white md:flex">
                <Link href="#">Gallery</Link>
                <Link href="#">
                  Solutions
                  <Image
                    src="/imgs/ic-plus.png"
                    alt="ic-plus"
                    width={9.38}
                    height={9.38}
                    objectFit="cover"
                    className="ml-4 inline-block"
                  />
                </Link>
                <Link href="#">Pricing</Link>
              </div>
              <Image
                src="/imgs/logo-footer-2.png"
                alt="logo"
                width={98}
                height={37}
                objectFit="cover"
              />
              <div className="flex h-[40px] w-[463px] items-center justify-end gap-4 text-sm font-medium text-white md:gap-16">
                <Link
                  href="#"
                  className="hidden h-[21.8px] w-[46.06px] md:inline-block"
                >
                  Gallery
                </Link>
                <button className="h-[40px] w-[94px] rounded-xl bg-gradient-to-t from-[#7D66F5] to-[#4A29C2]">
                  Sign Up
                </button>
                <Image
                  src="/imgs/ic-bars.png"
                  alt="ic-bars"
                  width={36}
                  height={36}
                  objectFit="cover"
                  className="inline-block md:hidden"
                />
              </div>
            </div>
            <div className="mt-[30px]">
              <h1 className="mx-auto h-[56px] w-[127px] text-[39px] text-[#EFEFF1]">
                Pricing
              </h1>
              <p className="mx-auto h-[39px] w-[338.18px] text-[23px] text-[#EFEFF1] opacity-60">
                Use Threads for free with your
              </p>
              <p className="mx-auto h-[67px] w-[296.64px] text-[23px] text-[#EFEFF1] opacity-60">
                whole team or upgrade to enable even more features.
              </p>
            </div>
          </div>
          <div className="absolute left-1/2 top-0 z-[20] h-[490px] w-[2586px] -translate-x-1/2 transform">
            <img src="/imgs/header.png" alt="header" />
          </div>
        </div>
      </section>
      <section>
        <div className="relative z-50 mt-6 px-9 md:px-[72px]">
          <div className="mx-auto grid grid-rows-3 justify-items-center gap-[16px] text-white md:h-[545px] md:w-[940px] md:grid-cols-3">
            <div className="grid h-[444px] w-[351px] justify-items-start gap-4 rounded-[20px] bg-gradient-to-t from-[#42424200] to-[#7070B233] p-9 md:h-[545px] md:w-[302px] md:justify-items-center md:p-4">
              <div className="grid h-[37px] w-[78.34px] items-center text-[23px] md:h-[30px] md:w-[65.41px] md:text-[19px]">
                Starter
              </div>
              <div className="grid h-[48px] w-[230.69px] grid-cols-2 items-center gap-[16px] md:block md:h-[106px] md:w-[105px]">
                <p className="text-[51px]">Free</p>
                <p className="text-sm">Unlimited users and guests</p>
              </div>
              <div className="grid h-[192px] w-[279px] grid-rows-5 gap-[16px] pb-[20px] pt-[20px] text-xs md:h-[281px] md:w-[243.59px] md:pb-[101px] md:text-base">
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">Unlimited users</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">All integrations and APIs </span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">50 threads</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">500 chat messages</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">SOC2 + GDPR compliance</span>
                </div>
              </div>
              <button className="h-[48px] w-[270.67px] rounded-lg bg-[#F2F2F2] text-sm font-bold text-[#0A0517]">
                Sign up today
              </button>
            </div>
            <div className="grid h-[410px] w-[351px] justify-items-start gap-4 rounded-[20px] bg-gradient-to-t from-[#42424200] to-[#22672E4D] p-9 md:h-[545px] md:w-[302px] md:justify-items-center md:p-4">
              <div className="h-[37px] w-[78.34px] text-[23px] text-[#6FFF88] md:h-[30px] md:w-[65.41px] md:text-[19px]">
                Professional
              </div>
              <div className="grid h-[48px] w-[230.69px] grid-cols-2 items-center gap-[16px] md:block md:h-[106px] md:w-[105px]">
                <p className="text-[51px]">$10</p>
                <p className="text-sm">
                  per user/month
                  <span className="block opacity-50">billed monthly</span>
                </p>
              </div>
              <div className="grid h-[158px] w-[279px] grid-rows-5 gap-[16px] pb-[20px] pt-[20px] text-xs md:h-[281px] md:w-[243.59px] md:pb-[101px] md:text-base">
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">Unlimited users</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">All integrations and APIs</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">Unlimited threads & chats</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">SOC2 + GDPR compliance</span>
                </div>
              </div>
              <button className="h-[48px] w-[270.67px] rounded-lg bg-[#70FF88] text-sm font-bold text-[#0A0517]">
                Sign up today
              </button>
            </div>
            <div className="grid h-[512px] w-[351px] justify-items-start gap-4 rounded-[20px] bg-gradient-to-t from-[#42424200] to-[#087C8C4D] p-9 md:h-[545px] md:w-[302px] md:justify-items-center md:p-4">
              <div className="h-[37px] w-[78.34px] text-[23px] text-[#75EFFF] md:h-[30px] md:w-[65.41px] md:text-[19px]">
                Organization
              </div>
              <div className="grid h-[48px] w-[230.69px] grid-cols-2 items-center gap-[16px] md:block md:h-[106px] md:w-[105px]">
                <p className="text-[51px]">$18</p>
                <p className="text-sm">
                  per user/month
                  <span className="block opacity-50">billed monthly</span>
                </p>
              </div>
              <div className="grid h-[260px] w-[279px] grid-rows-7 gap-[16px] pb-[20px] pt-[20px] text-xs md:h-[281px] md:w-[243.59px] md:text-base">
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">Unlimited users</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">All integrations and APIs</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">SOC2 + GDPR compliance</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">Unlimited threads & chats</span>
                </div>
                <div className="flex h-[24px] w-[243.59px] items-center">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">
                    Advanced invitation controls for members
                  </span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">SCIM</span>
                </div>
                <div className="h-[24px] w-[243.59px]">
                  <Image
                    src="/imgs/ic-check.png"
                    alt="ic-check"
                    width={24}
                    height={24}
                    objectFit="cover"
                    className="inline-block"
                  />
                  <span className="ml-2">SSO</span>
                </div>
              </div>
              <button className="h-[48px] w-[270.67px] rounded-lg bg-[#75EFFF] text-sm font-bold text-[#0A0517]">
                Sign up today
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-9 md:px-[72px]">
          <div className="mx-auto mt-12 flex h-[224.8px] w-[351px] flex-col items-center justify-center gap-9 rounded-[20px] bg-gradient-to-t from-[#45454526] to-[#833A8D33] px-7 py-6 md:h-[133px] md:w-[940px] md:flex-row">
            <div className="h-[92.8px] w-[295px] gap-[10px] md:h-[85px] md:w-[600.48px]">
              <div className="inline-block bg-gradient-to-r from-[#A1B4F2] to-[#5F65E3] bg-clip-text text-[23px] text-transparent md:text-[31px]">
                Are you a startup?
              </div>
              <div className="text-[18px] text-white">
                Get started with a discount on any plan.
              </div>
            </div>
            <button className="h-[48px] w-[295px] rounded-lg bg-gradient-to-t from-[#A1A5F2] to-[#8175EA] text-sm font-bold text-[#0A0517] md:w-[247.52px]">
              Contact Sales
            </button>
          </div>
          <div className="mx-auto mt-12 flex h-[325.8px] w-[351px] flex-col items-center justify-center gap-9 rounded-[20px] bg-gradient-to-t from-[#45454526] to-[#B5831733] px-7 py-6 md:h-[187px] md:w-[940px] md:flex-row">
            <div className="h-[193.8px] w-[295px] gap-[10px] md:h-[139px] md:w-[600.48px]">
              <div className="inline-block bg-gradient-to-r from-[#FFF29F] to-[#FFA52C] bg-clip-text text-[23px] text-transparent md:text-[31px]">
                Threads Enterprise
              </div>
              <div className="text-[18px] text-white">
                For enterprises who want to scale with confidence, Threads
                Enterprise offers advanced security, additional admin controls,
                dedicated customer support, and more.
              </div>
            </div>
            <button className="h-[48px] w-[295px] rounded-lg bg-gradient-to-t from-[#FAE475] to-[#FFAB52] text-sm font-bold text-[#0A0517] md:w-[247.52px]">
              Contact Sales
            </button>
          </div>
          <div className="mx-auto mt-12 flex h-[332.8px] w-[351px] flex-col items-center justify-center gap-9 rounded-[20px] bg-gradient-to-t from-[#45454526] to-[#833A8D33] px-7 py-6 md:h-[214px] md:w-[940px] md:flex-row">
            <div className="h-[200.8px] w-[295px] gap-[10px] md:h-[166px] md:w-[600.48px]">
              <div className="inline-block bg-gradient-to-r from-[#E99FF2] to-[#C85FE3] bg-clip-text text-[23px] text-transparent md:text-[31px]">
                Threads Community
              </div>
              <div className="grid grid-rows-2 items-center md:items-end">
                <div className="text-[18px] text-white">
                  Threads Community offers communities the same tools that
                  Threads Professional provides at a more achievable price
                  point.
                </div>
                <div className="text-[18px] text-white">
                  This plan is currently invite-only.
                </div>
              </div>
            </div>
            <button className="h-[48px] w-[295px] rounded-lg bg-gradient-to-t from-[#E99FF2] to-[#D375EA] text-sm font-bold text-[#0A0517] md:w-[247.52px]">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="hidden px-[72px] md:block">
          <div className="mx-auto mt-12 flex h-[129.59px] w-[940px] items-end">
            <h1 className="h-[58px] w-full text-center text-5xl font-semibold text-white">
              Compare plans & features
            </h1>
          </div>
          <div className="mx-auto mt-12 h-[4506.97px] w-[940px] rounded-[20px] bg-gradient-to-t from-[#42424226] to-[#7070B233] p-6">
            {/* main */}
            <div className="grid h-[175.8px] w-[892px] grid-cols-5 items-end gap-4">
              <MainTable />
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[54px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Users & Guests
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children */}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">Guests</div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
              </div>
              {/* children */}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">Members</div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
              </div>
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[54px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Fundamentals
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children */}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">Threads</div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  50
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
              </div>
              {/* children */}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Chat Messages
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  500
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Slack Import
                </div>
                <FourCheck />
              </div>
              {/* children */}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Private Channels and Chats
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[17px] font-semibold text-white">
                  Unlimited
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Web, desktop, iOS, & Android apps
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">Inbox</div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Presentation Mode
                </div>
                <FourCheck />
              </div>
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[67px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Additional Collaboration
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Voice chats & screensharing
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Video & audio narration
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Video narration export
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Voice memos
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">Polls</div>
                <FourCheck />
              </div>
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[54px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Integrations
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Public API
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Google Calendar
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Personal Integrations
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Organizational Integrations
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">Webhooks</div>
                <ThreeCheck />
              </div>
            </div>
            {/* main */}
            <div className="grid h-[204px] w-[892px] grid-cols-5 items-end gap-4">
              <MainTable />
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[54px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Customization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Custom emojis
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Custom sections
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Toggle presence indicator org-wide
                </div>
                <TwoCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[129px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[81px] w-[165.59px] text-white">
                  Org wide default thread share link setting
                </div>
                <TwoCheck />
              </div>
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[54px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Security & Compliance
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  GDPR Compliance
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  SOC2 Compliance
                </div>
                <FourCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[129px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Advanced invitation controls for members
                </div>
                <TwoCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">SSO</div>
                <TwoCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  User Provisioning (via Okta)
                </div>
                <OneCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Requiring SSO in order to sign-in
                </div>
                <OneCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Session time outs
                </div>
                <OneCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Force logout
                </div>
                <OneCheck />
              </div>
            </div>
            <div className="table">
              {/* emty */}
              <div className="grid h-[72px] w-[892px] grid-cols-5 items-center gap-4">
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
                <div className="h-[24px] w-[165.59px]"></div>
              </div>
              {/* parent */}
              <div className="grid h-[54px] w-[892px] grid-cols-5 gap-4">
                <div className="h-[24px] w-[165.59px] bg-gradient-to-r from-[#FA5CFA] to-[#6F5CFF] bg-clip-text text-[18px] text-transparent">
                  Support
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-white">
                  Starter
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#6FFF88]">
                  Professional
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#75EFFF]">
                  Organization
                </div>
                <div className="h-[24px] w-[165.59px] text-center text-[19px] font-semibold text-[#FFB445]">
                  Enterprise
                </div>
              </div>
              {/* children i-c*/}
              <div className="grid h-[75px] w-[892px] grid-cols-5 items-center gap-4 border-b border-t border-gray-700">
                <div className="h-[24px] w-[165.59px] text-white">
                  Priority support
                </div>
                <TwoCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Dedicated account manager
                </div>
                <OneCheck />
              </div>
              {/* children i-c*/}
              <div className="grid h-[102px] w-[892px] grid-cols-5 items-center gap-4 border-b border-gray-700">
                <div className="h-[54px] w-[165.59px] text-white">
                  Custom onboarding & education
                </div>
                <OneCheck />
              </div>
            </div>
            {/* main */}
            <div className="grid h-[188.8px] w-[892px] grid-cols-5 items-end gap-4">
              <MainTable />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-9 md:px-[72px]">
          <div className="mx-auto mt-12 grid h-[244.78px] w-[351px] items-center justify-items-center rounded-[20px] bg-[url('/imgs/footer.png')] font-semibold md:h-[283.19px] md:w-[940px]">
            <div className="grid h-[197.78px] w-[303px] items-center justify-items-center md:h-[188.19px] md:w-[844px]">
              <h1 className="text-center text-[32px] text-white md:text-4xl">
                Make the switch to Threads
              </h1>
              <div className="grid h-[77.78px] w-[303px] items-end justify-items-center md:h-[96px] md:w-[480px]">
                <div className="h-[62px] w-[204px] rounded-xl border border-[#E595FF] p-[5px]">
                  <button className="h-[52px] w-[194px] rounded-lg bg-gradient-to-r from-[#896EFD] to-[#6B4AFC] text-[16px] font-semibold text-[#EFEFF1]">
                    Sign up today
                    <Image
                      src="/imgs/ic-arrow-r.png"
                      alt="ic-arrow-r"
                      width={28}
                      height={28}
                      objectFit="cover"
                      className="ml-2 inline-block"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-9 md:px-[72px]">
          {/* footer desktop */}
          <div className="mx-auto mt-24 hidden h-[280px] w-[1156px] px-8 md:block">
            <div className="flex">
              <div className="grid h-[186px] w-[464.11px] grid-rows-4 text-sm font-semibold text-[#9B9FAA]">
                <Image
                  src="/imgs/logo-footer-1.png"
                  alt="logo-footer"
                  width={47}
                  height={25}
                  objectFit="cover"
                  className="opacity-80"
                />
                <Image
                  src="/imgs/logo-footer-2.png"
                  alt="logo-footer"
                  width={98}
                  height={37}
                  objectFit="cover"
                />
                <div className="flex h-[20px] w-[219.72px] justify-between">
                  <span>Privacy Policy</span>
                  <span>Terms of Service</span>
                </div>
                <div className="">©2023 Threads, Inc.</div>
              </div>
              <div className="grid h-[186px] w-[464.11px] grid-rows-5 place-items-end gap-3 text-sm font-semibold text-[#9B9FAA]">
                <Link href="#">For Engineers</Link>
                <Link href="#">For Designers</Link>
                <Link href="#">For Product Managers</Link>
                <Link href="#">For Customer Experience</Link>
                <Link href="#">For Leaders</Link>
                <Link href="#">Gallery</Link>
              </div>
              <div className="grid h-[186px] w-[163.8px] grid-rows-5 place-items-end gap-3 text-sm font-semibold text-[#9B9FAA]">
                <Link href="#">Blog</Link>
                <Link href="#">AI</Link>
                <Link href="#">Case Studies</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">Log in</Link>
              </div>
            </div>
            <div className="float-end flex h-[44px] w-[490px] items-end text-sm font-semibold text-[#9B9FAA]">
              Made with 💜 in SF, LA, SAN, SEA, DEN, AA, TOR, BOS, NYC, NJ, PHL,
              NC
            </div>
          </div>

          {/* footer mobile */}
          <div className="mx-auto mt-24 grid h-[580px] w-[375px] items-center justify-items-center px-14 text-[#9B9FAA] md:hidden">
            <Image
              src="/imgs/logo-footer-1.png"
              alt="logo-footer"
              width={40}
              height={24}
              objectFit="cover"
            />
            <Image
              src="/imgs/logo-footer-2.png"
              alt="logo-footer"
              width={98}
              height={20}
              objectFit="cover"
            />
            <div className="grid grid-rows-6 justify-items-center gap-4 font-semibold">
              <Link href="#">Blog</Link>
              <Link href="#">AI</Link>
              <Link href="#">Case Studies</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Twitter</Link>
              <Link href="#">Log in</Link>
            </div>
            <p className="mt-5 text-center">
              Made with 💜
              <span className="block">
                SF, LA, SAN, SEA, DEN, AA, TOR, BOS, NYC, NJ, PHL, NC
              </span>
            </p>
            <p></p>
            <div className="grid grid-cols-2 font-semibold">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
            <div className="">©2023 Threads, Inc.</div>
          </div>
        </div>
      </section>
    </>
  );
}
