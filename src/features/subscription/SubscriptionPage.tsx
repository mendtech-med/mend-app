import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../../components/ui/Modal';
import {
    CardStackIcon,
    ClockIcon,
    BarChartIcon,
    PersonIcon,
    FileIcon,
    GroupIcon,
    IdCardIcon,
    EnvelopeClosedIcon,
    LayersIcon,
    InfoCircledIcon,
    // BellIcon,
    PlusCircledIcon,
    Pencil1Icon,
} from '@radix-ui/react-icons';
import PlanInfoPopover from './components/PlanPopover';
import { Navigate, useLoaderData, useNavigate, useNavigation, useRevalidator } from 'react-router-dom';
import { ISubscriptionData, ValTypes } from '../../types/index.types';
import subscriptionHandler from '../../services/handlers/subscription';
import { useAuth } from '../../context/authContext';
import { getFormattedDate } from '../../libs/utils/getFormattedDate';
import { Spinner } from '@radix-ui/themes';
import Select from '../../components/ui/Select';
import { PLAN_OPTIONS } from '../../libs/constants';
import InvoiceList from './components/InvoiceList';
import Input from '../../components/ui/input';

// Mocked data - replace with actual data from your backend
const subscriptionData = {
    currentPlan: {
        name: 'Pro Plan',
        price: '$125.00/',
        features: [
            'Unlimited readers',
            '100 articles per month',
            '5 team accounts'
        ]
    },
    usage: {
        readers: { current: 42, limit: 50 },
        categories: { current: 12, limit: 20 },
        articles: { current: 5, limit: 100 },
        accounts: { current: 1, limit: 5 },
    },
    billing: {
        nextBillingDate: 'January 15, 2024',
        paymentMethod: {
            type: 'Visa',
            lastFour: '4321',
            expiry: '12/25'
        }
    }
};

