export default interface ProductStateInterface {
    addDraftToListing: Function;
    deleteDraftFromListing: Function;
    renewListing: Function;
    proceedPayment: Function;
    failedPayment: Function;
    successfulPayment: Function;
    disputeAccept: Function;
    republish: Function;
    delete: Function;
    end: Function;
};
