import {
    ClerkLoading,
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import Spinner from "@/app/_ui/common/spinner";

const Profile = () => {
    return (

        <div className="rounded-full grid place-items-center bg-white h-12 w-12" >
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton />
            </SignedOut>
            <ClerkLoading>
                <Spinner />
            </ClerkLoading>
        </div>
    );
}

export default Profile;