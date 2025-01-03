import React, { useEffect } from "react";

type Props = {
    priceId: string
}

export const PricingTemplate: React.FC<Props> = ({ priceId }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v3/pricing-table.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        React.createElement("stripe-pricing-table", {
            "pricing-table-id": priceId,
            "publishable-key": "pk_test_51NJrnZKZf5473iGvC39n3K5o5Mx6LfQdZHpr2fcEgEKxLvHqN1KnSmTEFREzqFF0NRTwNeu05GjbtiXOwNrIa7kg00aPiHMqFu",
        })
    )
}