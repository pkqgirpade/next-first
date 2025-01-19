import Image from "next/image";
import { Roboto } from "next/font/google";
import Gallery from "./Gallery";

const roboto100 = Roboto({
  weight: "100",
  subsets: ["latin"],
});

const roboto500 = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-red-400">
        <main className="flex flex-col row-start-2 items-left sm:items-start">
          <h6 className={`text-base md:text-2xl ${roboto100.className}`}>
            Welcome to the gallery of{" "}
          </h6>
          <h1 className={`sm:text-base md:text-8xl ${roboto500.className}`}>
            Chinmoy Mohanta
          </h1>
        </main>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-400">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Gallery />
        </main>
      </div>
      
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-yellow-400">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        </main>
      </div>
    </div>
  );
}
