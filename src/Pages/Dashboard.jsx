import React from "react";
import Layout from "../components/Layout/Layout";
import FileUploader from "../components/FileUploader/FileUploader";
import Accordion from "../components/Accordion/Accordion";

const Dashboard = () => {
  return (
    <Layout>
      <FileUploader />

      <div className="w-[90%] text-center m-auto mt-10 mb-10">
        <div>
          <h1 className="text-center font-bold text-2xl ">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="questions">
          <Accordion
            title="What is a resume scanner?"
            content="A resume scanner is a tool that analyzes a job seeker’s resume and compares the resume to a job listing to identify the skills the recruiter or hiring manager will be looking for based on the context of the job. It also checks to make sure that the resume is ATS-friendly. Resume scanners help job seekers identify areas of their resume that need improvement and optimize their resumes with better formatting, keyword usage, and content. This can increase their chances of getting noticed by recruiters and get job interviews."
          />
          <Accordion
            title="What is a resume scanner?"
            content="A resume scanner is a tool that analyzes a job seeker’s resume and compares the resume to a job listing to identify the skills the recruiter or hiring manager will be looking for based on the context of the job. It also checks to make sure that the resume is ATS-friendly. Resume scanners help job seekers identify areas of their resume that need improvement and optimize their resumes with better formatting, keyword usage, and content. This can increase their chances of getting noticed by recruiters and get job interviews."
          />
          <Accordion
            title="What is a resume scanner?"
            content="A resume scanner is a tool that analyzes a job seeker’s resume and compares the resume to a job listing to identify the skills the recruiter or hiring manager will be looking for based on the context of the job. It also checks to make sure that the resume is ATS-friendly. Resume scanners help job seekers identify areas of their resume that need improvement and optimize their resumes with better formatting, keyword usage, and content. This can increase their chances of getting noticed by recruiters and get job interviews."
          />
          <Accordion
            title="What is a resume scanner?"
            content="A resume scanner is a tool that analyzes a job seeker’s resume and compares the resume to a job listing to identify the skills the recruiter or hiring manager will be looking for based on the context of the job. It also checks to make sure that the resume is ATS-friendly. Resume scanners help job seekers identify areas of their resume that need improvement and optimize their resumes with better formatting, keyword usage, and content. This can increase their chances of getting noticed by recruiters and get job interviews."
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
