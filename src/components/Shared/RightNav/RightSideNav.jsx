import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/images/qZone1.png";
import qZone2 from "../../../assets/images/qZone2.png";
import qZone3 from "../../../assets/images/qZone3.png";
import backgroundImage from "../../../assets/images/bg.png";
import { Link } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuth";

const RightSideNav = () => {
  const { googleLogin } = useAuthContext();
  return (
    <>
      <div>
        <div className=' space-y-3 mb-6'>
          <h2 className='text-3xl mb-5 font-medium'>Login With</h2>
          <Link>
            <button onClick={googleLogin} className='btn btn-outline w-full'>
              <FaGoogle></FaGoogle>
              Google
            </button>
          </Link>
          <button className='btn btn-outline w-full'>
            <FaGithub></FaGithub>
            Github
          </button>
        </div>

        {/* outer pages */}
        <div className='mb-10'>
          <h2 className='text-3xl mb-4'>Find Us on</h2>
          <a
            className='p-4 flex text-lg items-center border rounded-t-lg'
            href=''
          >
            <FaFacebook className='mr-3'></FaFacebook>
            <span>Facebook</span>
          </a>
          <a className='p-4 flex text-lg items-center border-x' href=''>
            <FaTwitter className='mr-2'></FaTwitter>
            <span>Twitter</span>
          </a>
          <a
            className='p-4 flex text-lg items-center border rounded-b-lg'
            href=''
          >
            <FaInstagram className='mr-2'></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>

        {/* q zone */}
        <div className='bg-gray-200 p-5 mb-10'>
          <h3 className='text-xl font-semibold mb-6'>Q-Zone</h3>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-clip-border text-gray-700 mb-5'>
              <img
                className='object-cover'
                src={qZone1}
                alt='profile-picture'
              />
            </div>
            <div className='bg-clip-border text-gray-700 mb-5'>
              <img
                className=' object-cover'
                src={qZone2}
                alt='profile-picture'
              />
            </div>
            <div className='  bg-clip-border text-gray-700 mb-5'>
              <img
                className='object-cover'
                src={qZone3}
                alt='profile-picture'
              />
            </div>
          </div>
        </div>

        <div className='relative grid  w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-clip-border text-center text-gray-700'>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
            className='absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none'
          >
            <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50'></div>
          </div>
          <div className='relative p-6 py-14 px-6 md:px-12'>
            <h2 className='mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased'>
              Create an Amazing Newspaper
            </h2>
            <h5 className='mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased'>
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </h5>
            <Link>
              <button className='px-5 py-3 text-white text-xl font-semibold bg-[#D72050]'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideNav;
