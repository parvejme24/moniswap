import SWAP_CIRCLE from '../../../assets/swap-circle.png'
import CERTIK from '../../../assets/image 7.png'
import RING from '../../../assets/ring.png'
import TELIGRAM from "../../../assets/icons/telegram-hover.8e70fed7 5.png"
import X from "../../../assets/icons/X.png"
import  DISCORD from "../../../assets/icons/discord.png"
import GITHUB from "../../../assets/icons/github.png"
import MEDIAM from "../../../assets/icons/github.png"

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className=" bg-[#0E0E0F]  text-white p-12 pb-8 h-92  rounded-tl-[100px] rounded-tr-[100px]">
      <div className=' flex justify-between'>
         <div className="">
          <span className=' flex gap-1'> 
            <img className=' w-8 h-8' src={RING} alt="logo" />
           <p className=' text-[#FABD61] text-2xl'>MONISWAP</p>
            </span>
          <div className=' my-16 '>
          <h3 >AUDITED BY</h3>
          <img src={CERTIK} alt="CERTIK" />
          </div>
         </div>
         <div>
          <h4 className=' text-center text-xl'>DON'T MISS THE GOOD NEWS</h4>
          <h2 className=' text-center py-3 text-4xl'>Subscribe to Our Newsletter</h2>
          <span> 
            <input  type="email" placeholder='Your@email.com' className=' bg-[#1E1E1E] px-3 py-2 rounded-full w-[329px]'/>
            <button className="ml-2 px-3 py-2 rounded-full w-[137px]" style={{ background: 'linear-gradient(90deg, #FFBF60, #FC8415)', border: 'none', color: 'white', cursor: 'pointer' }}>Subscribe</button>
          </span>
          <div className=' flex justify-between mt-5'>
            <ul>
              <li className=' mt-2'>Company</li>
              <li className=' text-sm py-3'>About Moniswap</li>
              <li className=' text-sm '>Documentation</li>
            </ul>
            <ul>
              <li className=' mt-2'>Project & Developers</li>
              <li className=' text-sm py-3'>Submit Your Project</li>
              <li className=' text-sm '>Partner</li>
            </ul>
          </div>
         </div>
         <div>
          <img className=' w-[121px] h-[121px] mr-16 mt-16' src={SWAP_CIRCLE} alt="SWAP_CIRCLE" />
         </div>
      </div>
      <div>

      <div className="flex flex-col-reverse  md:justify-between items-center mt-5 md:mt-0">
        <div className="flex gap-2">
          <img className="p-3 bg-[#000000] rounded-xl" src={TELIGRAM} alt="teligram" />
          <img className="p-3 bg-black rounded-xl" src={X} alt="X" />
          <img className="p-3 bg-black rounded-xl" src={DISCORD} alt="DISCORD" />
          <img className="p-3 bg-black rounded-xl" src={GITHUB} alt="GITHUB" />
          <img className="p-3 bg-black rounded-xl" src={MEDIAM} alt="MEDIAM" />
        </div>
        <p className="mt-6 md:mt-0">Copyright © {currentYear} Moniswap. All rights reserved.</p>
      </div>

     </div>
    </footer>
  )
}
