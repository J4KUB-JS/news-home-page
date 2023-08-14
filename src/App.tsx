import "./App.css";
import { CardItem } from "../components/CardItem";
import { NewCardItem } from "../components/NewCardItem";
import gamingGrowth from "./asset/image-gaming-growth.jpg";
import retroPCs from "./asset/image-retro-pcs.jpg";
import topLaptops from "./asset/image-top-laptops.jpg";
import logo from "./asset/logo.svg";
import mainArticleDesktop from "./asset/image-web-3-desktop.jpg";
import menuIcon from "./asset/icon-menu.svg";
import closeIcon from "./asset/icon-menu-close.svg";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <>
      <div className="bg-offWhite px-5 max-w-[1200px] mx-auto">
        <nav className="flex justify-between items-center py-12">
          <div>
            <img src={logo} />
          </div>
          <ul className="md:flex gap-6 text-lg text-veryDargBlue tracking-wide hidden">
            <li className="hover:text-softRed cursor-pointer">Home</li>
            <li className="hover:text-softRed cursor-pointer">News</li>
            <li className="hover:text-softRed cursor-pointer">Popular</li>
            <li className="hover:text-softRed cursor-pointer">Trending</li>
            <li className="hover:text-softRed cursor-pointer">Categories</li>
          </ul>
          {!isMenuOpen && (
            <img
              src={menuIcon}
              className="block md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
          {isMenuOpen ? (
            <div className="h-[100vh] w-[100vw] bg-transparentBlack block md:hidden absolute top-0 right-0">
              <div className=" bg-offWhite h-[100vh] w-[50vw] absolute top-0 right-0">
                <img
                  src={closeIcon}
                  className="block md:hidden cursor-pointer absolute top-12 right-6"
                  onClick={() => setIsMenuOpen(false)}
                />
                <ul className="flex flex-col gap-5 text-xl text-veryDargBlue tracking-wide text-left mt-[150px] px-8 font-semibold">
                  <li className="hover:text-softRed cursor-pointer">Home</li>
                  <li className="hover:text-softRed cursor-pointer">News</li>
                  <li className="hover:text-softRed cursor-pointer">Popular</li>
                  <li className="hover:text-softRed cursor-pointer">Trending</li>
                  <li className="hover:text-softRed cursor-pointer">Categories</li>
                </ul>
              </div>
            </div>
          ) : null}
        </nav>
        <section className="grid lg:grid-cols-3 gap-x-7 gap-y-12 md:grid-cols-2 mg:bg-red-500 sm:grid-cols-1">
          <div id="grid-item-1" className="md:col-span-2 sm:col-span-1">
            <img src={mainArticleDesktop} />
            <div className="flex justify-between py-6 md:flex-row flex-col gap-4">
              <h1 className="text-left xl:text-6xl font-bold md:w-80 md:text-5xl text-6xl w-96">
                The Bright Future of Web 3.0?
              </h1>
              <div className="w-[400px] text-left text-darkGrayishBlue flex gap-6 flex-col items-start justify-between xl:text-lg pr-5">
                <p>
                  We dive into the next evolution of the web that claims to put the power
                  of the platforms back into the hands of the people. But is it really
                  fulfilling its promise?
                </p>
                <button className="bg-softRed hover:bg-veryDarkBlue text-offWhite text-xl px-6 py-2 font-light uppercase tracking-widest">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <div
            id="grid-item-2"
            className="text-left bg-veryDarkBlue text-offWhite px-6 py-7"
          >
            <h3 className="text-softOrange text-5xl font-semibold tracking-wide">New</h3>
            <div className="divide-y divide-darkGrayishBlue">
              <NewCardItem
                title={"Hydrogen VS Electric Cars"}
                body={"Will hydrogen-fueled cars ever catch up to EVs?"}
              />
              <NewCardItem
                title={"The Downsides of AI Artistry"}
                body={
                  "What are the possible adverse effects of on-demand AI image generation?"
                }
              />
              <NewCardItem
                title={"Is VC Funding Drying Up?"}
                body={
                  "Private funding by VC firms is down 50% YOY. We take a look at what that means."
                }
              />
            </div>
          </div>
          <div className="flex justify-between lg:col-span-3 md:col-span-1 lg:flex-row flex-col gap-5">
            <CardItem
              index={"01"}
              title={"Reviving Retro PCs"}
              body={"What happens when old PCs are given modern upgrades?"}
              imgSrc={retroPCs}
            />
            <CardItem
              index={"02"}
              title={"Top 10 Laptops of 2022"}
              body={"Our best picks for various needs and budgets."}
              imgSrc={topLaptops}
            />
            <CardItem
              index={"03"}
              title={"The Growth of Gaming"}
              body={"How the pandemic has sparked fresh opportunities."}
              imgSrc={gamingGrowth}
            />
          </div>
        </section>
      </div>
      <footer className="mt-5 bg-veryDarkBlue text-offWhite p-2">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/J4KUB-JS">Jakub Spirydon</a>.
      </footer>
    </>
  );
}

export default App;
