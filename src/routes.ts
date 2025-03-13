import { RouteConfig } from "./types/routes";

export const routes: RouteConfig[] = [
  {
    label: "Avoiding Re-renders",
    path: "/avoiding-rerenders",
    subRoutes: [
      { label: "Correct", path: "/correct" },
      { label: "Wrong", path: "/wrong" },
    ],
  },
  {
    label: "Memoization",
    path: "/memoization",
    subRoutes: [
      {
        label: "Use Callback",
        path: "/use-callback",
        subRoutes: [
          { label: "Correct", path: "/correct" },
          { label: "Wrong", path: "/wrong" },
        ],
      },
      {
        label: "Use Memo",
        path: "/use-memo",
        subRoutes: [
          { label: "Correct", path: "/correct" },
          { label: "Wrong", path: "/wrong" },
        ],
      },
    ],
  },
  {
    label: "Optimization Example 1",
    path: "/optimization",
    subRoutes: [
      {
        label: "Example 1",
        path: "/example1",
        subRoutes: [
          { label: "With Code Splitting", path: "/WithCodeSplitting" },
          { label: "Without Code Splitting", path: "/WithoutCodeSplitting" },
        ],
      },
      // {
      //   label: "Example 2",
      //   path: "/example2",
      //   subRoutes: [
      //     { label: "Correct", path: "/correct" },
      //     { label: "Wrong", path: "/wrong" },
      //   ],
      // },
    ],
  },
  {
    label: "States",
    path: "/states",
    subRoutes: [
      {
        label: "Example 1",
        path: "/example1",
        subRoutes: [
          { label: "Correct", path: "/correct" },
          { label: "Wrong", path: "/wrong" },
        ],
      },
      {
        label: "Example 2",
        path: "/example2",
        subRoutes: [
          { label: "Correct", path: "/correct" },
          { label: "Wrong", path: "/wrong" },
        ],
      },
    ],
  },
];