import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import aboutAwardImage from "./assets/clinic/about-award.png";
import {
  Activity,
  ArrowRight,
  Award,
  BadgeCheck,
  Brain,
  CalendarDays,
  ChevronRight,
  Clock3,
  Dumbbell,
  Footprints,
  HeartPulse,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRoundCheck,
  Waves,
  X,
} from "lucide-react";

const clinicConfig = {
  name: "Active Physiotherapy & Rehab Clinic",
  shortName: "Active Physio",
  eyebrow: "Laxmi Nagar's trusted rehab destination",
  location: "Vijay Block 15A, Laxmi Nagar, Delhi",
  phoneLabel: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsappNumber: "910000000000",
  email: "appointments@activephysio.in",
  address: "Vijay Block 15A, Laxmi Nagar, Near Tikona Park, Delhi-110092",
  hours: "Monday to Saturday, 8:00 AM - 8:30 PM",
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "We Treat", href: "#conditions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Acupuncture",
    description: "Targeted pain relief support for chronic stiffness and trigger points.",
  },
  {
    title: "Arthritis Treatment",
    description: "Joint-friendly plans that reduce pain and protect day-to-day mobility.",
  },
  {
    title: "Back Pain",
    description: "Structured recovery for disc, posture, and muscular back pain concerns.",
  },
  {
    title: "Balance Exercise Therapy",
    description: "Confidence-building stability work for safer movement and gait control.",
  },
  {
    title: "Foot & Ankle Pain",
    description: "Manual care and exercise progression to restore walking comfort.",
  },
  {
    title: "Heat Therapy",
    description: "Pain easing support that improves tissue readiness before treatment.",
  },
  {
    title: "Hip Pain",
    description: "Focused rehab for mobility, weakness, and movement-related discomfort.",
  },
  {
    title: "Hydrotherapy Training",
    description: "Low-impact functional conditioning designed to ease stress on joints.",
  },
  {
    title: "Knee Pain",
    description: "Evidence-based care for arthritis, injury recovery, and weakness.",
  },
  {
    title: "Neurological Physiotherapy",
    description: "Hands-on rehab for movement retraining after neurological conditions.",
  },
  {
    title: "Paediatric Physiotherapy",
    description: "Gentle therapy designed around developmental and mobility goals.",
  },
  {
    title: "Physical Therapy",
    description: "End-to-end assessment, pain management, and strength restoration.",
  },
  {
    title: "Post-surgical Rehabilitation",
    description: "Planned rehab milestones for safer, faster post-op recovery.",
  },
  {
    title: "Shoulder Pain",
    description: "Recovery programs for impingement, frozen shoulder, and overuse pain.",
  },
  {
    title: "Spinal Injuries",
    description: "Supportive rehab pathways for strength, posture, and functional return.",
  },
  {
    title: "Therapeutic Exercise",
    description: "Progressive exercises designed to restore movement without overload.",
  },
  {
    title: "Vestibular Rehabilitation",
    description: "Balance-focused care for dizziness, vertigo, and unsteady movement.",
  },
  {
    title: "Cupping Therapy",
    description: "Complementary soft tissue care for tightness and circulation support.",
  },
  {
    title: "Hijama Therapy",
    description: "Integrative therapy delivered within a calm and hygienic environment.",
  },
  {
    title: "Dry Needling Therapy",
    description: "Precision trigger-point release for deeper muscular pain patterns.",
  },
  {
    title: "Passive Joint Mobilization",
    description: "Controlled hands-on work that improves mobility and reduces guarding.",
  },
  {
    title: "Stroke",
    description: "Personalized rehab for strength, function, and independence recovery.",
  },
  {
    title: "Bell's Palsy",
    description: "Facial movement retraining and supportive neuro-rehab guidance.",
  },
  {
    title: "Parkinson Disease",
    description: "Rhythm, balance, and mobility plans that prioritize functional safety.",
  },
  {
    title: "Motor Neuron Disease",
    description: "Supportive physiotherapy focused on comfort and movement efficiency.",
  },
  {
    title: "Traumatic Brain Injury",
    description: "Stepwise rehabilitation for coordination, strength, and daily function.",
  },
  {
    title: "Cerebral Palsy",
    description: "Goal-based movement therapy for mobility, posture, and participation.",
  },
];

const conditions = [
  "Cervical Pain",
  "Shoulder Pain",
  "Tennis Elbow",
  "Wrist Pain",
  "Lower Back Pain",
  "Sciatica Pain",
  "Frozen Shoulder",
  "Golfer's Elbow",
  "Sports Injury",
  "Arthritis",
  "Muscle Spasm",
  "Edema/Swelling",
  "Ligament Injury",
  "Plantar Fasciitis",
  "Hip Pain",
  "Knee Pain",
];

