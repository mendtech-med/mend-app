import subscriptionHandler from '../../../services/handlers/subscription';
import { ISubscriptionResponse } from '../../../types/index.types';

export const subscriptionLoader = async () => {
    try {
        const subscription = await subscriptionHandler.subscriptionDetails() as ISubscriptionResponse;

        if (subscription.success) {
            return subscription.data;
        }

        return null
    } catch (error) {
        console.log(error);
        return null;
    }
};
