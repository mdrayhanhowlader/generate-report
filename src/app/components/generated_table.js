import React from 'react';

const GeneratedTable = ({ onClose }) => {
  const generateDummyData = (count) => {
    const dummyData = [];
    const startDate = new Date();
    for (let i = 1; i <= count; i++) {
      const reportDate = new Date(startDate.getTime() - i * 24 * 60 * 60 * 1000); 
      const formattedDate = reportDate.toLocaleString(); 
      const randomName = Math.random().toString(36).substring(7); 
      dummyData.push({ id: i, date: formattedDate, name: `Report ${randomName}`, download: `Download Link ${i}` });
    }
    return dummyData;
  };

  const reports = generateDummyData(200); 

  const [currentPage, setCurrentPage] = React.useState(1);
  const [reportsPerPage, setReportsPerPage] = React.useState(5);

  const totalPages = Math.ceil(reports.length / reportsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleReportsPerPageChange = (e) => {
    setReportsPerPage(parseInt(e.target.value));
    setCurrentPage(1); 
  };

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  return (
    <div className="container mx-auto">
      <div className="dialog-box p-4 pb-8 relative">
        <div className="absolute top-0 right-0 mt-2 mr-2 flex">
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg mr-2">Filter</button>
          <button onClick={onClose} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg mr-2">Close</button>
        </div>
        <h2 className="text-lg font-bold mb-4 text-center">Recently Generated Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className='bg-gray-100'>
              <tr>
                <th className="px-4 py-2 w-1/6 text-left text-md">Date</th>
                <th className="px-4 py-2 w-3/6 text-left text-md">Report Name</th>
                <th className="px-4 py-2 w-2/6 text-left text-md">Download</th>
              </tr>
            </thead>
            <tbody>
              {currentReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 w-1/6 text-left text-sm">
                    <div>{report.date.split(',')[0]}</div>
                    <div>{report.date.split(',')[1]}</div>
                  </td>
                  <td className="px-4 py-2 w-3/6 text-left text-sm">{report.name}</td>
                  <td className="px-4 py-2 w-2/6 text-left text-sm">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-12">
          <button
            className={`px-3 py-1 rounded-lg mr-2 ${currentPage === 1 ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
            <button
              key={startPage + i}
              onClick={() => handlePageChange(startPage + i)}
              className={`mx-1 px-3 py-1 rounded-lg ${currentPage === startPage + i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {startPage + i}
            </button>
          ))}
          <button
            className={`px-3 py-1 rounded-lg ml-2 ${currentPage === totalPages ? 'bg-gray-200 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
          <select
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg ml-8"
            value={reportsPerPage}
            onChange={handleReportsPerPageChange}
          >
            <option value="3">3 Rows</option>
            <option value="5">5 Rows</option>
            <option value="10">10 Rows</option>
            <option value="20">20 Rows</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GeneratedTable;
