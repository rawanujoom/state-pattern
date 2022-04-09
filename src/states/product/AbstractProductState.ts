import ProductStateInterface from '../../interfaces/ProductStateInterface';

export default abstract class AbstractProductState implements ProductStateInterface {

	addDraftToListing() {
		throw new Error('Illegal State Transition');
	}

	deleteDraftFromListing() {
		throw new Error('Illegal State Transition');
	}

	renewListing() {
		throw new Error('Illegal State Transition');
	}

	proceedPayment() {
		throw new Error('Illegal State Transition');
	}

	failedPayment() {
		throw new Error('Illegal State Transition');
	}

	successfulPayment() {
		throw new Error('Illegal State Transition');
	}

	disputeAccept() {
		throw new Error('Illegal State Transition');
	}

	republish() {
		throw new Error('Illegal State Transition');
	}

	delete() {
		throw new Error('Illegal State Transition');
	}

	end() {
		throw new Error('Illegal State Transition');
	}
}
