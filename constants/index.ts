import { employee, employees, salary, trend } from "@/public";
import {
  BarChart2,
  Bell,
  BriefcaseBusiness,
  Calendar,
  CalendarHeart,
  Check,
  Globe,
  Goal,
  Grid,
  Home,
  ListTodo,
  SettingsIcon,
  TrainFront,
} from "lucide-react";
import { AiOutlineLogout } from "react-icons/ai";

export const employeeRoutes = [
  {
    icon: Home,
    label: "Dashboard",
    route: "/",
  },
  {
    icon: Grid,
    label: "Applications",
    route: "/application",
  },
  {
    icon: Bell,
    label: "Conversations",
    route: "/conversations",
  },
  {
    icon: BarChart2,
    label: "Performance",
    route: "/performance",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    route: "/settings",
  },
  {
    icon: AiOutlineLogout,
    label: "Logout",
    route: "#",
  },
];
export const organizationRoutes = [
  {
    icon: Home,
    label: "Human Resources",
    route: "/organization/hr",
  },
  {
    icon: BriefcaseBusiness,
    label: "Employment Details",
    route: "/organization/employeeDetails",
  },
  {
    icon: Bell,
    label: "Report and analysis",
    route: "/conversations",
  },
  {
    icon: BarChart2,
    label: "Performance",
    route: "/performance",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    route: "/settings",
  },
  {
    icon: AiOutlineLogout,
    label: "Logout",
    route: "#",
  },
];

export const applicationCard = [
  {
    icon: CalendarHeart,
    color: "#1B8FE3",
    label: "Calender",
    route: "application/calendar",
    textArr: ["Check on eventful date", "recordings and organizing time"],
  },
  {
    icon: Check,
    color: "green",
    label: "Task",
    route: "application/task",
    textArr: ["Create Task", "assigned tasks"],
  },
  {
    icon: Goal,
    color: "red",
    label: "Goals",
    route: "application/goals",
    textArr: ["Create Task", "assigned tasks"],
  },
  {
    icon: Globe,
    color: "black",
    label: "Social",
    route: "application/social",
    textArr: ["Set your goals and achieve them in a short or long time frame"],
  },
  {
    icon: ListTodo,
    color: "#F8D108",
    label: "To-do list",
    route: "application/to-do",
    textArr: ["Create Your To do list"],
  },
  {
    icon: TrainFront,
    color: "orange",
    label: "Training and development",
    route: "application/training",
    textArr: ["Access e-learning modules and training materials"],
  },
  {
    icon: Calendar,
    color: "purple",
    label: "Customization",
    route: "application/customization",
    textArr: [
      "Customize and personalize notification preference, layout etc..",
    ],
  },
];

export const hrCard = [
  {
    label: "New Employee",
    icon: employee,
    number: "21",
    trend: trend,
    text: "Analytics for last week",
  },
  {
    label: "Total Employee",
    icon: employees,
    number: "21",
    trend: trend,
    text: "Analytics for last year",
  },
  {
    label: "Total Salary",
    icon: salary,
    number: "21",
    trend: trend,
    text: "Analytics for last month",
  },
  {
    label: "AVG Salary",
    icon: salary,
    number: "21",
    trend: trend,
    text: "Analytics for last month",
  },
];
