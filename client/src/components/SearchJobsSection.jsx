import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchedJobItem from './SearchedJobItem'
import JobDetails from './JobDetails'
import { setActiveJob } from '@/redux/reducers/searchJobsSlice'

const DUMMY = [
    {
        job_id: '9oDymyQXln8in_6tAAAAAA==',
        employer_name: 'cogniswitch',
        employer_logo: null,
        employer_website: 'http://cogniswitch.ai',
        employer_company_type: null,
        job_publisher: 'LinkedIn',
        job_employment_type: 'FULLTIME',
        job_title: 'Software Developer',
        job_apply_link: 'https://in.linkedin.com/jobs/view/software-developer-at-cogniswitch-3885127391',
        job_apply_is_direct: false,
        job_apply_quality_score: 0.6581,
        apply_options: [
          {
            publisher: 'LinkedIn',
            apply_link: 'https://in.linkedin.com/jobs/view/software-developer-at-cogniswitch-3885127391',
            is_direct: false
          }
        ],
        job_description: 'About us\n\nCogniSwitch Technologies Private Limited is a start-up focused on Realizing Ideas. One such idea is Cogniswitch.ai, our Intelligent Engagement Platform. We leverage Augmented Intelligence, a combination of machine-driven insights & human understanding, to serve a timely response to every interaction from the people you care about.\n\nSoftware Engineer - Java\n\nMain Duties\n• Contribute to all phases of the product development lifecycle\n• Write well-designed, testable, efficient code\n• Ensure designs comply with specifications\n• Support continuous improvement by investigating alternatives and technologies and presenting these for architectural review\n• Prepare and produce releases of software components\n\nExperience\n\nWe value ability over experience but having a deep working knowledge of Core and Advanced Java will be an advantage.\n\nSkills\n\nGood\n• Strong understanding of Core Java, Servlet, JSP\n• Good knowledge of design patterns\n• Knowledge of RDBMS (MySQL, Oracle, SQL Server), NoSQL\n• Knowledge of RESTful Web Services, XML, JSON\n\nEven better\n• Familiarity with the software development lifecycle\n• Strong full-stack developer development background with frontend and backend web applications\n• Knowledge of Spark, Kafka, Graph database',
        job_is_remote: true,
        job_posted_at_timestamp: 1712551351,
        job_posted_at_datetime_utc: '2024-04-08T04:42:31.000Z',
        job_city: 'Pune',
        job_state: 'MH',
        job_country: 'IN',
        job_latitude: 18.52043,
        job_longitude: 73.85674,
        job_benefits: null,
        job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=software+developer+in+pune&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=software+developer+in+pune&htidocid=9oDymyQXln8in_6tAAAAAA%3D%3D',
        job_offer_expiration_datetime_utc: '2024-05-08T04:42:31.000Z',
        job_offer_expiration_timestamp: 1715143351,
        job_required_experience: {
          no_experience_required: false,
          required_experience_in_months: null,
          experience_mentioned: true,
          experience_preferred: false
        },
        job_required_skills: [
          'Databases',
          'Relational Databases',
          'Software Development',
          'Programming',
          'SQL',
          'Computer Science',
          'Programming Languages',
          'Web Applications',
          'Computer Engineering',
          'Python (Programming Language)'
        ],
        job_required_education: {
          postgraduate_degree: false,
          professional_certification: false,
          high_school: false,
          associates_degree: false,
          bachelors_degree: true,
          degree_mentioned: false,
          degree_preferred: false,
          professional_certification_mentioned: false
        },
        job_experience_in_place_of_education: false,
        job_min_salary: null,
        job_max_salary: null,
        job_salary_currency: null,
        job_salary_period: null,
        job_highlights: {},
        job_job_title: null,
        job_posting_language: 'en',
        job_onet_soc: '15113200',
        job_onet_job_zone: '4'
      },
      {
          job_id: '9oDymyQXln8in_6tAAAAAA==',
          employer_name: 'stunly',
          employer_logo: null,
          employer_website: 'http://cogniswitch.ai',
          employer_company_type: null,
          job_publisher: 'LinkedIn',
          job_employment_type: 'FULLTIME',
          job_title: 'Web Developer',
          job_apply_link: 'https://in.linkedin.com/jobs/view/software-developer-at-cogniswitch-3885127391',
          job_apply_is_direct: false,
          job_apply_quality_score: 0.6581,
          apply_options: [
            {
              publisher: 'LinkedIn',
              apply_link: 'https://in.linkedin.com/jobs/view/software-developer-at-cogniswitch-3885127391',
              is_direct: false
            }
          ],
          job_description: 'About us\n\nCogniSwitch Technologies Private Limited is a start-up focused on Realizing Ideas. One such idea is Cogniswitch.ai, our Intelligent Engagement Platform. We leverage Augmented Intelligence, a combination of machine-driven insights & human understanding, to serve a timely response to every interaction from the people you care about.\n\nSoftware Engineer - Java\n\nMain Duties\n• Contribute to all phases of the product development lifecycle\n• Write well-designed, testable, efficient code\n• Ensure designs comply with specifications\n• Support continuous improvement by investigating alternatives and technologies and presenting these for architectural review\n• Prepare and produce releases of software components\n\nExperience\n\nWe value ability over experience but having a deep working knowledge of Core and Advanced Java will be an advantage.\n\nSkills\n\nGood\n• Strong understanding of Core Java, Servlet, JSP\n• Good knowledge of design patterns\n• Knowledge of RDBMS (MySQL, Oracle, SQL Server), NoSQL\n• Knowledge of RESTful Web Services, XML, JSON\n\nEven better\n• Familiarity with the software development lifecycle\n• Strong full-stack developer development background with frontend and backend web applications\n• Knowledge of Spark, Kafka, Graph database',
          job_is_remote: true,
          job_posted_at_timestamp: 1712551351,
          job_posted_at_datetime_utc: '2024-04-08T04:42:31.000Z',
          job_city: 'Pune',
          job_state: 'MH',
          job_country: 'IN',
          job_latitude: 18.52043,
          job_longitude: 73.85674,
          job_benefits: null,
          job_google_link: 'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=software+developer+in+pune&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=software+developer+in+pune&htidocid=9oDymyQXln8in_6tAAAAAA%3D%3D',
          job_offer_expiration_datetime_utc: '2024-05-08T04:42:31.000Z',
          job_offer_expiration_timestamp: 1715143351,
          job_required_experience: {
            no_experience_required: false,
            required_experience_in_months: null,
            experience_mentioned: true,
            experience_preferred: false
          },
          job_required_skills: [
            'Databases',
            'Relational Databases',
            'Software Development',
            'Programming',
            'SQL',
            'Computer Science',
            'Programming Languages',
            'Web Applications',
            'Computer Engineering',
            'Python (Programming Language)'
          ],
          job_required_education: {
            postgraduate_degree: false,
            professional_certification: false,
            high_school: false,
            associates_degree: false,
            bachelors_degree: true,
            degree_mentioned: false,
            degree_preferred: false,
            professional_certification_mentioned: false
          },
          job_experience_in_place_of_education: false,
          job_min_salary: null,
          job_max_salary: null,
          job_salary_currency: null,
          job_salary_period: null,
          job_highlights: {},
          job_job_title: null,
          job_posting_language: 'en',
          job_onet_soc: '15113200',
          job_onet_job_zone: '4'
        },
]

const SearchJobsSection = () => {
    const jobs = useSelector((state) => state.searchJobs.results.data)
    const loading = useSelector((state) => state.searchJobs.loading)

  return (
    <div>
        {/* <h1>SearchJobsSection</h1> */}
        {loading && <p className='text-center pt-[8%]'>Loading...</p>}
        {!loading && jobs &&
        <div className='flex gap-4'>
            <div className='w-1/3 max-h-[70vh] overflow-auto pr-2'>
            {jobs?.map((job) => (
                <SearchedJobItem
                    job={job}
                />
            ))}
            </div>
            <div className='w-2/3 max-h-[70vh] overflow-auto'>
                <JobDetails
                    job={jobs[0]}
                />
            </div>
        </div>
        }
    </div>
  )
}

export default SearchJobsSection