import Cv from "./components/cv";
import jsPDF from "jspdf";
import { useRef } from "react";

function App() {
  const filePdf = useRef(null);
  const handleGeneratePdf = ({ Cv }) => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.html(filePdf.current, {
      async callback(doc) {
        doc.save("document.pdf");
      },
    });
  };
  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div ref={filePdf}>
        <Cv />
      </div>
    </div>
  );
}

export default App;
