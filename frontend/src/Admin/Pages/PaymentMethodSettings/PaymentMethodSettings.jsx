import React from 'react';
import './PaymentMethodSettings.css';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { useState } from 'react';

export default function PaymentMethodSettings() {
  const [enableStripe, setEnableStripe] = useState('');
  return (
    <div className="paymentMethodSettings-section flex flex-col gap-[1rem] p-[1rem]">
      <form
        action=""
        className="flex flex-col gap-[1rem] rounded-[6px] border p-[1rem]"
      >
        <h3 className="text-[20px] font-[500]">Stripe Credentials</h3>
        <div className="flex flex-col gap-[10px]">
          <p>Stripe Key</p>
          <input
            className="rounded-[6px] border p-[1rem]"
            type="text"
            placeholder="Enter Stripe Key"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p>Stripe Secret</p>
          <input
            className="rounded-[6px] border p-[1rem]"
            type="text"
            placeholder="Enter Stripe Key"
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p>Enable Stripe</p>
          <Dropdown data={enableStripe} setData={setEnableStripe} />
        </div>
      </form>
    </div>
  );
}