const whyChooseUs = [
  {
    title: "Experienced physiotherapist",
    description:
      "Assessment-led care that balances pain relief, movement quality, and long-term function.",
    icon: Stethoscope,
  },
  {
    title: "Personalized care plans",
    description:
      "Every rehab plan is adjusted to the condition, lifestyle, and recovery pace of the patient.",
    icon: UserRoundCheck,
  },
  {
    title: "Advanced therapy mix",
    description:
      "Manual therapy, therapeutic exercise, neuro-rehab, and adjunct therapies in one place.",
    icon: Sparkles,
  },
  {
    title: "Home-like clinic environment",
    description:
      "Calm interiors, attentive guidance, and a reassuring atmosphere that supports healing.",
    icon: Home,
  },
  {
    title: "Rehab support that stays with you",
    description:
      "Clear milestones, progress tracking, and practical home advice between visits.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    title: "Desk pain recovery",
    quote:
      "The treatment felt thoughtful from day one. My neck and lower back pain finally started improving because the exercises were tailored to my work routine.",
    person: "Working professional, East Delhi",
  },
  {
    title: "Post-surgical rehab support",
    quote:
      "Every session had a clear goal and the guidance was reassuring. The clinic feels clean, calm, and genuinely focused on recovery instead of rushed appointments.",
    person: "Family feedback after knee rehab",
  },
  {
    title: "Neuro rehab confidence",
    quote:
      "What stood out most was the patience and consistency. Movement training was explained in simple steps, and progress felt structured throughout the program.",
    person: "Caregiver perspective, Delhi",
  },
];

const statCards = [
  {
    label: "One-on-one sessions",
    value: "Focused",
    icon: BadgeCheck,
  },
  {
    label: "Pain to performance rehab",
    value: "Complete",
    icon: Activity,
  },
  {
    label: "Modern recovery approach",
    value: "Evidence-led",
    icon: HeartPulse,
  },
];

const consultationBenefits = [
  "Free consultation guidance",
  "Personalized treatment direction",
  "Support for pain, injury, and rehab recovery",
];

const initialConsultationForm = {
  name: "",
  phone: "",
  service: services[0].title,
  problemArea: "",
  message: "",
};

const serviceIcons = [
  Activity,
  Brain,
  Dumbbell,
  Footprints,
  HeartPulse,
  Sparkles,
  Stethoscope,
  Waves,
];

const imageModules = import.meta.glob(
  "./assets/clinic/*.{jpg,jpeg,webp,avif,svg}",
  {
    eager: true,
    import: "default",
  },
);

const galleryAssets = normalizeAssetEntries(
  Object.entries(imageModules).map(([path, src]) => ({
    path,
    src,
    name: path.split("/").pop().toLowerCase(),
  })),
);

const imageAssignments = resolveClinicAssets(galleryAssets);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function resolveClinicAssets(entries) {
  const used = new Set();

  const takeByKeywords = (keywords) => {
    const match = entries.find(
      (entry) =>
        !used.has(entry.path) &&
        keywords.some((keyword) => entry.name.includes(keyword)),
    );

    if (match) {
      used.add(match.path);
    }

    return match ?? null;
  };

  const takeNext = () => {
    const match = entries.find((entry) => !used.has(entry.path));
    if (match) {
      used.add(match.path);
    }
    return match ?? null;
  };

  const logo = takeByKeywords(["logo", "mark", "brand"]);
  const hero =
    takeByKeywords(["hero", "cover", "front", "main", "clinic"]) ?? takeNext();
  const trust =
    takeByKeywords(["certificate", "award", "about", "trust", "doctor"]) ??
    takeNext();

  return {
    logo: logo?.src ?? null,
    hero: hero?.src ?? null,
    trust: trust?.src ?? null,
    gallery: entries
      .filter(
        (entry) =>
          !used.has(entry.path) && getAssetBaseName(entry.name).startsWith("gallery-"),
      )
      .map((entry) => entry.src),
  };
}

function normalizeAssetEntries(entries) {
  const formatPriority = ["jpg", "jpeg", "webp", "avif", "png", "svg"];
  const preferred = new Map();

  for (const entry of entries) {
    const baseName = getAssetBaseName(entry.name);
    const extension = getAssetExtension(entry.name);
    const current = preferred.get(baseName);

    if (!current) {
      preferred.set(baseName, entry);
      continue;
    }

    const currentRank = formatPriority.indexOf(getAssetExtension(current.name));
    const nextRank = formatPriority.indexOf(extension);

    if (nextRank !== -1 && (currentRank === -1 || nextRank < currentRank)) {
      preferred.set(baseName, entry);
    }
  }

  return Array.from(preferred.values()).sort((left, right) =>
    left.name.localeCompare(right.name),
  );
}

function getAssetBaseName(name) {
  return name.replace(/\.[^.]+$/, "");
}

function getAssetExtension(name) {
  return name.split(".").pop().toLowerCase();
}

