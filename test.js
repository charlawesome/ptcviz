// Dependencies: papaparse.js (https://www.papaparse.com/)
// Make sure to include the papaparse.js library in your HTML file.

function processCSV(csvFile, chunkSize, callback) {
    const results = []; // Array to store the parsed objects
    let headers = null; // Store the headers from the CSV
  
    // Create a new PapaParse parser
    const config = {
      delimiter: ',',
      header: true,
      transformHeader: header => header.trim(), // Trim any extra spaces in headers
      chunkSize: chunkSize,
      step: function (row, parser) {
        // This callback will be executed for each parsed row
  
        // If headers haven't been set, store them and skip this row
        if (!headers) {
          headers = row.meta.fields;
          return;
        }
  
        // Create a new object for the row
        const rowObject = {};
  
        // Map values to object keys based on headers
        headers.forEach(header => {
          rowObject[header] = row.data[0][header];
        });
  
        // Push the row object to the results array
        results.push(rowObject);
      },
      complete: function () {
        // When parsing is complete, execute the callback with the results array
        callback(results);
      }
    };
  
    Papa.parse(csvFile, config);
  }
  
  
  // Example usage
const fileInput = document.getElementById('file-selector'); // Assume an HTML input element of type "file"
const chunkSize = 1024; // Chunk size in bytes

fileInput.addEventListener('change', function (event) {
  const csvFile = event.target.files[0];

  processCSV(csvFile, chunkSize, function (results) {
    console.log(results); // Array of objects representing the rows from the CSV
  });
});
