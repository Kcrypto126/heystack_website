"use client";
import Container from "@/components/Container";
import Navbar from "@/components/MobileNavBar";
import React from "react";

function MiniHeading({ children }) {
  return <div className="text-2xl font-medium text-[#1597BB] ">{children}</div>;
}

function Description({ children }) {
  return <div className="py-4 mb-4">{children}</div>;
}

const Privacy = () => {
  return (
    <div className="max-w-7xl lg:mx-auto px-4 ">
      <MiniHeading>What information do we collect?</MiniHeading>
      <Description>
        <p>
          We collect information from you when you register on our site or fill
          out a form.
          <br />
          <br /> When ordering or registering on our site, as appropriate, you
          may be asked to enter your: name, e-mail address, mailing address,
          phone number or social media credentials. You may, however, visit our
          site anonymously.
        </p>
      </Description>

      <MiniHeading>What do we use your information for?</MiniHeading>
      <Description>
        <p>
          Any of the information we collect from you may be used in one of the
          following ways:
          <br />
          <br />
          To personalize your experience (your information helps us to better
          respond to your individual needs)
          <br />
          <br />
          To improve our mobile applications and website (we continually strive
          to improve our website offerings based on the information and feedback
          we receive from you)
        </p>
      </Description>

      <MiniHeading>How do we protect your information?</MiniHeading>
      <Description>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you enter, submit, or access your
          personal information.
        </p>
      </Description>

      <MiniHeading>Do we use cookies?</MiniHeading>
      <Description>
        <p>
          Yes (Cookies are small files that a site or its service provider
          transfers to your computers hard drive through your Web browser (if
          you allow) that enables the sites or service providers systems to
          recognize your browser and capture and remember certain information.
          <br />
          <br /> We use cookies to understand and save your preferences for
          future visits, keep track of advertisements and compile aggregate data
          about site traffic and site interaction so that we can offer better
          site experiences and tools in the future.
        </p>
      </Description>

      <MiniHeading>
        Do we disclose any information to outside parties?
      </MiniHeading>
      <Description>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release your information
          when we believe release is appropriate to comply with the law, enforce
          our site policies, or protect ours or others rights, property, or
          safety. However, non-personally identifiable visitor information may
          be provided to other parties for marketing, advertising, or other
          uses.
        </p>
      </Description>

      <MiniHeading>
        Childrens Online Privacy Protection Act Compliance
      </MiniHeading>
      <Description>
        <p>
          We are in compliance with the requirements of COPPA (Childrens Online
          Privacy Protection Act), we do not collect any information from anyone
          under 13 years of age. Our website, products and services are all
          directed to people who are at least 13 years old or older.
        </p>
      </Description>
      <MiniHeading>Online Privacy Policy Only</MiniHeading>
      <Description>
        <p>
          This online privacy policy applies only to information collected
          through our mobile applications and website and not to information
          collected offline.
        </p>
      </Description>
      <MiniHeading>Terms and Conditions</MiniHeading>
      <Description>
        <p>
          Please also visit our Terms and Conditions section establishing the
          use, disclaimers, and limitations of liability governing the use of
          our website at{" "}
          <a href="https://hey-stack.com/terms-conditions" target="_blank">
            https://hey-stack.com/terms-conditions
          </a>
        </p>
      </Description>
      <MiniHeading>Your Consent</MiniHeading>
      <Description>
        <p>
          By using our site, you consent to our online privacy policy. This
          policy was last modified on July 15, 2020
        </p>
      </Description>
      <MiniHeading>Contacting Us</MiniHeading>
      <Description>
        <p>
          If there are any questions regarding this privacy policy you may
          contact us using the information below.
          <br />{" "}
          <a href="https://hey-stack.com" target="_blank">
            https://hey-stack.com
          </a>
        </p>
      </Description>
    </div>
  );
};

export default Privacy;
