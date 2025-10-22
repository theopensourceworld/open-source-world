import * as React from "react";

type Contributor = {
  name: string;
  username: string;
  contributions: number;
  avatarUrl: string;
  badges?: string[];
};

interface DashboardProps {
  contributor: Contributor;
}

export const ContributorDashboard: React.FC<DashboardProps> = ({ contributor }) => {
  const badges = contributor.badges || [];

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto">
      {/* Profile Section */}
      <img
        src={contributor.avatarUrl}
        alt={`${contributor.name} avatar`}
        className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200"
      />
      <h2 className="text-2xl font-semibold text-gray-800">{contributor.name}</h2>
      <p className="text-gray-500">@{contributor.username}</p>

      {/* Stats Section */}
      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-gray-700">
          Total Contributions:{" "}
          <span className="text-blue-600">{contributor.contributions}</span>
        </p>
      </div>

      {/* Badges Section */}
      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {badges.map((badge) => (
            <span
              key={badge} // badge must be unique
              className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-200"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

