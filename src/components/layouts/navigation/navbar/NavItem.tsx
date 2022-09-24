import Image from 'next/image';

export interface INavItem {
  title?: string;
  active?: boolean;
  image?: any;
  alt?: string;
  width?: number;
  height?: number;
  styles?: object;
  children?: React.ReactNode;
}
const NavItem: React.FC<INavItem> = ({
  title,
  active,
  image,
  alt,
  width,
  height,
  styles,
  children,
}) => {
  return (
    <>
      {/* Buttons */}
      {title && (
        <div className={`flex py-1 mr-2 items-center text-sm`}>
          <span
            className={`flex items-center p-3 cursor-pointer font-medium hover:bg-gray-200 hover:rounded-lg hover:text-light-blue ${
              active
                ? `bg-gray-200 rounded-lg  text-light-blue`
                : `text-gray-500`
            } `}
          >
            {title}
          </span>
        </div>
      )}
      {/* Images */}
      {image && (
        <div className={`flex py-1 mx-2 items-center cursor-pointer`}>
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            style={styles}
          />
        </div>
      )}
      {/* Icons */}
      {children && (
        <div className={`flex py-1 mx-3 items-center text-xl  `}>
          <span
            className={`flex items-center p-2 cursor-pointer text-gray-500 hover:bg-gray-200 hover:rounded-lg hover:text-light-blue`}
          >
            {children}
          </span>
        </div>
      )}
    </>
  );
};

export default NavItem;
