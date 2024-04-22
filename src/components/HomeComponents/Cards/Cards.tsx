import CARD_LOGO from "../../../assets/cardLogo.png"


export default function Cards() {

  // const items = [
  //   {
  //     title: "Traders",
  //     description: "Exchange tokens with minimal slippage and pay some of the most competitive fees to MONI lockers.",
      
  //   },
  //   {
  //     title: "Liquidity Providers",
  //     description: "Deposit the tokens utilized for trading on Moniswap and earn MONI emissions as incentives.",
  //   },
  //   {
  //     title: "Protocols",
  //     description: "Provide incentives to veMONI voters, encouraging the attraction of votes and MONI emissions to their pools, enabling the cost-effective establishment of liquidity.",
  //   },
  //   {
  //     title: "veMONI Voters",
  //     description: "Cast your vote to determine the pools that will accrue MONI emissions, and earn 100% of incentives and fees for the selected pools. Any MONI holder has the option to lock their tokens and convert them into veMONI.",
  //   },
  // ]

  return (

  <div className=" text-white w-[284px] ">
   <div className=" bg-[#1E1E1E] p-5  rounded-tl-[15px] rounded-tr-[15px]">
   <span className=" flex justify-between items-center ">
        <h3 className=" text-xl">Traders</h3>
        <img src={CARD_LOGO} alt="" />
      </span>
      <p className=" pt-3 text-sm">Exchange tokens with minimal slippage and pay some of the most competitive fees to MONI lockers.</p>
    
   </div>
   <div className=" bg-[#FFB443]">
     <img src="" alt="" />
   </div>
  </div>
  )
}
