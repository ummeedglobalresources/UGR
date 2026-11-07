export type ScreenType = 'home' | 'jobs' | 'calculator';

export type JobStream = 'white-collar' | 'technical' | 'healthcare' | 'hospitality';

export interface CorridorLivingData {
  corridorId: string;
  country: string;
  city: string;
  flag: string;
  region: 'Gulf Cooperation Council (GCC)' | 'European Union (EU)' | 'Asia-Pacific';
  currencyCode: string;
  currencySymbol: string;
  fxRateToINR: number; // e.g. 22.2 for SAR
  incomeTaxRate: number; // percentage (0 for GCC, ~28 for Germany, etc.)
  socialSecurityRate: number; // percentage (0 for GCC expats, ~10-20% for EU)
  baseMonthlyLivingCosts: {
    singleSharedRoom: number; // in local currency
    oneBedApartment: number;
    utilitiesAndInternet: number;
    groceriesAndFood: number;
    localTransit: number;
    miscHealthcarePersonal: number;
  };
  gulfFreeAccommodationCommon: boolean;
  visaType: string;
  permanentResidencyPath: boolean;
  familyVisaEligibilityThresholdINR: number; // monthly INR income threshold for family visa sponsorship
}

export interface CorridorComparisonResult {
  corridor: CorridorLivingData;
  grossSalaryLocal: number;
  grossSalaryINR: number;
  incomeTaxLocal: number;
  socialSecurityLocal: number;
  netTakeHomeLocal: number;
  netTakeHomeINR: number;
  housingCostLocal: number;
  livingExpensesLocal: number;
  totalMonthlyCostLocal: number;
  totalMonthlyCostINR: number;
  estimatedNetSavingsMonthlyLocal: number;
  estimatedNetSavingsMonthlyINR: number;
  estimatedNetSavingsAnnualINR: number;
  savingsRatePercentage: number;
  repatriationValueINR: number; // purchasing power in India
}

export interface JobOpening {
  id: string;
  title: string;
  clientCompany: string;
  country: string;
  city: string;
  flag: string;
  sector: string;
  stream: JobStream;
  salary: {
    amount: string;
    currency: string;
    inrEquivalent: string;
  };
  vacancies: number;
  experienceRequired: string;
  contractPeriod: string;
  benefits: string[];
  requirements: string[];
  description: string;
  postedDate: string;
  deadline: string;
  interviewType: 'Client Interview in Hyderabad' | 'Direct Online Interview' | 'CV Selection';
  interviewDates?: string;
  urgentHiring?: boolean;
}

export interface ApplicationFormData {
  jobId?: string;
  jobTitle?: string;
  fullName: string;
  email: string;
  phone: string;
  passportNumber: string;
  passportExpiry: string;
  currentLocation: string;
  currentProfession: string;
  yearsOfExperience: string;
  highestQualification: string;
  preferredDestination: string;
  additionalNotes?: string;
}

export interface EmployerInquiryData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  requiredTrades: string;
  estimatedHeadcount: string;
  targetMobilizationDate: string;
  message: string;
}
