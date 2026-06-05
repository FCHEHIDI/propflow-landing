import DemoSidebar from '@/components/demo/DemoSidebar';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#141414' }}>
      <DemoSidebar />
      <main
        style={{
          marginLeft: '220px',
          flex: 1,
          minHeight: '100vh',
          overflow: 'auto',
        }}
      >
        {children}
      </main>
    </div>
  );
}
