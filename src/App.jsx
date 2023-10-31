import { useRef } from "react";
import {
  Loader,
  Navbar,
  Jumbotron,
  SoundSection,
  DisplaySection,
  WebgiViewer,
} from "./components";

const App = () => {
  const webgiViewerRef = useRef();
  const contentRef = useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />

      <div ref={contentRef} id="content">
        <Navbar />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>

      <WebgiViewer ref={webgiViewerRef} contentRef={contentRef} />
    </div>
  );
};

export default App;
