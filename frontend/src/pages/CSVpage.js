import React, { useState, useEffect } from 'react';
import { parse } from 'csv-parse/browser/esm/sync';  // Import the synchronous parser
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CSVToGraph = () => {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Read the file content
    const reader = new FileReader();
    reader.onload = function (e) {
      const text = e.target.result;

      try {
        // Parse CSV with csv-parse
        const records = parse(text, {
          columns: true,       // Use first row as headers
          skip_empty_lines: true
        });

        // Format the data for Recharts
        const formattedData = records.map((row) => ({
          x: Number(row.x),
          y: Number(row.y),
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error parsing the CSV file:", error);
      }
    };

    reader.readAsText(file);  // Trigger file reading
  };

  // Update graph data when `data` is ready
  useEffect(() => {
    if (data.length > 0) {
      setGraphData(data);
    }
  }, [data]);

  return (
    <div>
      <h1>CSV to Graph</h1>
      
      {/* File upload */}
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      
      {/* Render the graph */}
      {graphData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Please upload a CSV file to display the graph.</p>
      )}
    </div>
  );
};

export default CSVToGraph;
