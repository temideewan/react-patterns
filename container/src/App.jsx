import { UserInfo } from './components/user-info';
import { DataSource } from './components/data-source-with-render';
import axios from 'axios';

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};
const Message = ({ msg }) => {
  return <h1>{msg}</h1>;
};
function App() {
  return (
    <>
      <DataSource
        getData={() => getDataFromServer('http://localhost:9090/users/3')}
        resourceName={'user'}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSource>

      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName={'msg'}
        render={(resource) => <Message msg={resource} />}
      ></DataSource>
    </>
  );
}

export default App;
