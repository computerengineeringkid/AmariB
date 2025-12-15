import { Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'

/**
 * Contact Page - SIP410 Boards Compliant
 * Uses LinkedIn for professional contact (no personal phone/email displayed)
 */
const Contact = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="mt-4 text-slate-400">
          Interested in connecting? Reach out through LinkedIn for professional inquiries.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl md:p-12">
        {/* LinkedIn CTA */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-blue-500/10 text-blue-400 mb-6">
            <MessageCircle size={40} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>

          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities, collaborations,
            or answering questions about my work.
          </p>

          <a
            href="https://www.linkedin.com/in/amari-b-ab932b176/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <Linkedin size={24} />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/5 p-6 text-center">
              <div className="text-sm font-medium text-slate-400 mb-1">Location</div>
              <div className="text-white">Las Vegas, Nevada</div>
            </div>
            <div className="rounded-xl bg-white/5 p-6 text-center">
              <div className="text-sm font-medium text-slate-400 mb-1">Availability</div>
              <div className="text-white">Open to Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
