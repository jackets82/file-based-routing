import Image from "next/image";
import Button from "../UI/Button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem({ title, image, date, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className="rounded-md overflow-hidden flex bg-white p-0 w-1/2 h-56 shadow-xl shadow-slate-400">
      <div className="relative overflow-hidden w-2/3">
        <Image src={"/" + image} alt={title} objectFit="cover" layout="fill" />
      </div>
      <div className=" p-2 w-full flex flex-col">
        <div>
          <h2 className="text-xl font-bold pb-2">{title}</h2>
          <div className=" pb-2 text-gray-500 font-bold">
              <DateIcon />

            <time>{humanReadableDate}</time>
          </div>
          <div className="w-1/2 inline-flex">
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className=" pt-8 text-right pr-2">
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
