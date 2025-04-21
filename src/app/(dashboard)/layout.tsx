import DashboardLayoutClient from '../../components/DashboardLayoutClient';
import ProtectedRoute from '../../components/ProtectedRoute';

export const metadata = {
  title: 'Trolla Dashboard',
  description: 'Trolla dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <DashboardLayoutClient>{children}</DashboardLayoutClient>
    </ProtectedRoute>
  );
}
