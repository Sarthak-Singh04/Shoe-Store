import React from "react";

import Link from "next/link";
import Wrapping from "@/components/Wrapping";

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapping>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">Payment failed!</div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@shop.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapping>
        </div>
    );
};

export default Failed;