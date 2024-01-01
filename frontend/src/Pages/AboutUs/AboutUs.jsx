import React from "react";
import "./AboutUs.css";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import whyUsImage from "../../Assets/Images/Almond-milk-300x300.jpg";

export default function AboutUs() {
  return (
    <div className='aboutUsSection flex flex-col'>
      <div className='flex flex-row gap-[2rem] p-[1rem] bg-brown text-white items-center text-[22px]'>
        <Link to='/'>
          <AiFillHome className='cursor-pointer' />
        </Link>
        <p className='cursor-pointer'>AboutUs</p>
      </div>

      <div className='aboutUsSection-main py-[1rem] px-[2rem] flex flex-col gap-[1rem]'>
        <p className='aboutUsSection-main-MainHeading text-[40px]'>About Us</p>
        <div className='aboutUsSection-main-subtext flex flex-col gap-[10px]'>
          <p className='aboutUsSection-main-text'>
            In A Time Where Everything Works Thru Technology We Wanted To Stick
            To The Roots Of Creating Essential Skincare Products Using Raw,
            Natural & Organic Ingredients That Does Not Only Benefit You're Skin
            But Gives You A Sustainable Solution Towards A Long Term Commitment.
            We Created These Products Keeping In Mind What Are The Concerns That
            Modern Women Today Face & What Are The Best Solution That Can Be
            Provided In The Most Cleanest Form. Our Soap Bars Are Hand Crafted &
            Cured
          </p>
          <p className='aboutUsSection-main-text'>
            Like Every Small Business Faniac, I Had Always Wished & Dreamt To
            Start My Own Skincare Line. With An Overall 7 Years Of Experience In
            Working With Various Beauty Brands Across The Region & Having A
            Deeper Connection With Skin Issues, Concerns It Only Made Sense To
            Have Brand That Catered To Those Niches.
          </p>
          <p className='aboutUsSection-main-text'>
            We Were Born To Create An Impact. To Given All Types Of Women A
            Skincare That Is Close To Their Heart. A Brand That They Connect &
            Relate To.We Are Not Fancy , We Are Just Organic In Nature!
          </p>
          <p className='aboutUsSection-main-text'>
            Our Brand Mission Are Very Simple
          </p>
        </div>

        <p className='aboutUsSection-main-heading text-[40px]'>
          Non Toxic, Chemical Free Formula
        </p>
        <div className='aboutUsSection-main-subtext flex flex-col gap-[10px]'>
          <p className='aboutUsSection-main-text'>
            What Is Very Important To Us Are The Formulations That We Create,
            The Products & Raw Materials That We Source From Across The World To
            Make Sure The Product Remain Of A Grade Quality.
          </p>
          <p className='aboutUsSection-main-text'>
            All The Ingredients That We Are Chose At Zaira Organic Skincare Are
            Edible In Nature. We Make Sure That Each Variant Are Responsibly
            Sourced & Products Are Created In A Clean, Hygienic Unit With All
            Necessary Safety Guidelines
          </p>
        </div>

        <p className='aboutUsSection-main-heading text-[40px]'>
          Easy Solution – 1 Step Solution
        </p>
        <div className='aboutUsSection-main-subtext flex flex-col gap-[10px]'>
          <p className='aboutUsSection-main-text'>
            Skincare Can Look Extremely Tiring To Users Where They Have To Go
            Through 10 Different Products, With 10 Different Steps.
          </p>
          <p className='aboutUsSection-main-text'>
            We Want To Make Your Life Easy, Which Means At Zaira Organic
            Skincare We Don’t Only Promise A Healthy, Glowing Skin But We Also
            Assure You That You Don’t Have To Waste An Hour In Front Of The
            Mirror.
          </p>
          <p className='aboutUsSection-main-text'>
            Our Cleanser Bars Can Be Used For Face & Body, You Can Moisturize
            Your Skin With Our Natural Oils & You Are Ready To Face The World
            Like A #Boss!
          </p>
        </div>

        <p className='aboutUsSection-main-heading text-[40px]'>
          BUST THE MYTH – AFFORDABLE PRODUCTS
        </p>
        <div className='aboutUsSection-main-subtext flex flex-col gap-[10px]'>
          <p className='aboutUsSection-main-text'>
            It Is Not Necessary That Everything Organic Has To Be Expensive!
            That’s Not True, We Made Sure That Our Products Were Priced In A Way
            That Every Individual Could Get Their Hands On It & Enjoy The
            Benefits.
          </p>
          <p className='aboutUsSection-main-text'>
            We Are Not Here To Build A Billion Dollar Empire In A Span Of 6
            Months, We Want Customers Who Are With Us From The Day Of Inception
            & See Us Grow With Variants That Cater To Each And Every Skin. I
            Started This Journey For My Daughter And What Would Be My Goal Is To
            See Every Mum Choose Zaira Organic Skincare For Their Children!
          </p>
          <p className='aboutUsSection-main-text'>
            We Want Zaira Organic Skincare To Be Your First Choice When It Comes
            Organic, Sustainable, Vegan, Cruelty Free Skincare.
          </p>
        </div>

        <p className='aboutUsSection-main-heading text-[40px]'>Why Zaira</p>
        <div className='aboutUsSection-main-subtextmain flex flex-row gap-[2rem] w-full'>
          <div className='aboutUsSection-main-subtext flex flex-col gap-[10px] w-[60%]'>
            <p className='aboutUsSection-main-text'>
              So How Did The Brand Zaira Came Into Existence? I Have Had Eczema
              From The Past 3 Years – It Only Got Worse Post Pregnancy And Has
              Been That Way Ever Since. I Have Been To Over 10 Doctors In Dubai
              & India, All Of Them Suggested Anti Allergens, Tropical Steroids &
              That’s It! There Is Really No Cure But Did You Know That Steroids
              Could Lead To Thin Skinning In The Long Run. I Used To Try Various
              Types Of Chemical Free Products, Creams Suggested By Doctors.
            </p>
            <p className='aboutUsSection-main-text'>
              I Reached A Point Where My Hands Would Always Have Cuts & Bruises.
              The Wounds Wouldn’t Heal As Soon As It Naturally Should. I
              Couldn’t Even Feed Or Bathe My Own Daughter!
            </p>
            <p className='aboutUsSection-main-text'>
              What Terrified Me More Was Seeing My Daughter Slowly Develop Dry
              Patches. That’s It, That Probably Was My Breaking Point, I Started
              Exploring Oils, Organic Ingredients, Did My Research, Did My
              Experiments & Came Up With These Very Incredible Formulations.
            </p>
            <p className='aboutUsSection-main-text'>
              There Was No Looking Back After I Saw A Huge Improvement In My
              Daughters’ Skin. Therefore, The Brand Is Also Named After Her!
              Doesn’t It Totally Make Sense?
            </p>
            <p className='aboutUsSection-main-text'>
              She Led My Path To Zaira Organic Skincare & There Is So Much We
              Want To Offer Our Customers.
            </p>
          </div>
          <div className='aboutUsSection-main-subtext-image w-[40%] p-[1rem]'>
            <img
              className='aboutUsSection-main-subtext-img w-full h-[400px]'
              src={whyUsImage}
              alt='whyUsImage'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
