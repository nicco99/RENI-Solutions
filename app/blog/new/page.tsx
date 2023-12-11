import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import pic from "public/pic.png";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page ",
  description: "This is Blog Page for Reni Solutions",
};

const NewBlog = () => {
  return (
    <>
      <Breadcrumb pageName="New Blog" description="Post new blog" />
      <Image
        className="lg:opacity-35 absolute left-0 top-40 z-[-1] opacity-30 "
        height={250}
        width={300}
        src={pic}
        alt="image"
      />

      <section className="mx-5">
        <div
          className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
          data-wow-delay=".15s
	  "
        >
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            New Blog
          </h2>
          <form>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="designation"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Your desination
                  </label>
                  <input
                    type="text"
                    placeholder="Software Developer"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="designation"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Blog Image
                  </label>
                  <input
                    type="file"
                    placeholder="."
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="designation"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    placeholder="Select photo"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <label
                    htmlFor="designation"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Blog title
                  </label>
                  <input
                    type="text"
                    placeholder="Bringing youths together"
                    className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your Message"
                    className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
              </div>
              <div className="w-full px-4">
                <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                  Post Blog
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewBlog;
