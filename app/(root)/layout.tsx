import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: "Raunak", lastName: "Choudhary" }
  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src='/icons/logo.svg'
            alt='menu icon'
            width={34}
            height={34}
            className='size-[24px] max-xl:size-14'
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
