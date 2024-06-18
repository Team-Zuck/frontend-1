import {
  BarChart2,
  Bell,
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

export const routes = [
  {
    icon: Home,
    label: "Dashboard",
    route: "/",
  },
  {
    icon: Grid,
    label: "Applications",
    route: "/employee/application",
  },
  {
    icon: Bell,
    label: "Conversations",
    route: "/employee/conversations",
  },
  {
    icon: BarChart2,
    label: "Performance",
    route: "/employee/performance",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    route: "/employee/settings",
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
