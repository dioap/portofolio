import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Dio from '../assets/diowisuda.png';
import regppob from '../assets/registerppob.jpg';
import ecommerce from '../assets/landingpagethumb.jpg';
import porto from '../assets/porto.jpg';
import purwa from '../assets/purwa.jpeg';
import stikom from '../assets/stikom.jpeg';
import php from '../assets/logo/php.png';
import javascript from '../assets/logo/javascript.png';
import laravel from '../assets/logo/laravel.png';
import react from '../assets/logo/react.png';
import bootstrap from '../assets/logo/bootstrap.png';
import tailwind from '../assets/logo/tailwind.png';
import vite from '../assets/logo/vite.png';
import ContactForm from '../components/contactForm';

export default function Portofolio() {
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [expanded, setExpanded] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', current: activeLink === 'Home' },
    { name: 'About', href: '#about', current: activeLink === 'About' },
    {
      name: 'Education',
      href: '#education',
      current: activeLink === 'Education',
    },
    { name: 'Projects', href: '#projects', current: activeLink === 'Projects' },
    { name: 'Contact', href: '#contact', current: activeLink === 'Contact' },
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const scrollSpy = () => {
    const scrollY = window.scrollY;

    // Add logic to set the scrolling state if needed
    if (scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    // Check if scrolling is active, and reset the activeLink
    if (scrolling) {
      setActiveLink(null);
    } else {
      navigation.forEach((item) => {
        const targetElement = document.querySelector(item.href);
        if (targetElement) {
          const { top, bottom } = targetElement.getBoundingClientRect();

          // Adjust the values as needed to fine-tune the activation point
          if (top <= 150 && bottom >= 150) {
            setActiveLink(item.name);
          }
        }
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Call the scrollSpy function
      scrollSpy();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950">
      <Disclosure
        as="nav"
        className={` fixed top-0 left-0 right-0 z-10 ${
          scrolling ? 'bg-zinc-950 ' : 'bg-transparent  '
        }`}
        style={{ transition: 'background-color 0.5s' }}
      >
        {({ open }) => (
          <>
            <div className="sm:mx-32 mx-auto max-w-7xl">
              <div className="relative flex h-16 items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mx-3">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center sm:justify-between justify-center">
                  <div className="flex flex-shrink-0 sm:justify-center text-yellow-500 font-bold">
                    dioprasetya
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-10">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? ' text-yellow-500'
                              : 'text-gray-300 hover:text-yellow-500',
                            'rounded-md py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="bg-zinc-900">
        <div
          id="home"
          className=" sm:mx-32 mx-16 h-screen flex md:flex-row md:justify-between flex-col-reverse sm:flex-col-reverse items-center "
        >
          <div className="md:mb-0 sm:mb-12 mb-12 ">
            <span className="text-yellow-500 font-sans font-bold">
              Hello there! I'm <br />
            </span>
            <span className="text-white font-sans text-4xl font-bold">
              Dio Ananda Prasetya <br />
            </span>
            <span className="text-white font-sans font-normal text-xl">
              Your go-to Web Developer <br />
            </span>
            <h1 className="text-white font-sans font-thin text-sm mt-4">
              And I'm here to weave web wonders and bring your online dreams to
              vibrant life.
            </h1>
          </div>
          <div className="lg:w-2/5 md:w10/12 sm:w-10/12 w-10/12 ">
            <img src={Dio} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-950">
        <div
          id="about"
          className="sm:mx-32 mx-16 h-auto py-16 font-sans grid gap-10 content-center"
        >
          <h1 className="text-yellow-500 text-2xl font-bold uppercase justify-self-center">
            About me{' '}
          </h1>
          <div className="flex sm:flex-row flex-col gap-8 text-white text-justify">
            <p className="sm:w-1/2 w-full">
              I possess proficiency in both PHP and JavaScript programming
              languages. My hands-on experience extends to working with various
              frameworks, including Laravel and Bootstrap, which I've actively
              used for a span of 1 year. Additionally, I have a solid 7-month
              foundation in React and a month-long exploration of Tailwind.
            </p>
            <p className="sm:w-1/2 w-full">
              At present, I am engaged in a dynamic online internship with a
              reputable consulting firm based in Yogyakarta. Within this role, I
              contribute as a member of the backend web development team,
              focusing on Laravel and MySQL technologies. I'm actively
              contributing to real-world projects, honing my skills, and gaining
              practical exposure to the industry's best practices.
            </p>
          </div>
          <div className="  flex justify-center">
            <div className="flex flex-row w-8 gap-4 justify-center">
              <img src={php} alt="" />
              <img src={javascript} alt="" />
              <img src={laravel} alt="" />
              <img src={react} alt="" />
              <img src={bootstrap} alt="" />
              <img src={tailwind} alt="" />
              <img src={vite} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div
          id="education"
          className="h-auto sm:mx-32 mx-16 py-16 gap-10 font-sans grid content-center "
        >
          <h1 className="text-yellow-500 text-2xl font-bold uppercase justify-self-center">
            Education
          </h1>
          <div className="flex lg:flex-row flex-col gap-8 bg-red-500 ">
            <div className="mb-4 flex justify-center">
              <img
                src={purwa}
                alt=""
                className="shadow-2xl rounded-lg object-cover h-80 lg:w-[50rem] md:w-3/4 sm:w-full w-full"
              />
            </div>
            <div className=" lg:w-10/12 md:w-full sm:w-full w-full  bg-blue-500 flex flex-col justify-center">
              <h1 className="text-white font-semibold  ">
                Training Full Stack Web Development at Purwadhika Digital School
              </h1>
              <p className={`text-justify text-gray-400 my-3 font-normal `}>
                The training lasts for 3 months. Here, we are initially taught
                JavaScript fundamentals, and in the second stage, we switch to
                frontend development, followed by the third stage focused on
                backend development. We engage in individual projects to hone
                our logical and problem-solving abilities, and we also
                participate in team projects to gain experience in teamwork and
                individual task management.
              </p>
            </div>
          </div>
          <div className="flex flex-col  lg:flex-row-reverse gap-8">
            <div className="mb-4 flex justify-center ">
              <img
                src={stikom}
                alt=""
                className="shadow-2xl rounded-lg object-cover h-80 lg:w-[50rem] md:w-3/4 sm:w-full w-full"
              />
            </div>
            <div className="flex flex-col lg:w-10/12 md:w-full sm:w-full w-full justify-center">
              <h1 className="text-white flex font-semibold lg:justify-end justify-start">
                Institute of Technology and Business STIKOM BALI
              </h1>
              <p className={`text-justify text-gray-400 my-3 font-normal `}>
                I am part of the 2018 batch at ITB STIKOM BALI. During the early
                semesters, I actively participated in several student
                organizations and event committees. As I progressed into the
                middle and later semesters, my focus shifted towards my academic
                coursework and final projects. Throughout my academic journey, I
                received instruction in multiple programming languages,
                including C++, C#, PHP, JavaScript, and MySQL. However, I found
                a particular passion for web development using PHP and
                JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-950">
        <div
          id="projects"
          className="h-auto sm:mx-32 mx-16 py-16 font-sans grid content-center "
        >
          <h1 className="text-yellow-500 text-2xl font-bold uppercase mb-10 justify-self-center">
            My Project
          </h1>
          <div className="flex sm:flex-row flex-col flex-wrap gap-8 justify-center">
            <div className="lg:w-2/5 md:w-3/4 sm:w-full w-full">
              <div className="mb-4">
                <img src={regppob} alt="" className="rounded-lg" />
              </div>
              <h1 className="text-white flex lg:items-start items-start xl:flex-row  lg:flex-col sm:flex-row flex-col font-semibold ">
                Website PPOB (Register & Login Page)
                <span className="bg-yellow-500 text-white rounded-md text-center px-2 xl:ml-2 lg:ml-0 sm:ml-2 ml-0 ">
                  On Going
                </span>
              </h1>
              <p className="text-justify text-gray-400  my-3 font-normal">
                This is an online bank payment point website that I'm currently
                working on. This project uses React.js and Tailwind as the
                frontend framework.
              </p>
            </div>
            <div className="lg:w-2/5 md:w-3/4 sm:w-full w-full">
              <div className="mb-4 ">
                <img src={ecommerce} alt="" className="rounded-lg" />
              </div>
              <h1 className="text-white flex items-center font-semibold">
                E-Commerce Furniture
              </h1>
              <p
                className={`text-justify text-gray-400 my-3 font-normal ${
                  expanded ? '' : 'line-clamp-3'
                }`}
              >
                This is an e-commerce website that I created for my culminating
                project. The website is built using the PHP programming language
                with the Laravel framework and Bootstrap 4 for its frontend
                management. I used a template created by Colorlib and
                distributed by ThemeWagon for the client page, which I then
                customized using Bootstrap 4.
              </p>
              <button
                onClick={toggleExpanded}
                className="text-yellow-500 font-medium text-sm"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
            <div className="lg:w-2/5 md:w-3/4 sm:w-full w-full">
              <div className="mb-4 lg:mt-8 sm:mt-2 mt-2">
                <img src={porto} alt="" className="rounded-lg" />
              </div>
              <h1 className="text-white flex items-center font-semibold">
                My Portofolio
              </h1>
              <p className={`text-justify text-gray-400 my-3 font-normal `}>
                I created a static portfolio website using React with the Vite
                build tool and the Tailwind framework.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <div
          id="contact"
          className="h-auto sm:mx-32 mx-16 py-16 gap-1 font-sans grid content-center "
        >
          <div className="items-center text-center space-y-3  ">
            <h1 className="text-yellow-500 uppercase text-2xl font-bold">
              Contact
            </h1>
            <h1 className="text-lg text-gray-300">
              Contact me through the following form
            </h1>
          </div>
          <div className="flex justify-center gap-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
