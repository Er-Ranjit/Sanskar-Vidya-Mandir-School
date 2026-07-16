import AdmissionHero from "../components/admission/AdmissionHero";
import AdmissionProcess from "../components/admission/AdmissionProcess";
import Eligibility from "../components/admission/Eligibility";
import RequiredDocuments from "../components/admission/RequiredDocuments";
import FeeStructure from "../components/admission/FeeStructure";
import OnlineAdmissionForm from "../components/admission/OnlineAdmissionForm";
import FAQ from "../components/admission/FAQ";
import CTA from "../components/admission/CTA";

const Admission = () => {
  return (
    <>
      <AdmissionHero />

      <AdmissionProcess />

      <Eligibility />

      <RequiredDocuments />

      <FeeStructure />

      <OnlineAdmissionForm />

      <FAQ />

      <CTA />
    </>
  );
};

export default Admission;