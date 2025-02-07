// src/app/dashboard/components/eco/QrScanner.tsx
'use client';
import { useState } from 'react';
import { QrCode, X } from 'lucide-react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

interface QrScannerProps {
  onScan: (result: string) => void;
  onClose: () => void;
}

export const QrScanner = ({ onScan, onClose }: QrScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (isScanning) {
      const scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      }, false);

      scanner.render(success, error);

      function success(result: string) {
        scanner.clear();
        setIsScanning(false);
        onScan(result);
      }

      function error(err: any) {
        console.warn(err);
      }

      return () => {
        scanner.clear();
      };
    }
  }, [isScanning, onScan]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Scan QR Code</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {!isScanning ? (
          <button
            onClick={() => setIsScanning(true)}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center"
          >
            <QrCode className="w-5 h-5 mr-2" />
            Start Scanning
          </button>
        ) : (
          <div>
            <div id="reader" className="w-full"></div>
            <p className="text-sm text-gray-600 text-center mt-4">
              Position the QR code within the frame to scan
            </p>
          </div>
        )}
      </div>
    </div>
  );
};