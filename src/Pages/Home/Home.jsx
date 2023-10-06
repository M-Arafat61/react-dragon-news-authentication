import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Shared/Heading/Heading";
import LeftSideNav from "../../components/Shared/LeftNav/LeftSideNav";
import Navbar from "../../components/Shared/Navbar/Navbar";
import RightSideNav from "../../components/Shared/RightNav/RightSideNav";
import NewsCard from "./NewsCard";
import BreakingNews from "../../components/Marquee/BreakingNews";
import { useEffect, useState } from "react";

const Home = () => {
  const newsData = useLoaderData();
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  // console.log(categories);

  return (
    <div className='max-w-6xl m-auto  px-5  space-y-5'>
      <Heading></Heading>
      <Navbar></Navbar>
      <BreakingNews></BreakingNews>
      <div className='grid grid-cols-4'>
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className='col-span-2'>
          {newsData.slice(0, 5).map(news => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
