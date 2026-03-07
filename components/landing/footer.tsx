import { Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "#", label: "Email" }
]

const footerLinks = [
  {
    title: "Producto",
    links: ["Características", "Demo", "Precios", "FAQ"]
  },
  {
    title: "Recursos",
    links: ["Blog", "Guías", "Comunidad", "Soporte"]
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Cookies"]
  }
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EntreNosotras</span>
            </div>
            <p className="text-card/70 mb-6 max-w-sm leading-relaxed">
              Un espacio seguro para aprender sobre salud menstrual y reproductiva. 
              Información confiable, sin tabúes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-card/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-card/70 hover:text-primary transition-colors"
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
        <div className="border-t border-card/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/60 text-sm">
            © 2024 EntreNosotras. Todos los derechos reservados.
          </p>
          <p className="text-card/60 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> para mujeres
          </p>
        </div>
      </div>
    </footer>
  )
}
