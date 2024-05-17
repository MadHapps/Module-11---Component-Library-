import "./App.css";
import Badge from "./Components/Badges/Badge";
import Banner from "./Components/Banners/Banner";
import Card from "./Components/Cards/Card";
import Testimonial from "./Components/Testimonials/Testimonial";

function App() {
  return (
    <div className="component-wrapper">
      <Badge color="green">Badge</Badge>

      <Banner condition="success" title="Congratulations!">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolores ut,
        aspernatur aliquam debitis cum?
      </Banner>

      <Card title="This is a title!" Icon="" iconColor="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem
        eum voluptatem rem optio corrupti aliquam sint officiis. Consequatur,
        suscipit ea!
      </Card>

      <Testimonial name="Joey Pagluica" role="Frontend Developer">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, cumque
        non ipsa eaque quia quam? Aliquam iusto neque minima ut!
      </Testimonial>
    </div>
  );
}

export default App;
