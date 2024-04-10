import { Card } from "flowbite-react";
import reacticon from "../assets/reacticon.png";
import { Link } from "react-router-dom";

export default function CardPost() {
  return (
    <Card
      className="group relative w-full border border-teal-500 hover:border-2 h-[430px] overflow-hidden rounded-lg sm:w-[430px] 
    p-0"
    >
      <Link>
        <img
          className="h-[260px] w-full  object-cover z-20"
          src={reacticon}
          alt=""
        />
      </Link>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {/* {index.title} */}
        Titulo1
      </h2>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2 ">
          {/* {index.description} */}
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological orasasaderHere are the biggest
          enterprise technology acquisitions of 2021 so far, in reverse
          chronological orasasaderHere are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological orasasaderHere
          are the biggest enterprise technology acquisitions of 2021 so far, in
          reverse chronological orasasaderHere are the biggest enterprise
          technology acquisitions of 2021 so far, in reverse chronological
          orasasaderHere are the biggest enterprise technology acquisitions of
          2021 so far, in reverse chronological orasasaderHere are the biggest
          enterprise technology acquisitions of 2021 so far, in reverse
          chronological orasasaderHere are the biggest enterprise technology
          acquisitions of 2021 so far, in revers
        </p>
        <span className="italic text-sm">javascript</span>
      </div>
    </Card>
  );
}
