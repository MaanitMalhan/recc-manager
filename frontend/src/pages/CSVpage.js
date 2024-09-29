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
  
      // Log the first few lines of the raw CSV text to inspect the format
  
      // Clean up the text if needed
      const cleanedText = text.split('\n').slice(1).join('\n'); // Skip the first line
  
      try {
        // Parse CSV with csv-parse using a custom delimiter
        const records = parse(cleanedText, {
          columns: true,       // Use first row as headers
          skip_empty_lines: true,
          trim: true,         // Trim whitespace from both ends of fields
        });
  
  
        // Find relevant columns for x and y
        const formattedData = records
          .filter(row => row['Date Time, GMT-04:00'] && row['AC Curr, Amps (LGR S/N: 21471721, SEN S/N: 21471721, LBL: CT1)']) // Ensure these columns exist
          .map((row) => {
            const xValue = new Date(row['Date Time, GMT-04:00']).getTime(); // Convert to a timestamp for the x-axis
            const yValue = Number(row['AC Curr, Amps (LGR S/N: 21471721, SEN S/N: 21471721, LBL: CT1)']); // Assuming this is the y-value
            return { x: xValue, y: yValue };
          })
          .filter(row => !isNaN(row.y)); // Filter out rows where y is not a number
  
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
