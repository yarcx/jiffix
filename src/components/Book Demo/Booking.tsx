import Input from "../../components/Atoms/Inputs/Input";
import React from "react";
import Logo from "../../assets/logo.png";
import Check from "../../assets/check.png";
import { checkListItems,BookingItems } from "../../lib/data";

// const Booking = () => {
//   return (
//     <section className="w-full h-full flex items-center justify-center">
//       <div className="flex w-full h-full items-center justify-center relative">
//         <div className="flex items-center flex-col justify-center h-[950px] w-full  bg-secOrange relative">
//           <div className="border-2 border-lightPink w-[285px] h-[296px] border-dashed rounded-full  absolute top-[-80px] z-[1]"></div>
//           <div className="h-full flex  flex-col justify-center">
//             {checkListItems.map(({ text }) => (
//               <div className="flex items-center gap-10 mb-[35px]">
//                 <img src={Check} alt="check" className=""/>
//                 <p dangerouslySetInnerHTML={{ __html: text }}/>
//               </div>
//             ))}
//           </div>
//           <div className="border-2 border-lightPink w-[176px] h-[180px] border-dashed rounded-full absolute left-[100px] bottom-[0px]"></div>
//           <div className="border-2 border-lightPink w-[580px] h-[530px] border-dashed rounded-full absolute  top-[200px] right-[-500px] z-[10]"></div>
//         </div>

//         <div className=" flex flex-col items-center bg-white w-full pt-8 z-[100]">
//           <div>
//             <img src={Logo} alt="" />
//           </div>
//           <div>
//             <h1 className="text-4xl font-bold text-center pt-[35px]">
//               Book your personalized demo
//             </h1>
//             <p className="text-lg w-[609px] text-center pt-[25px]">
//               We'd love to hear your specific needs and show you everything your
//               team can do with AutoHyve. Let's find 15 minutes that work for you
//             </p>
//           </div>

//           <form className="flex flex-col mt-[61px] items-center">
//             <Input type="text" placeholder="First Name" />
//             <Input type="text" placeholder="Last Name" />
//             <Input type="text" placeholder="Workshop Name" />
//             <Input type="number" placeholder="Phone Number" />
//             <Input type="email" placeholder="Work Email" />
//             <button
//               className="bg-primary w-[246px] h-[60px] rounded-lg mb-24 mt-6"
//               type="submit"
//             >
//               Submit
//             </button>
//           </form>
//           <p className="text-sm w-[609px] text-center pt-[25px]">
//             By submitting this form, you agree to receive emails from Jiffix.
//             You can unsubscribe at any time. View our{" "}
//             <span className="underline">Privacy Policy.</span>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Booking;

const Booking = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="flex w-full h-full items-center justify-center relative">
        <div className="flex items-center flex-col justify-center h-[950px] w-full  bg-secOrange relative">
          <div className="border-2 border-lightPink w-[285px] h-[296px] border-dashed rounded-full absolute top-[-80px]"></div>
          <div className="h-full flex  flex-col justify-center w-[592px]">
            {BookingItems.map(({ text }) => (
              <div className="flex items-center gap-10 mb-[35px]">
                <img src={Check} alt="check" className=""/>
                <p dangerouslySetInnerHTML={{ __html: text }}/>
              </div>
            ))}
          </div>
          <div className="border-2 border-lightPink w-[176px] h-[180px] border-dashed rounded-full absolute left-[100px] bottom-[0px]"></div>
          <div className="border-2 border-lightPink w-[580px] h-[530px] border-dashed rounded-full absolute  top-[200px] right-[-500px] z-[100]"></div>
        </div>

        <div className=" flex flex-col items-center bg-white w-full pt-8 z-[100]">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-center pt-[35px]">
              Book your personalized demo
            </h1>
            <p className="text-lg w-[609px] text-center pt-[25px]">
              We'd love to hear your specific needs and show you everything your
              team can do with AutoHyve. Let's find 15 minutes that work for you
            </p>
            
          </div>

          <form className="flex flex-col mt-[61px] items-center">
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Workshop Name" />
            <Input type="number" placeholder="Phone Number" />
            <Input type="email" placeholder="Work Email" />
            <button
              className="bg-primary w-[246px] h-[60px] rounded-lg mb-24 mt-6"
              type="submit"
            >
              Submit
            </button>
          </form>
          <p className="text-sm w-[609px] text-center pt-[25px]">
            By submitting this form, you agree to receive emails from Jiffix.
            You can unsubscribe at any time. View our{" "}
            <span className="underline">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;

