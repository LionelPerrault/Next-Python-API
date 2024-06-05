import { AiOutlineDown } from "react-icons/ai"; 
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as CountryFlags from 'country-flag-icons/react/3x2';


const countryLists = [
  { "United States": <CountryFlags.US className="rounded-full h-8 w-8"/>},
  { "France" :  <CountryFlags.FR className="rounded-full h-8 w-8"/>},
  { "Canada": <CountryFlags.CA className="rounded-full h-8 w-8"/>},
  { "Australia" :  <CountryFlags.AU className="rounded-full h-8 w-8"/>},
  { "Brazil": <CountryFlags.BR className="rounded-full h-8 w-8"/>},
  { "China" :  <CountryFlags.CN className="rounded-full h-8 w-8"/>},
  { "Denmark": <CountryFlags.DK className="rounded-full h-8 w-8"/>},
  { "Greece" :  <CountryFlags.GR className="rounded-full h-8 w-8"/>}
]

const SelectCountry = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [curcountry, setCountry] = useState("United States");

  const trigger = useRef<HTMLAnchorElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: {target: null | EventTarget}) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <li className="relative list-none" >
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        href="#"
      >
        <div className="flex items-center gap-1">
          {/* {countryLists.map(country => (
            Object.keys(country)[0] === curcountry && Object.values(country)[0]
          ))} */}
          <AiOutlineDown className="w-4 h-4 text-slate-400"/>
        </div>
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`overflow-y-auto absolute left-0 mt-2.5 flex h-50 w-12 px-1 flex-col rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        {countryLists.map((country) => (
          <div className="cursor-pointer" key={Object.keys(country)[0]} id={Object.keys(country)[0]} onClick={(e) => { setCountry(Object.keys(country)[0]); setDropdownOpen(!dropdownOpen)}}>
            {Object.values(country)[0]}
          </div>
        ))}
      </div>
    </li>
  );
};

export default SelectCountry;
