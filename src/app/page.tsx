"use client";

import { CSSProperties, useState } from "react";
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
  const [records, setRecords] = useState([]);

  return (
    <CSVReader
      onUploadAccepted={(results: []) => {
        console.log("---------------------------");
        setRecords(results);
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
            <button
              className="bg-blue-800 text-white"
              type="button"
              {...getRootProps()}
              style={styles.browseFile}
            >
              Upload file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button
              className="bg-red-500 text-white"
              {...getRemoveFileProps()}
              style={styles.remove}
            >
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
          <div>
            <table>
              {/* <thead>
                <tr>
                  <th>Start Time</th>
                  <th>Sport Time</th>
                  <th>Distance</th>
                  <th>AvaPace</th>
                  <th>Calories</th>
                </tr>
              </thead> */}
              <tbody>
                {records?.data?.map((record: [], index: number) => (
                  <tr key={index}>
                    <td>{record[1]}</td>
                    <td>{record[2]}</td>
                    <td>{record[5]}</td>
                    <td>{record[6]}</td>
                    <td>{record[7]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </CSVReader>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="mb-12 text-2xl font-bold">Run</h2>
      <div className="w-3/5">
        <CSVReader />
      </div>
    </main>
  );
}
