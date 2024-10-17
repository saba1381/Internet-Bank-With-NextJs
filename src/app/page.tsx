import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className='' style={{ direction: 'rtl' }}>
      <div className="bg-gradient-to-r from-purple-500 to-blue-200 h-[320px] sm:h-[380px] p-10 rounded-b-3xl shadow-lg">
        {/* title */}
        <div className="flex justify-between">
          <div className="pt-10 mx-auto">
            <h1 className="text-white text-3xl  sm:text-4xl font-semibold text-center sm:text-right">پله به پله تا موفقیت همراهت میکنیم</h1>
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-8 sm:mt-6">
              <button className="bg-blue-400 text-white py-2 px-6 rounded-xl text-lg hover:opacity-75 transition duration-200">
                <Link href='#'>مشاوره</Link>
              </button>
              <button className="bg-blue-400 text-white py-2 px-6 rounded-xl text-lg hover:opacity-75 transition duration-200">
                <Link href='#'>اطلاعات بیشتر</Link>
              </button>
            </div>
          </div>
          <Image src="/page1.jpg" alt="image" width={400} height={400} className="rounded-2xl shadow-md hidden sm:inline mt-4 hover:opacity-80 transition duration-200 mx-auto"></Image>
        </div>
      </div>
    </main>
  );
}
