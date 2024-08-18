import React from 'react'
import { useTranslation } from 'react-i18next'
import grop2 from "../../assets/grop2.png"
import Group1 from "../../assets/Group1.png"
import Derel from "../../assets/Derel.svg"
 const Cards = () => {
  const [t, i18n] = useTranslation ();
    
  const handleChangeLanguage = (e) =>{
   i18n.changeLanguage(e.target.value)
  }
  return (
    <div className='p-[]' defaultValue={i18n.language} onChange={handleChangeLanguage} >
    <div>

<ul className='flex gap-3    p-[50px] justify-start font-bold'>
  <li className='text-[red] underline '>{t("c1")}</li>
  <li>{t("c2")}</li>
  <li>{t("c3")}</li>
  <li>{t("c4")}</li>
  <li>{t("c5")}</li>
  <li>{t("c6")}</li>
  <li>{t("c7")}</li>


</ul>


    </div>

    <div class="flex gap-[100px] p-[50px] my-[-50px] ">
  <div class="w-[700px] h-[400px] relative card">
 <img src={grop2} alt="" class="w-full h-full object-cover  rounded-lg" />
    <br />
      <strong class="block mb-2 text-gray-500">{t("c11")}</strong>
      <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c22")}</h2>
      <p class="text-gray-700 mb-4">{t("c33")}</p>
      <a href="/single" class=" text-link text-[#D05270] hover:text-blue-700 active:text-blue-900 transition-colors duration-300">{t("c44")}</a>
      <hr className='w-[120px] h-[2px] bg-[#D05270]' />
   
  </div>
  <div class="w-[700px] h-[400px] relative card">
    <img src={Group1} alt="" class="w-full h-full object-cover  rounded-lg" />
    <br />
      <strong class="block mb-2 text-gray-500">{t("c11")}</strong>
      <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c22")}</h2>
      <p class="text-gray-700 mb-4">{t("c33")}</p>
      <a href="/single" class=" text-link text-[#D05270] hover:text-blue-700 active:text-blue-900 transition-colors duration-300">{t("c44")}</a>
   <hr className='w-[120px] h-[2px] bg-[#D05270]' />
  </div>
  
  
</div>
<div className='flex gap-[100px] p-[50px] my-[190px]'>
<div class="w-[700px] h-[400px] relative card">
    <img src={grop2} alt="" class="w-full h-full object-cover rounded-lg" />
    <br />
      <strong class="block mb-2 text-gray-500">{t("c11")}</strong>
      <h2 class="text-xl font-semibold mb-2 text-[#D05270]">{t("c22")}</h2>
      <p class="text-gray-700 mb-4">  {t("c33")}</p>
    
      <a href="/single" class=" text-link text-[#D05270] hover:text-blue-700 active:text-blue-900 transition-colors duration-300">{t("c44")}</a>
      <hr className='w-[120px] h-[2px] bg-[#D05270]' />
   
  </div>
  <div class="w-[700px] h-[400px] relative card">
    <img src={Group1} alt="" class="w-full h-full object-cover rounded-lg" />
    <br />
      <strong class="block mb-2 text-gray-500">{t("c11")}</strong>
      <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c22")}</h2>
      <p class="text-gray-700 mb-4 ">{t("c33")}</p>
      <a href="/single" class=" text-link text-[#D05270] hover:text-blue-700 active:text-blue-900 transition-colors duration-300">{t("c44")}</a>
      <hr className='w-[120px] h-[2px] bg-[#D05270]' />
   
  </div>
</div>
<div className='flex gap-[100px] p-[50px] my-[190px]'>
<div class="w-[700px] h-[400px] relative card">
    <img src={grop2} alt="" class="w-full h-full object-cover rounded-lg" />
    <br />
      <strong class="block mb-2 text-gray-500">{t("c11")}</strong>
      <h2 class="text-xl font-semibold mb-2 text-[#D05270]">{t("c22")}</h2>
      <p class="text-gray-700 mb-4">  {t("c33")}</p>
    
      <a href="/single" class=" text-link text-[#D05270] hover:text-blue-700 active:text-blue-900 transition-colors duration-300">{t("c44")}</a>
      <hr className='w-[120px] h-[2px] bg-[#D05270]' />
   
  </div>
  <div class="w-[700px] h-[400px] relative card">
    <img src={Group1} alt="" class="w-full h-full object-cover rounded-lg" />
    <br />
      <strong class="block mb-2 text-gray-500">{t("c11")}</strong>
      <h2 class="text-xl font-semibold mb-2  text-[#D05270]">{t("c22")}</h2>
      <p class="text-gray-700 mb-4 ">{t("c33")}</p>
      <a href="/single" class=" text-link text-[#D05270] hover:text-blue-700 active:text-blue-900 transition-colors duration-300">{t("c44")}</a>
      <hr className='w-[120px] h-[2px] bg-[#D05270]' />
   
  </div>
</div>
<div className='flex justify-center'><img className='w-[450px] my-[500px] ' src={Derel} alt="" />
</div>
 
</div>

 
  )
}

export default Cards