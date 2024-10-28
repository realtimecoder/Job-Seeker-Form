import {useContext}  from 'react'
import {StepperContext}  from '../../contexts/StepperContext'


export default function Account() {
  const {userData, setUserData} = useContext(StepperContext);
const handleChange =(e)=>{
  const{name,value}=e.target;
  setUserData({...userData,[name]:value});
};
  return (
    <div className="flex flex-col">
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold h-6
        mt-2 text-gray-500 text-xs leading-8 uppercase'>
          First Name

        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["First Name"] || ""}
          name="First Name"
          placeholder="First Name"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>

        </div>
        <div className='font-bold h-6
        mt-3 text-gray-500 text-xs leading-8 uppercase'>
          Last NAme

        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["Last Name"] || ""}
          name="Last Name"
          placeholder="Last name"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
      </div>
      

      
 <label className="font-bold h-6
         text-gray-500 text-xs leading-8 uppercase   " htmlFor="gender">
   Gender
   <br></br>
 </label>
 <input
  type="radio"
  name="gender"
  className=" mx-2"
/>
<span className="dark:text-white">Male</span>

{/* Female */}
<input
  type="radio"
  name="gender"
  className="ml-11 mx-2"
/>
<span className="dark:text-white">Female</span>

{/* Other */}
<input
  type="radio"
  name="gender"
  className="ml-12 mx-2"
/>
<span className="dark:text-white">Other</span>

<br></br>


      <div className='font-bold h-6
        mt-3 text-gray-500 text-xs leading-8 uppercase'>
          DOB

        </div >
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded w-52'>
          <input
          onChange={handleChange}
          value={userData["DOB"] || ""}
          name="DOB"
          placeholder="dd/mm/yyyy"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
      </div>

      <div className='font-bold h-6 -mt-[82px] ml-72
       text-gray-500 text-xs leading-8 uppercase'>
           Contact

        </div>
        <div className='bg-white my-2 p-1 flex border ml-72 border-gray-200 rounded w-65'>
          <input
          onChange={handleChange}
          value={userData["Contact"] || ""}
          name="Contact"
          placeholder="XXXXXXXXXX"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>
      </div>
      <div className='font-bold h-6
        mt-3 text-gray-500 text-xs leading-8 uppercase'>
          E-mail

        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
          onChange={handleChange}
          value={userData["E-mail"] || ""}
          name="E-mail"
          placeholder="E-mail"
          className='p-1 px-2 appearance-none outline-none w-full text-gray-800'/>

        </div>
      
    </div>
    </div>
  )
}
