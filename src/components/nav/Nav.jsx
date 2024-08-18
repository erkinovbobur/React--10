import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo1 from "../../assets/Logo1.svg"
import HireMe from "../../assets/HireMe.svg"

  
 const Nav = () => {
    const [t, i18n] = useTranslation ();
    
    const handleChangeLanguage = (e) =>{
     i18n.changeLanguage(e.target.value)
 }
  return (
   <>
   <div className=' '>
   <div className='flex   p-[50px] justify-between '>
    <div className='flex gap-2 items-center'>
   <div><img src={Logo1} alt="" /></div> 
   <div><img src={HireMe} alt="" /></div>         
    </div>
<div>

</div>
    <ul className='flex items-center gap-3 '>
    <li><select className='w-[50px] h-[50px] ' defaultValue={i18n.language} onChange={handleChangeLanguage}> 
    <option value="uz">Uzbek</option>
    <option value="ru">Russian</option>
    <option value="en">Englend</option>
    </select></li>
    <li>{t("n1")}</li>
    <li>{t("n2")}</li>
    <li>{t("n3")}</li>
    <li>{t("n4")}</li>
    <li>{t("n5")}</li>
    <li>{t("n6")}</li>
    <li>{t("n7")}</li>
    </ul>


   </div>

   </div>
   
 
   </>
  )
}
export default Nav
