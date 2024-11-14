import {FC} from 'react';
import {useRoutes} from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout.tsx';
import {NotFoundPage} from "@/pages";
import {appRoute, authRoute} from "@/routes/appRoute.ts";
import AuthLayout from "@/layouts/AuthLayout.tsx";

const routes = [
	{
		element: <DefaultLayout/>,
		children: [
			...Object.values(appRoute).map(({path, component: Component}) => (
				{
					path,
					element: <Component />,
				}
			)),
		]
	},
	{
		element: <AuthLayout />,
		children: [
			...Object.values(authRoute).map(({path, component: Component}) => (
				{
					path,
					element: <Component />,
				}
			)),
		]
	},
	{
		path: '*',
		element: <NotFoundPage/>
	}
];

const RenderRouter: FC = () => {
	return useRoutes(routes);
};

export default RenderRouter;