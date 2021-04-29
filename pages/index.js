import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,regular,500,900&amp;subset=latin" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&amp;display=swap" rel="stylesheet"></link>
      </Head>



      <main className="bg-white font-montserrat">
        <header className="h-24 sm:h-32 flex items-center">
          <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
            <div className="text-black font-black text-2xl flex items-center">
              <span className="w-6 h-6 rounded-full bg-blue-500 mr-4"></span> GI Party Cleaning and Services
            </div>
            <div className="flex items-center">
              <nav className="text-black text-lg hidden lg:flex items-center">
                <a href="#" className="py-2 px-6 flex hover:text-blue-500">
                  Home
                </a>
                <a href="#about" className="py-2 px-6 flex hover:text-blue-500">
                  About us
                </a>
                <a href="#" className="py-2 px-6 flex hover:text-blue-500">
                  Info
                </a>
                <a href="#contact" className="py-2 px-6 flex text-blue-500">
                  Contact us
                </a>
              </nav>
              <button className="lg:hidden flex flex-col">
                <span className="w-6 h-px bg-gray-900 mb-1"></span>
                <span className="w-6 h-px bg-gray-900 mb-1"></span>
                <span className="w-6 h-px bg-gray-900 mb-1"></span>
              </button>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-6 sm:px-12 flex flex-col-reverse sm:flex-row items-center">
          <div className="sm:w-2/5 flex flex-col items-start mt-8 sm:mt-0">
            <h1 className="text-4xl lg:text-6xl leading-none mb-4"><strong className="font-black">G.I. Party</strong> <small className="text-blue-500"><i>noun</i></small></h1>
            <p className="lg:text-lg mb-4 sm:mb-12">
              - military jargon for an intensive, top-down, inside-out group cleaning of a barracks, typically in preparation for an inspection.
              <br />
              <br />
              let us help you with your cleaning needs
            </p>
            <a href="#about" className="font-semibold text-lg bg-blue-500 hover:bg-blue-400 text-white py-3 px-10 rounded-full">Learn more</a>
          </div>
          <div className="sm:w-3/5">
            <img src="cleaning.svg" alt="Cleaning Logo" className="w-full" width="870" height="712" />

          </div>
        </div>
      </main>



      <div className="container mx-auto px-6 pt-8 sm:pt-16 pb-20">
        <div className="flex flex-col sm:flex-row w-full mb-16 sm:mb-32">
          <div className="relative sm:w-1/3">
            <span className="text-6xl font-black text-gray-200 absolute top-0 left-0">1</span>
            <div className="mt-8 ml-6 relative z-10 flex flex-col">
              <h4 className="font-bold text-gray-400 uppercase font-xs leading-none">Getting started</h4>
              <p className="text-3xl text-gray-800 leading-none mt-2">Lorem ipsum dolor</p>
              <a href="#" className="text-blue-500 mt-2">See more</a>
            </div>
          </div>
          <div className="relative sm:w-1/3">
            <span className="text-6xl font-black text-gray-200 absolute top-0 left-0">2</span>
            <div className="mt-8 ml-6 relative z-10 flex flex-col">
              <h4 className="font-bold text-gray-400 uppercase font-xs leading-none">Getting started</h4>
              <p className="text-3xl text-gray-800 leading-none mt-2">Lorem ipsum dolor</p>
              <a href="#" className="text-blue-500 mt-2">See more</a>
            </div>
          </div>
          <div className="relative sm:w-1/3">
            <span className="text-6xl font-black text-gray-200 absolute top-0 left-0">3</span>
            <div className="mt-8 ml-6 relative z-10 flex flex-col">
              <h4 className="font-bold text-gray-400 uppercase font-xs leading-none">Getting started</h4>
              <p className="text-3xl text-gray-800 leading-none mt-2">Lorem ipsum dolor</p>
              <a href="#" className="text-blue-500 mt-2">See more</a>
            </div>
          </div>
        </div>
        <div className="sm:px-12 flex flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:pr-16">
            <img src="http://placehold.it/552x300" className="rounded-lg" />
          </div>
          <div className="sm:w-1/2 pt-4">
            <h3 className="text-2xl text-gray-800 mb-4">
              Lorem ipsum dolor sit amet.
                </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
            <button className="mx-auto bg-blue-600 hover:bg-blue-500 text-white rounded py-2 px-8 shadow-lg">
              Action
                </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-20" id="about">
        <section className="container mx-auto py-10 md:py-20 antialiased ">
          <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-8">
            <article className="bg-white mx-auto max-w-sm pb-8 bg-cover bg-center shadow-2xl rounded-xl">
              <img className="mx-auto mb-20 mt-10 w-40" src="spray.png" alt="" />
              <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                Clean
              </h2>
              <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                We are ready to take on the challenge of getting your place exactly the way you want it.
              </p>
            </article>

            <article className="bg-white mx-auto max-w-sm pb-8 bg-cover bg-center shadow-2xl rounded-xl">
              <img className="mx-auto mb-20 mt-10 w-40" src="safe.png" alt="" />
              <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                Safe
              </h2>
              <p className="m-4 text-lg p-4 leading-relaxed text-center">
                We only use the eco friendly chemicals that will get the job done. Let us know if you have any concerns or questions about our products
              </p>
            </article>

            <article className="bg-white mx-auto max-w-sm pb-8 bg-cover bg-center shadow-2xl rounded-xl">
              <img className="mx-auto mb-20 mt-10 w-40" src="time.png" alt="" />
              <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                Quick
              </h2>
              <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                We price ourselves in our quality but reconize the need for speed. Our quick turnarounds will get your place ready to go in no time.
              </p>
            </article>

            <article className="bg-white mx-auto max-w-sm pb-8 bg-cover bg-center shadow-2xl rounded-xl">
              <img className="mx-auto mb-20 mt-10 w-40" src="shiny.png" alt="" />
              <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
                Guaranteed
              </h2>
              <p className="m-4 text-lg p-4 leading-relaxed text-center ">
                Dont like the way it came out? Call us and we can touchup any missed area.
              </p>
            </article>
          </section>
        </section>
      </div>

      <div className="bg-gray-50" id="contact">
        <div className="container mx-auto px-6 flex flex-col items-center">

          <div className="pt-10 pb-20 px-4">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
              <h2 className="mr-8 w-full md:w-1/3 text-4xl font-extrabold leading-9">
                Lets get in touch
              </h2>
              <dl className="w-full md:w-2/3">
                <dt className="mb-4">
                  <h3 className="text-3xl font-semibold">
                    <a>(816) 508-7384</a>
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    Contact any business day 9-5
                  </p>
                </dd>
                <dt className="mb-4">
                  <h3 className="text-3xl font-semibold">
                    <a>gipartykc@gmail.com</a>
                  </h3>
                </dt>
                <dd className="mb-16">
                  <p>
                    We don’t. Valohai isn’t a data science platform; it&#x27;s a Machine Learning Management Platform that handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions.
                </p>
                </dd>
              </dl>
            </div>
          </div>


        </div>
      </div>


      {/* <div className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h3 className="text-center font-bold text-4xl text-gray-800 mb-4">Lorem ipsum dolor sit amet</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          <button className="mx-auto bg-blue-600 hover:bg-blue-500 text-white rounded py-3 px-8 shadow-lg text-xl">
            Action
            </button>
        </div>
      </div> */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">

          <div className="md:flex gap-8">
            <div className="md:w-1/2 text-center mb-8 md:mb-0">
              <img className="w-48 h-48 rounded-full mx-auto -mb-24 object-cover" src="z.jpg" alt="Avatar Z" />
              <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                <h3 className="font-title text-gray-800 text-xl mb-3">
                  Zarina Bryant Allen
                </h3>
                <p className="font-body">
                  Co-Founder
                </p>
                <p className="font-body text-sm mb-4">
                  A sweet and awesome description of Zarina
                </p>
                <a className="font-body text-blue-500 hover:text-gray-800" href="#">
                  gipartykc@gmail.com
                </a>
              </div>
            </div>
            <div className="md:w-1/2 text-center">
              <img className="w-48 h-48 rounded-full mx-auto -mb-24 object-cover" src="b.jpg" alt="Avatar Damien Marley" />
              <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                <h3 className="font-title text-gray-800 text-xl mb-3">
                  Bill Allen
                </h3>
                <p className="font-body">
                  Co-Founder
                </p>
                <p className="font-body text-sm mb-4">
                  A sweet and awesome description of Bill
                </p>
                <a className="font-body text-blue-500 hover:text-gray-800" href="mailto:dino@siete.pm">
                  gipartykc@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="bg-gray-800 bg-blueGray-200 pt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <h4 className="text-3xl text-white leading-tight text-center sm:text-left">
                We're social!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                <small>We typically respond in 1-2 business days.</small>
              </h5>
              <div className="mt-6">
                <a href="https://www.facebook.com/GIPartyKC" target="_blank" className="inline-block">
                  <FontAwesomeIcon icon={faFacebookSquare} className="bg-white text-blue-700 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-10 inline-block text-center" />
                </a>
                <a href="mailto:gipartykc@gmail.com" target="_blank" className="inline-block" >
                  <FontAwesomeIcon icon={faEnvelope} className="bg-white text-gray-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
                </a>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex justify-center sm:justify-end py-10 mt-16 ">
                <a href="#" className="text-white mx-2">Home</a>
                <a href="#about" className="text-white mx-2">About Us</a>
                <a href="#contact" className="text-white mx-2">Contact</a>
                <a href="#" className="text-white mx-2">Link3</a>
                <a href="#" className="text-white mx-2">Link4</a>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}
