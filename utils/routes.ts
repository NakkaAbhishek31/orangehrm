export const routes = {
  login: '/web/index.php/auth/login',
  dashboard: '/web/index.php/dashboard/index',
  adminUsers: '/web/index.php/admin/viewSystemUsers',
  employeeList: '/web/index.php/pim/viewEmployeeList',
  leaveList: '/web/index.php/leave/viewLeaveList',
  employeeTimesheets: '/web/index.php/time/viewEmployeeTimesheet',
  candidates: '/web/index.php/recruitment/viewCandidates',
  performanceReviews:
    '/web/index.php/performance/searchEvaluatePerformanceReview',
  directory: '/web/index.php/directory/viewDirectory',
  assignClaim: '/web/index.php/claim/viewAssignClaim',
  buzz: '/web/index.php/buzz/viewBuzz',
} as const;
