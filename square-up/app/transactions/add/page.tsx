import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const AddTransactionPage = () => {
  return (
    <div className="bg-[#161616]">
      <div className="min-h-svh max-w-[800px] font-Kanit text-white mx-auto">
        <div className="p-8 text-2xl md:mx-auto text-center md:text-left bg-[#282828] md:bg-transparent">
          Add Transaction
        </div>
        <div className="h-full w-full p-5">
          <div>Participants</div>
          <div className='p-2 bg-[#282828] mt-4 rounded-[18px]'>
            <div className='grid grid-cols-2 justify-around items-center px-5'>
              <div>Paid by:</div>
              <select name="cars" id="cars" className=" mx-4 p-2 bg-[#161616] rounded-[18px] text-center">
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
              <select name="cars" id="cars" className=" mx-4 p-2 bg-[#161616] rounded-[18px] text-center">
                <option value="Tausif">Tausif</option>
                <option value="Rafid">Rafid</option>
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
        </div>

        <div className='bg-[#7612CE] mt-8 p-2 mx-auto w-48 text-center rounded-[18px] cursor-pointer'>Next</div>

      </div>
    </div>
  );
};

export default AddTransactionPage;
