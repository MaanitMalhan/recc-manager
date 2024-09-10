import React, { useState } from 'react';
import Papa from 'papaparse';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';  


const CSVpage = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file uploaded", file.name, file.size, file.type);
      // Papa.parse(file, {
      //   complete: (result) => {
      //     setData(result.data);
      //     generateChartData(result.data);
      //   },
      //   header: true,
      };
    }
  ;

  const generateChartData = (data) => {
    const labels = data.map((row) => row[Object.keys(row)[0]]);
    const values = data.map((row) => parseFloat(row[Object.keys(row)[1]]));

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Data',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  const renderTable = () => {
    if (data.length === 0) return null;

    const headers = Object.keys(data[0]);
    return (
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div >
      <h1>Upload CSV File</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {/* {renderTable()}
      {chartData && <Line data={chartData} />} */}
    </div>
  );
};


// export default CSVpage;
