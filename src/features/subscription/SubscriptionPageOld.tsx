import { Heading, Switch, Text } from "@radix-ui/themes";
import { PricingTemplate } from "./components/PricingTemp";
import { useState } from "react";

const StripePricingTable = () => {
  const [planType, setPlanType] = useState<'monthly' | 'annual'>('monthly')

  const handleSwitchToggle = () => {
    switch (planType) {
      case 'monthly':
        setPlanType('annual')
        break;

      case 'annual':
        setPlanType('monthly')
        break;

      default:
        break;
    }
  }

  const isAnnualPlan = planType === 'annual';
  return (
    <section className="bg-gray-100 w-full h-full space-y-10 py-5">
      <div className="">
        <Heading
          mb="2"
          size="8"
          className="text-center capitalize !font-normal text-theme-main"
        >Select Your Package</Heading>

        <div className="flex items-center justify-center gap-3">
          <Text size="2" className={`${!isAnnualPlan && 'text-theme-main'} font-bold text-sm text-theme-accent capitalize`}>Monthly</Text>
          <Switch
            size="3"
            className="!accent-theme-main"
            checked={isAnnualPlan}
            onClick={handleSwitchToggle}
          />
          <Text size="2" className={`${isAnnualPlan && 'text-theme-main'} font-bold text-sm text-theme-accent capitalize`}>Annually</Text>
        </div>
      </div>

      <div className="py-6">
        {!isAnnualPlan && <div className="flex items-start justify-center gap-5">
          <PricingTemplate priceId="prctbl_1QTF71KZf5473iGvJqfervQu" />
          <PricingTemplate priceId="prctbl_1QTFAYKZf5473iGvsIcWAAbi" />
          <PricingTemplate priceId="prctbl_1QTFBEKZf5473iGvmYgTkn0k" />
        </div>}

        {isAnnualPlan && <div className="flex items-start justify-center gap-5">
          <PricingTemplate priceId="prctbl_1QTHVZKZf5473iGv86VOH0EC" />
          <PricingTemplate priceId="prctbl_1QTIXpKZf5473iGv7B51msMI" />
          <PricingTemplate priceId="prctbl_1QTISmKZf5473iGvrM2dk523" />
        </div>}
      </div>
    </section>
  )
};
export default StripePricingTable;