import React from 'react';
export interface ICard {
  title?: string;
  data?: object;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICard> = ({ data, title, children, className = '' }) => {
  return children ? (
    <div
      className={`flex flex-col items-center justify-center bg-white shadow-xl rounded-xl ${
        className ? className : 'w-72'
      }`}
    >
      {/* Header */}
      {title && (
        <div className="relative mt-2 mx-2">
          <h1>{title}</h1>
        </div>
      )}
      {children}
    </div>
  ) : (
    <div
      className={`flex shrink flex-col items-center justify-center bg-white shadow-xl rounded-xl ${
        className ? className : 'w-72'
      }`}
    >
      {/* Header */}
      {title && (
        <div className="relative mt-2 mx-2">
          <h1>{title}</h1>
        </div>
      )}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Card;
