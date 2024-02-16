import Link from 'next/link';
import {
  RiBookLine,
  RiBuilding4Line,
  RiEBikeLine,
  RiLandscapeLine,
  RiLiveLine,
  RiMedalFill,
} from 'react-icons/ri';

export default function CategoryItem({
  name,
  route,
}: {
  name: string;
  route: string;
}) {
  return (
    <div className="flex items-start justify-center">
      <Link
        href={`/category/${route}`}
        className="flex flex-col gap-3 sm:gap-4 sm:p-6 sm:rounded-md bg-background sm:hover:bg-accent sm:shadow max-w-[100px] sm:max-w-full w-full h-full min-h-28"
      >
        <div className="flex items-center justify-center aspect-square rounded-xl bg-background shadow hover:bg-accent sm:p-0 sm:rounded-none sm:bg-transparent sm:shadow-none sm:aspect-auto sm:justify-start sm:hover:bg-transparent">
          <div className="w-11 h-11 sm:w-7 sm:h-7">
            {name === 'Paket Asrama' && (
              <RiBuilding4Line className="w-full h-full" />
            )}
            {name === 'Paket Non Asrama' && (
              <RiEBikeLine className="w-full h-full" />
            )}
            {name === 'Kelas Satuan' && (
              <RiBookLine className="w-full h-full" />
            )}
            {name === 'Kelas Online' && (
              <RiLiveLine className="w-full h-full font-thin" />
            )}
            {name === 'English Staycation' && (
              <RiLandscapeLine className="w-full h-full" />
            )}
            {name === 'Beasiswa' && <RiMedalFill className="w-full h-full" />}
          </div>
        </div>
        <p className="font-semibold text-sm sm:text-base text-center sm:text-start">
          {name}
        </p>
      </Link>
    </div>
  );
}
