import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd';
import h1 from "../../assets/h1.png"
import twitter from "../../assets/twitter.svg"

 const Hero = () => {
    const [t, i18n] = useTranslation ();
    
    const handleChangeLanguage = (e) =>{
     i18n.changeLanguage(e.target.value)
    }
  return (
  <div defaultValue={i18n.language} onChange={handleChangeLanguage} >

<div className='flex justify-center  p-[50px] justify-between '>

<div className=''>
<h2 className='text-[53px] font-bold text-[#D05270]'>{t("h1")}</h2>
<h3 className='p-1 text-[52px] '>{t("h2")}</h3>
<p className='w-[400px] p-1 text-left'>{t("h3")}</p>
<div>
<Button  src={twitter}  type="primary">
          dsdasd
        </Button>
       
     
</div>
</div>
<div>
 
<img src={h1} alt="" />

</div>
 
                              
</div>





    </div>
    
  ) 
}

export default Hero