export interface IWorkSpace {
  sampleTextProp: string;
}

const WorkSpace: React.FC<IWorkSpace> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
      {sampleTextProp}
    </div>
  );
};

export default WorkSpace;
