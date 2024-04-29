import Image from "next/image";
import Link from "next/link";

export default function Transactions() {
    return (
        <div className="bg-[#161616]">
            <div className="min-h-svh max-w-[800px] font-Kanit text-white mx-auto">
                <div className="pt-16">
                    <div className="bg-[#282828] mx-auto p-5 rounded-[24px] w-[350px] max-w-full flex flex-col justify-between">
                        <div>
                            <div>Total Balance</div>
                            <div>$ 222,358</div>
                        </div>
                        <div className="flex justify-between mt-[40px]">
                            <div>
                                <div>**** **** **** ****</div>
                                <div>Tausif Sadid</div>
                            </div>
                            <div>
                                <Image src={'/AI-images/mastercard.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full mt-8 bg-[#282828] w-full rounded-t-[18px] p-8">
                    <div className="flex w-full max-w-[500px] justify-between mx-auto">
                        <Link href={'./transactions/add'} className="flex flex-col items-center text-center text-sm">
                            <Image src={'/AI-images/Icon Add.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                            <div>Add</div>
                        </Link>
                        <div className="flex flex-col items-center text-center text-sm">
                            <Image src={'/AI-images/Icon architecture.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                            <div>Settle</div>
                        </div>
                        <div className="flex flex-col items-center text-center text-sm">
                            <Image src={'/AI-images/Icon report.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                            <div>Monthly</div>
                        </div>
                        <div className="flex flex-col items-center text-center text-sm">
                            <Image src={'/AI-images/Icon share.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                            <div>Share</div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="text-lg">Shared Expenses</div>
                        <div className="bg-[#161616] w-full flex mt-2 p-5 rounded-2xl">
                            <div className="flex items-center">
                                <Image src={'/AI-images/Icon shopping cart.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                                <div className="ml-5">
                                    <div>Shopping</div>
                                    <div className="text-[#F04900] text-sm">You borrowed $500</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#161616] w-full flex mt-2 p-5 rounded-2xl">
                            <div className="flex items-center">
                                <Image src={'/AI-images/Icon taxi.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                                <div className="ml-5">
                                    <div>Taxi</div>
                                    <div className="text-[#17A57F] text-sm">You are owed $500</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#161616] w-full flex mt-2 p-5 rounded-2xl">
                            <div className="flex items-center">
                                <Image src={'/AI-images/house.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                                <div className="ml-5">
                                    <div>Household Expenses</div>
                                    <div className="text-[#17A57F] text-sm">You are owed $500</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#161616] w-full flex mt-2 p-5 rounded-2xl">
                            <div className="flex items-center">
                                <Image src={'/AI-images/receipt.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                                <div className="ml-5">
                                    <div>Netflix</div>
                                    <div className="text-[#F04900] text-sm">You borrowed $500</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#161616] w-full flex mt-2 p-5 rounded-2xl">
                            <div className="flex items-center">
                                <Image src={'/AI-images/gift.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center h-[50px] w-[50px]" />
                                <div className="ml-5">
                                    <div>Gifts</div>
                                    <div className="text-[#17A57F] text-sm">You are owed $500</div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}