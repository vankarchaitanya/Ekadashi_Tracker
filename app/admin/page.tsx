import {auth} from '@/lib/auth/server';
// import {redirect} from "next/navigation"
import Link from 'next/link';
import {prisma} from '@/lib/prisma'
export const dynamic = 'force-dynamic';

export default async function userAdmin() {
    const { data: session } = await auth.getSession();
    
  if (session?.user) {
   
    
    return (
        <div className='bg-[--color-background] h-auto'>
                <div className="w-auto h-[10vh] p-4 bg-[#fcca46]">
        <div className="flex row justify-between items-center ">
          <h1 className="text-2xl text-[#233d4d] font-bold font-[--headings]">Ekdashi Tracker </h1>
         
        </div>
      </div>
        
        </div>

    );
  }
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-gray-900">
      <h1 className="mb-4 text-4xl font-bold">Not logged in</h1>
      <div className="flex item-center gap-2">
        <Link
          href="/auth/signIn"
          className="inline-flex text-lg text-indigo-400 hover:underline"
        >
          Sign-in
        </Link>
        <Link
          href="/auth/signUp"
          className="inline-flex text-lg text-indigo-400 hover:underline"
        >
          Sign-up
        </Link>
      </div>
    </div>
  );

}
