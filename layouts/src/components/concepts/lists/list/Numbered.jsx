import React from 'react';

const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, i) => {
        return (
          <>
            <h2>{i + 1}</h2>
            <ItemComponent key={i} {...{ [sourceName]: item }} />
          </>
        );
      })}
    </>
  );
};

export default RegularList;
