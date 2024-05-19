import React from "react";

function Footer() {
  return (
    <div className="md:mt-28 mt-20 xl:p-6 text-xl ">
      <div className="bg-[#F5F5F5] xl:rounded-xl md:p-20 p-10 flex  md:justify-between flex-wrap justify-center text-sm items-center gap-20">
        <div className="flex flex-col gap-3 mx-auto md:mx-0  md:items-start items-center">
          <p className="text-xl font-bold">Logo</p>
          <p className="w-[10rem] md:text-left text-center">
            Company 1234 5th AVE N. Seattle, WA 98101
          </p>
        </div>
        <div className="flex gap-20 flex-wrap justify-center">
          <div className="flex gap-20 ">
            <div className="space-y-4">
              <p className="font-bold mb-3">Product</p>
              <p>Login</p>
              <p>Overview</p>
              <p>Feedback</p>
              <p>Meetings</p>
              <p>Action items</p>
            </div>
            <div className="space-y-4">
              <p className="font-bold mb-3">Solutions</p>
              <p>Team Meetings</p>
              <p>Remote settings</p>
              <p>Another one</p>
              <p>Functional</p>
              <p>Executive</p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="space-y-4">
              <p className="font-bold mb-3">Resources</p>
              <p>Blog</p>
              <p>Podcast</p>
              <p>Templates</p>
              <p>Newslettter</p>
              <p>Help Center</p>
            </div>
            <div className="space-y-4">
              <p className="font-bold mb-3">Company</p>
              <p>Meetings</p>
              <p>Overview</p>
              <p>Templates</p>
              <p>Remote Settings</p>
              <p>Executive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
