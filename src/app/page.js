import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-red-400 text-8xl  ${roboto.className}`}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>this is next</h1>
        </main>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-400">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>this is next</h1>
        </main>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-yellow-400">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>this is next</h1>
        </main>
      </div>
    </div>
  );
}
