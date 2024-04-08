import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';
import { type T_Workspace } from "types"
import DefaultLayoutComponent from "../components/layout/default";

const apiTest = async () => {
  try {
    noStore()
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/");
    const data = await response.json()
    if (!data) throw new Error(`Invalid response`)
    return data as T_Workspace
  } catch (err) {
    console.error(err);
    throw err
  }
}

export const dynamic = 'force-dynamic'

export default async function Home() {
  const workspace = await apiTest()
  return (
    <DefaultLayoutComponent>
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex items-center justify-center w-full h-48 gap-2 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {workspace.name}{" "}{workspace.version}
        </div>
      </div>

      <div className="relative flex flex-1 self-center place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-amber-200 after:via-primary-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary-700 before:dark:opacity-10 after:dark:from-amber-900 after:dark:via-primary after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </DefaultLayoutComponent>
  );
}
