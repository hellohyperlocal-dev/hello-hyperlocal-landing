// Single source for founding-community numbers. The stats bar and the form success badges both
// read from here so "Founding Neighbour #N" can never disagree with the progress bar.
// These are hard-coded pre-launch figures, not live data.
export const PROGRESS = {
  neighbours: { count: 327, goal: 1000 },
  businesses: { count: 42, goal: 100 },
  partners: { count: 6 },
} as const;
