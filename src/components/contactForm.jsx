import { React, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [hovered, setHovered] = useState(false);
  const [state, handleSubmit] = useForm('mvojlrlg');
  if (state.succeeded) {
    return (
      <div className="text-white bg-green-700 flex justify-center font-bold my-10 p-10 text-xl">
        <h1>Your message has been submitted! Thank You! </h1>
      </div>
    );
  } else if (state.errors) {
    return (
      <div className="text-white bg-red-700 flex justify-center font-bold my-10 p-10 text-xl">
        <h1>Something went wrong!</h1>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative  rounded-lg  lg:w-[40rem] md:w-[35rem] sm:w-[30rem] w-96 p-8 font-sans">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                required
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="block w-full border-0  rounded-sm  py-1.5 px-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-sm  py-1.5 px-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="yourmessage"
              className="block text-sm font-medium leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="yourmessage"
                name="yourmessage"
                type="text"
                autoComplete="yourmessage"
                className="block w-full rounded-sm  py-1.5 px-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <ValidationError
                prefix="Message"
                field="yourmessage"
                errors={state.errors}
              />
            </div>
          </div>
        </div>

        <div className="z-10">
          <button
            className="relative rounded-sm border-yellow-500 text-yellow-500 border-2 py-1 px-5 mt-5 bg-transparent font-medium uppercase transition-colors transform origin-top-left hover:text-white "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            type="submit"
            disabled={state.submitting}
          >
            <div
              className={`absolute left-0 top-0 z-0 h-full w-full bg-yellow-500 transform ${
                hovered ? 'scale-x-100' : 'scale-x-0'
              }`}
              style={{
                transition: 'transform 0.3s',
                transformOrigin: 'top left',
              }}
            />
            <span className={`relative ${hovered ? 'z-10' : 'z-0'}`}>
              Submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
