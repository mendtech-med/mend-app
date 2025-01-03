import axiosInstance from "../api/axios";
import { ENDPOINTS } from "../api/endpoints";

interface ICreateSubscription {
    email: string;
    planId: string;
    billingCycle: string;
}
interface IUpgradePlan {
    planId: string;
    billingCycle: string;
}

const subscriptionHandler = {
    subscribe: async (data: ICreateSubscription) => {
        const response = await axiosInstance.post(ENDPOINTS.SUBSCRIPTION.SUBCRIBE, data);
        return response.data;
    },
    upgradeSubscription: async (data: IUpgradePlan) => {
        const response = await axiosInstance.post(ENDPOINTS.SUBSCRIPTION.UPGRADE, data);
        return response.data;
    },
    cancelSubscription: async () => {
        const response = await axiosInstance.post(ENDPOINTS.SUBSCRIPTION.CANCEL);
        return response.data;
    },
    subscriptionDetails: async () => {
        const response = await axiosInstance.get(ENDPOINTS.SUBSCRIPTION.DETAILS);
        return response.data;
    },
}

export default subscriptionHandler