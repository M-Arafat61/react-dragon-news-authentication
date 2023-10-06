import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  // console.log(news);
  const { image_url, title, details, _id } = news;
  return (
    <div className='mb-6 p-2'>
      <div className='relative flex flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md'>
        <div className='relative mx-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white  shadow-blue-gray-500/40'>
          <img src={image_url} alt='img-blur-shadow' />
        </div>
        <div className='p-6'>
          <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {title}
          </h5>
          <div className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 150)}
                <Link
                  to={`/news/${_id}`}
                  className='text-green-500 font-semibold ml-2'
                >
                  Read more...
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
