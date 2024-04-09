import Image from "next/image";

export default function Transactions()  {
    return (
        <div className="h-svh font-sans-serif">
            <div className="fixed h-[30svh] w-svw">
                <Image src={'/money.jpg'} layout="fill" objectFit="cover" alt="Cover Photo" className="rounded-[20px]"/>
            </div>
            <div className="h-full pt-[30svh] bg-gradient-to-tl from-[#1d7a86] via-[#264d70] to-[#574e78]">
                <div className="px-[15%]">
                    <div className="h-[150px] w-[150px] rounded-[30px] bg-[#123751] p-3 top-[-60px] relative">
                        <Image src={'/money.jpg'} width={300} height={300} alt="Cover Photo" objectFit="cover" className="rounded-[20px] aspect-square object-cover object-center"/>
                    </div>
                    <div className="text-white text-3xl font-semibold top-[-40px] relative">Office Meals</div>
                </div>
                <div className="mx-[15%] flex top-[-25px] relative  rounded-[30px] p-3 bg-cover bg-center bg-[#C97629]">
                    <div className="border-dashed border-[#A85825] border-y-[2px] w-full p-5 mx-5">
                        <div>
                            <div>You are owed</div>
                            <div>
                                <span>$</span>
                                <span>2,500</span>
                                <span>.00</span>
                            </div>
                        </div>
                        <button className="px-5 mt-5 text-nowrap mr-2 p-2 rounded-lg text-white font-semibold bg-[#123751] max-w-fit">Square Up</button>
                    </div>
                    <Image src={'/WalletButton.svg'} layout="fill" alt="Cover Photo" objectFit="contain" className="object-cover object-center ml-auto !w-fit !h-[50%] mt-auto mb-auto "/>
                </div>
                <div className="flex overflow-x-scroll px-[15%] overflow-hidden" style={{scrollbarWidth: 'none'}}>
                    <button className="px-5 text-nowrap bg-[#119611] mr-2 p-2 rounded-lg text-white font-semibold bg-gradient-to-tl from-[#025602] via-[#037603] to-[#119611]">Square Up</button>
                    <button className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Add Transaction</button>
                    <button className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Filters</button>
                    <button className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Invite</button>
                </div>
            </div>
        </div>
    )
}