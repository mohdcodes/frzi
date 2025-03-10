import { X, FileDown } from 'lucide-react';

interface Application {
  id: string;
  name: string;
  date: string;
  status: string;
  document: string;
  photo?: string;
}

interface ApplicationModalProps {
  application: Application;
  dcid: string; // ✅ Accepts the new `dcid` prop
  imageLink?: string; // ✅ Accepts the new `imageLink` prop
  onClose: () => void;
  onDownload: (path: string) => void;
}

function ApplicationModal({
  application,
  imageLink, // ✅ Now accepts `imageLink`s
  dcid, // ✅ Destructure the new `dcid` prop
  onClose,
  onDownload,
}: ApplicationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-semibold text-blue-900">
            {application.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={imageLink || 'default.jpg'}
                alt="Applicant Photo"
                className=" rounded-lg shadow-md h-40"
              />
            </div>

            <div className="md:w-2/3 space-y-4">
              <div>
                <label className="text-sm text-gray-500">
                  Application Number
                </label>
                <p className="text-lg font-semibold text-blue-900">
                  {application.id}
                </p>
              </div>

              <div>
                <label className="text-sm text-gray-500">ID Number</label>
                <p className="text-lg">{dcid}</p>
              </div>

              <div>
                <label className="text-sm text-gray-500">Submission Date</label>
                <p className="text-lg">
                  {new Date(application.date).toLocaleDateString()}
                </p>
              </div>

              <div>
                <label className="text-sm text-gray-500">Status</label>
                <span
                  className={`mt-1 px-3 py-1.5 inline-flex text-sm font-semibold rounded-full
                  ${
                    application.status === 'Approved'
                      ? 'bg-green-100 text-green-800'
                      : application.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {application.status}
                </span>
              </div>

              <div>
                <label className="text-sm text-gray-500">Documents</label>
                {application.status === 'Approved' ? (
                  <button
                    onClick={() => onDownload(application.document)}
                    className="mt-1 flex items-center space-x-2 text-blue-900 hover:text-blue-700 transition-colors"
                  >
                    <FileDown className="w-5 h-5" />
                    <span>Download E-Permit</span>
                  </button>
                ) : (
                  <span className="ml-5 text-gray-400">N/A</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
          <p className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplicationModal;
