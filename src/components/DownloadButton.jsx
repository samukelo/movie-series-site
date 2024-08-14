import React from "react";

function DownloadButton({ movies }) {
  const downloadJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(movies));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "movies.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      onClick={downloadJson}
    >
      Download JSON
    </button>
  );
}

export default DownloadButton;
