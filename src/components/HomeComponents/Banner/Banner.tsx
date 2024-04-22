import SWAP_CIRCLE from '../../../assets/swap-circle.png'

export default function Banner() {
  return (
    <div className='text-center'>
      <div className='max-w-[650px] mx-auto space-y-10'>
        <h3 className="uppercase text-[#CFCFCF]">Welcome to MONISWAP</h3>
        <h2 className="text-5xl italic text-[#fff]">The central hub for trading & liquidity marketplace on 🐻 Berachain</h2>
        <img className='mx-auto' src={SWAP_CIRCLE} alt="" />
      </div>
      <div className='max-w-[700px] mx-auto'>
        <p className='text-lg italic text-[#CFCFCF]'>Moniswap represents the next evolution of automated market makers (AMMs) and serves as the central liquidity hub for 🐻 Berachain. It integrates a robust liquidity incentive engine, a governance model based on vote-lock mechanisms. Leveraging the latest features from Velodrome V2, Moniswap NFTs vote to distribute token emissions and receive incentives and fees generated by the protocol.</p>
      </div>
    </div>
  )
}
