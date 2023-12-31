// import './App.css';

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import "./sass/main.scss";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Banner from "./components/Banner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);
  return (
    <LayoutGroup type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId="main-image-1"
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
