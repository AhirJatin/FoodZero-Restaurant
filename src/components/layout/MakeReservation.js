import React, { useState } from "react";
import { useForm } from "react-hook-form";

const noOfPerson = [
  "1 person",
  "2 person",
  "3 person",
  "4 person",
  "5 person",
  "6 person",
  "7 person",
  "8 person",
  "9 person",
  "10 person",
];

const MakeReservation = () => {
  const [info, setInfo] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      date: "",
      time: "",
      noOfPerson: "2 person",
    },
  });

  const onSubmit = (data) => {
    setInfo(data);
    console.log(info);
  };
  return (
    <React.Fragment>
      <div id="reservation" className=" relative bg-[#EBF0E4] py-10">
        <div className="container mx-auto">
          <div className=" absolute left-[50px] top-[20px]  h-[120px] w-[120px] scale-x-[-1] bg-mintBg bg-contain bg-no-repeat md:left-[15%] md:h-[170px] md:w-[170px] lg:left-[20%] lg:h-[200px] lg:w-[200px] xl:left-[25%] xl:h-[220px] xl:w-[220px]"></div>
          <div className=" mb-10 text-center">
            <h2 className=" mb-3 text-[28px] sm:text-[32px] md:text-[48px]">
              Make a Reservation
            </h2>
            <p>Get in touch with restaurant</p>
          </div>
          <div>
            <form
              className=" grid grid-cols-2 gap-5"
              action="post"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="inputCard">
                <input
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", {
                    required: "Required*",
                  })}
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold "
                />
                <p className=" text-red-600">{errors.firstName?.message}</p>
              </div>

              <div className="inputCard">
                <input
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", {
                    required: "Required*",
                  })}
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold"
                />
                <p className=" text-red-600">{errors.lastName?.message}</p>
              </div>

              <div className="inputCard col-span-2">
                <input
                  placeholder="Email Address"
                  type="email"
                  {...register("email", {
                    required: "Required*",
                    pattern: {
                      value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                      message: "Invaild email format*",
                    },
                  })}
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold"
                />
                <p className=" text-red-600">{errors.email?.message}</p>
              </div>

              <div className="inputCard col-span-2">
                <input
                  placeholder="Phone"
                  type="tel"
                  {...register("mobile", {
                    required: "Required*",
                    maxLength: {
                      value: 10,
                      message: "Max 10 digits permitted*",
                    },
                    minLength: {
                      value: 10,
                      message: "Minimum 10 digits required*",
                    },
                  })}
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold"
                />
                <p className=" text-red-600">{errors.mobile?.message}</p>
              </div>

              <div className="inputCard">
                <input
                  type="date"
                  {...register("date", {
                    required: "Required*",
                  })}
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold "
                />
                <p className=" text-red-600">{errors.date?.message}</p>
              </div>

              <div className="inputCard">
                <input
                  type="time"
                  {...register("time", {
                    required: "Required*",
                  })}
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold "
                />
                <p className=" text-red-600">{errors.time?.message}</p>
              </div>

              <div className="inputCard col-span-2">
                <select
                  {...register("noOfPerson", { required: "Required*" })}
                  id="noOfPerson"
                  className=" w-full rounded-md border-2 border-gray-400 px-2 py-2 font-bold"
                  placeholder="No of Person"
                >
                  {noOfPerson.map((person) => (
                    <option key={person} value={person}>
                      {person}
                    </option>
                  ))}
                </select>
                <p className=" text-red-600">{errors.noOfPerson?.message}</p>
              </div>

              <button
                type="submit"
                className=" col-span-2 mb-5 max-w-[200px] justify-self-center rounded-md bg-[#5E6600] px-8 py-3 text-white hover:bg-[#6a6b5d]"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MakeReservation;
