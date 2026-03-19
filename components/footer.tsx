const footerLinks = {
  Services: ['Wedding Catering', 'Corporate Events', 'Private Dining', 'Cocktail Receptions', 'Holiday Parties'],
  Company: ['About Us', 'Our Team', 'Portfolio', 'Blog', 'Press'],
  Contact: ['hello@thecaterers.co', '+1 (800) 000-0000', '12 Avenue du Luxe, Paris', 'Mon–Fri, 9am–6pm'],
}

const socials = ['Instagram', 'Facebook', 'LinkedIn', 'Pinterest']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-white font-semibold tracking-widest uppercase mb-4">
              The <span className="text-gold italic font-light">Caterers</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-pretty">
              Crafting extraordinary culinary experiences for life&apos;s most
              cherished moments since 2009.
            </p>
            <div className="flex gap-4 mt-8">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-wider uppercase hover:text-gold transition-colors"
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
                      className="text-sm hover:text-gold transition-colors leading-relaxed"
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
          <p>&copy; {new Date().getFullYear()} The Caterers. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
