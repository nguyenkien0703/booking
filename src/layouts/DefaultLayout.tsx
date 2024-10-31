import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import {Header} from "@/components";

export default function DefaultLayout() {
	return (
		<Layout className={'w-full min-h-screen'}>
			<Layout.Header className={'sticky w-full z-10 top-0 bg-white px-0'}>
					<Header />
			</Layout.Header>
			<Layout.Content className={'bg-white'}>
				<Outlet />
			</Layout.Content>
			<Layout.Footer>
				<div className="text-center">©2021 Created by <a href="">TDB</a>
				</div>
			</Layout.Footer>
		</Layout>
	)
}