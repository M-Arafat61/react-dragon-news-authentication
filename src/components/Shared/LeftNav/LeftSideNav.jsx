import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import LN1 from "../../../assets/images/1.png";
import LN2 from "../../../assets/images/2.png";
import LN3 from "../../../assets/images/3.png";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <>
      <div className='space-y-3 mb-10 pl-5'>
        {categories?.map(category => (
          <Link
            key={category.id}
            className='block text-xl font-semibold hover:bg-yellow-600 rounded-lg px-4'
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className='space-y-5'>
        <div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
          <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
            <img
              className=' h-40 object-cover'
              src={LN1}
              alt='profile-picture'
            />
          </div>
          <div className='p-6 '>
            <h4 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h4>
            <div className='flex justify-between items-center'>
              <p className='block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased'>
                Sports
              </p>
              <div className='flex items-center'>
                <MdOutlineDateRange />
                <span>Jan 4, 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
          <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
            <img
              className=' h-40 object-cover'
              src={LN2}
              alt='profile-picture'
            />
          </div>
          <div className='p-6 '>
            <h4 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h4>
            <div className='flex justify-between items-center'>
              <p className='block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased'>
                Sports
              </p>
              <div className='flex items-center'>
                <MdOutlineDateRange />
                <span>Jan 4, 2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
          <div className='relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg'>
            <img
              className=' h-40 object-cover'
              src={LN3}
              alt='profile-picture'
            />
          </div>
          <div className='p-6 '>
            <h4 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h4>
            <div className='flex justify-between items-center'>
              <p className='block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased'>
                Sports
              </p>
              <div className='flex items-center'>
                <MdOutlineDateRange />
                <span>Jan 4, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
