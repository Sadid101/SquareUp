import Image from "next/image";

export default function Transactions()  {
    return (
        <div className="h-svh font-sans-serif">
            <div className="fixed h-[30svh] w-svw">
                <Image src={'/money.jpg'} layout="fill" objectFit="cover" alt="Cover Photo"/>
            </div>
            <div className="h-full pt-[30svh] bg-gradient-to-tl from-[#1d7a86] via-[#264d70] to-[#574e78]">
                <div className="h-[150px] w-[150px] rounded-[30px] bg-[#123751] p-3 top-[-60px] left-[15%] relative ">
                    <Image src={'/money.jpg'} width={300} height={300} alt="Cover Photo" objectFit="contain" className="rounded-[20px] aspect-square"/>
                </div>
                <div className="text-white text-4xl font-semibold w-full left-[15%] top-[-40px] relative">Transaction Header</div>
                <div className="flex px-3">
                    <div>Square Up</div>
                    <div>Add Transaction</div>
                    <div>Filters</div>
                </div>
            </div>
        </div>
    )
}