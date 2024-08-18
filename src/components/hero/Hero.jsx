import { ImLinkedin2 } from "react-icons/im"; 
import { AiOutlineLinkedin } from "react-icons/ai"; 
import { BsMedium } from "react-icons/bs"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
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
<div className="flex gap-5 p-2">
<Button className="bg-[#47ACDF]" icon={<AiOutlineTwitter />}  type="primary">
TWITTER
        </Button>
<Button className="bg-[#1275B1] "  icon={<ImLinkedin2 />}  type="primary">
         LINKEDIN
        </Button>
<Button className="bg-[black]"  icon={<BsMedium />}  type="primary">
         MEDIUM
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