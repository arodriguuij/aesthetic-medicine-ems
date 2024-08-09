"use client";

import { useRouter } from "next/navigation";

const PaymentSuccess = ({
  searchParams: { amount, ids },
}: {
  searchParams: { amount: string; ids: number[] };
}) => {
  const router = useRouter();

  if (amount || ids) router.push("/");

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          ${amount}
        </div>
        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          Ids:{ids}
        </div>
      </div>
    </main>
  );
};
export default PaymentSuccess;
