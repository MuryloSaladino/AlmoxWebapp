import { App } from "@/App";
import { AuthenticationGuard } from "@/components/guards/authentication-guard";
import { AppLayout } from "@/components/layout/app-layout";
import { AppRoutes } from "@/config/constants/app-routes";
import { Catalog } from "@/pages/catalog";
import { Deliveries } from "@/pages/deliveries";
import { DeliveryDetails } from "@/pages/delivery-details";
import { Departments } from "@/pages/departments";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { OrderDetails } from "@/pages/order-details";
import { Orders } from "@/pages/orders";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([{
    Component: App,
    children: [
        {
            path: AppRoutes.LOGIN,
            Component: Login,
        },
        {
            Component: AuthenticationGuard,
            children: [{
                Component: AppLayout,
                children: [
                    {
                        path: AppRoutes.ROOT,
                        Component: Home,
                    },
                    {
                        path: AppRoutes.CATALOG,
                        Component: Catalog,
                    },
                    {
                        path: AppRoutes.DEPARTMENTS,
                        Component: Departments,
                    },
                    {
                        path: AppRoutes.DELIVERIES,
                        Component: Deliveries,
                    },
                    {
                        path: AppRoutes.DELIVERY_DETAILS(),
                        Component: DeliveryDetails,
                    },
                    {
                        path: AppRoutes.ORDERS,
                        Component: Orders,
                    },
                    {
                        path: AppRoutes.ORDER_DETAILS(),
                        Component: OrderDetails,
                    }
                ]
            }]
        },
    ]
}])
