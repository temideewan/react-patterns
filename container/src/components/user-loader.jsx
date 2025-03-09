import axios from 'axios';
import React, { useState, useEffect } from 'react';
export const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:9090/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
