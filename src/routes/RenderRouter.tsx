import {FC} from 'react';
import {useRoutes} from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout.tsx';
import {NotFoundPage} from "@/pages";
import appRoute from "@/routes/appRoute.ts";

const routes = [
	{
		path: '/',
		element: <DefaultLayout/>,
		children: [
			...Object.values(appRoute).map(({path, component: Component}) => (
				{
					path,
					element: <Component />,
				}
			)),
			{
				path: '*',
				element: <NotFoundPage/>
			}
		]
	},
];

const RenderRouter: FC = () => {
	return useRoutes(routes);
};

export default RenderRouter;