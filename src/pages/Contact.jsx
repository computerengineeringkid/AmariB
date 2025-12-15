import { Linkedin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="mt-4 text-slate-400">
          Have a question or want to work together? Send me a message.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl md:p-12">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>

        <div className="mt-12 flex flex-col items-center justify-center border-t border-white/10 pt-8">
          <p className="mb-6 text-slate-400">Or connect professionally</p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-white transition hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
