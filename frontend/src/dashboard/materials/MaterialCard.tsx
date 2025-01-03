
import { FileText, Download } from 'lucide-react';
import { formatDate } from '../../utils/date';

interface MaterialCardProps {
  title: string;
  subject: string;
  type: string;
  uploadedAt: string;
  downloadUrl: string;
}

export function MaterialCard({ title, subject, uploadedAt, downloadUrl }: MaterialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-yellow-50 rounded-lg">
            <FileText className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{subject}</p>
            <p className="text-xs text-gray-400 mt-1">Uploaded {formatDate(uploadedAt)}</p>
          </div>
        </div>
        <a
          href={downloadUrl}
          className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700"
          download
        >
          <Download className="h-4 w-4" />
          <span className="text-sm">Download</span>
        </a>
      </div>
    </div>
  );
}