import { useState, type ReactNode } from 'react'
import {
  Calendar,
  ClipboardList,
  Receipt,
  Package,
  Pill,
  BarChart3,
  AlertTriangle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Section } from '@/components/Section/Section'
import { IconCircle } from '@/components/IconCircle/IconCircle'
import './VetFeatures.css'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  mockup: () => ReactNode
}

function AppointmentsMockup() {
  const hours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00']
  const slots = [
    { hour: 0, col: 1, label: 'Luna — Checkup', color: 'var(--color-primary)' },
    { hour: 1, col: 2, label: 'Milo — Vaccine', color: '#8D7CC0' },
    { hour: 2, col: 1, label: 'Buddy — Dental', color: '#E58A6F' },
    { hour: 3, col: 3, label: 'Lunch', color: 'var(--color-text-muted)' },
    { hour: 4, col: 1, label: 'Coco — Follow-up', color: '#3498DB' },
    { hour: 4, col: 2, label: 'Max — Skin', color: 'var(--color-primary)' },
  ]
  return (
    <div className="mockup-appt">
      <div className="mockup-appt__header">
        <span className="mockup-appt__day">Today</span>
        <div className="mockup-appt__cols">
          <span>Dr. Smith</span>
          <span>Dr. Lee</span>
          <span>Dr. Patel</span>
        </div>
      </div>
      <div className="mockup-appt__grid">
        {hours.map((h, i) => (
          <div key={h} className="mockup-appt__row">
            <span className="mockup-appt__time">{h}</span>
            <div className="mockup-appt__cells">
              {[1, 2, 3].map((col) => {
                const slot = slots.find((s) => s.hour === i && s.col === col)
                return (
                  <div key={col} className="mockup-appt__cell">
                    {slot && (
                      <div
                        className="mockup-appt__slot"
                        style={{ borderLeftColor: slot.color }}
                      >
                        {slot.label}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SoapMockup() {
  return (
    <div className="mockup-soap">
      <div className="mockup-soap__patient">
        <span>Patient: <strong>Luna</strong></span>
        <span className="mockup-soap__date">Mar 10, 2026</span>
      </div>
      {['Subjective', 'Objective', 'Assessment', 'Plan'].map((section) => (
        <div key={section} className="mockup-soap__section">
          <span className="mockup-soap__label">{section.charAt(0)}</span>
          <div className="mockup-soap__field">
            {section === 'Subjective' && 'Owner reports decreased appetite for 3 days, occasional vomiting...'}
            {section === 'Objective' && 'T: 38.9°C, HR: 80, RR: 20, BCS 5/9, abdomen mildly tense...'}
            {section === 'Assessment' && 'Suspected dietary indiscretion, rule out foreign body...'}
            {section === 'Plan' && 'Abdominal radiographs, CBC/chem panel, bland diet trial...'}
          </div>
        </div>
      ))}
    </div>
  )
}

function BillingMockup() {
  const items = [
    { name: 'Consultation', qty: 1, price: 65.00 },
    { name: 'Abdominal X-Ray', qty: 2, price: 45.00 },
    { name: 'CBC Panel', qty: 1, price: 85.00 },
    { name: 'Cerenia 24mg', qty: 3, price: 12.50 },
  ]
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)
  return (
    <div className="mockup-billing">
      <div className="mockup-billing__header">
        <span>Invoice #1042</span>
        <span className="mockup-billing__status">Unpaid</span>
      </div>
      <div className="mockup-billing__table">
        {items.map((item, i) => (
          <div key={i} className="mockup-billing__row">
            <span className="mockup-billing__item">{item.name}</span>
            <span className="mockup-billing__qty">&times;{item.qty}</span>
            <span className="mockup-billing__price">${(item.qty * item.price).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="mockup-billing__total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

function InventoryMockup() {
  const items = [
    { name: 'Apoquel 16mg', stock: 142, status: 'ok' },
    { name: 'Cerenia 24mg', stock: 18, status: 'low' },
    { name: 'DHPP Vaccine', stock: 45, status: 'ok' },
    { name: 'Meloxicam 1.5mg/ml', stock: 6, status: 'critical' },
  ]
  return (
    <div className="mockup-inventory">
      <div className="mockup-inventory__header">
        <span>Item</span>
        <span>Stock</span>
        <span>Status</span>
      </div>
      {items.map((item) => (
        <div key={item.name} className="mockup-inventory__row">
          <span className="mockup-inventory__name">{item.name}</span>
          <span className="mockup-inventory__stock">{item.stock}</span>
          <span className={`mockup-inventory__badge mockup-inventory__badge--${item.status}`}>
            {item.status === 'critical' && <AlertTriangle size={10} />}
            {item.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function PrescribingMockup() {
  return (
    <div className="mockup-rx">
      <div className="mockup-rx__header">New Prescription</div>
      <div className="mockup-rx__field">
        <span className="mockup-rx__label">Patient</span>
        <span className="mockup-rx__value">Luna (Golden Retriever)</span>
      </div>
      <div className="mockup-rx__field">
        <span className="mockup-rx__label">Medication</span>
        <span className="mockup-rx__value">Apoquel 16mg</span>
      </div>
      <div className="mockup-rx__row">
        <div className="mockup-rx__field">
          <span className="mockup-rx__label">Dose</span>
          <span className="mockup-rx__value">1 tablet</span>
        </div>
        <div className="mockup-rx__field">
          <span className="mockup-rx__label">Frequency</span>
          <span className="mockup-rx__value">Twice daily</span>
        </div>
      </div>
      <div className="mockup-rx__field">
        <span className="mockup-rx__label">Duration</span>
        <span className="mockup-rx__value">14 days (28 tablets)</span>
      </div>
      <div className="mockup-rx__field">
        <span className="mockup-rx__label">Refills</span>
        <span className="mockup-rx__value">2 remaining</span>
      </div>
    </div>
  )
}

function ReportsMockup() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const values = [42, 38, 55, 48, 62, 58]
  const max = 70
  return (
    <div className="mockup-reports">
      <div className="mockup-reports__kpis">
        <div className="mockup-reports__kpi">
          <span className="mockup-reports__kpi-num">312</span>
          <span className="mockup-reports__kpi-label">Visits this month</span>
        </div>
        <div className="mockup-reports__kpi">
          <span className="mockup-reports__kpi-num">$48.2k</span>
          <span className="mockup-reports__kpi-label">Revenue</span>
        </div>
      </div>
      <div className="mockup-reports__chart">
        {months.map((m, i) => (
          <div key={m} className="mockup-reports__col">
            <div className="mockup-reports__bar-track">
              <div
                className="mockup-reports__bar"
                style={{ height: `${(values[i]! / max) * 100}%` }}
              />
            </div>
            <span className="mockup-reports__month">{m}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const FEATURES: Feature[] = [
  {
    icon: Calendar,
    title: 'Appointments',
    description:
      'Day, week, and month views with drag-to-reschedule and walk-in handling.',
    mockup: AppointmentsMockup,
  },
  {
    icon: ClipboardList,
    title: 'SOAP Notes',
    description:
      'Structured consult notes linked directly to patient records.',
    mockup: SoapMockup,
  },
  {
    icon: Receipt,
    title: 'Billing & Invoicing',
    description:
      'Itemised invoices tied to visits with payment status tracking.',
    mockup: BillingMockup,
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description:
      'Track medications, vaccines, and supplies with reorder alerts.',
    mockup: InventoryMockup,
  },
  {
    icon: Pill,
    title: 'E-Prescribing',
    description:
      'Digital prescriptions with dose tracking and refill management.',
    mockup: PrescribingMockup,
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description:
      'Revenue, patient visits, and vaccination coverage at a glance.',
    mockup: ReportsMockup,
  },
]

export function VetFeatures() {
  const [active, setActive] = useState(0)
  const feature = FEATURES[active]!

  return (
    <Section
      id="vets"
      title="Built for modern vet practices"
      subtitle="A complete practice management platform that connects you directly with pet owners."
    >
      <div className="vet-features">
        <div className="vet-features__preview" role="tabpanel">
          <div className="vet-features__dashboard">
            <div className="vet-features__dashboard-bar">
              <div className="vet-features__dashboard-dots">
                <span /><span /><span />
              </div>
              <span className="vet-features__dashboard-title">{feature.title}</span>
            </div>
            <div className="vet-features__dashboard-body">
              <feature.mockup />
            </div>
          </div>
        </div>

        <div className="vet-features__tabs" role="tablist">
          {FEATURES.map((f, i) => (
            <button
              key={f.title}
              role="tab"
              aria-selected={i === active}
              className={`vet-features__tab ${i === active ? 'vet-features__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <IconCircle icon={f.icon} size="sm" />
              <div className="vet-features__tab-text">
                <span className="vet-features__tab-title">{f.title}</span>
                <span className="vet-features__tab-desc">{f.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}
