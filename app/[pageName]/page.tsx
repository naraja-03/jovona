
'use client';
import Profile from '@/components/ui/profile';
import Settings from '@/components/ui/settings';

const componentMap: Record<string, React.ReactElement> = {
  profile: <Profile />,
  settings: <Settings />,
};

interface PageProps {
  params: { pageName: string };
}

export default function DynamicPage({ params }: PageProps) {
  const { pageName } = params;
  const Component = componentMap[pageName];
  return (
    <div>
      <h1>{pageName.charAt(0).toUpperCase() + pageName.slice(1)}</h1>
      {Component ? Component : <div>Page not found</div>}
    </div>
  );
}