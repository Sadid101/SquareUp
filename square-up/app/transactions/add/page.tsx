'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const AddTransactionPage = () => {
  const [payer, setPayer] = useState(["Tausif"]);
  const [receiver, setReceiver] = useState(["Rafid"]);
  const [amount, setAmount] = useState(1500);
  const [pageNum, setPageNum] = useState(0);
  const [itemTable, setItemTable] = useState<Items[]>([{ name: '', price: 0 }]);

  const handleItemInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedItems = [...itemTable];
    updatedItems[index] = {
      ...updatedItems[index],
      [name]: value
    };
    setItemTable(updatedItems);
  };

  const addItem = () => {
    if (itemTable[itemTable.length - 1].name && itemTable[itemTable.length - 1].price) {
      setItemTable(prevState => [...prevState, { name: '', price: 0 }]);
    }
  };

  return (
    <div className="bg-[#161616]">
      <div className="min-h-svh max-w-[800px] font-Kanit text-white mx-auto">
        <div className="p-8 text-2xl md:mx-auto text-center md:text-left bg-[#282828] md:bg-transparent">
          Add Transaction
        </div>
        {pageNum === 0 ?
          <>
            <div className="p-5">
              <div className='bg-[#7612CE] p-3 w-fit text-center rounded-[18px] cursor-pointer'>
                <Link href="./">Go Back</Link>
              </div>
              <div className='mt-5'>Participants</div>
              <div className='p-2 bg-[#282828] mt-4 rounded-[18px]'>
                <div className='grid grid-cols-2 justify-around items-center px-5'>
                  <div>Paid by:</div>
                  <select name="payer" id="payer" className=" mx-4 p-2 bg-[#161616] rounded-[18px] text-center">
                    <option value="Tausif">Tausif</option>
                    <option value="Rafid">Rafid</option>
                    <option value="Shahreen">Shahreen</option>
                    <option value="Bayes">Bayes</option>
                    <option value="Aurko">Aurko</option>
                    <option value="Fahim">Fahim</option>
                  </select>
                </div>
              </div>
              <div className='p-2 bg-[#282828] mt-4 rounded-[18px]'>
                <div className='grid grid-cols-2 justify-around items-center px-5'>
                  <div>Recepients:</div>
                  <select name="receiver" id="receiver" className=" mx-4 p-2 bg-[#161616] rounded-[18px] text-center">
                    <option value="Rafid">Rafid</option>
                    <option value="Tausif">Tausif</option>
                    <option value="Shahreen">Shahreen</option>
                    <option value="Bayes">Bayes</option>
                    <option value="Aurko">Aurko</option>
                    <option value="Fahim">Fahim</option>
                  </select>
                </div>
              </div>
              <div className='mt-5'>Transaction Details</div>
              <div className='p-2 bg-[#282828] mt-4 rounded-[18px] px-5'>
                <div className='grid grid-cols-2 justify-around items-center'>
                  <input className=" mx-4 p-2 bg-[#161616] rounded-[14px] text-center" placeholder='Title'></input>
                  <input className=" mx-4 p-2 bg-[#161616] rounded-[14px] text-center" placeholder='Amount'></input>
                </div>
              </div>
              <div className='p-2 bg-[#282828] mt-4 rounded-[18px]'>
                <div className='grid grid-cols-2 justify-around items-center px-5'>
                  <div>Type of Split:</div>
                  <select name="receiver" id="receiver" className=" mx-4 p-2 bg-[#161616] rounded-[18px] text-center">
                    <option value="equal">Equally</option>
                    <option value="percentage">By Percentage</option>
                    <option value="custom">Custom Split</option>
                  </select>
                </div>
              </div>
            </div>
          </>
          :
          pageNum === 1 ?
            <>
              <div className="p-5">
                <div className='bg-[#7612CE] p-3 w-fit text-center rounded-[18px] cursor-pointer' onClick={() => setPageNum(pageNum - 1)}>Go Back</div>
                <div className='mt-5'>Add Items</div>
                {itemTable.map((item, index) => (
                  <div key={index} className='p-2 bg-[#282828] mt-4 rounded-[18px] px-5'>
                    <div className='grid grid-cols-2 justify-around items-center'>
                      <input
                        className="mx-4 p-2 bg-[#161616] rounded-[14px] text-center"
                        placeholder='Item Name'
                        name='name'
                        value={item.name}
                        onChange={(e) => handleItemInputChange(index, e)}
                      />
                      <input
                        className="mx-4 p-2 bg-[#161616] rounded-[14px] text-center"
                        type='number'
                        placeholder='Price'
                        name='price'
                        value={item.price ? item.price : "Price"}
                        onChange={(e) => handleItemInputChange(index, e)}
                      />
                    </div>
                  </div>
                ))}
                <div className='bg-[#7612CE] mt-8 p-2 mx-auto w-10 h-10 text-center rounded-full cursor-pointer' onClick={addItem}>
                  <Image src={'/AI-images/plus.svg'} width={50} height={50} alt="Cover Photo" objectFit="contain" className="object-cover object-center]" />
                </div>
              </div>
            </>
            :
            <>
              <>
                <div className="p-5">
                  <div className='bg-[#7612CE] p-3 w-fit text-center rounded-[18px] cursor-pointer' onClick={() => setPageNum(pageNum - 1)}>Go Back</div>
                  <div className='mt-5'>Assign Items</div>
                </div>
              </>
            </>
        }

        <div className='bg-[#7612CE] mt-8 p-2 mx-auto w-48 text-center rounded-[18px] cursor-pointer' onClick={() => setPageNum(pageNum + 1)}>Next</div>

      </div>
    </div >
  );
};

export default AddTransactionPage;
