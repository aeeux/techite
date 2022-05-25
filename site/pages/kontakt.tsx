import ContactForm from '@components/contact/ContactForm'
import { Layout } from '@components/common'

export default function Contact() {
  return (
    <div className="mx-auto">
      <ContactForm />
    </div>
  )
}

Contact.Layout = Layout
