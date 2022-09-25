import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ILayoutContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  remainOpen: boolean;
  setRemainOpen: Dispatch<SetStateAction<boolean>>;
  screenSize: number;
  setScreenSize: Dispatch<SetStateAction<number>>;
}

const initialState: ILayoutContext = {
  isOpen: false,
  setIsOpen: () => undefined,
  remainOpen: false,
  setRemainOpen: () => undefined,
  screenSize: 0,
  setScreenSize: () => undefined,
};

export const LayoutContext = createContext<ILayoutContext>(initialState);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState.isOpen);
  const [remainOpen, setRemainOpen] = useState<boolean>(
    initialState.remainOpen
  );
  const [screenSize, setScreenSize] = useState(initialState.screenSize);
  return (
    <LayoutContext.Provider
      value={{
        isOpen,
        setIsOpen,
        remainOpen,
        setRemainOpen,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);
