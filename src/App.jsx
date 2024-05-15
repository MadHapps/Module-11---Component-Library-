import "./App.css";
import Badge from "./Components/Badges/Badge";
import Banner from "./Components/Banners/Banner";

function App() {
  return (
    <>
      <Badge color="green">Badge</Badge>
      <Banner condition="success" title="Congratulations!">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolores ut,
        aspernatur aliquam debitis cum?
      </Banner>
    </>
  );
}

export default App;
