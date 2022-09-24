import Link from 'next/link';
import { BsPlusSquareFill } from 'react-icons/bs';

export interface ISelectCategory {
  title: string;
  crumbs: crumb[];
  categories?: string[];
}

export interface crumb {
  name: string;
  slug: string;
}

export interface IBreadCrumbs {
  crumbs: crumb[];
}

export const choices = ['All', 'Tickets', 'Projects', 'Purchasing'];

export const crumbs = [
  {
    name: 'Home',
    slug: 'home',
  },
  {
    name: 'Dashboards',
    slug: 'dashboards',
  },
];

{
  /* TODO: Export into own file, implement router history array to map over to feed crumbs... */
}
const BreadCrumbs: React.FC<IBreadCrumbs> = ({ crumbs }) => {
  function lastElement(index: number, collection: crumb[]) {
    return index === collection.length - 1;
  }
  return (
    <ul className="flex items-center pt-1 m-0 text-sm ">
      {crumbs.map((crumb, idx, refArray) => {
        const disableCrumb = lastElement(idx, refArray) ? true : false;

        return (
          <li
            key={idx}
            className="flex items-center pr-2 text-gray-600 font-sm"
          >
            {disableCrumb ? (
              <span>{crumb.name}</span>
            ) : (
              <>
                <Link href={`/${crumb.slug}`} key={idx}>
                  <a className="mr-1">{crumb.name}</a>
                </Link>
                <span className="font-semibold">-</span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const SelectCategory: React.FC<ISelectCategory> = ({ title, crumbs }) => {
  return (
    <div className="flex items-stretch py-6">
      <div className="flex justify-between items-center px-7 w-full">
        {/* Left Section */}
        <div className="flex justify-center flex-wrap flex-col mr-3">
          <h1 className="text-xl font-semibold m-0 flex justify-center flex-col">
            {title}
          </h1>
          <BreadCrumbs crumbs={crumbs} />
        </div>
        <div className="flex gap-3 items-center">
          {/* CTA Right Section CTA */}
          <div className="flex gap-3 items-center">
            {/*TODO: style dropdown */}
            <select className="border border-white p-1 text-gray-600 w-[175px] text-sm rounded-md transition-colors ease-in-out delay-150 cursor-pointer">
              <option value="All" selected>
                Choose category
              </option>
              <option
                className="pt-0 pr-[2px] pb-[1px] pl-[2px]"
                value="Tickets"
              >
                Tickets
              </option>
              <option value="Projects">Projects</option>
              <option value="Purchasing">Purchasing</option>
            </select>
            {/* TODO: CTA Modal for task creation (Ticket, Project, Todo, etc...) */}
            <Link href={'#'}>
              <a className={`text-green-500`}>
                <BsPlusSquareFill className="h-7 w-7" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
