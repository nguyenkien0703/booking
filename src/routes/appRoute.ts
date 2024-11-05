import { HomePage, TripPage, BookingDetailsPage } from '@/pages';

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
	}
}

export default appRoute;