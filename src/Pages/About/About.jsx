import Heading from "../../components/Shared/Heading/Heading";
import Navbar from "../../components/Shared/Navbar/Navbar";

const About = () => {
  return (
    <>
      <div className='max-w-6xl m-auto  px-5  space-y-5'>
        <Heading></Heading>
        <Navbar></Navbar>
        <div className=' p-8'>
          <p className='pb-10'>
            <span className='text-xl font-semibold'>
              Welcome to Dragon News
            </span>
            , your trusted source for breaking news, in-depth features, and
            thought-provoking analysis. We are committed to delivering accurate,
            unbiased, and timely news to our readers, keeping you informed about
            the latest developments in the world, nation, and your local
            community.
          </p>
          <p className='pb-10'>
            <span className='text-xl font-semibold'> What We Offer:</span>
            Breaking News: Stay updated with up-to-the-minute breaking news from
            around the globe, ensuring you are always ahead of the curve. Local
            Coverage: We are your go-to source for local news, events, and
            stories that matter most to your community. In-Depth Reporting: Dive
            deep into the issues that shape our world with our extensive
            investigative journalism and feature articles. Opinion and Analysis:
            Explore diverse perspectives and expert opinions on key topics
            through our thought-provoking editorials and commentaries. Lifestyle
            and Entertainment: Discover the latest trends, reviews, and cultural
            insights in our lifestyle and entertainment sections.
          </p>
          <p>
            <span className='text-xl font-semibold'> Contact Us: </span>
            Have a story tip or feedback for us? Contact our editorial team
            through our website, and we will be happy to hear from you. Thank
            you for choosing Dragon News as your source for reliable news and
            information. We look forward to keeping you informed, engaged, and
            inspired.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
