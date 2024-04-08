import Image from "next/image";

export default function Transactions()  {
    return (
        <div className="h-svh font-sans-serif">
            <div className="fixed h-[30svh] w-svw">
                <Image src={'/money.jpg'} layout="fill" objectFit="cover" alt="Cover Photo"/>
            </div>
            <div className="h-full pt-[30svh] bg-gradient-to-tl from-[#1d7a86] via-[#264d70] to-[#574e78]">
                <div className="px-[15%]">
                    <div className="h-[150px] w-[150px] rounded-[30px] bg-[#123751] p-3 top-[-60px] relative">
                        <Image src={'/money.jpg'} width={300} height={300} alt="Cover Photo" objectFit="cover" className="rounded-[20px] aspect-square object-cover object-center"/>
                    </div>
                    <div className="text-white text-3xl font-semibold top-[-40px] relative">Transaction Header</div>
                </div>
                <div className="flex overflow-x-scroll px-[15%] overflow-hidden" style={{scrollbarWidth: 'none'}}>
                    <div className="px-5 text-nowrap bg-[#119611] mr-2 p-2 rounded-lg text-white font-semibold bg-gradient-to-tl from-[#025602] via-[#037603] to-[#119611]">Square Up</div>
                    <div className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Add Transaction</div>
                    <div className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Filters</div>
                    <div className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Invite</div>
                </div>
            </div>
        </div>
    )
}