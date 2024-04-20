import Image from "next/image";

export default function AddTransaction() {
    return (
         <div className="bg-[#161616]">
            <div className="min-h-svh max-w-[800px] font-Kanit text-white mx-auto">
                <div className="pt-16">
                    <Image src={'/AI-images/mastercard.svg'} width={60} height={60} alt="Cover Photo" objectFit="contain" className="object-cover object-center " />
                </div>
            </div>
        </div>
    )
}