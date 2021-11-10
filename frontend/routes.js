// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import InventoryIcon from '@mui/icons-material/Inventory';
import ScienceIcon from '@mui/icons-material/Science';
import MedicationIcon from '@mui/icons-material/Medication';
import Notifications from "@material-ui/icons/Notifications";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,

        layout: "/admin",
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: Person,

        layout: "/admin",
    },
    {
        path: "/billing",
        name: "Billing",
        icon: "content_paste",

        layout: "/admin",
    },
    {
        path: "/lab",
        name: "Lab",
        icon: ScienceIcon,

        layout: "/admin",
    },
    {
        path: "/pharmacy",
        name: "Pharmacy",
        icon: MedicationIcon,

        layout: "/admin",
    },
    {
        path: "/equipment",
        name: "Equipment",
        icon: InventoryIcon,

        layout: "/admin",
    },
];

export default dashboardRoutes;
