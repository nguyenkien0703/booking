import {HomePage, TripPage, BookingDetailsPage, Payment, LoginPage, RegisterPage} from '@/pages';

const appRoute = {
	home: {
		path: '/',
		component: HomePage,
	},
	trip: {
		path: '/trip',
		component: TripPage,
	},
	booking: {
		path: '/booking',
		component: BookingDetailsPage,
	},
	payment: {
		path: '/payment',
		component: Payment,
	},
}

const authRoute = {
	login: {
		path: '/login',
		component: LoginPage,
	},
	register: {
		path: '/register',
		component: RegisterPage,
	}
}

export {
	appRoute,
	authRoute
};