const SubscriptionManagementPage = () => {
    const revalidate = useRevalidator();
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
    const [isBillingInfoOpen, setIsBillingInfoOpen] = useState(false);
    const [isAddAccountModalOpen, setIsAddAccountModalOpen] = useState(false);
    const [isAlertSettingsModalOpen, setIsAlertSettingsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [accountEmail, setAccountEmail] = useState<string>('');
    const loaderData = useLoaderData() as ISubscriptionData;

    if (loaderData === null) {
        return <Navigate to='/' />
    }

    const handleSelectPlan = (plan: string) => {
        setSelectedValue(plan);
    }

    const handleUpgradePlan = async () => {
        const [plan, billingCycle] = selectedValue.split('-');
        if (!plan || !billingCycle) {
            alert("Select plan first");
            return;
        }

        try {
            await subscriptionHandler.upgradeSubscription({
                planId: plan,
                billingCycle
            });
            setIsUpgradeModalOpen(false);
            setSelectedValue('');
            revalidate.revalidate();

            alert("Plan upgraded")
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateBillingPlan = async () => {
        if (!selectedValue) {
            alert("Select plan first")
            return;
        }

        try {
            await subscriptionHandler.updateSubscription({
                planId: loaderData.details.currentPlan!,
                billingCycle: selectedValue
            });
            setIsBillingInfoOpen(false);
            setSelectedValue('');
            revalidate.revalidate();

            alert("Plan upgraded")
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddAccount = async () => {
        if (!accountEmail) {
            alert("Please add valid email");
            return
        }

        try {
            const interval = loaderData.currentPlan.data[0].plan.interval;
            let newInterval;
            switch (interval) {
                case 'month':
                    newInterval = 'monthly'
                    break;

                case 'annual':
                    newInterval = 'annually'
                    break;

                default:
                    newInterval = 'monthly';
                    break;
            }

            await subscriptionHandler.addAccount({
                email: accountEmail,
                planId: loaderData.details.currentPlan!,
                billingCycle: newInterval
            });
            setIsAddAccountModalOpen(false);
            setAccountEmail('');
            revalidate.revalidate();

            alert("Account has been added")
        } catch (error) {
            console.log(error);
        }
    }

    const handleAccountEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAccountEmail(e.target.value)
    }

    // Modals for different functionalities
    const UpgradeModal = () => (
        <Modal isOpen={isUpgradeModalOpen} onClose={() => setIsUpgradeModalOpen(false)}>
            <ModalHeader>Upgrade Subscription</ModalHeader>
            <ModalBody>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <InfoCircledIcon className="w-6 h-6 mr-2 text-theme-main" />
                        <h3 className="">Current Plan Features</h3>
                    </div>
                    <Select options={PLAN_OPTIONS} value={selectedValue} onChange={handleSelectPlan} />
                    {/* <SelectPlan value={upgradedPlan} onSelectPlanAndBilling={handleSelectPlan} /> */}
                    {/* Add upgrade plan options here */}
                </div>
            </ModalBody>
            <ModalFooter className='gap-3'>
                <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    onClick={() => setIsUpgradeModalOpen(false)}
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpgradePlan}
                    className="px-4 py-2 bg-theme-main text-white rounded-md"
                >
                    Confirm Upgrade

                    {useNavigation().state === 'loading' && <Spinner />}
                </button>
            </ModalFooter>
        </Modal>
    );

    const BillingInfoModal = () => (
        <Modal isOpen={isBillingInfoOpen} onClose={() => setIsBillingInfoOpen(false)}>
            <ModalHeader>Billing Information</ModalHeader>
            <ModalBody>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2">Billing Cycle</label>
                        <select
                            className="w-full px-3 py-2 border rounded-md"
                            onChange={e => handleSelectPlan(e.target.value)}
                        >
                            <option value="monthly">Monthly</option>
                            <option value="annually">Annually</option>
                        </select>
                    </div>
                    {/* Add more billing info fields */}
                </div>
            </ModalBody>
            <ModalFooter className='gap-3'>
                <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    onClick={() => setIsBillingInfoOpen(false)}
                >
                    Cancel
                </button>
                <button
                    onClick={handleUpdateBillingPlan}
                    className="px-4 py-2 bg-theme-main text-white rounded-md"
                >
                    Save Changes
                </button>
            </ModalFooter>
        </Modal>
    );

    const AddAccountModal = () => (
        <Modal isOpen={isAddAccountModalOpen} onClose={() => setIsAddAccountModalOpen(false)}>
            <ModalHeader>Add New Account</ModalHeader>
            <ModalBody>
                <div className="space-y-4">
                    <div>
                        <Input
                            onChange={handleAccountEmail}
                            value={accountEmail}
                            label='Email'
                        />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter className='gap-3'>
                <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    onClick={() => setIsAddAccountModalOpen(false)}
                >
                    Cancel
                </button>
                <button
                    onClick={handleAddAccount}
                    className="px-4 py-2 bg-theme-main text-white rounded-md"
                >
                    Add Account
                </button>
            </ModalFooter>
        </Modal>
    );

    const AlertSettingsModal = () => (
        <Modal isOpen={isAlertSettingsModalOpen} onClose={() => setIsAlertSettingsModalOpen(false)}>
            <ModalHeader>Alert Notification Settings</ModalHeader>
            <ModalBody>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <input type="checkbox" className="form-checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span>SMS Notifications</span>
                        <input type="checkbox" className="form-checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Push Notifications</span>
                        <input type="checkbox" className="form-checkbox" />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter className='gap-3'>
                <button
                    className="px-4 py-2 bg-gray-200 rounded-md"
                    onClick={() => setIsAlertSettingsModalOpen(false)}
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 bg-theme-main text-white rounded-md"
                >
                    Save Settings
                </button>
            </ModalFooter>
        </Modal>
    );

    const cancelSubscription = async () => {
        const userResponse = confirm("Are you sure you want to cancel?");

        // Check the user's response
        if (userResponse) {
            // User clicked "OK"
            try {
                await subscriptionHandler.cancelSubscription();
                logout();
                navigate("/login")
            } catch (error) {
                console.log(error);
            }
        } else {
            // User clicked "Cancel"
            console.log("User canceled the action.");
        }
    }

    const moduleLimit = (val: ValTypes) => {
        if (val === 10000000000) return 'Unlimited';

        return val
    }

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Modals */}
            <UpgradeModal />
            <BillingInfoModal />
            <AddAccountModal />
            <AlertSettingsModal />

            <h1 className="text-3xl  text-gray-800">Subscription Management</h1>

            {/* Subscription Details Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-xl">Subscription Details</h2>
                    </div>

                    <span className="bg-gray-100 text-theme-base text-sm px-3 py-1 rounded-full capitalize">
                        {loaderData.currentPlan.data[0].status}
                    </span>
                </div>

                {/* Current Plan Details */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <CardStackIcon className="w-5 h-5 text-gray-600" />
                            <h3 className="">Current Plan</h3>
                            <PlanInfoPopover billing={loaderData.details.currentPlan!} />
                        </div>
                        <div className="pl-7">
                            <p className=" capitalize">{loaderData.details.currentPlan}</p>
                            <p className="text-gray-600">{loaderData.currentPlan.data[0].currency === 'eur' ? '€' : 'eur'}{loaderData.currentPlan.data[0].plan.amount.toFixed(2)} / {loaderData.currentPlan.data[0].plan.interval}</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <ClockIcon className="w-5 h-5 text-gray-600" />
                            <h3 className="">Next Billing Date</h3>
                        </div>
                        <p className="pl-7">{getFormattedDate(loaderData.currentPlan.data[0].trial_end)}</p>
                    </div>
                </div>

                {/* Usage Details */}
                <div className="mt-6">
                    <div className="flex items-center space-x-2 mb-4">
                        <BarChartIcon className="w-5 h-5 text-gray-600" />
                        <h3 className="">Usage Overview</h3>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Readers</span>
                                <PersonIcon className="w-5 h-5 text-theme-accent" />
                            </div>
                            <p className="text-lg ">
                                {loaderData.totalReaders} / {moduleLimit(loaderData.details?.subscriptionLimits.maxReaders)}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Categories</span>
                                <LayersIcon className="w-5 h-5 text-theme-accent" />
                            </div>
                            <p className="text-lg ">
                                {loaderData.totalCategories} / {moduleLimit(loaderData.details?.subscriptionLimits.maxCategories)}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Articles</span>
                                <FileIcon className="w-5 h-5 text-theme-accent" />
                            </div>
                            <p className="text-lg ">
                                {subscriptionData.usage.articles.current} / {moduleLimit(loaderData.details?.subscriptionLimits.maxArticles)}
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Accounts</span>
                                <GroupIcon className="w-5 h-5 text-theme-accent" />
                            </div>
                            <p className="text-lg ">
                                {subscriptionData.usage.accounts.current} / {loaderData.details?.subscriptionLimits.maxAccount}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Subscription Management Actions */}
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between items-center">
                        <div className="space-x-2">
                            <button
                                className="bg-theme-main text-white px-4 py-2 rounded-xl hover:bg-theme-main/95 transition"
                                onClick={() => setIsUpgradeModalOpen(true)}
                            >
                                Upgrade Plan
                            </button>
                            <button
                                onClick={cancelSubscription}
                                className="bg-gray-100 text-theme-base px-4 py-2 rounded-xl transition"
                            >
                                Cancel Subscription
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Billing Information Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <h2 className="text-xl ">Billing Information</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="flex items-center gap-1 text-theme-main text-sm  hover:text-theme-main/80 transition-colors group"
                            onClick={() => setIsBillingInfoOpen(true)}
                        >
                            <Pencil1Icon className="w-5 h-5 text-gray-500 group-hover:text-theme-main transition-colors" />
                            Payment Method
                        </button>
                        <button
                            className="flex items-center gap-1 text-theme-main text-sm  hover:text-theme-main/80 transition-colors group"
                            onClick={() => setIsAddAccountModalOpen(true)}
                        >
                            <PlusCircledIcon className="w-5 h-5 text-gray-500 group-hover:text-theme-main transition-colors" />
                            Account
                        </button>
                        {/* <button
                            className="flex items-center gap-1 text-theme-main text-sm  hover:text-theme-main/80 transition-colors group"
                            onClick={() => setIsAlertSettingsModalOpen(true)}
                        >
                            <BellIcon className="w-5 h-5 text-gray-500 group-hover:text-theme-main transition-colors" />
                            Settings
                        </button> */}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <IdCardIcon className="w-5 h-5 text-gray-600" />
                            <h3 className="">Payment Method</h3>
                        </div>
                        <div className="pl-7">
                            <p className="">
                                {subscriptionData.billing.paymentMethod.type}
                                **** {subscriptionData.billing.paymentMethod.lastFour}
                            </p>
                            <p className="text-gray-600">
                                Expires {subscriptionData.billing.paymentMethod.expiry}
                            </p>
                            {/* Invoice download option can be added here */}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            <EnvelopeClosedIcon className="w-5 h-5 text-gray-600" />
                            <h3 className="">Billing Email</h3>
                        </div>
                        <p className="pl-7">{loaderData.details.email}</p>
                    </div>
                </div>

                {/* Invoice Download Section */}
                <div className="mt-6 border-t pt-4 space-y-3">
                    <div className="flex items-center space-x-3">
                        <h2 className="text-xl ">Invoices History</h2>
                    </div>

                    <InvoiceList invoices={loaderData.invoices} />
                </div>
            </div>

        </div>
    );
};

export default SubscriptionManagementPage;