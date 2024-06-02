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
      <MiniHeading>Terms</MiniHeading>
      <Description>
        <p>
          By accessing this web site or our mobile applications, you are
          agreeing to be bound by these Terms and Conditions of Use, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this web site are protected by
          applicable copyright and trade mark law.
        </p>
      </Description>

      <MiniHeading>Use License</MiniHeading>
      <Description>
        <p>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Heystack&apos;s web site for
          personal, non- commercial transitory viewing only. This is the grant
          of a license, not a transfer of title, and under this license you may
          not: modify or copy the materials;
          <br />
          <br />
          use the materials for any commercial purpose, or for any public
          display (commercial or non-commercial); attempt to decompile or
          reverse engineer any software contained on Heystack&apos;s web site;
          remove any copyright or other proprietary notations from the
          materials; or transfer the materials to another person or
          &ldquo;mirror&ldquo; the materials on any other server. This license
          shall automatically terminate if you violate any of these restrictions
          and may be terminated by Heystack at any time. Upon terminating your
          viewing of these materials or upon the termination of this license,
          you must destroy any downloaded materials in your possession whether
          in electronic or printed format.
        </p>
      </Description>

      <MiniHeading>Disclaimer</MiniHeading>
      <Description>
        <p>
          The materials on Heystack&apos;s web site, online services or
          applications are provided &ldquo;as is&ldquo;. Heystack makes no
          warranties, expressed or implied, and hereby disclaims and negates all
          other warranties, including without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights. Further, Heystack does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its Internet web site or otherwise relating to such
          materials or on any sites linked to this site.
        </p>
      </Description>

      <MiniHeading>Limitations</MiniHeading>
      <Description>
        <p>
          In no event shall Heystack or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption,) arising out of the use or inability to
          use the materials on Heystack&apos;s Internet site, online services or
          mobile applications, even if Heystack or a Heystack authorized
          representative has been notified orally or in writing of the
          possibility of such damage. Because some jurisdictions do not allow
          limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply
          to you
        </p>
      </Description>

      <MiniHeading>Revisions and Errata</MiniHeading>
      <Description>
        <p>
          The materials appearing on Heystack&apos;s web site, online service or
          mobile applications could include technical, typographical, or
          photographic errors. Heystack does not warrant that any of the
          materials on its web site are accurate, complete, or current. Heystack
          may make changes to the materials contained on its web site, online
          service or mobile applications at any time without notice. Heystack
          does not, however, make any commitment to update the materials.
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
      <MiniHeading>Links</MiniHeading>
      <Description>
        <p>
          Heystack has not reviewed all of the sites linked to its Internet web
          site and is not responsible for the contents of any such linked site.
          The inclusion of any link does not imply endorsement by Heystack of
          the site. Use of any such linked web site is at the user&apos;s own
          risk.
        </p>
      </Description>
      <MiniHeading>Site Terms of Use Modifications</MiniHeading>
      <Description>
        <p>
          Heystack may revise these terms of use for its web site at any time
          without notice. By using this web site, online service or mobiel
          applications you are agreeing to be bound by the then current version
          of these Terms and Conditions of Use.
        </p>
      </Description>
      <MiniHeading>Governing Law</MiniHeading>
      <Description>
        <p>
          Any claim relating to Heystack&apos;s web site shall be governed by
          the laws of the State of Delaware without regard to its conflict of
          law provisions.
        </p>
      </Description>
    </div>
  );
};

export default Privacy;
