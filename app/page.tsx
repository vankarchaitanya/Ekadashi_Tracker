import { prisma } from '@/lib/prisma';
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlineNoFood } from "react-icons/md";
import { GiPrayerBeads } from "react-icons/gi";
import { BsStars } from "react-icons/bs";


export default async function Home() {
  const date = new Date();

  const istDate = new Date(date.toLocaleString("en-US", {
    timeZone: "Asia/Kolkata"
  }));

  istDate.getHours();

  const ekdashi = await prisma.english_ekadashi.findFirst({
    where: {
      date: {
        gte: new Date(istDate)
      },
    },
    orderBy: {
      date: "asc"
    }
  });

  const hinduMonth = await prisma.english_hindu_month.findUnique({
    where: {
      id: ekdashi?.hindu_month_id || 0
    }
  })

  const hinduPaksha = await prisma.english_paksha.findUnique({
    where: {
      id: ekdashi?.paksha_id || 0
    }
  })

  let counting = 0;
  if (ekdashi?.date) {
    const fastingDate = new Date(ekdashi.date);
    fastingDate.getHours()

    counting = (fastingDate.getTime() - istDate.getTime()) / (1000 * 60 * 60 * 24);
  }

  return (
    <div className="h-auto bg-[#233d4d] relative overflow-hidden">

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-2 font-[--font-mono]">
              {ekdashi?.name}
            </h1>
            <p className='text-2xl font-semibold text-[#fe7f2d] mb-2 font-[--font-sans]'>{counting > 0 ? `The next Ekadashi is in ${Math.ceil(counting)} days.` : "Today is the Ekadashi!"}</p>
            <div className="flex flex-row justify-center items-center gap-2">
              <p className='text-[16px] font-medium text-white/80 font-[--font-sans]'>Month: {hinduMonth?.name} </p>
              <p className='text-[16px] font-medium text-white/80 font-[--font-sans]'>Paksha: {hinduPaksha?.name}</p>
              <p className='text-[16px] font-medium text-white/80 font-[--font-sans]'>Date: {ekdashi?.date?.toLocaleDateString()}</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-6">
              <div className="flex flex-col justify-center items-center gap-2">
                {counting > 0 ? (<MdOutlineFastfood size={48} className="text-2xl text-[#fe7f2d]" />) : (<MdOutlineNoFood size={48} className="text-2xl text-[#fe7f2d]" />)}
                <p className='text-[16px] font-medium text-[#fcca46] font-[--font-sans]'>{counting > 0 ? "Normal Day" : "Fasting Day"}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <GiPrayerBeads size={48} className="text-2xl text-[#fe7f2d] animate-pulse" />
                <p className='text-[16px] font-medium text-[#fcca46] font-[--font-sans]'>Chant Hare Krishna Mantra</p>

              </div>

            </div>
            <div className="flex flex-row justify-start items-start gap-4 mt-6">
              <BsStars size={48} className="text-2xl text-[#fe7f2d]" />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className='text-lg text-[--font-mono] text-[#fcca46]'>Significance:</h1>
                <p className="text-white/80 font-[--font-sans]">{ekdashi?.significance}</p>
              </div>
            </div>
            <div>

            </div>

          </div>

        </div>


      </div>
    </div>
  );
}
