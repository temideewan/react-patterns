import { useState, useEffect } from 'react';
export const DataSource = ({ getData = () => {}, render}) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return render(resource);
};
