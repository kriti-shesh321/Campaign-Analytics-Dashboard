'use client';

import ThemeToggle from "./components/ThemeToggle";
import CampaignTable from "./components/Campaign";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <header className="p-6 min-w-4xl mx-auto flex justify-between items-center gap-[10%]">
        <div>
          <h1 className="text-3xl font-semibold text-(--primary)">
            Campaigns Dashboard
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Simple analytics dashboard to monitor your campaigns
          </p>
        </div>
        <ThemeToggle />
      </header>

      <CampaignTable />
    </div>
  );
}
