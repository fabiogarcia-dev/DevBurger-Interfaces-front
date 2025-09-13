import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51S5xCq0wYwlYCLk6O1OtIqAkiYef1N8z0QtV3qDACUP4ovnzAfsEW9NfmS617zgMXtF5nG8iaGk4tOtnpaEkFnZj00fzWX3cSr'
);

export default stripePromise;