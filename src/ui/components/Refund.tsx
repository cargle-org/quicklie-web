"use client";

import React from "react";

const Refund = () => {
  return (
    <div className="w-full min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-dark">
          Return and Refund Policy
        </h1>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          {/* INTRODUCTION */}
          <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p>Thanks for shopping with us! If you are not completely satisfied with your purchase, we&#39re more than happy to help.</p>
          </section>

          {/* RETURN/REFUND REQUESTS */}
          <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-brand-dark">Return/Refund Requests</h2>
            <p>
              Returns/Exchange requests will be accepted only where the goods received by the buyer are in damaged condition. Only such cases will be considered for exchange. Refund in such cases will not be granted.
            </p>
            <p>Please note the following:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>No returns will be entertained if a buyer wants to return the goods simply because they don’t like it or it doesn’t meet expectations.</li>
              <li>All returns must be made within 5 days from the day of delivery/receipt.</li>
              <li>All returned goods must have been purchased directly from us through our website: quickliedistributions.com or our Instagram page: @quickliedistributions.</li>
              <li>All goods must have a receipt or proof of purchase.</li>
              <li>Goods must be unused, untampered with, in the same condition they were delivered, and in their original packaging.</li>
            </ul>
            <p>
              Once the returned goods are received, they will be inspected and a notification will be sent to the buyer confirming receipt. Immediately after inspection, a second notification will be sent regarding the status (approval/rejection) of the return/refund request.
            </p>
            <p>
              If the return is approved, we will initiate an exchange of the goods to the buyer’s pre-supplied address. Where a refund is approved, we will initiate a refund to the buyer’s wallet or original payment account within 30 business days. Refunds will not be provided in the case of damaged goods.
            </p>
          </section>

          {/* SHIPPING */}
          <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-brand-dark">Shipping</h2>
            <p>
              The buyer is responsible for bearing the shipping cost of returned and exchanged goods. Shipping costs are non-refundable. In the event of a refund, shipping costs borne by us will be deducted from the total refund amount.
            </p>
          </section>

          {/* HOW TO RETURN */}
          <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-brand-dark">How to Return</h2>
            <p>
              To return your goods, please email us at: <span className="font-semibold">quickliedistributions.com</span> with your Order Number and Reason for Return. We&#39ll do our best to help you in any way.
            </p>
          </section>

          {/* LAST UPDATED */}
          <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="font-medium">Last updated on November 25, 2025.</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Refund;
