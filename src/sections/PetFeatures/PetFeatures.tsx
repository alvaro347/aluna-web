import { useState, type ReactNode } from 'react'
import {
  HeartPulse,
  Pill,
  Bell,
  Calendar,
  Users,
  ClipboardList,
  Check,
  MapPin,
  FileText,
  Dog,
  Cat,
  Rabbit,
  Bone,
  Stethoscope,
  Footprints,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '@/components/Section/Section'
import { IconCircle } from '@/components/IconCircle/IconCircle'
import './PetFeatures.css'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  mockup: () => ReactNode
}

function HealthMockup() {
  const data = [
    { day: 'Mon', value: 62 },
    { day: 'Tue', value: 65 },
    { day: 'Wed', value: 60 },
    { day: 'Thu', value: 68 },
    { day: 'Fri', value: 64 },
    { day: 'Sat', value: 70 },
    { day: 'Sun', value: 67 },
  ]
  const max = 80
  return (
    <div className="mockup-health">
      <div className="mockup-health__header">
        <span className="mockup-health__label">Heart Rate</span>
        <span className="mockup-health__value">67 <small>bpm</small></span>
      </div>
      <div className="mockup-health__chart">
        {data.map((d) => (
          <div key={d.day} className="mockup-health__bar-group">
            <div className="mockup-health__bar-track">
              <div
                className="mockup-health__bar"
                style={{ height: `${(d.value / max) * 100}%` }}
              />
            </div>
            <span className="mockup-health__day">{d.day}</span>
          </div>
        ))}
      </div>
      <div className="mockup-health__stats">
        <div className="mockup-health__stat">
          <span className="mockup-health__stat-num">24.5</span>
          <span className="mockup-health__stat-label">kg</span>
        </div>
        <div className="mockup-health__stat">
          <span className="mockup-health__stat-num">36.8</span>
          <span className="mockup-health__stat-label">&deg;C</span>
        </div>
        <div className="mockup-health__stat">
          <span className="mockup-health__stat-num">18</span>
          <span className="mockup-health__stat-label">breaths/m</span>
        </div>
      </div>
    </div>
  )
}

