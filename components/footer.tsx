const footerLinks = {
  Services: ['Employee Dining', 'Corporate Events', 'Industrial Catering', 'Conference Meals', 'On-Site Catering'],
  Company: ['About Us', 'Our Team', 'Portfolio', 'Sustainability', 'Careers'],
  Contact: ['sales@corporatemeals.com', '+84 (912) 345-678', 'Ho Chi Minh City, Vietnam', 'Mon–Fri, 8am–6pm'],
}

const socials = ['Instagram', 'Facebook', 'LinkedIn', 'Pinterest']

export default function Footer() {
  return (
    <footer className="bg-blue-gray text-white/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-white font-semibold tracking-widest uppercase mb-4">
              Corporate <span className="text-primary italic font-light">Meals</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-pretty">
              Professional catering solutions for businesses across Vietnam.
              Reliable, quality meals every day since 2012.
            </p>
            <div className="flex gap-4 mt-8">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-wider uppercase hover:text-primary transition-colors"
                  aria-label={s}
                >
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white text-xs tracking-[0.25em] uppercase font-medium mb-6">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-primary transition-colors leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-xs">
          <p>&copy; {new Date().getFullYear()} Corporate Meals. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
