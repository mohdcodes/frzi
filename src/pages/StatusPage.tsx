import { useEffect, useState } from 'react';
import { FileDown, FileText } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';

// Sample data - in a real app this would come from an API
const applications = [
  {
    id: 'FRA-2024-0001',
    name: 'John Smith',
    date: '2024-03-15',
    status: 'In Progress',
    document: '/sample.pdf',
  },
  {
    id: 'FRA-2024-0002',
    name: 'Marie Claire',
    date: '2024-03-14',
    status: 'Approved',
    document: '/approved.pdf',
  },
  {
    id: 'FRA-2024-0003',
    name: 'Carlos Rodriguez',
    date: '2024-03-13',
    status: 'Under Review',
    document: '/review.pdf',
  },
  {
    id: 'FRA-2024-0005',
    name: 'Carlos Rodriguez',
    date: '2024-03-13',
    status: 'Approved',
    document: '/review.pdf',
  },
  {
    id: 'FRA-2024-0005',
    name: 'Carlos Rodriguez',
    date: '2024-03-13',
    status: 'Approved',
    document: '/review.pdf',
  },
];

function StatusPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleDownload = (documentPath: string) => {
    // In a real application, this would trigger a file download
    console.log('Downloading:', documentPath);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl text-blue-900">Application Status</h1>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Documents
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                      {app.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {app.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(app.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${
                          app.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : app.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <button
                        onClick={() => handleDownload(app.document)}
                        className="text-blue-900 hover:text-blue-700 flex items-center space-x-1"
                      >
                        <FileDown className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            Note: The status of your application is updated in real-time. Please
            check back regularly for the latest information.
          </p>
        </div>
      </div>
    </>
  );
}

export default StatusPage;
