import { useState, useEffect } from 'react';
import { FileEdit, Trash2, FileText, Search, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';

function Dashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleStatusCheck = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/status');
    }, 2000);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded">
            <FileText className="w-5 h-5" />
          </div>
          <h1 className="text-3xl text-blue-900">My applications</h1>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700">
            Find your previously entered applications.
          </p>

          <p className="text-gray-700">
            It is advisable to group together applications that are to be
            processed at the same time and which may concern members of the same
            family (6 applications per group)
          </p>

          <p className="text-gray-700">
            When an application is eligible for dematerialisation, it cannot be
            part of a group of several applications.
          </p>

          <button className="w-full md:w-auto px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors mr-4">
            Create a new application
          </button>
          <button
            onClick={handleStatusCheck}
            className="w-full md:w-auto px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors mr-4"
          >
            Check status of your application
          </button>
          <button className="w-full md:w-auto px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-colors">
            Dashboard
          </button>

          <div className="mt-8">
            <h2 className="text-gray-700 font-medium mb-4">
              Depending on the status of the application, you can:
            </h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <FileEdit className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-700">Modify application</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <Trash2 className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-700">Delete application</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-700">
                  Consult the PDF form for an application in progress
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <Search className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-gray-700">
                  Consult the PDF form of a completed application
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
                  <Copy className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-gray-700">
                  <p>
                    Create a new application using data from the current
                    application.
                  </p>
                  <p className="text-sm">
                    The duplicated application will belong to the same group as
                    the current application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
