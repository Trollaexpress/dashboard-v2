import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Trolla dashboard',
  description: 'Trolla dashboard',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <div className="flex-row flex">
        <div className="w-12vw">
          <h1>dashboard</h1>
        </div>
        <div className="sm:ml-64 w-full mt-12 px-4">{children}</div>
      </div>
    </div>
  );
}
