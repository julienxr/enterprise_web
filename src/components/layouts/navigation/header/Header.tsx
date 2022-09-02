export interface IHeader {
  sampleTextProp: string;
}

const Header: React.FC<IHeader> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
      {sampleTextProp}
    </div>
  );
};

export default Header;
