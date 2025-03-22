import { useEffect, useState } from 'react';
import { FileDown, FileText } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import ApplicationModal from '../components/ApplicationModal';

// Sample data - in a real app this would come from an API
const applications = [
  {
    id: 'FR2501202580367',
    name: 'Ajita Sunar',
    date: '2025-01-25',
    status: 'Approved',
    document:
      'https://www.dropbox.com/scl/fi/957vi016r7lj5af91bn3z/MohdArbaazSiddiqui_Resume.pdf?rlkey=bhjdpvvg5e0yd9fi1z46oqtsc&st=rhv6b8u1&dl=1',
    modalImage: 'ajeeta.jpg',
    dcid: '11909250',
  },
  {
    id: 'FR2701202590263',
    name: 'Prem Bahadur Nepali',
    date: '2025-01-27',
    status: 'Approved',
    document:
      'https://www.dropbox.com/scl/fi/mo95x7w88a5c2nx8805tz/PREM-BAHADUR-NEPALI-2701202590263.pdf?rlkey=j0r773dnqfd3nbqf6rdiz60t3&st=jgzyhl67&dl=1',
    modalImage: 'man1.jpg',
    dcid: '11909205',
  },
  {
    id: 'FR2602202573926',
    name: 'Rameswar khanna',
    date: '2025-02-26',
    status: 'Under Review',
    document:
      'https://www.dropbox.com/scl/fi/mo95x7w88a5c2nx8805tz/PREM-BAHADUR-NEPALI-2701202590263.pdf?rlkey=j0r773dnqfd3nbqf6rdiz60t3&st=jgzyhl67&dl=1',
    dcid: '11909222',
  },
  {
    id: 'FR0201202500569',
    name: 'Abhishek Sharma',
    date: '2025/01/02',
    status: 'Approved',
    document:
      'https://www.dropbox.com/scl/fi/mo95x7w88a5c2nx8805tz/PREM-BAHADUR-NEPALI-2701202590263.pdf?rlkey=j0r773dnqfd3nbqf6rdiz60t3&st=jgzyhl67&dl=1',
    dcid: 'PA2965520',
  },
  {
    id: 'FR2501202580038',
    name: 'Tulsi Gurung',
    date: '2025/01/25',
    status: 'Approved',
    modalImage: 'tulsi.jpg',
    document:
      'https://www.dropbox.com/scl/fi/jxj3dpw56vwhex2c0e2hk/TULSI-GURUNG-2501202580038.pdf?rlkey=wurqknx2fkiwq6jdk0xqsdmjp&st=dcd2nvwy&dl=1',
    dcid: 'PA2965554',
  },
];

function StatusPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<
    (typeof applications)[0] | null
  >(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleDownload = (documentPath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = documentPath;
    link.download = fileName; // Ensures direct download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {selectedApplication && (
        <ApplicationModal
          dcid={selectedApplication.dcid}
          imageLink={selectedApplication.modalImage}
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onDownload={() =>
            handleDownload(
              selectedApplication.document,
              `Application_${selectedApplication.id}.pdf`
            )
          }
        />
      )}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl text-blue-900">Application Details</h1>
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
              {/* <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                        <button
                          onClick={() => setSelectedApplication(app)}
                          className="hover:underline focus:outline-none focus:underline"
                        >
                          {app.id}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {app.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {new Date(app.date).toLocaleDateString('en-GB')}
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
                        {app.status === 'Approved' ? (
                          <button
                            onClick={() =>
                              handleDownload(
                                app.document,
                                `Application_${app.id}.pdf`
                              )
                            }
                            className="text-blue-900 hover:text-blue-700 flex items-center space-x-1"
                          >
                            <FileDown className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody> */}
              <tbody className="bg-white divide-y divide-gray-200">
                {[...applications]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  ) // Sort from newest to oldest
                  .map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">
                        <button
                          onClick={() => setSelectedApplication(app)}
                          className="hover:underline focus:outline-none focus:underline"
                        >
                          {app.id}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {app.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {new Date(app.date).toLocaleDateString('en-GB')}
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
                        {app.status === 'Approved' ? (
                          <button
                            onClick={() =>
                              handleDownload(
                                app.document,
                                `Application_${app.id}.pdf`
                              )
                            }
                            className="text-blue-900 hover:text-blue-700 flex items-center space-x-1"
                          >
                            <FileDown className="w-4 h-4" />
                            <span>Download</span>
                          </button>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
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
