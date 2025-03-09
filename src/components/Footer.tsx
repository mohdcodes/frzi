import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-auto bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Link to={'/'} className="flex items-center space-x-2">
              <img src="logo.png" alt="République Française" className="h-20" />
            </Link>

            <div className="text-sm">
              Cofinancé par
              <br />
              l'Union européenne
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://legifrance.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-900"
            >
              legifrance.gouv.fr <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            <a
              href="https://gouvernement.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-900"
            >
              gouvernement.fr <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            <a
              href="https://service-public.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-900"
            >
              service-public.fr <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            <a
              href="https://data.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-900"
            >
              data.gouv.fr <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>© 2024 Portail France-Visas</span>
            <a href="#" className="hover:text-blue-900">
              Site map
            </a>
            <a href="#" className="hover:text-blue-900">
              Accessibility
            </a>
            <a href="#" className="hover:text-blue-900">
              Legal notices
            </a>
            <a href="#" className="hover:text-blue-900">
              Contact us
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Unless explicitly stated that intellectual property rights are held
            by third parties, the contents of this site are offered under{' '}
            <a href="#" className="text-blue-900 hover:underline">
              licence etalab-2.0 <ExternalLink className="inline w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
