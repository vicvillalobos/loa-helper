export default [
  {
    die: "heart",
    color: "red",
    values: ["heart", "diamond", "spade", "clover"],
    free: [0],
  },
  {
    die: "diamond",
    color: "red",
    values: ["diamond", "heart", "clover", "spade"],
    free: [0],
  },
  {
    die: "clover",
    color: "black",
    values: ["clover", "spade", "diamond", "heart"],
    free: [0],
  },
  {
    die: "spade",
    color: "black",
    values: ["spade", "clover", "heart", "diamond"],
    free: [0],
  },
  // Alternates
  {
    die: "heart",
    color: "black",
    values: ["spade", "clover", "heart", "diamond"],
    free: [0, 1, 3],
  },
  {
    die: "diamond",
    color: "black",
    values: ["clover", "spade", "diamond", "heart"],
    free: [0, 1, 3],
  },
  {
    die: "clover",
    color: "red",
    values: ["diamond", "heart", "clover", "spade"],
    free: [0, 1, 3],
  },
  {
    die: "spade",
    color: "red",
    values: ["heart", "diamond", "spade", "clover"],
    free: [0, 1, 3],
  },
] as {
  die: "heart" | "diamond" | "clover" | "spade";
  color: "red" | "black";
  values: ("heart" | "diamond" | "clover" | "spade")[];
  free: (0 | 1 | 2 | 3)[];
}[];
