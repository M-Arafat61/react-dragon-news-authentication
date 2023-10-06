import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../../components/Shared/Heading/Heading";
import RightSideNav from "../../components/Shared/RightNav/RightSideNav";
import { useEffect, useState } from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";

const NewsDetails = () => {
  const [newsDetails, setNewsDetails] = useState([]);
  const newsData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const filteredNews = newsData.filter(eachNews => eachNews._id === id);
    setNewsDetails(filteredNews);
  }, [id, newsData]);

  return (
    <>
      <div className='max-w-6xl m-auto px-5 space-y-5'>
        <Heading></Heading>
        <Navbar></Navbar>
        <div className='mt-5 pb-5'>
          <h2 className='text-2xl font-bold '>Dragon News</h2>
        </div>
        <div className='grid md:grid-cols-4 gap-5'>
          <div className='col-span-3'>
            {newsDetails.map(news => (
              <div key={news._id}>
                <div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
                  <div className='relative mx-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
                    <img src={news.image_url} alt='news-image' />
                  </div>
                  <div className='p-6'>
                    <h5 className='mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                      {news.title}
                    </h5>
                    <p className='block font-sans text-lg font-light leading-relaxed text-inherit antialiased'>
                      {news.details}
                    </p>
                  </div>
                  <div className='p-6 pt-0'>
                    <button
                      className='select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                      type='button'
                      data-ripple-light='true'
                    >
                      All news in this category
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
