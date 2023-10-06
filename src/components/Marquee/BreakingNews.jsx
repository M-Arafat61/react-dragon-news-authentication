import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <>
      <div className='flex justify-start items-center'>
        <div className=''>
          <button className='px-3 py-2 text-lg font-semibold tracking-wider bg-yellow-800 text-white '>
            LATEST
          </button>
        </div>
        <div className='text-lg font-semibold italic'>
          <Marquee speed={80}>
            <p className='mr-2 text-sky-500'>
              Match Highlights: Germany vs Spain — as it happened !
            </p>
            <p className='mr-2 text-green-500'>
              Those who rejected the Nobel or did not receive the prize !
            </p>
            <p className='mr-2 text-blue-500'>
              What is the World Bank predicting the economy of Bangladesh?
            </p>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
