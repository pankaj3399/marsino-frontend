import React, { useEffect, useState } from "react";
import { ICONS } from "../../assets/icons";
import { IMAGES } from "../../assets/images";
import { CommonApi } from "../../services/CommonAPI";
import { HiOutlineUsers } from "react-icons/hi";
import { FiUserPlus } from "react-icons/fi";
import { FaCheck, FaRegHandshake } from "react-icons/fa";

type Props = {};

const Home = (props: Props) => {
  const [data, setData] = useState<any>({});
  // const getData = async () => {
  //   try {
  //     const res = await CommonApi.DashboardStat();
  //     if (res.success) {
  //       console.log(res.data);
  //       setData(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // getData();
  }, []);
  return (
    <div>
      <img
        src={IMAGES.DASHBOARD_BG}
        className="absolute h-[280px] w-full top-0 left-0 "
        style={{ zIndex: "5" }}
      />
      {/* Header */}
      <div className="relative sm:flex justify-between pt-5 z-50 text-main_bg">
        <div>
          <h5 className="text-2xl z-auto">Welcome Back 👋🏻</h5>
          <p className="text-lg">
            Now effortlessly Track your Reports
          </p>
        </div>
        {/* <img src={Icons.THREE_DOTS} className="w-[20px] h-[40px]" alt="" /> */}
        {/* <FilterTabs filters={["All Date", "12 Months", "30 Days", "7 Days"]} /> */}
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 relative z-10 mt-12">
        {/* Stats */}
        <div className="col-span-1 bg-[white] p-5 rounded-[8px] bg-[white] border">
          <h4 className="text-lg text-black_300 flex items-center gap-1">
            <HiOutlineUsers />
            Reports
          </h4>
          <h3 className="text-[32px] text-black-500 mt-2">
            {data?.reports || 0}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
