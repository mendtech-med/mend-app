export interface CategoryOption {
  label: string;
  value: string;
  subcategories: { label: string; value: string }[];
}

export type ValTypes = number | string | boolean;

export type RecordType = Record<string, ValTypes>

export type FeatureTypes = Record<string, RecordType>

export interface ISubscriptionLimits {
  maxCategories: number | string;
  maxReaders: number | string;
  maxArticles: number | string;
  maxAccount: number | string;
  brandVoices: string;
  wordsInChat: string;
  editorialRefer: boolean;
  editorialFind: boolean;
}

export interface ISubscriptionData {
  details: {
    billingCycle: "monthly" | "annually";
    cognitoSub: string;
    createdAt: string;
    currentPlan: 'pro' | 'collaborate' | 'enterprise' | null;
    currentPlanId: string;
    customerId: string;
    email: string;
    subscriptionEndDate: string;
    subscriptionLimits: RecordType;
    subscriptionStartDate: string;
    subscriptionStatus: "active" | "trial" | "canceled" | "paused";
    updatedAt: string;
    __v: number;
    _id: string;
  };
  totalReaders: number;
  totalCategories: number;
  currentPlan: {
    data: {
      plan: {
        amount: number;
        interval: string;
      };
      currency: string;
      startDate: number;
      trial_end: number;
      status: string;
    }[]
  }
}

export interface ISubscriptionResponse {
  success: boolean;
  message: string;
  data: ISubscriptionData;
}


