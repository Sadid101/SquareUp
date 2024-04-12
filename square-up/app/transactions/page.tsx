import Image from "next/image";

export default function Transactions() {
    const Record = () => {
        return (
            <div className="px-[8%] sm:px-[15%]">
                <div className="w-full bg-[white] mt-5 py-2 px-5 rounded-[30px] " style={{ backgroundImage: 'url(/patterns.png)'}}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center pt-5">
                            <Image src={'/money-transfer.svg'} width={40} height={40} alt="Cover Photo" objectFit="contain" className="object-cover object-center " />
                            <div>
                                <div className="text-xl text-black font-semibold">Dominos Pizza</div>
                                <div className="text-sm text-[#2F995A] font-semibold">10-04-2024</div>
                            </div>
                        </div>
                        <div className="text-xl font-semibold text-[#2F995A]">$350.00</div>
                    </div>
                    <div className="border-dashed border-t-[2px] border-[#2F995A] w-full ">
                        <div className="flex items-center justify-between">
                            <div>
                                <div>
                                    <div className="text-black">Participants</div>
                                </div>
                                <div className="flex relative">
                                    <div className="relative bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-2xl z-50">T</div>
                                    <div className="relative bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-2xl left-[-8px] z-40">J</div>
                                    <div className="relative bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-2xl left-[-16px] z-30">Q</div>
                                    <div className="relative bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-2xl left-[-24px] z-20">A</div>
                                    <div className="relative bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-2xl left-[-32px]">...</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div>
                                    <div className="text-black">Paid by</div>
                                </div>
                                <div className="relative bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white text-2xl z-50">T</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="h-svh font-Kanit">
            <div className="relative h-[30svh] w-svw">
                <Image src={'/money.jpg'} layout="fill" objectFit="cover" alt="Cover Photo" className="rounded-[20px]"/>
            </div>
            <div className="bg-gradient-to-tl from-[#1d7a86] via-[#264d70] to-[#574e78]">
                <div className="px-[15%]">
                    <div className="h-[150px] w-[150px] rounded-[30px] bg-[#123751] p-3 top-[-60px] relative">
                        <Image src={'/money.jpg'} width={300} height={300} alt="Cover Photo" objectFit="cover" className="rounded-[20px] aspect-square object-cover object-center"/>
                    </div>
                    <div className="text-white text-3xl font-semibold top-[-40px] relative">Office Meals</div>
                </div>
                <div className="mx-[8%] sm:mx-[15%] flex top-[-25px] relative  rounded-[30px] p-3 bg-cover bg-center bg-[#C97629]">
                    <div className="border-dashed border-[#A85825] border-y-[2px] w-full py-5 px-2 mx-5">
                        <div className="text-white">
                            <div className="text-sm">You are owed</div>
                            <div className="font-semibold text-xl">
                                <span>$</span>
                                <span>2,500</span>
                                <span>.00</span>
                            </div>
                        </div>
                        <button className="px-2 mt-5 text-nowrap mr-2 py-2 rounded-lg text-white font-semibold bg-gradient-to-tl from-[#025602] via-[#037603] to-[#119611] max-w-fit">Square Up</button>
                    </div>
                    <Image src={'/WalletButton.svg'} layout="fill" alt="Cover Photo" objectFit="contain" className="object-cover object-center ml-auto !w-fit !h-[50%] mt-auto mb-auto "/>
                </div>
                <div className="flex overflow-x-scroll px-[15%] overflow-hidden" style={{scrollbarWidth: 'none'}}>
                    <button className="px-5 text-nowrap bg-[#123751] mr-2 p-2 rounded-lg text-white font-semibold">Add Transaction</button>
                    <button className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Filters</button>
                    <button className="px-5 text-nowrap bg-[#123751] mx-2 p-2 rounded-lg text-white font-semibold">Invite</button>
                </div>
                <div className="px-[15%] pt-5">
                    <div className="text-white text-3xl font-semibold">Recent Expenses</div>
                </div>
                <Record />
                <Record />
                <Record/>
                <Record/>
            </div>
        </div>
    )
}