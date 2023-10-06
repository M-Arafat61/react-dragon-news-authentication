import moment from "moment-timezone";
import Clock from "../../Clock/Clock";
import logoImage from "../../../assets/images/logo.png";

const Heading = () => {
  return (
    <>
      <div className='p-5 flex flex-col items-center justify-center gap-4'>
        <img src={logoImage} alt='' />
        <p>Journalism Without Fear or Favour</p>
        <div className='flex gap-4'>
          <span className='italic'>
            {moment().format("dddd, MMMM D, YYYY")}
          </span>
          <Clock></Clock>
        </div>
      </div>
    </>
  );
};

export default Heading;
