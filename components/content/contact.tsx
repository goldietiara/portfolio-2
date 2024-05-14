"use client";

import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1000px] h-full relative flex justify-center font-mono text-sm mt-32">
      <div className="w-[1000px] flex flex-col lg:grid lg:grid-cols-1 lg:grid-rows-3">
        <section className="relative lg:row-start-1 lg:row-end-2 ">
          <div className=" w-fit h-fit bg-teal-500 py-3 px-8 relative">
            <div className=" absolute top-[0px] -left-[30px] bg-gray-300/40 w-[100px] h-[25px] -rotate-[30deg] z-30"></div>
            <Image
              src={"/svg/contact/contact.svg"}
              alt="contact"
              width={200}
              height={200}
              className=" hidden sm:flex"
            />
            <Image
              src={"/svg/contact/contact.svg"}
              alt="contact-sm"
              width={130}
              height={130}
              className=" sm sm:hidden"
            />
          </div>
        </section>
        <section className=" w-full h-fit lg:row-start-2 lg:row-end-4 p-5 grid grid-cols-1 gap-10 lg:flex lg:justify-evenly lg:gap-0 ">
          <div className="relative place-self-start mt-[10px] ml-[15px]">
            <div className=" flex w-fit h-fit absolute -top-[10px] -left-[15px]">
              <div className="w-[20px] bg-yellow-300"></div>
              <div className="bg-yellow-100 p-2 px-3 font-serif font-extralight">
                <p>me waiting for your call:</p>
              </div>
            </div>

            <Image
              src={"/contact-sticker-1.png"}
              alt="contact-sticker-1"
              width={250}
              height={250}
            />
          </div>

          <div className=" bg-white p-2 sm:p-5 border border-stone-300 h-fit w-full sm:w-fit row-start-1">
            <div className=" bg-stone-100 flex justify-between gap-5 sm:gap-10">
              <div className="w-full p-2 sm:p-5 font-serif text-stone-700 flex flex-col items-center sm:justify-between gap-5 md:gap-0">
                <h1 className="text-xl md:text-3xl font-bold tracking-wide">
                  Goldie Tiara
                </h1>
                <Image
                  src={"/svg/contact/card.svg"}
                  alt="card-pic-sm"
                  width={100}
                  height={100}
                  className="flex sm:hidden"
                />

                <div className="hidden sm:flex flex-col w-full mt-10 text-xs text-left md:text-sm md:mt-0">
                  <p>Email</p>
                  <p>Github</p>
                  <p>LinkedIn</p>
                </div>

                <div className="w-full mt-10 text-xs flex justify-center sm:hidden">
                  <p>Goldietiara.acc@gmail.com</p>
                </div>
              </div>

              <Image
                src={"/svg/contact/card.svg"}
                alt="card-pic"
                width={200}
                height={200}
                className="hidden sm:flex"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
