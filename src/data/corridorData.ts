import { CorridorLivingData } from '../types.ts';

export const CORRIDORS_DATA: CorridorLivingData[] = [
  {
    corridorId: 'ksa',
    country: 'Saudi Arabia',
    city: 'Riyadh / Jubail / Dammam',
    flag: '🇸🇦',
    region: 'Gulf Cooperation Council (GCC)',
    currencyCode: 'SAR',
    currencySymbol: 'SAR',
    fxRateToINR: 22.3,
    incomeTaxRate: 0,
    socialSecurityRate: 0,
    baseMonthlyLivingCosts: {
      singleSharedRoom: 650,
      oneBedApartment: 1800,
      utilitiesAndInternet: 350,
      groceriesAndFood: 750,
      localTransit: 250,
      miscHealthcarePersonal: 200,
    },
    gulfFreeAccommodationCommon: true,
    visaType: 'Work Visa (Iqama with Client Sponsorship)',
    permanentResidencyPath: false,
    familyVisaEligibilityThresholdINR: 110000,
  },
  {
    corridorId: 'uae',
    country: 'United Arab Emirates',
    city: 'Dubai / Abu Dhabi',
    flag: '🇦🇪',
    region: 'Gulf Cooperation Council (GCC)',
    currencyCode: 'AED',
    currencySymbol: 'AED',
    fxRateToINR: 22.8,
    incomeTaxRate: 0,
    socialSecurityRate: 0,
    baseMonthlyLivingCosts: {
      singleSharedRoom: 1100,
      oneBedApartment: 3600,
      utilitiesAndInternet: 500,
      groceriesAndFood: 1000,
      localTransit: 400,
      miscHealthcarePersonal: 300,
    },
    gulfFreeAccommodationCommon: true,
    visaType: 'Standard 2-Year Employment Residence Visa',
    permanentResidencyPath: false,
    familyVisaEligibilityThresholdINR: 115000,
  },
  {
    corridorId: 'qatar',
    country: 'Qatar',
    city: 'Doha / Ras Laffan',
    flag: '🇶🇦',
    region: 'Gulf Cooperation Council (GCC)',
    currencyCode: 'QAR',
    currencySymbol: 'QAR',
    fxRateToINR: 23.0,
    incomeTaxRate: 0,
    socialSecurityRate: 0,
    baseMonthlyLivingCosts: {
      singleSharedRoom: 900,
      oneBedApartment: 3000,
      utilitiesAndInternet: 420,
      groceriesAndFood: 900,
      localTransit: 300,
      miscHealthcarePersonal: 250,
    },
    gulfFreeAccommodationCommon: true,
    visaType: 'QID Qatar Employment Visa (Ministry of Interior)',
    permanentResidencyPath: false,
    familyVisaEligibilityThresholdINR: 135000,
  },
  {
    corridorId: 'germany',
    country: 'Germany',
    city: 'Stuttgart / Nuremberg / Frankfurt',
    flag: '🇩🇪',
    region: 'European Union (EU)',
    currencyCode: 'EUR',
    currencySymbol: '€',
    fxRateToINR: 90.5,
    incomeTaxRate: 26, // Approx effective income tax for single taxpayer
    socialSecurityRate: 19, // Health insurance, pension, nursing, unemployment
    baseMonthlyLivingCosts: {
      singleSharedRoom: 480,
      oneBedApartment: 850,
      utilitiesAndInternet: 240,
      groceriesAndFood: 320,
      localTransit: 49, // Deutschlandticket flat rate!
      miscHealthcarePersonal: 120,
    },
    gulfFreeAccommodationCommon: false,
    visaType: 'EU Blue Card / Skilled Worker Visa (§ 18a/18b AufenthG)',
    permanentResidencyPath: true,
    familyVisaEligibilityThresholdINR: 190000,
  },
  {
    corridorId: 'poland',
    country: 'Poland',
    city: 'Warsaw / Wroclaw / Katowice',
    flag: '🇵🇱',
    region: 'European Union (EU)',
    currencyCode: 'PLN',
    currencySymbol: 'zł',
    fxRateToINR: 21.0,
    incomeTaxRate: 12, // First bracket tax
    socialSecurityRate: 13.7, // ZUS employee contribution
    baseMonthlyLivingCosts: {
      singleSharedRoom: 900,
      oneBedApartment: 2400,
      utilitiesAndInternet: 450,
      groceriesAndFood: 800,
      localTransit: 120,
      miscHealthcarePersonal: 250,
    },
    gulfFreeAccommodationCommon: false,
    visaType: 'Voivodeship Type A Work Permit (Schengen Area)',
    permanentResidencyPath: true,
    familyVisaEligibilityThresholdINR: 125000,
  },
  {
    corridorId: 'oman',
    country: 'Oman',
    city: 'Muscat / Sohar',
    flag: '🇴🇲',
    region: 'Gulf Cooperation Council (GCC)',
    currencyCode: 'OMR',
    currencySymbol: 'OMR',
    fxRateToINR: 217.5,
    incomeTaxRate: 0,
    socialSecurityRate: 0,
    baseMonthlyLivingCosts: {
      singleSharedRoom: 70,
      oneBedApartment: 190,
      utilitiesAndInternet: 40,
      groceriesAndFood: 80,
      localTransit: 30,
      miscHealthcarePersonal: 25,
    },
    gulfFreeAccommodationCommon: true,
    visaType: '2-Year Investor/Employment Resident Card (ROP)',
    permanentResidencyPath: false,
    familyVisaEligibilityThresholdINR: 130000,
  },
  {
    corridorId: 'singapore',
    country: 'Singapore',
    city: 'Jurong / Central Singapore',
    flag: '🇸🇬',
    region: 'Asia-Pacific',
    currencyCode: 'SGD',
    currencySymbol: 'S$',
    fxRateToINR: 62.8,
    incomeTaxRate: 8,
    socialSecurityRate: 0, // Expat S-Pass/EP does not contribute to CPF
    baseMonthlyLivingCosts: {
      singleSharedRoom: 900,
      oneBedApartment: 2500,
      utilitiesAndInternet: 180,
      groceriesAndFood: 600,
      localTransit: 150,
      miscHealthcarePersonal: 120,
    },
    gulfFreeAccommodationCommon: false,
    visaType: 'S-Pass / Employment Pass (MOM Ministry of Manpower)',
    permanentResidencyPath: true,
    familyVisaEligibilityThresholdINR: 375000,
  },
];

