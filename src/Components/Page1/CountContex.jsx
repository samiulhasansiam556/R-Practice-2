
import{ createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [ Count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ Count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

CountProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };