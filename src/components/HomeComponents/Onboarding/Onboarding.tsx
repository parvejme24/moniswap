import BG_ONBOARDING from '../../../assets/bg-onboarding.png';
import RINGS from "../../../assets/rings.png";
import ONBOARDING from '../../../assets/onboarding.png'
import DWON_ARROW from '../../../assets/down-arrow.png'

export default function Onboarding() {
  return (
    <div className="relative h-screen bg-center p-10" style={{backgroundImage: `url(${BG_ONBOARDING})`}}>
              <img className=' mx-auto mb-10' src={DWON_ARROW} alt="" />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white text-center">

        <img className=' mx-auto' src={RINGS} alt="" />
        <p className="mt-2">Looking to get</p>
        <h1 className="text-4xl font-bold ">started on Moniswap?</h1>
        <img className=' mx-auto my-8' src={ONBOARDING} alt="" />
        </div>
      </div>
    </div>
  );
}
