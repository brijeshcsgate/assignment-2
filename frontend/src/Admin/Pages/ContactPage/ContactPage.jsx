import React from 'react';
import './ContactPage.css';

import ContactTable from '../../Components/ContactTable/ContactTable';

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-[10px] p-[1rem]">
      <p className="text-[20px] font-[500]">Contact Us</p><ContactTable />
    </div>
  )
}
