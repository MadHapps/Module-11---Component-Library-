import "./App.css";
import Badge from "./Components/Badges/Badge";
import Banner from "./Components/Banners/Banner";
import Card from "./Components/Cards/Card";
import Testimonial from "./Components/Testimonials/Testimonial";
import Tooltip from "./Components/Tooltip/Tooltip";
import Toast from "./Components/Toast/Toast";
import { FaInbox } from "react-icons/fa6";
import Portal from "./Components/Portal";
import { useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="components-wrapper">
      <div className="component-display">
        <h2>Badge:</h2>
        <Badge color="green">Badge</Badge>
      </div>

      <div className="component-display">
        <h2>Banner:</h2>
        <Banner condition="success" title="Congratulations!">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolores
          ut, aspernatur aliquam debitis cum?
        </Banner>
      </div>

      <div className="component-display">
        <h2>Card:</h2>
        <Card title="This is a title!" Icon="" iconColor="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem eum voluptatem rem optio corrupti aliquam sint
          officiis. Consequatur, suscipit ea!
        </Card>
      </div>

      <div className="component-display">
        <h2>Testimonial:</h2>
        <Testimonial
          name="Joey Pagluica"
          role="Frontend Developer"
          bgColor="#F5F5F5"
          bumperColor="#2545b8"
          fontColor="#282828"
          portrait="/images/joey-tahoe-cold--small.png"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          cumque non ipsa eaque quia quam? Aliquam iusto neque minima ut!
        </Testimonial>
      </div>

      <div className="component-display">
        <h2>Tooltip:</h2>
        <Tooltip
          title="Archive notes"
          color="#1E40AF"
          style="light"
          Icon={FaInbox}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt esse
          dolor explicabo ullam fugiat, deleniti rerum odio architecto.
        </Tooltip>
      </div>

      <div className="component-display">
        <h2>Toast:</h2>
        <button className="toast-button" onClick={handleShowToast}>Show Toast</button>
        {showToast && (
          <Portal>
            <Toast condition="error" title="Error">
              Please re-save your work again.
            </Toast>
          </Portal>
        )}
      </div>
    </div>
  );
}

export default App;
