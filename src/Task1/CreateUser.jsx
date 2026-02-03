import React from "react";

const CreateUser = () => {
  return (
    <section className="py-2 px-5">
      <h1 className="font-extrabold text-xl">Create Employee</h1>

      <form className="p-2 w-2xl mt-3">
        {/* FULLNAME */}
        <div>
          <label className="font-semibold" htmlFor="fullname">
            Fullname
          </label>
          <div className="py-2 flex gap-3">
            <input
              className="border border-gray-200 p-1 rounded w-full"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border border-gray-200 p-1 rounded w-full"
              type="text"
              placeholder="Maiden Name"
            />
            <input
              className="border border-gray-200 p-1 rounded w-full"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* MARITAL STATUS AND DOB */}
        <div className="flex gap-3 mt-3">
          <div className="w-full">
            <label className="font-semibold" htmlFor="maritalstatus">
              Marital Status
            </label>
            <div>
              <select
                name="maritalstatus"
                id="maritalstatus"
                className="border border-gray-200 p-1 w-full rounded"
              >
                <option value="" selected disabled></option>
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
            </div>
          </div>

          <div className=" w-full">
            <label className="font-semibold" htmlFor="dob">
              Date of Birth
            </label>
            <div>
              <input
                className="border border-gray-200 p-1 rounded w-full"
                type="date"
              />
            </div>
          </div>
        </div>

        {/* EMAIL AND MOBILE NUMBER */}
        <div className="flex gap-3 mt-3">
          <div className="w-full">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <div>
              <input
                className="border border-gray-200 p-1 rounded w-full"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold" htmlFor="dob">
              Mobile Number
            </label>
            <div>
              <input
                className="border border-gray-200 p-1 rounded w-full"
                type="tel"
              />
            </div>
          </div>
        </div>

        {/* HOME ADDRESS */}
        <div className="mt-3">
          <label className="font-semibold" htmlFor="address">
            Home Address
          </label>

          <div>
            <input
              className="border border-gray-200 p-1 rounded w-full mb-3"
              type="text"
              placeholder="Street Address"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="City"
              />
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="State / Province"
              />
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="Country"
              />
              <input
                className="border border-gray-200 p-1 rounded"
                type="text"
                placeholder="ZIP Code"
              />
            </div>
          </div>
        </div>

        <button className="bg-violet-800 cursor-pointer hover:bg-violet-900 transition text-white font-semibold px-4 py-1 mt-4 rounded">
          REGISTER ME
        </button>
      </form>
    </section>
  );
};

export default CreateUser;
