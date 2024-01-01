import React from "react";
import "./PrivacyPolicy.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function PrivacyPolicy() {
  return (
    <div className='privacyPolicy-section'>
      <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
        <Link to='/'>
          <AiFillHome className='cursor-pointer' />
        </Link>
        <p className='cursor-pointer'>Privacy Policy</p>
      </div>

      <div className='privacyPolicy-section-main flex flex-col items-center w-full'>
        <div className='privacyPolicy-section-mainpart flex flex-col gap-[1rem] p-[2rem]'>
          <p className='text-[30px] font-[500px] text-center'>Privacy Policy</p>
          <p className='privacyPolicy-section-main-text'>
            Please Note That We Do Not Alter Our Site’s Data Collection And Use
            Practices When We See A Do Not Track Signal From Your Browser. This
            Privacy Policy Describes How Your Personal Information Is Collected,
            Used, And Shared When You Visit Or Make A Purchase From
            Zairaorganic.Com
          </p>

          <p className='privacyPolicy-section-main-subheading'>
            PERSONAL INFORMATION WE COLLECT
          </p>
          <p className='privacyPolicy-section-main-text'>
            When You Visit The Site, We Automatically Collect Certain
            Information About Your Device, Including Information About Your Web
            Browser, IP Address, Time Zone, And Some Of The Cookies That Are
            Installed On Your Device. Additionally, As You Browse The Site, We
            Collect Information About The Individual Web Pages Or Products That
            You View, What Websites Or Search Terms Referred You To The Site,
            And Information About How You Interact With The Site. We Refer To
            This Automatically-Collected Information As “Device Information.”
          </p>
          <p className='privacyPolicy-section-main-text'>
            We Collect Device Information Using The Following Technologies :
          </p>
          <ul>
            <li className='list-disc privacyPolicy-section-main-text'>
              “Cookies” Are Data Files That Are Placed On Your Device Or
              Computer And Often Include An Anonymous Unique Identifier. For
              More Information About Cookies, And How To Disable Cookies, Visit
              Http://Www.Allaboutcookies.Org.
            </li>
            <li className='list-disc privacyPolicy-section-main-text'>
              “Log Files” Track Actions Occurring On The Site, And Collect Data
              Including Your IP Address, Browser Type, Internet Service
              Provider, Referring/Exit Pages, And Date/Time Stamps.
            </li>
            <li className='list-disc privacyPolicy-section-main-text'>
              “Web Beacons,” “Tags,” And “Pixels” Are Electronic Files Used To
              Record Information About How You Browse The Site.
            </li>
          </ul>
          <p className='privacyPolicy-section-main-text'>
            Additionally When You Make A Purchase Or Attempt To Make A Purchase
            Through The Site, We Collect Certain Information From You, Including
            Your Name, Billing Address, Shipping Address, Payment Information
            (Including Credit Card Numbers, Email Address, And Phone Number. We
            Refer To This Information As “Order Information.”
          </p>
          <p className='privacyPolicy-section-main-text'>
            When We Talk About “Personal Information” In This Privacy Policy, We
            Are Talking Both About Device Information And Order Information.
          </p>

          <p className='privacyPolicy-section-main-subheading'>
            HOW DO WE USE YOUR PERSONAL INFORMATION ?
          </p>
          <p className='privacyPolicy-section-main-text'>
            We Use The Order Information That We Collect Generally To Fulfill
            Any Orders Placed Through The Site (Including Processing Your
            Payment Information, Arranging For Shipping, And Providing You With
            Invoices And/Or Order Confirmations). Additionally, We Use This
            Order Information To:
          </p>
          <ul>
            <li className='list-disc privacyPolicy-section-main-text'>
              Communicate With You
            </li>
            <li className='list-disc privacyPolicy-section-main-text'>
              Screen Our Orders For Potential Risk Or Fraud
            </li>
            <li className='list-disc privacyPolicy-section-main-text'>
              When In Line With The Preferences You Have Shared With Us, Provide
              You With Information Or Advertising Relating To Our Products Or
              Services.
            </li>
          </ul>
          <p className='privacyPolicy-section-main-text'>
            We Use The Device Information That We Collect To Help Us Screen For
            Potential Risk And Fraud (In Particular, Your IP Address), And More
            Generally To Improve And Optimize Our Site (For Example, By
            Generating Analytics About How Our Customers Browse And Interact
            With The Site, And To Assess The Success Of Our Marketing And
            Advertising Campaigns).
          </p>

          <p className='privacyPolicy-section-main-subheading'>
            SHARING YOUR PERSONAL INFORMATION
          </p>
          <p className='privacyPolicy-section-main-text'>
            We Share Your Personal Information With Third Parties To Help Us Use
            Your Personal Information, As Described Above. For Example, We Use
            Shopify To Power Our Online Store–You Can Read More About How
            Shopify Uses Your Personal Information Here:
            Https://Www.Shopify.Com/Legal/Privacy. We Also Use Google Analytics
            To Help Us Understand How Our Customers Use The Site–You Can Read
            More About How Google Uses Your Personal Information Here:
            Https://Www.Google.Com/Intl/En/Policies/Privacy/. You Can Also
            Opt-Out Of Google Analytics Here:
            Https://Tools.Google.Com/Dlpage/Gaoptout.
          </p>
          <p className='privacyPolicy-section-main-text'>
            Finally, We May Also Share Your Personal Information To Comply With
            Applicable Laws And Regulations, To Respond To A Subpoena, Search
            Warrant Or Other Lawful Request For Information We Receive, Or To
            Otherwise Protect Our Rights.
          </p>

          <p className='privacyPolicy-section-main-subheading'>
            BEHAVIOURAL ADVERTISING
          </p>
          <p className='privacyPolicy-section-main-text'>
            As Described Above, We Use Your Personal Information To Provide You
            With Targeted Advertisements Or Marketing Communications We Believe
            May Be Of Interest To You. For More Information About How Targeted
            Advertising Works, You Can Visit The Network Advertising
            Initiative’s (“NAI”) Educational Page At
            Http://Www.Networkadvertising.Org/Understanding-Online-Advertising/How-Does-It-Work.
          </p>
          <p className='privacyPolicy-section-main-text'>
            Additionally, You Can Opt Out Of Some Of These Services By Visiting
            The Digital Advertising Alliance’s Opt-Out Portal At:
            Http://Optout.Aboutads.Info/.
          </p>

          <p className='privacyPolicy-section-main-subheading'>DO NOT TRACK</p>
          <p className='privacyPolicy-section-main-text'>
            Please Note That We Do Not Alter Our Site’s Data Collection And Use
            Practices When We See A Do Not Track Signal From Your Browser.
          </p>

          <p className='privacyPolicy-section-main-subheading'>YOUR RIGHTS</p>
          <p className='privacyPolicy-section-main-text'>
            If You Are A European Resident, You Have The Right To Access
            Personal Information We Hold About You And To Ask That Your Personal
            Information Be Corrected, Updated, Or Deleted. If You Would Like To
            Exercise This Right, Please Contact Us Through The Contact
            Information Below.
          </p>
          <p className='privacyPolicy-section-main-text'>
            Additionally, If You Are A European Resident We Note That We Are
            Processing Your Information In Order To Fulfill Contracts We Might
            Have With You (For Example If You Make An Order Through The Site),
            Or Otherwise To Pursue Our Legitimate Business Interests Listed
            Above. Additionally, Please Note That Your Information Will Be
            Transferred Outside Of Europe, Including To Canada And The United
            States.
          </p>

          <p className='privacyPolicy-section-main-subheading'>
            DATA RETENTION
          </p>
          <p className='privacyPolicy-section-main-text'>
            When You Place An Order Through The Site, We Will Maintain Your
            Order Information For Our Records Unless And Until You Ask Us To
            Delete This Information.
          </p>

          <p className='privacyPolicy-section-main-subheading'>MINORS</p>
          <p className='privacyPolicy-section-main-text'>
            The Site Is Not Intended For Individuals Under The Age Of 18.
          </p>

          <p className='privacyPolicy-section-main-subheading'>CHANGES</p>
          <p className='privacyPolicy-section-main-text'>
            We May Update This Privacy Policy From Time To Time In Order To
            Reflect, For Example, Changes To Our Practices Or For Other
            Operational, Legal Or Regulatory Reasons.
          </p>

          <p className='privacyPolicy-section-main-subheading'>CONTACT US</p>
          <p className='privacyPolicy-section-main-text'>
            For More Information About Our Privacy Practices, If You Have
            Questions, Or If You Would Like To Make A Complaint, Please Contact
            Us By E-Mail At admin@zairaorganic.com.
          </p>
        </div>
      </div>
    </div>
  );
}
