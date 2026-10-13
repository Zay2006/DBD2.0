import { type FormEvent, useState } from 'react'
import { site } from '../data/site'

const audiences = [
  'School or district',
  'Nonprofit or organization',
  'Family',
  'Business',
  'Other',
]

const projects = [
  'Photography',
  'Film / video',
  'Classroom residency',
  'Story Driven / professional development',
  'Book or shop question',
  'Something else',
]

type InquiryFormProps = {
  heading?: string
}

export default function InquiryForm({ heading = 'Start a project' }: InquiryFormProps) {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const audience = String(data.get('audience') ?? '')
    const project = String(data.get('project') ?? '')
    const message = String(data.get('message') ?? '')
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Who: ${audience}`,
      `Project: ${project}`,
      '',
      message,
    ].join('\n')
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project inquiry — ${project || 'Driven by Design'}`,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success">
        <h2>Your email draft is open.</h2>
        <p>
          If nothing appeared, write directly to{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
          <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>{heading}</h2>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        I am a
        <select name="audience" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {audiences.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        I need
        <select name="project" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {projects.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Tell me about the story
        <textarea name="message" required />
      </label>
      <button className="btn" type="submit">
        Send inquiry
      </button>
    </form>
  )
}
