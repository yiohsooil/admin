import React from 'react';
import { useReactToPrint } from 'react-to-print';

const useHandlePrint = (ref: React.RefObject<HTMLDivElement>) =>
  useReactToPrint({
    content: () => ref.current,
    pageStyle: `
        @page {
          size: auto;
          margin: 25mm;
        }
        body {
          -webkit-print-color-adjust: exact;
          margin: 20mm;
        }
        header, footer {
          display: none !important;
        }
        table, th, td {
          border: 1px solid #ccc !important;
          border-collapse: collapse !important;
        }
        @media print {
          .print-button {
            display: none !important;
          }
        }
      `,
  });

export { useHandlePrint };
