/** Common role and accessible-name selector parts for left navigation. */
export const navigationLocators = {
  linkRole: "link",
  exact: true,
  links: {
    pim: "PIM",
    admin: "Admin",
    recruitment: "Recruitment",
    time: "Time",
    performance: "Performance",
    directory: "Directory",
    claim: "Claim",
  },
} as const;