function getActionLinks() {
  const hasPhone = Boolean(clinicConfig.phoneHref);
  const hasWhatsapp = Boolean(clinicConfig.whatsappNumber);

  return {
    callHref: hasPhone ? clinicConfig.phoneHref : "#contact",
    whatsappHref: hasWhatsapp
      ? `https://wa.me/${clinicConfig.whatsappNumber}`
      : "#contact",
    hasPhone,
    hasWhatsapp,
  };
}

function normalizePhoneNumber(value) {
  return String(value || "").replace(/[^\d+]/g, "");
}

function buildWhatsappHref(phoneNumber, message = "") {
  const normalized = normalizePhoneNumber(phoneNumber).replace(/^\+/, "");
  const base = `https://wa.me/${normalized}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function validateConsultationForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.service.trim()) {
    errors.service = "Please choose a service.";
  }

  if (!values.problemArea.trim()) {
    errors.problemArea = "Please mention the pain area or problem.";
  }

  if (!values.message.trim()) {
    errors.message = "Please share a short message.";
  }

  return errors;
}

function validatePopupForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  return errors;
}

function buildConsultationMessage(values, sourceLabel) {
  return [
    `${sourceLabel} for ${clinicConfig.name}`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Service: ${values.service}`,
    `Problem/Pain Area: ${values.problemArea}`,
    `Message: ${values.message}`,
  ].join("\n");
}

