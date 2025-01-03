interface IPlan {
    pro: string;
    collaborate: string;
    enterprise: string;
};

interface ISubPlan {
    monthly: IPlan;
    annually: IPlan;
}

export const SubscriptionPlan: ISubPlan = {
    monthly: {
        pro: '€125.00',
        collaborate: '€245.00',
        enterprise: '€495.00'
    },
    annually: {
        pro: '€1,500.00',
        collaborate: '€2,949.00',
        enterprise: '€5,490.00'
    }
}
