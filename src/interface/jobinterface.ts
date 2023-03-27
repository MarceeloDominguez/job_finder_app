export interface Jobs {
  status: string;
  request_id: string;
  parameters: Parameters;
  data: Job[];
}

export interface Job {
  employer_name: string;
  employer_logo: null | string;
  employer_website: null | string;
  employer_company_type: null;
  job_publisher: string;
  job_id: string;
  job_employment_type: JobEmploymentType;
  job_title: string;
  job_apply_link: string;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: Date;
  job_city: JobCity;
  job_state: JobState;
  job_country: JobCountry;
  job_latitude: number;
  job_longitude: number;
  job_benefits: string[] | null;
  job_google_link: string;
  job_offer_expiration_datetime_utc: Date;
  job_offer_expiration_timestamp: number;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[] | null;
  job_required_education: JobRequiredEducation;
  job_experience_in_place_of_education: boolean;
  job_min_salary: null;
  job_max_salary: null;
  job_salary_currency: null;
  job_salary_period: null;
  job_highlights: JobHighlights;
  job_job_title: null;
}

export enum JobCity {
  Austin = "Austin",
  Houston = "Houston",
}

export enum JobCountry {
  Us = "US",
}

export enum JobEmploymentType {
  Fulltime = "FULLTIME",
  Parttime = "PARTTIME",
}

export interface JobHighlights {
  Qualifications: string[];
  Responsibilities?: string[];
  Benefits?: string[];
}

export interface JobRequiredEducation {
  postgraduate_degree: boolean;
  professional_certification: boolean;
  high_school: boolean;
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  professional_certification_mentioned: boolean;
}

export interface JobRequiredExperience {
  no_experience_required: boolean;
  required_experience_in_months: number | null;
  experience_mentioned: boolean;
  experience_preferred: boolean;
}

export enum JobState {
  Tx = "TX",
}

export interface Parameters {
  query: string;
  page: number;
  num_pages: number;
}
