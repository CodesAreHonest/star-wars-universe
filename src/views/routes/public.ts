import NotFoundPage from "../presentations/NotFoundPage";
import HomePage from "../presentations/HomePage";

const publicRoutes = [
    {
        path     : "/",
        exact    : true,
        label    : 'HomePage',
        component: HomePage
    }, {
        path     : "/404",
        exact    : true,
        label    : "NotFoundPage",
        component: NotFoundPage
    }];

export default publicRoutes;