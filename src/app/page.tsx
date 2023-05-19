"use client";

import { CSSProperties } from "react";
import { useCSVReader } from "react-papaparse";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  } as CSSProperties,
  browseFile: {
    width: "20%",
  } as CSSProperties,
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  } as CSSProperties,
  remove: {
    borderRadius: 0,
    padding: "0 20px",
  } as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: "#87ceeb",
  } as CSSProperties,
};

function CSVReader() {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={(results: any) => {
        console.log("---------------------------");
        console.log(results);
        console.log("---------------------------");
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div style={styles.csvReader}>
            <button className="bg-blue-800 text-white" type="button" {...getRootProps()} style={styles.browseFile}>
              Upload file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button className="bg-red-500 text-white" {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  items-center p-24">
      <h2 className="mb-12 text-2xl font-bold">Run</h2>
      <div className="w-3/5">
        <CSVReader />
      </div>
    </main>
  );
}
