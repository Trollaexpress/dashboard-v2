import DashboardLayoutClient from '../../components/DashboardLayoutClient';

export const metadata = {
  title: 'Trolla dashboard',
  description: 'Trolla dashboard',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
