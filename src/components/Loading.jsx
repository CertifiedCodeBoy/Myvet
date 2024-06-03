import { useEffect, useState } from "react";
import { Heading, Spinner, useTimeout } from "@chakra-ui/react";
import { Info } from "phosphor-react";
import { BarLoader, ScaleLoader } from "react-spinners";
import whitelogo from "../Assets/whit_logo.png";

const loading = () => {
  const randomecommercesitefacts = [
    "The first-ever e-commerce transaction was made in 1994",
    "Myvet Provides the best e-commerce experience",
    "We are the best e-commerce site in the world",
    "We have the best customer service",
    "We provide the best user experience",
    "We are the best in the business",
  ];

  const initialIntervalIndex = localStorage.getItem("reloadIntervalIndex")
    ? parseInt(localStorage.getItem("reloadIntervalIndex"))
    : 0;
  const reloadIntervals = Array.from({ length: 10 }, (_, i) =>
    i === 0 ? 5 : 10 * Math.pow(2, i - 1)
  );
  const [timeLeft, setTimeLeft] = useState(
    reloadIntervals[initialIntervalIndex]
  );
  const [reloadIntervalIndex, setReloadIntervalIndex] =
    useState(initialIntervalIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      const newIntervalIndex =
        (reloadIntervalIndex + 1) % reloadIntervals.length;
      setReloadIntervalIndex(newIntervalIndex);
      localStorage.setItem("reloadIntervalIndex", newIntervalIndex);
      setTimeLeft(reloadIntervals[newIntervalIndex]);
      window.location.reload();
    }
  }, [timeLeft, reloadIntervalIndex, reloadIntervals]);

  const [data, setData] = useState(randomecommercesitefacts[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * randomecommercesitefacts.length
      );
      setData(randomecommercesitefacts[randomIndex]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className="
      flex
      flex-col
      justify-center
      items-center
      h-screen
      bg-gray-400
      "
      >
        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        h-full
        relative
        "
        >
          <img
            src={whitelogo}
            alt="Loading ..."
            className="
          w-40
          h-40
          z-50
          "
          />

          <BarLoader
            color="#fff"
            width="170px"
            cssOverride={{
              marginTop: "20px",
            }}
          />
        </div>
        <div
          className="
        flex
        flex-col
        md:flex-row
        justify-center
        items-center
        absolute
        bottom-40
        "
        >
          <Info size={20} weight="bold" color="#fff" />
          <p className="text-white text-lg font-bold ml-2">
            Did You know that ...{" "}
          </p>
          <p className="text-white text-lg ml-2">{data}</p>
        </div>
        <div
          className="
        flex
        flex-col
        justify-center
        items-center
        absolute
        bottom-20
        "
        >
          <p className="italic text-white font-thin">
            Reloading in {timeLeft} seconds ... {" "}
            <button
              className="text-white underline"
              onClick={()=>{window.location.reload()}}
            >
              reload now
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default loading;