function getServiceMeta(title) {
  if (
    [
      "Back Pain",
      "Hip Pain",
      "Knee Pain",
      "Shoulder Pain",
      "Foot & Ankle Pain",
      "Arthritis Treatment",
      "Spinal Injuries",
    ].includes(title)
  ) {
    return {
      support:
        "Detailed assessment, pain-relief planning, mobility correction, and progressive strengthening are combined to improve comfort and restore confident daily movement.",
      focus: "Best for pain reduction, movement quality, and function recovery.",
    };
  }

  if (
    [
      "Neurological Physiotherapy",
      "Stroke",
      "Bell's Palsy",
      "Parkinson Disease",
      "Motor Neuron Disease",
      "Traumatic Brain Injury",
      "Cerebral Palsy",
      "Vestibular Rehabilitation",
    ].includes(title)
  ) {
    return {
      support:
        "Sessions focus on balance, coordination, movement retraining, posture control, and structured functional practice to support safer and more independent activity.",
      focus: "Designed for long-term rehab progress with patient and family guidance.",
    };
  }

  if (
    [
      "Post-surgical Rehabilitation",
      "Physical Therapy",
      "Therapeutic Exercise",
      "Balance Exercise Therapy",
      "Hydrotherapy Training",
    ].includes(title)
  ) {
    return {
      support:
        "Each plan is built around recovery milestones, monitored exercise progress, and careful loading so healing improves without creating avoidable strain.",
      focus: "Helpful for rebuilding strength, flexibility, stability, and confidence step by step.",
    };
  }

  if (
    [
      "Acupuncture",
      "Heat Therapy",
      "Cupping Therapy",
      "Hijama Therapy",
      "Dry Needling Therapy",
      "Passive Joint Mobilization",
    ].includes(title)
  ) {
    return {
      support:
        "These therapies are used as part of a broader treatment strategy to ease tightness, reduce pain sensitivity, improve circulation, and prepare the body for active rehab.",
      focus: "Often paired with hands-on care and exercise for better treatment response.",
    };
  }

  if (title === "Paediatric Physiotherapy") {
    return {
      support:
        "Treatment is adapted to the child's developmental stage, comfort, movement goals, and family priorities so therapy feels supportive, practical, and consistent.",
      focus: "Built around participation, mobility, posture, and confidence in everyday activity.",
    };
  }

  return {
    support:
      "Care begins with understanding the source of pain or limitation, then uses a focused combination of therapy, exercise, and recovery education to support lasting improvement.",
    focus: "Planned to improve pain relief, mobility, strength, and day-to-day function.",
  };
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  const [popupData, setPopupData] = useState(initialConsultationForm);
  const [formData, setFormData] = useState(initialConsultationForm);
  const [popupErrors, setPopupErrors] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
  const [popupSuccessMessage, setPopupSuccessMessage] = useState("");

  const actions = getActionLinks();

  useEffect(() => {
    const hasSeenPopup = window.sessionStorage.getItem("active-physio-popup-seen");

    if (!hasSeenPopup) {
      setIsPopupOpen(true);
      window.sessionStorage.setItem("active-physio-popup-seen", "true");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
    setFormErrors((current) => ({
      ...current,
      [name]: "",
    }));
    setFormSuccessMessage("");
  };

  const handlePopupChange = (event) => {
    const { name, value } = event.target;
    setPopupData((current) => ({
      ...current,
      [name]: value,
    }));
    setPopupErrors((current) => ({
      ...current,
      [name]: "",
    }));
    setPopupSuccessMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateConsultationForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      setSubmitted(false);
      setFormSuccessMessage("");
      return;
    }

    const message = buildConsultationMessage(formData, "Consultation request");
    setFormErrors({});
    setSubmitted(true);
    setFormSuccessMessage("Consultation request submitted successfully.");

    if (actions.hasWhatsapp) {
      window.open(
        buildWhatsappHref(clinicConfig.whatsappNumber, message),
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const handlePopupSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validatePopupForm(popupData);

    if (Object.keys(nextErrors).length > 0) {
      setPopupErrors(nextErrors);
      setPopupSubmitted(false);
      setPopupSuccessMessage("");
      return;
    }

    const message = buildConsultationMessage(
      {
        ...popupData,
        service: popupData.service || "Free Consultation",
        problemArea: popupData.problemArea || "Not provided",
        message: popupData.message || "Requested consultation support",
      },
      "Free consultation request",
    );
    setPopupErrors({});
    setPopupSubmitted(true);
    setPopupSuccessMessage("Free consultation request submitted successfully.");

    if (actions.hasWhatsapp) {
      window.open(
        buildWhatsappHref(clinicConfig.whatsappNumber, message),
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const openConsultationForm = (service) => {
    setPopupSubmitted(false);
    setPopupErrors({});
    setPopupSuccessMessage("");
    setIsPopupOpen(true);

    if (service) {
      setPopupData((current) => ({
        ...current,
        service,
      }));
    }
  };

  const openPopup = () => {
    openConsultationForm();
  };

  return (
    <div className="relative overflow-x-hidden text-slateink">
      <BackgroundAccents />
      <FirstVisitPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onOpen={openPopup}
        popupData={popupData}
        popupErrors={popupErrors}
        popupSubmitted={popupSubmitted}
        popupSuccessMessage={popupSuccessMessage}
        handlePopupChange={handlePopupChange}
        handlePopupSubmit={handlePopupSubmit}
        hasWhatsapp={actions.hasWhatsapp}
      />
      <Header
        actions={actions}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <HeroSection
          actions={actions}
          onOpenConsultation={openConsultationForm}
        />
        <AboutSection />
        <ServicesSection onOpenConsultation={openConsultationForm} />
        <ConditionsSection />
        <GallerySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactSection
          formData={formData}
          formErrors={formErrors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          submitted={submitted}
          formSuccessMessage={formSuccessMessage}
          hasWhatsapp={actions.hasWhatsapp}
        />
      </main>

      <FooterSection />
      <FloatingActions actions={actions} />
    </div>
  );
}

function BackgroundAccents() {
  return (
    <>
      <div className="pointer-events-none fixed left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-mint-200/70 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none fixed right-[-6rem] top-24 h-64 w-64 rounded-full bg-brand-100/80 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none fixed bottom-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-100/80 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
    </>
  );
}

function Header({ actions, isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-float backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            {imageAssignments.logo ? (
              <img
                src={imageAssignments.logo}
                alt={`${clinicConfig.shortName} logo`}
                className="h-11 w-11 rounded-2xl object-cover shadow-md"
              />
            ) : (
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-mint-500 text-white shadow-md">
                <HeartPulse className="h-5 w-5" />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-slateink">
                {clinicConfig.shortName}
              </p>
              <p className="text-xs text-brand-800/70">Physiotherapy & Rehab</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-900/80 transition hover:text-brand-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ActionButton
              href={actions.whatsappHref}
              icon={MessageCircle}
              label="WhatsApp"
              variant="soft"
            />
            <ActionButton
              href={actions.callHref}
              icon={Phone}
              label="Call Now"
              variant="solid"
            />
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-800 shadow-sm transition hover:bg-brand-50 lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 rounded-[1.6rem] border border-brand-100 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-brand-900/85 transition hover:bg-brand-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ActionButton
                    href={actions.whatsappHref}
                    icon={MessageCircle}
                    label="WhatsApp"
                    variant="soft"
                  />
                  <ActionButton
                    href={actions.callHref}
                    icon={Phone}
                    label="Call Now"
                    variant="solid"
                  />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

function HeroSection({ actions, onOpenConsultation }) {
  return (
    <section id="home" className="section-shell grid-bg px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/90 px-4 py-2 text-sm font-medium text-brand-800 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-mint-600" />
            {clinicConfig.eyebrow}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-semibold leading-tight text-slateink sm:text-5xl lg:text-[3.6rem]"
          >
            20+ Years of Trusted Physiotherapy & Rehab Care
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-lg leading-8 text-brand-900/75"
          >
            Premium physiotherapy in East Delhi for orthopaedic, neurological,
            post-surgical, and everyday pain conditions, delivered with
            thoughtful assessment and a calm clinic experience.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <ActionButton
              as="button"
              type="button"
              icon={CalendarDays}
              label="Book Free Consultation"
              variant="solid"
              large
              onClick={() => onOpenConsultation()}
            />
            <ActionButton
              href={actions.callHref}
              icon={Phone}
              label="Call Now"
              variant="ghost"
              large
            />
            <ActionButton
              href={buildWhatsappHref(
                clinicConfig.whatsappNumber,
                `Hello, I need WhatsApp support for physiotherapy treatment at ${clinicConfig.name}.`,
              )}
              icon={MessageCircle}
              label="WhatsApp Support"
              variant="soft"
              large
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-4 sm:grid-cols-3"
          >
            {statCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="panel p-4">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xl font-semibold text-slateink">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-brand-900/70">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-[2rem] bg-mint-200/80 blur-2xl sm:block" />
          <div className="absolute -bottom-4 right-6 hidden h-28 w-28 rounded-full bg-brand-100/80 blur-2xl sm:block" />
          <div className="panel relative overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-brand-100 via-white to-mint-100">
              <ImageOrPlaceholder
                src={imageAssignments.hero}
                alt="Clinic hero"
                className="aspect-[4/3] w-full object-cover"
                label="Place your main clinic image here"
                note="Suggested name: hero-main.jpg"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 hidden rounded-[1.5rem] border border-white/60 bg-white/86 p-4 shadow-float backdrop-blur-lg sm:block">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slateink">
                    Patient-first rehabilitation
                  </p>
                  <p className="mt-1 text-sm leading-6 text-brand-900/72">
                    Modern therapy plans, measured progress, and a reassuring
                    clinic environment from first visit to recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const aboutImage = aboutAwardImage || imageAssignments.trust;
  const featuredServices = [
    "Expert Physiotherapy",
    "Neuro Rehab Care",
    "Pain Relief Therapy",
    "Post-Injury Recovery",
  ];

  return (
    <SectionShell
      id="about"
      eyebrow="About the clinic"
      title="Experienced physiotherapy and neuro rehab care."
      copy="Pain relief, mobility support, and guided recovery in a calm clinical setting."
    >
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={fadeUp} className="panel overflow-hidden p-3">
          <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-white via-brand-50 to-mint-50">
            <ImageOrPlaceholder
              src={aboutImage}
              alt="Active Physiotherapy about section visual"
              className="aspect-[16/10] w-full object-cover object-center"
              label="Place about section image here"
              note="Suggested name: about-award.png"
            />
          </div>
        </motion.div>

        <motion.div variants={stagger} className="grid gap-4">
          <motion.div
            variants={fadeUp}
            className="panel bg-gradient-to-br from-white via-brand-50/60 to-cyan-50/70 p-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-mint-50 px-3 py-2 text-sm font-semibold text-mint-600">
              <BadgeCheck className="h-4 w-4" />
              About our care
            </div>
            <p className="max-w-xl text-base leading-7 text-brand-900/76">
              Personalized treatment support with advanced therapy and guided exercise.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="panel p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slateink">Services</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {featuredServices.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-brand-100 bg-gradient-to-r from-white to-brand-50 px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

function ServicesSection({ onOpenConsultation }) {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Comprehensive physiotherapy and rehabilitation care under one roof."
      copy="From everyday pain relief to post-surgical and neurological rehabilitation, treatment plans are designed to ease symptoms, improve movement, and support durable recovery."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          const meta = getServiceMeta(service.title);

          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group panel flex h-full flex-col p-5 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-mint-50 text-brand-700 transition group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slateink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-900/72">
                {service.description}
              </p>
              <p className="mt-3 text-sm leading-6 text-brand-900/68">
                {meta.support}
              </p>
              <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50/55 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700/78">
                  Service focus
                </p>
                <p className="mt-2 text-sm leading-6 text-brand-900/74">
                  {meta.focus}
                </p>
              </div>
              <div className="mt-auto pt-4">
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    onOpenConsultation(service.title);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                >
                  Request free consultation
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 rounded-[1.8rem] bg-gradient-to-r from-brand-800 via-brand-700 to-mint-600 p-6 text-white shadow-float"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Free Consultation Support
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Not sure which treatment fits your condition?
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/80">
              Share your symptoms, injury history, or recovery goal and get clearer direction on the right physiotherapy or rehab service before booking.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
            <ActionButton
              href="#contact"
              icon={CalendarDays}
              label="Claim Free Consultation"
              variant="solid"
              large
            />
            <ActionButton
              href={clinicConfig.phoneHref || "#contact"}
              icon={Phone}
              label="Talk to Clinic"
              variant="ghost"
              large
            />
            <ActionButton
              href={
                clinicConfig.whatsappNumber
                  ? `https://wa.me/${clinicConfig.whatsappNumber}`
                  : "#contact"
              }
              icon={MessageCircle}
              label="WhatsApp Us"
              variant="soft"
              large
            />
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}

function ConditionsSection() {
  return (
    <SectionShell
      id="conditions"
      eyebrow="We Treat"
      title="Focused care for pain, stiffness, weakness, and mobility limitations."
      copy="Whether the concern is chronic strain, joint pain, sports injury, or nerve-related weakness, the clinic approach stays practical, progressive, and patient-friendly."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]"
      >
        <motion.div variants={fadeUp} className="panel p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {conditions.map((condition) => (
              <div
                key={condition}
                className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-brand-50/45 px-4 py-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-700 shadow-sm">
                  <HeartPulse className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-brand-900/82">
                  {condition}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="panel p-6">
          <div className="rounded-[1.8rem] bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
              Recovery priorities
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Relief first. Strength next. Confidence throughout.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Whether the concern is chronic pain, sports injury, nerve-related
              weakness, or post-surgical stiffness, the site is designed to
              present the clinic as calm, capable, and clinically sharp.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Manual therapy",
                "Mobility restoration",
                "Strength progression",
                "Home exercise guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

function GallerySection() {
  const galleryImages = imageAssignments.gallery;

  return (
    <SectionShell
      id="gallery"
      eyebrow="Gallery"
      title="Real clinic visuals keep the site grounded, local, and trustworthy."
      copy="Treatment spaces, patient-care moments, equipment, and trusted clinic details help visitors feel familiar with the environment before they step in."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
      >
        {galleryImages.length > 0
          ? galleryImages.slice(0, 8).map((src, index) => (
              <motion.div
                key={`${src}-${index}`}
                variants={fadeUp}
                className={`overflow-hidden rounded-[1.8rem] ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  alt={`Clinic gallery ${index + 1}`}
                  className={`h-full w-full rounded-[1.8rem] object-cover shadow-float transition duration-500 hover:scale-[1.03] ${
                    index === 0 ? "aspect-[16/11]" : "aspect-[4/3]"
                  }`}
                />
              </motion.div>
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`placeholder-${index}`}
                variants={fadeUp}
                className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className="panel flex h-full min-h-[220px] items-center justify-center overflow-hidden p-6 text-center">
                  <div>
                    <p className="text-lg font-semibold text-slateink">
                      Gallery image slot {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-brand-900/72">
                      Add files like `gallery-1.jpg`, `gallery-2.jpg`, or
                      treatment photos inside `src/assets/clinic`.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
      </motion.div>
    </SectionShell>
  );
}

function WhyChooseSection() {
  return (
    <SectionShell
      id="why-choose"
      eyebrow="Why Choose Us"
      title="A premium care story built around trust, clarity, and measurable recovery."
      copy="Every touchpoint is positioned to reassure patients that their recovery will be structured, attentive, and guided with real clinical intent."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"
      >
        {whyChooseUs.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div key={item.title} variants={fadeUp} className="panel p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-mint-50 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slateink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-900/72">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}

function TestimonialsSection() {
  return (
    <SectionShell
      id="testimonials"
      eyebrow="Patient Experience"
      title="Review-style social proof that feels polished instead of template-like."
      copy="Strong rehabilitation experiences are often built on trust, patience, and consistency, and this section is designed to reflect that from the first glance."
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 lg:grid-cols-3"
      >
        {testimonials.map((item) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            className="panel flex h-full flex-col p-6"
          >
            <div className="mb-4 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={`${item.title}-${index}`} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slateink">{item.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-brand-900/75">
              “{item.quote}”
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <UserRoundCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slateink">{item.person}</p>
                <p className="text-sm text-brand-900/68">Verified feedback style</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}

function ContactSection({
  formData,
  formErrors,
  handleChange,
  handleSubmit,
  submitted,
  formSuccessMessage,
  hasWhatsapp,
}) {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact & Appointment"
      title="Make it easy for patients to reach out in the way they already prefer."
      copy="Quick appointment requests, clear clinic details, and familiar communication options help reduce friction for first-time visitors."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4"
        >
          <motion.div variants={fadeUp} className="panel p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700/80">
              Address
            </p>
            <p className="mt-3 text-base leading-7 text-brand-900/78">
              {clinicConfig.address}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="panel p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint-50 text-mint-600">
              <Clock3 className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700/80">
              Timing
            </p>
            <p className="mt-3 text-base leading-7 text-brand-900/78">
              {clinicConfig.hours}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[1.8rem] bg-gradient-to-br from-brand-800 to-brand-950 p-6 text-white shadow-float"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-white">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold">WhatsApp-ready form flow</h3>
            <p className="mt-3 text-sm leading-7 text-white/78">
              {hasWhatsapp
                ? "Submitting the form opens a pre-filled WhatsApp message for quick appointment handling."
                : "Direct WhatsApp booking can be activated by adding the clinic's live contact details before launch."}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {consultationBenefits.slice(0, 2).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/14 bg-white/10 px-3 py-2 text-xs font-semibold text-white/82"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="panel p-6 sm:p-7"
        >
          <div className="grid gap-4">
            <Field
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              error={formErrors.name}
            />
            <Field
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your mobile number"
              required
              error={formErrors.phone}
            />
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-brand-900/85">
              Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full rounded-2xl border bg-brand-50/35 px-4 py-3 text-brand-900 outline-none ring-0 transition focus:border-brand-300 focus:bg-white ${
                formErrors.service ? "border-rose-300 bg-rose-50/60" : "border-brand-100"
              }`}
            >
              {services.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {formErrors.service ? (
              <p className="mt-2 text-sm text-rose-600">{formErrors.service}</p>
            ) : null}
          </div>

          <div className="mt-4">
            <Field
              label="Problem / Pain Area"
              name="problemArea"
              value={formData.problemArea}
              onChange={handleChange}
              placeholder="For example: knee pain, back pain, stiffness, post-surgery rehab"
              required
              error={formErrors.problemArea}
            />
          </div>

          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-brand-900/85">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the pain, condition, or treatment you need."
              className={`w-full rounded-2xl border bg-brand-50/35 px-4 py-3 text-brand-900 outline-none ring-0 transition focus:border-brand-300 focus:bg-white ${
                formErrors.message ? "border-rose-300 bg-rose-50/60" : "border-brand-100"
              }`}
            />
            {formErrors.message ? (
              <p className="mt-2 text-sm text-rose-600">{formErrors.message}</p>
            ) : null}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <ActionButton
              as="button"
              type="submit"
              icon={ArrowRight}
              label="Request Free Consultation"
              variant="solid"
              large
            />
            <p className="text-sm leading-6 text-brand-900/68">
              Quick response setup for mobile visitors and WhatsApp-first leads.
            </p>
          </div>

          {submitted ? (
            <div className="mt-5 rounded-2xl border border-mint-200 bg-mint-50 px-4 py-3 text-sm leading-6 text-mint-600">
              {formSuccessMessage}{" "}
              {hasWhatsapp
                ? "A WhatsApp draft should open in a new tab."
                : "Clinic WhatsApp can be updated anytime from the site config."}
            </div>
          ) : null}
        </motion.form>
      </div>
    </SectionShell>
  );
}

function FooterSection() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/65 bg-white/80 px-6 py-6 shadow-float backdrop-blur-xl sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-semibold text-slateink">
              {clinicConfig.name}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-brand-900/72">
              Premium physiotherapy, rehabilitation, and recovery-focused care
              for patients looking for clarity, comfort, and measurable progress.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-brand-900/76 sm:grid-cols-2 lg:text-right">
            <div>
              <p className="font-semibold text-slateink">Address</p>
              <p className="mt-1 leading-6">{clinicConfig.address}</p>
            </div>
            <div>
              <p className="font-semibold text-slateink">Explore</p>
              <div className="mt-1 flex flex-wrap gap-3 lg:justify-end">
                {navigation.slice(1, 6).map((item) => (
                  <a key={item.href} href={item.href} className="hover:text-brand-700">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionShell({ id, eyebrow, title, copy, children }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      className="section-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
    >
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700/80">
          {eyebrow}
        </p>
        <h2 className="section-title mt-3">{title}</h2>
        <p className="section-copy mt-4">{copy}</p>
      </div>
      {children}
    </motion.section>
  );
}

function Field({ label, error, compact = false, ...props }) {
  return (
    <label>
      <span
        className={`block font-semibold text-brand-900/85 ${
          compact ? "mb-1.5 text-[0.82rem]" : "mb-2 text-sm"
        }`}
      >
        {label}
      </span>
      <input
        {...props}
        className={`w-full rounded-2xl border bg-brand-50/35 text-brand-900 outline-none ring-0 transition focus:border-brand-300 focus:bg-white ${
          compact ? "px-4 py-2.5 text-sm" : "px-4 py-3"
        } ${
          error ? "border-rose-300 bg-rose-50/60" : "border-brand-100"
        }`}
      />
      {error ? (
        <span className={`block text-rose-600 ${compact ? "mt-1 text-xs" : "mt-2 text-sm"}`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

function FirstVisitPopup({
  isOpen,
  onClose,
  onOpen,
  popupData,
  popupErrors,
  popupSubmitted,
  popupSuccessMessage,
  handlePopupChange,
  handlePopupSubmit,
  hasWhatsapp,
}) {
  return (
    <>
      <div className="fixed bottom-4 left-4 z-40">
        <button
          type="button"
          onClick={onOpen}
          className="group relative overflow-hidden rounded-[1.7rem] border border-white/60 bg-white/88 px-4 py-3 text-left shadow-lift backdrop-blur-xl transition hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(82,180,239,0.16),_transparent_40%),linear-gradient(135deg,_rgba(239,255,249,0.8),_rgba(255,255,255,0.95))]" />
          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 via-brand-600 to-mint-500 text-white shadow-float">
              <CalendarDays className="h-5 w-5" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-mint-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-mint-700">
                <span className="h-2 w-2 rounded-full bg-mint-500" />
                Free Consultation
              </div>
              <p className="mt-2 text-sm font-semibold text-slateink">
                Talk to our rehab team
              </p>
              <p className="text-xs text-brand-900/68">
                Quick support for pain, injury, and recovery questions
              </p>
            </div>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-slate-950/45 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-4 sm:py-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              className="soft-outline relative flex h-[458px] w-full max-w-[372px] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(240,255,251,0.98),_rgba(255,255,255,0.98)_38%,_rgba(238,247,255,0.98)_100%)] px-4 py-4 shadow-[0_26px_70px_-28px_rgba(19,56,104,0.42)] sm:h-[487px] sm:max-w-[410px] sm:px-5 sm:py-5"
            >
              <button
                type="button"
                aria-label="Close popup"
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-100 bg-white/95 text-brand-800 shadow-sm transition hover:bg-brand-50"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="pr-12">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(180deg,_#f0fffb,_#dffff6)] px-3 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-mint-600 shadow-sm">
                    <CalendarDays className="h-3.5 w-3.5" />
                    Free Consultation
                  </div>
                  <h3 className="mt-3 text-[1.45rem] font-semibold leading-[1.05] tracking-[-0.03em] text-brand-800">
                    Book Your{" "}
                    <span className="bg-gradient-to-r from-brand-600 to-mint-500 bg-clip-text text-transparent">
                      Free Consultation
                    </span>
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-5 text-brand-900/74">
                    Share your details to get quick guidance on the right physiotherapy support.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                    {consultationBenefits.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-mint-200 bg-mint-50 text-mint-600">
                          <BadgeCheck className="h-3 w-3" />
                        </span>
                        <span className="text-[0.78rem] leading-4 text-brand-900/82">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <form onSubmit={handlePopupSubmit} className="mt-4 grid gap-3">
                <Field
                  label="Name"
                  name="name"
                  value={popupData.name}
                  onChange={handlePopupChange}
                  placeholder="Enter your name"
                  required
                  compact
                  error={popupErrors.name}
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  value={popupData.phone}
                  onChange={handlePopupChange}
                  placeholder="Enter your mobile number"
                  inputMode="tel"
                  required
                  compact
                  error={popupErrors.phone}
                />

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-700 via-brand-600 to-mint-500 px-5 py-3 text-[0.92rem] font-semibold text-white shadow-float transition hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-4 w-4" />
                  Request Free Consultation
                </button>
              </form>

              {popupSubmitted ? (
                <div className="mt-3 rounded-2xl border border-mint-200 bg-mint-50 px-3.5 py-2.5 text-[0.8rem] leading-5 text-mint-700">
                  {popupSuccessMessage}{" "}
                  {hasWhatsapp
                    ? "A WhatsApp draft should open for quick follow-up."
                    : "Clinic WhatsApp can be updated anytime from the site config."}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function ActionButton({
  href,
  icon: Icon,
  label,
  variant = "solid",
  large = false,
  as = "a",
  type = "button",
  onClick,
  block = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300";
  const sizeStyles = large ? "px-6 py-3.5 text-sm" : "px-5 py-3 text-sm";
  const widthStyles = block ? "w-full" : "";
  const variantStyles = {
    solid:
      "bg-gradient-to-r from-brand-700 via-brand-600 to-mint-500 text-white shadow-float hover:-translate-y-0.5",
    soft: "border border-brand-100 bg-brand-50 text-brand-800 hover:bg-brand-100",
    ghost:
      "border border-brand-200 bg-white/80 text-brand-800 shadow-sm hover:bg-brand-50",
    white:
      "bg-white text-brand-800 shadow-float hover:-translate-y-0.5 hover:bg-cyan-50",
    glass:
      "border border-white/18 bg-white/10 text-white shadow-float hover:-translate-y-0.5 hover:bg-white/16",
    blue:
      "bg-gradient-to-r from-brand-800 via-brand-700 to-brand-600 text-white shadow-float hover:-translate-y-0.5",
    whatsapp:
      "bg-gradient-to-r from-[#12c979] via-[#1dbf73] to-mint-500 text-white shadow-float hover:-translate-y-0.5",
  };

  const classes = `${baseStyles} ${sizeStyles} ${widthStyles} ${variantStyles[variant]}`;

  if (as === "button") {
    return (
      <button type={type} className={classes} onClick={onClick}>
        <Icon className="h-4 w-4" />
        {label}
      </button>
    );
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function ImageOrPlaceholder({ src, alt, className, label, note }) {
  if (src) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div
      className={`grid place-items-center bg-[radial-gradient(circle_at_top,_rgba(82,180,239,0.18),_transparent_48%),linear-gradient(135deg,_rgba(239,255,249,0.9),_rgba(255,255,255,1))] p-8 text-center ${className}`}
    >
      <div>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-md">
          <ImageMarker />
        </div>
        <p className="mt-4 text-lg font-semibold text-slateink">{label}</p>
        <p className="mt-2 text-sm leading-6 text-brand-900/72">{note}</p>
      </div>
    </div>
  );
}

function ImageMarker() {
  return <Sparkles className="h-5 w-5" />;
}

function FloatingActions({ actions }) {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a
        href={actions.whatsappHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition hover:-translate-y-0.5"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={actions.callHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-float transition hover:-translate-y-0.5"
        aria-label="Call now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;
