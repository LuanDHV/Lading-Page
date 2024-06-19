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
          <div className="mx-auto h-[336px] w-[1440px] bg-gradient-to-b from-[#7715F9] to-[#D63DFF]">
            <div className="relative top-[20px] mx-auto flex h-[80px] w-[1108px] items-center justify-between rounded-[20px] bg-gradient-to-t from-[#D1D1D126] to-[#6666660D] px-5">
              <div className="flex h-[22px] w-[463px] gap-16 text-sm font-medium text-white">
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
              <div className="flex h-[40px] w-[463px] items-center justify-end gap-16 text-sm font-medium text-white">
                <Link href="#" className="h-[21.8px] w-[46.06px]">
                  Gallery
                </Link>
                <button className="h-[40px] w-[94px] rounded-xl bg-gradient-to-t from-[#7D66F5] to-[#4A29C2]">
                  Sign Up
                </button>
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
        <div className="relative z-50 mt-6 px-[72px]">
          <div className="mx-auto grid h-[545px] w-[940px] grid-cols-3 gap-[16px] text-[12px] text-white">
            <div className="grid h-[545px] w-[302px] justify-items-center gap-4 rounded-[20px] bg-gradient-to-t from-[#42424200] to-[#7070B233] p-4">
              <div className="h-[30px] w-[65.41px]">Starter</div>
              <div className="h-[106px] w-[105px] gap-[16px]">
                <p className="text-[51px]">Free</p>
                <p className="text-sm">Unlimited users and guests</p>
              </div>
              <div className="text-sx grid h-[281px] w-[243.59px] grid-rows-5 gap-[16px] pb-[101px] pt-[20px]">
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
            <div className="grid h-[545px] w-[302px] justify-items-center gap-4 rounded-[20px] bg-gradient-to-t from-[#42424200] to-[#22672E4D] p-4">
              <div className="h-[30px] w-[111px] text-[19px] text-[#6FFF88]">
                Professional
              </div>
              <div className="h-[106px] w-[105px] gap-[16px]">
                <p className="text-[51px]">$10</p>
                <p className="text-sm">
                  per user/month
                  <span className="block opacity-50">billed monthly</span>
                </p>
              </div>
              <div className="text-sx grid h-[281px] w-[243.59px] grid-rows-4 gap-[10px] pb-[101px] pt-[20px]">
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
            <div className="grid h-[545px] w-[302px] justify-items-center gap-4 rounded-[20px] bg-gradient-to-t from-[#42424200] to-[#087C8C4D] p-4">
              <div className="h-[30px] w-[122px] text-[19px] text-[#75EFFF]">
                Organization
              </div>
              <div className="h-[106px] w-[105px] gap-[16px]">
                <p className="text-[51px]">$18</p>
                <p className="text-sm">
                  per user/month
                  <span className="block opacity-50">billed monthly</span>
                </p>
              </div>
              <div className="text-sx grid h-[281px] w-[243.59px] grid-rows-7 gap-[10px] pb-[20px] pt-[20px]">
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
        <div className="px-[72px]">
          <div className="mx-auto mt-12 flex h-[133px] w-[940px] items-center gap-9 rounded-[20px] bg-gradient-to-t from-[#45454526] to-[#833A8D33] px-7 py-6">
            <div className="h-[85px] w-[600.48px] gap-[10px]">
              <div className="inline-block bg-gradient-to-r from-[#A1B4F2] to-[#5F65E3] bg-clip-text text-[31px] text-transparent">
                Are you a startup?
              </div>
              <div className="text-[18px] text-white">
                Get started with a discount on any plan.
              </div>
            </div>
            <button className="h-[48px] w-[247.52px] rounded-lg bg-gradient-to-t from-[#A1A5F2] to-[#8175EA] text-sm font-bold text-[#0A0517]">
              Contact Sales
            </button>
          </div>
          <div className="mx-auto mt-12 flex h-[187px] w-[940px] items-center gap-9 rounded-[20px] bg-gradient-to-t from-[#45454526] to-[#B5831733] px-7 py-6">
            <div className="h-[139px] w-[600.48px] gap-[10px]">
              <div className="inline-block bg-gradient-to-r from-[#FFF29F] to-[#FFA52C] bg-clip-text text-[31px] text-transparent">
                Threads Enterprise
              </div>
              <div className="text-[18px] text-white">
                For enterprises who want to scale with confidence, Threads
                Enterprise offers advanced security, additional admin controls,
                dedicated customer support, and more.
              </div>
            </div>
            <button className="h-[48px] w-[247.52px] rounded-lg bg-gradient-to-t from-[#FAE475] to-[#FFAB52] text-sm font-bold text-[#0A0517]">
              Contact Sales
            </button>
          </div>
          <div className="mx-auto mt-12 flex h-[214px] w-[940px] items-center gap-9 rounded-[20px] bg-gradient-to-t from-[#45454526] to-[#833A8D33] px-7 py-6">
            <div className="h-[166px] w-[600.48px] gap-[10px]">
              <div className="inline-block bg-gradient-to-r from-[#E99FF2] to-[#C85FE3] bg-clip-text text-[31px] text-transparent">
                Threads Community
              </div>
              <div className="grid grid-rows-2 items-end">
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
            <button className="h-[48px] w-[247.52px] rounded-lg bg-gradient-to-t from-[#E99FF2] to-[#D375EA] text-sm font-bold text-[#0A0517]">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="px-[72px]">
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
        <div className="px-[72px]">
          <div className="mx-auto mt-12 grid h-[283.19px] w-[940px] items-center justify-items-center rounded-[20px] bg-[url('/imgs/footer.png')] font-semibold">
            <div className="grid h-[188.19px] w-[844px] items-center justify-items-center">
              <h1 className="text-center text-4xl text-white">
                Make the switch to Threads
              </h1>
              <div className="grid h-[96px] w-[480px] items-end justify-items-center">
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
        <div className="mx-auto mt-24 h-[280px] w-[1156px] px-8">
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
      </section>
    </>
  );
}
