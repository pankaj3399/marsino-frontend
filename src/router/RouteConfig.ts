import { ICONS } from "../assets/icons";

export const ROUTES = {
  HOME: {
    path: "/",
    label: "Dashboard",
    key: "home",
    icon: ICONS.SIDEBAR_DASHBOARD,
  },
  REPORTS: {
    path: "/reports",
    label: "Reports",
    key: "Reports",
    icon: ICONS.SIDEBAR_REQUESTS,
    // childrens: {
    //   APPLIED: {
    //     path: "/applied",
    //     label: "Applied",
    //     key: "applied",
    //   },
    //   CONTACTED: {
    //     path: "/contacted",
    //     label: "Contacted",
    //     key: "contacted",
    //   },
    //   SHORTLISTED: {
    //     path: "/shortlisted",
    //     label: "Shortlisted",
    //     key: "shortlisted",
    //   },
    //   INTERVIEWED: {
    //     path: "/interviewed",
    //     label: "Interviewed",
    //     key: "interviewed",
    //   },
    //   HIRED: {
    //     path: "/hired",
    //     label: "Hired",
    //     key: "hired",
    //   },
    //   REJECTED: {
    //     path: "/rejected",
    //     label: "Rejected",
    //     key: "rejected",
    //   },
    // },
  },
};
