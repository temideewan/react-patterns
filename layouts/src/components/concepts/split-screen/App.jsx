/* eslint-disable react/prop-types */
import SplitScreen from './split-screen';

const LeftSide = ({title}) => {
  return <h2 style={{backgroundColor: "yellow"}}>{title}</h2>;
};
const RightSide = ({title}) => {
  return <h2 style={{backgroundColor: "brown"}}>{title}</h2>;
};

function App() {
  return (
    <>
      <SplitScreen  leftWidth={1}rightWidth={1}>
        <LeftSide title={"Left title"} />
        <RightSide title={"Right title"} />
      </SplitScreen>
    </>
  );
}

export default App;
