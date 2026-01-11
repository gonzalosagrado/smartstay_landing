import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Zap, Shield, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SS</span>
            </div>
            <span className="font-semibold text-lg">Smart Stay</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900">
              Características
            </Link>
            <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Precios
            </Link>
            <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
              Iniciar Sesión
            </Link>
            <Button asChild>
              <Link href="/signup">Empezar Gratis</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">
            Portal Digital para Hoteles en <span className="text-blue-600">Bariloche</span>
          </h1>
          <p className="text-xl text-gray-600 text-pretty">
            Crea un portal inteligente para tus huéspedes con recomendaciones personalizadas según el clima. Sin apps,
            solo un QR code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/signup">Empezar Gratis</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Ver Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Todo lo que necesitas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-white">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Setup Instantáneo</h3>
            <p className="text-gray-600">Configura tu portal en minutos. Sin desarrollo, sin complicaciones.</p>
          </div>
          <div className="p-6 rounded-lg border bg-white">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clima en Tiempo Real</h3>
            <p className="text-gray-600">Recomendaciones automáticas basadas en el clima actual de Bariloche.</p>
          </div>
          <div className="p-6 rounded-lg border bg-white">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics Completo</h3>
            <p className="text-gray-600">Mide el engagement de tus huéspedes y optimiza tu servicio.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Precios Simples y Transparentes</h2>
        <p className="text-center text-gray-600 mb-12">Comienza gratis, actualiza cuando estés listo</p>
        <div className="max-w-lg mx-auto">
          <div className="p-8 rounded-2xl border-2 border-blue-600 bg-white shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Plan Pro</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-gray-600">/mes por hotel</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Portal personalizado</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Clima en tiempo real</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Links ilimitados</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Analytics completo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                <span>Soporte prioritario</span>
              </li>
            </ul>
            <Button className="w-full" size="lg" asChild>
              <Link href="/signup">Empezar Gratis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 Smart Stay Bariloche. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
