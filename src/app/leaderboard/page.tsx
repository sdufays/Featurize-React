// src/pages/leaderboard.js

import { Metadata } from "next";
import { FaMedal } from "react-icons/fa"; // Importing a medal icon

// Metadata for the page
export const metadata = {
  title: "Leaderboard | Next.js App",
  description: "This is the leaderboard page for our Next.js application",
};

// Arrays of first and last names
const firstNames = [
  "Alex", "Chris", "Jordan", "Taylor", "Morgan",
  "Casey", "Jamie", "Cameron", "Dana", "Robin",
  "Pat", "Skyler", "Quinn", "Riley", "Sydney",
  "Avery", "Bailey", "Drew", "Emerson", "Finley",
  "Grayson", "Hayden", "Indiana", "Jesse", "Kai",
  "Logan", "Micah", "Noel", "Oakley", "Peyton",
  "Reese", "Sage", "Tatum", "Urban", "Valen",
  "West", "Xavier", "Yale", "Zion", "Adair",
  "Blake", "Casey", "Darian", "Eden", "Frankie",
  "Gray", "Harley", "Issac", "Jaden", "Kairos"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones",
  "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris",
  "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
  "Walker", "Young", "Allen", "King", "Wright",
  "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall",
  "Rivera", "Campbell", "Mitchell", "Carter", "Roberts"
];

// Function to generate random integer between min and max, inclusive
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate random leaderboard data, sorted descending by score
const generateLeaderboardData = () => {
  const data = [];
  const usedNames = new Set(); // To ensure unique names

  while (data.length < 50) {
    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    const fullName = `${firstName} ${lastName}`;

    if (!usedNames.has(fullName)) { // Ensure unique names
      usedNames.add(fullName);
      const score = getRandomInt(1000, 2000);
      data.push({ name: fullName, score });
    }
  }

  // Sort descending by score
  data.sort((a, b) => b.score - a.score);

  // Assign rank based on sorted order
  return data.map((player, index) => ({
    rank: index + 1,
    name: player.name,
    score: player.score,
  }));
};

const leaderboardData = generateLeaderboardData();

// Define a mapping for top ranks with text colors
const rankTextColors = {
  1: "text-gold",
  2: "text-silver",
  3: "text-bronze",
};

const LeaderboardPage = () => {
  return (
    <>
      <section className="pb-28 pt-36 bg-gray-50 dark:bg-dark">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="w-full px-4 lg:w-10/12 xl:w-8/12">
              {/* **Updated Title** */}
              <h2 className="mb-12 text-4xl font-professional tracking-wide text-black dark:text-white sm:text-5xl sm:leading-tight text-center">
                Leaderboard
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Player Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((player) => {
                      // Determine text color based on rank
                      const textColorClass = rankTextColors[player.rank] || "text-gray-800 dark:text-white";

                      // Add colored medal icon next to player name for top 3
                      let medalIcon = null;
                      if (player.rank === 1) {
                        medalIcon = <FaMedal className="ml-2 text-gold" />;
                      } else if (player.rank === 2) {
                        medalIcon = <FaMedal className="ml-2 text-silver" />;
                      } else if (player.rank === 3) {
                        medalIcon = <FaMedal className="ml-2 text-bronze" />;
                      }

                      // Determine if player is in top 3
                      const isTopThree = player.rank <= 3;

                      return (
                        <tr
                          key={player.rank}
                          className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <td className={`px-6 py-4 font-semibold ${textColorClass}`}>
                            {player.rank}
                          </td>
                          <td className={`px-6 py-4 flex items-center ${isTopThree ? "text-black dark:text-white" : textColorClass}`}>
                            {player.name}
                            {medalIcon}
                          </td>
                          <td className={`px-6 py-4 ${isTopThree ? textColorClass : "text-gray-800 dark:text-white"}`}>
                            {player.score}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeaderboardPage;
