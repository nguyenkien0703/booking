import { HomePage, TripPage, BookingDetailsPage, Payment } from '@/pages';

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
	}
}

export default appRoute;