import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try {
        const res = await fetch(url);

        // Ensure the response is ok
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const APIData = await res.json();
        setData(APIData);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log("An unexpected error occurred");
        }
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal && data && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