export interface RoleBenchmark {
  id: string;
  title: string;
  category: 'Skilled Trades' | 'Engineering' | 'Healthcare' | 'Logistics' | 'IT';
  baseSalariesByCorridor: Record<string, number>; // CorridorId -> monthly gross salary in local currency for mid-level (4-7 yrs)
}

export const ROLE_BENCHMARKS: RoleBenchmark[] = [
  {
    id: 'pipe_welder',
    title: 'Certified 6G / TIG Pipe Welder',
    category: 'Skilled Trades',
    baseSalariesByCorridor: {
      ksa: 4500, // SAR 4,500 + OT (~₹1.00L)
      uae: 4800, // AED 4,800 (~₹1.09L)
      qatar: 4600, // QAR 4,600 (~₹1.05L)
      germany: 2950, // EUR 2,950 (~₹2.67L)
      poland: 7200, // PLN 7,200 (~₹1.51L)
      oman: 420, // OMR 420 (~₹91k)
      singapore: 2600, // SGD 2,600 (~₹1.63L)
    },
  },
  {
    id: 'qa_qc_inspector',
    title: 'Piping & Welding QA/QC Inspector',
    category: 'Engineering',
    baseSalariesByCorridor: {
      ksa: 9500, // SAR 9,500 (~₹2.11L)
      uae: 10500, // AED 10,500 (~₹2.39L)
      qatar: 10000, // QAR 10,000 (~₹2.30L)
      germany: 3800, // EUR 3,800 (~₹3.43L)
      poland: 10500, // PLN 10,500 (~₹2.20L)
      oman: 950, // OMR 950 (~₹2.06L)
      singapore: 4500, // SGD 4,500 (~₹2.82L)
    },
  },
  {
    id: 'staff_nurse',
    title: 'Registered Staff Nurse (ICU / Emergency)',
    category: 'Healthcare',
    baseSalariesByCorridor: {
      ksa: 7500, // SAR 7,500 (~₹1.67L)
      uae: 11000, // AED 11,000 (~₹2.50L)
      qatar: 9200, // QAR 9,200 (~₹2.11L)
      germany: 3300, // EUR 3,300 (~₹2.98L)
      poland: 7800, // PLN 7,800 (~₹1.63L)
      oman: 700, // OMR 700 (~₹1.52L)
      singapore: 3800, // SGD 3,800 (~₹2.38L)
    },
  },
  {
    id: 'hvac_technician',
    title: 'HVAC Chiller & MEP Maintenance Technician',
    category: 'Skilled Trades',
    baseSalariesByCorridor: {
      ksa: 4200, // SAR 4,200 (~₹93k)
      uae: 4500, // AED 4,500 (~₹1.02L)
      qatar: 4400, // QAR 4,400 (~₹1.01L)
      germany: 2800, // EUR 2,800 (~₹2.53L)
      poland: 6800, // PLN 6,800 (~₹1.42L)
      oman: 380, // OMR 380 (~₹82k)
      singapore: 2500, // SGD 2,500 (~₹1.57L)
    },
  },
  {
    id: 'electrical_engineer',
    title: 'Substation & Electrical Project Engineer',
    category: 'Engineering',
    baseSalariesByCorridor: {
      ksa: 11000, // SAR 11,000 (~₹2.45L)
      uae: 12500, // AED 12,500 (~₹2.85L)
      qatar: 11500, // QAR 11,500 (~₹2.64L)
      germany: 4200, // EUR 4,200 (~₹3.80L)
      poland: 12000, // PLN 12,000 (~₹2.52L)
      oman: 1100, // OMR 1,100 (~₹2.39L)
      singapore: 5200, // SGD 5,200 (~₹3.26L)
    },
  },
  {
    id: 'cnc_machinist',
    title: '5-Axis CNC Milling Machinist & Programmer',
    category: 'Skilled Trades',
    baseSalariesByCorridor: {
      ksa: 5500,
      uae: 6200,
      qatar: 5800,
      germany: 3200,
      poland: 8500,
      oman: 500,
      singapore: 3100,
    },
  },
  {
    id: 'heavy_driver',
    title: 'Commercial Heavy Vehicle (Trailer/Bus) Driver',
    category: 'Logistics',
    baseSalariesByCorridor: {
      ksa: 3800,
      uae: 4200,
      qatar: 3900,
      germany: 2700,
      poland: 7500,
      oman: 360,
      singapore: 2800,
    },
  },
  {
    id: 'it_systems',
    title: 'Cloud & Infrastructure Network Specialist',
    category: 'IT',
    baseSalariesByCorridor: {
      ksa: 12000,
      uae: 14000,
      qatar: 13000,
      germany: 4600,
      poland: 14000,
      oman: 1250,
      singapore: 5800,
    },
  },
];

export const EXPERIENCE_MULTIPLIERS = [
  { id: 'entry', label: '1 - 3 Years (Junior / Fresh Gulf)', multiplier: 0.8 },
  { id: 'mid', label: '4 - 7 Years (Skilled / Experienced)', multiplier: 1.0 },
  { id: 'senior', label: '8 - 12+ Years (Lead / Gulf Return)', multiplier: 1.35 },
];
