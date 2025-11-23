'use client';
import { useEffect, useMemo, useState } from 'react';

type Campaign = {
  id: number;
  name: string;
  status: 'Active' | 'Paused' | string;
  clicks: number;
  cost: number;
  impressions: number;
};

const API_URL = process.env.NEXT_PUBLIC_RAILWAY_URL || 'http://localhost:8000';

export default function CampaignTable() {
  const [data, setData] = useState<Campaign[]>([]);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Paused'>('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/campaigns`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch campaigns');
        return res.json();
      })
      .then((json) => {
        setData(json || []);
        setError(null);
      })
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'All') return data;
    return data.filter((c) => c.status === filter);
  }, [data, filter]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
    
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Campaigns</h2>

        <select
          className="px-3 py-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
        >
          <option className="text-(--dark)">All</option>
          <option className="text-(--dark)">Active</option>
          <option className="text-(--dark)">Paused</option>
        </select>
      </div>

      {/* table */}
      <div className="rounded shadow overflow-auto">
        {loading ? (
          <div className="p-6">Loading...</div>
        ) : error ? (
          <div className="p-6 text-red-500">{error}</div>
        ) : (
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left">Campaign Name</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Clicks</th>
                <th className="px-4 py-3 text-right">Cost</th>
                <th className="px-4 py-3 text-right">Impressions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  className="border-t hover:bg-gray-500"
                >
                  <td className="px-4 py-3">{c.name}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        c.status === 'Active'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-right">{c.clicks}</td>
                  <td className="px-4 py-3 text-right">₹{c.cost.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right">{c.impressions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {!loading && filtered.length === 0 && (
        <div className="p-4 text-center text-neutral-500">No campaigns found</div>
      )}
    </div>
  );
}