import { Star } from 'lucide-react'
import { Section } from '@/components/Section/Section'
import { Card } from '@/components/Card/Card'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Dog owner',
    rating: 5,
    text: 'Finally, an app that tracks everything about my golden retriever\'s health in one place. The vet booking feature is a game changer.',
    initials: 'SM',
    color: '#2E7D5B',
  },
  {
    name: 'Dr. James P.',
    role: 'Veterinarian',
    rating: 5,
    text: 'The practice management tools have streamlined our clinic workflow. SOAP notes and integrated billing save us hours each week.',
    initials: 'JP',
    color: '#9B59B6',
  },
  {
    name: 'Maria L.',
    role: 'Cat parent',
    rating: 5,
    text: 'I love the medication reminders. Managing three cats with different med schedules was a nightmare before Aluna.',
    initials: 'ML',
    color: '#E58A6F',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="testimonials__stars">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Loved by pet parents"
    >
      <div className="testimonials__grid">
        {TESTIMONIALS.map((t) => (
          <Card key={t.name} className="testimonials__card">
            <Stars count={t.rating} />
            <p className="testimonials__text">{t.text}</p>
            <div className="testimonials__author">
              <div
                className="testimonials__avatar"
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <div className="testimonials__name">{t.name}</div>
                <div className="testimonials__role">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="testimonials__trust">
        <div className="testimonials__trust-item">
          <strong>Android & iOS</strong>
          <span>Available on both platforms</span>
        </div>
        <div className="testimonials__trust-item">
          <strong>11 Categories</strong>
          <span>Comprehensive health tracking</span>
        </div>
        <div className="testimonials__trust-item">
          <strong>For Owners & Vets</strong>
          <span>One connected ecosystem</span>
        </div>
      </div>
    </Section>
  )
}
