import type { ReactNode } from "react"
import {
  IconBarbell,
  IconHeartbeat,
  IconHeart,
  IconRefresh,
  IconReportAnalytics,
  IconShieldCheck,
  IconSparkles,
  IconTargetArrow,
} from "@tabler/icons-react"

export type ScreeningFeature = {
  icon: ReactNode
  label: string
}

export type ScreeningModalContent = {
  image: string
  imageAlt: string
  panelTitle: string
  tagline: string
  description: string
  features?: ScreeningFeature[]
  whoIsItFor: string[]
  testIncludes: string[]
  whyGetTested: string[]
  callout: {
    title: string
    text: string
  }
  note?: string
  bookingMessage: string
}

export const SCREENING_MODAL_CONTENT: Record<string, ScreeningModalContent> = {
  "Diet & Lifestyle Screening": {
    image: "/Screenings/Diet and lifestyle copy.png",
    imageAlt: "Diet and lifestyle health screening",
    panelTitle: "Diet & Lifestyle Health Screening",
    tagline: "Optimize Your Health from the Inside Out",
    description:
      "A comprehensive assessment of key metabolic and wellness markers to help you make more informed health decisions.",
    features: [
      { icon: <IconHeart size={22} stroke={1.8} aria-hidden />, label: "Improve Metabolic Health" },
      { icon: <IconTargetArrow size={22} stroke={1.8} aria-hidden />, label: "Support Weight Goals" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Track Lifestyle Impact" },
      { icon: <IconSparkles size={22} stroke={1.8} aria-hidden />, label: "Build Healthier Habits" },
    ],
    whoIsItFor: [
      "Individuals struggling with weight management",
      "People with elevated blood sugar or cholesterol levels",
      "Individuals with metabolic syndrome or obesity",
      "Anyone looking to improve their overall health through nutrition and lifestyle changes",
    ],
    testIncludes: [
      "Blood Sugar Screening (FBS, HbA1c)",
      "Cholesterol & Lipid Profile",
      "Kidney Function Tests (BUN, Creatinine, Uric Acid)",
      "Liver Function Tests (ALT, AST)",
      "Electrolyte Panel (Sodium, Potassium)",
    ],
    whyGetTested: [
      "Understanding your metabolic health can help identify factors that may be affecting your weight, energy levels, and long-term wellness. Early screening provides valuable insights that support healthier lifestyle choices and disease prevention.",
    ],
    callout: {
      title: "Take a proactive approach to your health.",
      text: "Comprehensive metabolic screening designed to support better nutrition, weight management, and overall wellness.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the Diet & Lifestyle Health Screening.",
  },
  "Diabetes Screening": {
    image: "/Screenings/Diabetes.png",
    imageAlt: "Diabetes monitoring and screening package",
    panelTitle: "Diabetes Monitoring & Screening Package",
    tagline: "Take Control of Your Blood Sugar Health",
    description:
      "A comprehensive assessment of blood sugar control and diabetes-related health markers, helping detect complications early and monitor overall health.",
    features: [
      { icon: <IconHeartbeat size={22} stroke={1.8} aria-hidden />, label: "Monitor Blood Sugar" },
      { icon: <IconShieldCheck size={22} stroke={1.8} aria-hidden />, label: "Detect Complications Early" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Support Daily Management" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Track Progress Over Time" },
    ],
    whoIsItFor: [
      "Individuals with diagnosed diabetes",
      "People at risk of developing diabetes",
      "Pregnant women monitoring for gestational diabetes",
      "Individuals who are overweight or have a family history of diabetes",
    ],
    testIncludes: [
      "Blood Sugar & Diabetes Markers (FBS, HbA1c)",
      "Cholesterol & Lipid Profile",
      "Kidney Function Tests (BUN, Creatinine, Uric Acid, Urine Microalbumin)",
      "Liver Function Tests (ALT, AST)",
      "Electrolytes (Sodium, Potassium)",
      "Routine Urinalysis",
    ],
    whyGetTested: [
      "Regular monitoring helps track blood sugar control, identify early signs of complications, and support better management of your long-term health.",
      "Early detection and proper monitoring are key to preventing diabetes-related complications and maintaining a healthier future.",
    ],
    callout: {
      title: "Stay ahead of complications.",
      text: "Early detection and proper monitoring are key to preventing diabetes-related complications.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the Diabetes Monitoring & Screening Package.",
  },
  "Hormone Screening": {
    image: "/Screenings/Hormones.png",
    imageAlt: "Hormone health and thyroid screening",
    panelTitle: "Hormone Health & Thyroid Screening",
    tagline: "Understand Your Hormones, Understand Your Health",
    description:
      "Evaluates key hormone and thyroid markers to help identify imbalances that may be affecting your daily life.",
    features: [
      { icon: <IconSparkles size={22} stroke={1.8} aria-hidden />, label: "Identify Imbalances" },
      { icon: <IconHeart size={22} stroke={1.8} aria-hidden />, label: "Understand Symptoms" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Guide Treatment Decisions" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Support Lifestyle Changes" },
    ],
    whoIsItFor: [
      "Individuals experiencing fatigue, low energy, unexplained weight gain or weight loss",
      "People with symptoms of thyroid disorders such as rapid heartbeat, anxiety, or changes in metabolism",
      "Women with PCOS or irregular menstrual cycles",
      "Anyone looking to better understand their hormonal health and overall wellness",
    ],
    testIncludes: [
      "Testosterone (Men)",
      "Estrogen / Estradiol (Women)",
      "Follicle Stimulating Hormone (FSH)",
      "Thyroid Function Tests (TSH, FT3, FT4)",
    ],
    whyGetTested: [
      "Hormonal imbalances often develop gradually and can affect both physical and emotional health. Early testing can help identify underlying issues and support more effective treatment and lifestyle decisions.",
    ],
    callout: {
      title: "Support balance, wellness, and long-term vitality.",
      text: "Comprehensive hormone testing designed to help you take control of your health.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the Hormone Health & Thyroid Screening.",
  },
  "Elite Fitness Screening": {
    image: "/Screenings/Elite Fitness copy.png",
    imageAlt: "Elite fitness performance panel",
    panelTitle: "Elite Fitness Performance Panel",
    tagline: "Train Smarter. Perform Better.",
    description:
      "In-depth insights into your metabolism, recovery, inflammation, nutrition, and overall performance readiness.",
    features: [
      { icon: <IconBarbell size={22} stroke={1.8} aria-hidden />, label: "Optimize Performance" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Improve Recovery" },
      { icon: <IconShieldCheck size={22} stroke={1.8} aria-hidden />, label: "Prevent Injury" },
      { icon: <IconHeart size={22} stroke={1.8} aria-hidden />, label: "Support Overall Health" },
    ],
    whoIsItFor: [
      "Athletes and fitness enthusiasts",
      "Individuals looking to optimize training performance and recovery",
      "Those experiencing fatigue, stalled progress, or performance plateaus",
      "Anyone wanting to understand how nutrition, supplementation, and training impact their body",
    ],
    testIncludes: [
      "Blood Sugar & Metabolic Health (FBS, HbA1c)",
      "Cholesterol & Lipid Profile",
      "Liver & Kidney Function",
      "Iron Status & Ferritin",
      "Electrolytes & Hydration Markers",
      "Thyroid Function (TSH, FT3, FT4)",
      "Inflammation Marker (CRP)",
      "Complete Blood Count (CBC)",
    ],
    whyGetTested: [
      "Peak performance starts with understanding what's happening inside your body. This panel helps identify nutritional deficiencies, recovery issues, inflammation, hormonal imbalances, and other factors that may be limiting your results.",
    ],
    callout: {
      title: "Take the guesswork out of training.",
      text: "Make data-driven decisions to train smarter, recover faster, and perform better.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the Elite Fitness Performance Panel.",
  },
  "Men's Prime Health Package": {
    image: "/Screenings/MEn's Prime.png",
    imageAlt: "Men's prime health package",
    panelTitle: "Men's Prime Health Package",
    tagline: "Comprehensive Preventive Health Screening for Men",
    description:
      "A comprehensive assessment of key health indicators, helping detect early signs of common conditions affecting men, including diabetes, heart disease, kidney disease, liver disorders, metabolic conditions, and prostate health concerns.",
    features: [
      { icon: <IconShieldCheck size={22} stroke={1.8} aria-hidden />, label: "Support Prostate Health" },
      { icon: <IconHeartbeat size={22} stroke={1.8} aria-hidden />, label: "Track Vital Markers" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Detect Issues Early" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Build Long-Term Wellness" },
    ],
    whoIsItFor: [
      "Men aged 35 years and above",
      "Individuals with a family history of diabetes, heart disease, kidney disease, liver disease, or cancer",
      "Men looking to take a proactive approach to preventive healthcare and long-term wellness",
    ],
    testIncludes: [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar (FBS)",
      "Lipid Profile (Cholesterol Screening)",
      "Kidney Function Tests (BUN, Creatinine, Uric Acid)",
      "Liver Function Tests (ALT, AST, ALP, Bilirubin)",
      "Electrolytes & Minerals (Sodium, Potassium, Calcium, Magnesium, Phosphorus)",
      "HbA1c (3-Month Blood Sugar Monitoring)",
      "Urinalysis",
      "Fecal Occult Blood Test (FOBT)",
      "PSA (Prostate Health Screening)",
    ],
    whyGetTested: [
      "Many chronic diseases develop silently before symptoms appear. Regular health screening can help identify potential concerns early, allowing for timely intervention and better long-term health outcomes.",
      "Invest in your health today with a complete men's wellness screening designed for prevention, early detection, and peace of mind.",
    ],
    callout: {
      title: "Invest in your health today.",
      text: "A complete men's wellness screening designed for prevention, early detection, and peace of mind.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the Men's Prime Health Package.",
  },
  "Women's Prime Health Package": {
    image: "/Screenings/Women's Prime .png",
    imageAlt: "Women's prime health package",
    panelTitle: "Women's Prime Health Package",
    tagline: "Comprehensive Preventive Health Screening for Women",
    description:
      "A thorough assessment of key health markers, helping detect early signs of common conditions such as diabetes, heart disease, thyroid disorders, kidney disease, liver problems, and metabolic health concerns.",
    features: [
      { icon: <IconHeartbeat size={22} stroke={1.8} aria-hidden />, label: "Monitor Key Markers" },
      { icon: <IconShieldCheck size={22} stroke={1.8} aria-hidden />, label: "Support Heart & Thyroid Health" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Detect Concerns Early" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Protect Long-Term Wellness" },
    ],
    whoIsItFor: [
      "Women aged 35 years and above",
      "Individuals with a family history of diabetes, thyroid disease, heart disease, kidney disease, liver disease, or cancer",
      "Women looking to take a proactive approach to preventive healthcare and long-term wellness",
    ],
    testIncludes: [
      "Complete Blood Count (CBC)",
      "Fasting Blood Sugar (FBS)",
      "Lipid Profile (Cholesterol Screening)",
      "Kidney & Liver Function Tests",
      "Electrolytes & Mineral Panel",
      "HbA1c (3-Month Blood Sugar Monitoring)",
      "Thyroid Function Tests (FT3, FT4, TSH)",
      "Urinalysis",
      "Fecal Occult Blood Test (FOBT)",
    ],
    whyGetTested: [
      "Many health conditions develop quietly before symptoms appear. Regular health screening can help identify potential concerns early, allowing for timely intervention and better health outcomes.",
      "Take control of your health with a comprehensive wellness screening designed for prevention, early detection, and peace of mind.",
    ],
    callout: {
      title: "Take control of your health.",
      text: "A comprehensive wellness screening designed for prevention, early detection, and peace of mind.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the Women's Prime Health Package.",
  },
  "Men's Tumor Marker Screening": {
    image: "/Screenings/Men's Tumor MArker.png",
    imageAlt: "Men's tumor marker screening",
    panelTitle: "Men's Tumor Marker Screening",
    tagline: "Stay One Step Ahead of Cancer",
    description: "Measures key biomarkers associated with some of the most common cancers affecting men.",
    features: [
      { icon: <IconShieldCheck size={22} stroke={1.8} aria-hidden />, label: "Support Early Awareness" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Track Cancer Markers" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Monitor Ongoing Health" },
      { icon: <IconHeart size={22} stroke={1.8} aria-hidden />, label: "Guide Next Steps" },
    ],
    whoIsItFor: [
      "Men with a family history of cancer",
      "Individuals with risk factors such as smoking, obesity, or toxin exposure",
      "Cancer survivors undergoing routine monitoring",
      "Men seeking a proactive approach to their long-term health",
    ],
    testIncludes: [
      "PSA – Prostate Health & Prostate Cancer",
      "CEA – Colorectal (Colon) Cancer",
      "AFP – Liver Cancer",
      "CA 19-9 – Pancreatic Cancer",
    ],
    whyGetTested: [
      "Many cancers develop silently and may not show symptoms in their early stages. Tumor marker screening provides valuable information that can help support early detection, treatment monitoring, and ongoing health management.",
      "A simple blood test today may help provide greater peace of mind for tomorrow.",
    ],
    callout: {
      title: "A simple blood test today.",
      text: "May help provide greater peace of mind for tomorrow.",
    },
    note: "Tumor marker tests are not diagnostic and should be interpreted alongside clinical evaluation and other medical investigations.",
    bookingMessage: "Hi Lablog team, I would like to book the Men's Tumor Marker Screening.",
  },
  "Women's Tumor Marker Screening": {
    image: "/Screenings/Women's Tumor MArker.png",
    imageAlt: "Women's tumor marker screening",
    panelTitle: "Women's Tumor Marker Screening",
    tagline: "Proactive Cancer Screening for Women",
    description:
      "Measures key biomarkers associated with some of the most common cancers affecting women, helping support early detection and ongoing health monitoring.",
    features: [
      { icon: <IconShieldCheck size={22} stroke={1.8} aria-hidden />, label: "Support Early Awareness" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Track Cancer Markers" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Monitor Ongoing Health" },
      { icon: <IconHeart size={22} stroke={1.8} aria-hidden />, label: "Guide Next Steps" },
    ],
    whoIsItFor: [
      "Women with a family history of cancer",
      "Individuals with risk factors such as smoking, obesity, or long-term toxin exposure",
      "Cancer survivors undergoing routine monitoring",
      "Women seeking a proactive approach to preventive healthcare",
    ],
    testIncludes: [
      "CEA – Colorectal (Colon) Cancer",
      "AFP – Liver Cancer",
      "CA-125 – Ovarian Cancer",
      "CA 19-9 – Pancreatic Cancer",
      "CA 15-3 – Breast Cancer",
    ],
    whyGetTested: [
      "Many cancers develop silently and may not cause symptoms in their early stages. Tumor marker screening can provide valuable insights that help support early detection, treatment monitoring, and long-term health management.",
      "A simple blood test today can help you take a more proactive approach to your future health.",
    ],
    callout: {
      title: "Take a proactive approach.",
      text: "A simple blood test today can help you take a more proactive approach to your future health.",
    },
    note: "Tumor marker tests are not diagnostic and should always be interpreted by a healthcare professional alongside other clinical assessments.",
    bookingMessage: "Hi Lablog team, I would like to book the Women's Tumor Marker Screening.",
  },
  "PCOS & Hormone Health Panel": {
    image: "/Screenings/PCOS test copy.png",
    imageAlt: "PCOS screening and hormone health panel",
    panelTitle: "PCOS Screening & Hormone Health Panel",
    tagline: "Understand the Root Cause of Your Symptoms",
    description:
      "Evaluates key hormones and metabolic markers to help provide a clearer picture of your hormonal health.",
    features: [
      { icon: <IconSparkles size={22} stroke={1.8} aria-hidden />, label: "Clarify Hormonal Imbalance" },
      { icon: <IconHeartbeat size={22} stroke={1.8} aria-hidden />, label: "Support Fertility Conversations" },
      { icon: <IconReportAnalytics size={22} stroke={1.8} aria-hidden />, label: "Track PCOS Markers" },
      { icon: <IconRefresh size={22} stroke={1.8} aria-hidden />, label: "Guide Treatment Progress" },
    ],
    whoIsItFor: [
      "Women experiencing irregular periods, acne, hair loss, weight gain, or fertility concerns",
      "Individuals with suspected or diagnosed PCOS",
      "Women struggling with weight management despite diet and exercise",
      "Those monitoring their hormonal health and treatment progress",
    ],
    testIncludes: [
      "Blood Sugar & Insulin Resistance (HbA1c, FBS, Insulin)",
      "Thyroid Function (TSH, FT3, FT4)",
      "Female Hormones (Progesterone, LH, FSH)",
      "Androgen Levels (Total & Free Testosterone, DHEA-S, SHBG)",
      "Inflammation & Nutritional Markers (CRP, Vitamin D, Vitamin B12, Iron)",
    ],
    whyGetTested: [
      "PCOS affects every woman differently. Comprehensive testing can help identify hormonal imbalances, insulin resistance, and other underlying factors, allowing for more personalized treatment and better long-term health outcomes.",
    ],
    callout: {
      title: "Take control of your hormonal health.",
      text: "A comprehensive PCOS screening designed to support early diagnosis, treatment planning, and ongoing monitoring.",
    },
    bookingMessage: "Hi Lablog team, I would like to book the PCOS Screening & Hormone Health Panel.",
  },
}