function MedsMockup() {
  const meds = [
    { name: 'Apoquel 16mg', time: '8:00 AM', done: true },
    { name: 'Omega-3 Fish Oil', time: '8:00 AM', done: true },
    { name: 'Apoquel 16mg', time: '8:00 PM', done: false },
    { name: 'Heartgard Plus', time: 'Mar 15', done: false },
  ]
  return (
    <div className="mockup-meds">
      <div className="mockup-meds__title">Today's Medications</div>
      {meds.map((m, i) => (
        <div key={i} className={`mockup-meds__item ${m.done ? 'mockup-meds__item--done' : ''}`}>
          <div className={`mockup-meds__check ${m.done ? 'mockup-meds__check--done' : ''}`}>
            {m.done && <Check size={12} />}
          </div>
          <div className="mockup-meds__info">
            <span className="mockup-meds__name">{m.name}</span>
            <span className="mockup-meds__time">{m.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function RemindersMockup() {
  const reminders: { text: string; time: string; Icon: LucideIcon }[] = [
    { text: 'Morning walk with Luna', time: '7:30 AM', Icon: Footprints },
    { text: 'Feeding time', time: '12:00 PM', Icon: Bone },
    { text: 'Apoquel evening dose', time: '8:00 PM', Icon: Pill },
    { text: 'Vet checkup', time: 'Tomorrow', Icon: Stethoscope },
  ]
  return (
    <div className="mockup-reminders">
      {reminders.map((r, i) => (
        <div key={i} className="mockup-reminders__item">
          <span className="mockup-reminders__icon">
            <r.Icon size={18} strokeWidth={2} />
          </span>
          <div className="mockup-reminders__info">
            <span className="mockup-reminders__text">{r.text}</span>
            <span className="mockup-reminders__time">{r.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function BookingMockup() {
  const pins = [
    { top: '25%', left: '35%', name: 'City Vet' },
    { top: '45%', left: '60%', name: 'PawCare Clinic' },
    { top: '65%', left: '30%', name: 'Animal Hospital' },
  ]
  return (
    <div className="mockup-booking">
      <div className="mockup-booking__map">
        <div className="mockup-booking__map-bg" />
        {pins.map((pin) => (
          <div
            key={pin.name}
            className="mockup-booking__pin"
            style={{ top: pin.top, left: pin.left }}
          >
            <MapPin size={16} />
          </div>
        ))}
      </div>
      <div className="mockup-booking__card">
        <span className="mockup-booking__clinic">PawCare Clinic</span>
        <span className="mockup-booking__dist">0.8 km away</span>
        <div className="mockup-booking__slots">
          <span className="mockup-booking__slot">9:00</span>
          <span className="mockup-booking__slot">10:30</span>
          <span className="mockup-booking__slot mockup-booking__slot--selected">14:00</span>
        </div>
      </div>
    </div>
  )
}

function MultiPetMockup() {
  const pets: { name: string; breed: string; Icon: LucideIcon; active: boolean }[] = [
    { name: 'Luna', breed: 'Golden Retriever', Icon: Dog, active: true },
    { name: 'Milo', breed: 'British Shorthair', Icon: Cat, active: false },
    { name: 'Coco', breed: 'Mini Lop', Icon: Rabbit, active: false },
  ]
  return (
    <div className="mockup-pets">
      <div className="mockup-pets__tabs">
        {pets.map((p) => (
          <div key={p.name} className={`mockup-pets__tab ${p.active ? 'mockup-pets__tab--active' : ''}`}>
            <span className="mockup-pets__icon">
              <p.Icon size={14} strokeWidth={2} />
            </span>
            <span className="mockup-pets__tab-name">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="mockup-pets__profile">
        <div className="mockup-pets__avatar">
          <Dog size={26} strokeWidth={1.8} />
        </div>
        <div className="mockup-pets__details">
          <span className="mockup-pets__name">Luna</span>
          <span className="mockup-pets__breed">Golden Retriever, 3 yrs</span>
          <div className="mockup-pets__tags">
            <span className="mockup-pets__tag">24.5 kg</span>
            <span className="mockup-pets__tag">Spayed</span>
            <span className="mockup-pets__tag">Microchipped</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function HistoryMockup() {
  const entries = [
    { date: 'Mar 10', text: 'Annual vaccination (DHPP)', type: 'vaccine' },
    { date: 'Feb 22', text: 'Weight check: 24.5 kg', type: 'checkup' },
    { date: 'Jan 15', text: 'Dental cleaning', type: 'procedure' },
    { date: 'Dec 03', text: 'Skin allergy — Apoquel prescribed', type: 'visit' },
  ]
  return (
    <div className="mockup-history">
      <div className="mockup-history__actions">
        <FileText size={14} />
        <span>Export PDF</span>
      </div>
      {entries.map((e, i) => (
        <div key={i} className="mockup-history__item">
          <div className="mockup-history__dot" />
          {i < entries.length - 1 && <div className="mockup-history__line" />}
          <div className="mockup-history__content">
            <span className="mockup-history__date">{e.date}</span>
            <span className="mockup-history__text">{e.text}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

const FEATURES: Feature[] = [
  {
    icon: HeartPulse,
    title: 'Health Tracking',
    description:
      'Track weight, vitals, activity, nutrition, sleep, and symptoms across 11 categories with trend charts.',
    mockup: HealthMockup,
  },
  {
    icon: Pill,
    title: 'Medications & Vaccines',
    description:
      'Log doses, track vaccination schedules, and never miss a refill.',
    mockup: MedsMockup,
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description:
      'Feeding times, walks, medications, grooming, vet visits — set it and forget it.',
    mockup: RemindersMockup,
  },
  {
    icon: Calendar,
    title: 'Vet Booking',
    description:
      'Find nearby vets on a map, see available slots, and book appointments in seconds.',
    mockup: BookingMockup,
  },
  {
    icon: Users,
    title: 'Multi-Pet Profiles',
    description:
      'Manage all your pets in one place with individual health timelines.',
    mockup: MultiPetMockup,
  },
  {
    icon: ClipboardList,
    title: 'Medical History',
    description:
      'Full medical records, exportable as PDF to share with any vet.',
    mockup: HistoryMockup,
  },
]

export function PetFeatures() {
  const [active, setActive] = useState(0)
  const feature = FEATURES[active]!

  return (
    <Section
      id="features"
      title="Everything your pet needs"
      subtitle="Comprehensive health tracking inspired by the best human health apps, designed for your furry family members."
      variant="alt"
    >
      <div className="pet-features">
        <div className="pet-features__tabs" role="tablist">
          {FEATURES.map((f, i) => (
            <button
              key={f.title}
              role="tab"
              aria-selected={i === active}
              className={`pet-features__tab ${i === active ? 'pet-features__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <IconCircle icon={f.icon} size="sm" />
              <div className="pet-features__tab-text">
                <span className="pet-features__tab-title">{f.title}</span>
                <span className="pet-features__tab-desc">{f.description}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="pet-features__preview" role="tabpanel">
          <div className="pet-features__phone">
            <div className="pet-features__phone-notch" />
            <div className="pet-features__phone-title">{feature.title}</div>
            <div className="pet-features__phone-body">
              <feature.mockup />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
