// src/app/dashboard/corporate/reports/analysis/layout.tsx
export default function AnalysisLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    );
  }