'use client'

import { useEffect, useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function RomanticSite() {
  const [visiblePhrases, setVisiblePhrases] = useState<number[]>([])
  const [typewriterText, setTypewriterText] = useState('')
  
  const romanticPhrases = [
    "Você é a razão do meu sorriso todos os dias",
    "Nos seus olhos encontro meu lar",
    "Cada momento ao seu lado é um presente",
    "Você fez minha vida mais colorida",
    "Meu coração bate no ritmo do seu nome",
    "Com você, descobri o que é o amor verdadeiro"
  ]

  const loveLetterText = "Meu amor, desde o dia em que você entrou na minha vida, tudo mudou. Você trouxe luz onde havia escuridão, alegria onde havia tristeza, e amor onde eu nem sabia que precisava. Cada dia ao seu lado é uma nova aventura, uma nova razão para sorrir. Você é minha melhor amiga, minha companheira, minha alma gêmea. Te amo mais do que as palavras podem expressar, e prometo te amar para sempre. ❤️"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisiblePhrases(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.5 }
    )

    const phraseElements = document.querySelectorAll('.phrase-item')
    phraseElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const typewriter = () => {
      let i = 0
      const timer = setInterval(() => {
        if (i < loveLetterText.length) {
          setTypewriterText(loveLetterText.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 50)
    }

    const letterSection = document.getElementById('love-letter')
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          typewriter()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (letterSection) {
      observer.observe(letterSection)
    }

    return () => observer.disconnect()
  }, [])

  const couplePhotos = [
    { src: "/images/couple-1.jpeg", alt: "Nosso sorriso juntos", caption: "Momentos de felicidade" },
    { src: "/images/couple-2.jpeg", alt: "Selfie ao ar livre", caption: "Céu azul, amor infinito" },
    { src: "/images/couple-3.jpeg", alt: "Beijo na festa", caption: "Fogos de artifício do amor" },
    { src: "/images/couple-4.jpeg", alt: "Festa na praia", caption: "Noite mágica na praia" },
    { src: "/images/couple-5.jpeg", alt: "Momento carinhoso", caption: "Juntinhos para sempre" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-red-100 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-red-200 opacity-30 animate-pulse">
          <Heart size={20} fill="currentColor" />
        </div>
        <div className="absolute top-32 right-20 text-red-300 opacity-40 animate-pulse delay-1000">
          <Heart size={16} fill="currentColor" />
        </div>
        <div className="absolute bottom-40 left-16 text-red-400 opacity-35 animate-pulse delay-2000">
          <Heart size={24} fill="currentColor" />
        </div>
        <div className="absolute bottom-20 right-10 text-red-200 opacity-30 animate-pulse delay-500">
          <Heart size={18} fill="currentColor" />
        </div>
        <div className="absolute top-1/2 left-1/4 text-red-300 opacity-25 animate-pulse delay-1500">
          <Sparkles size={22} />
        </div>
        <div className="absolute top-1/3 right-1/3 text-red-200 opacity-30 animate-pulse delay-3000">
          <Sparkles size={18} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Heart className="mx-auto text-red-600 mb-6 animate-pulse" size={60} fill="currentColor" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-800 mb-6 animate-slide-up font-dancing">
            Para o Amor da Minha Vida
          </h1>
          
          <p className="text-xl md:text-2xl text-red-600 mb-8 animate-slide-up delay-300 font-script">
            Você é a melodia mais doce do meu coração
          </p>
          
          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-red-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-red-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Phrases Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 text-center mb-16 font-dancing">
            Palavras do Coração
          </h2>
          
          <div className="space-y-8">
            {romanticPhrases.map((phrase, index) => (
              <div
                key={index}
                data-index={index}
                className={`phrase-item text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-red-100 shadow-lg transition-all duration-1000 ${
                  visiblePhrases.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <p className="text-lg md:text-xl text-red-700 font-script italic">
                  "{phrase}"
                </p>
                <Heart className="mx-auto mt-4 text-red-400" size={20} fill="currentColor" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50/50 to-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 text-center mb-16 font-dancing">
            Nossos Momentos Especiais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {couplePhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-xl"
                style={{
                  transform: `rotate(${Math.random() * 6 - 3}deg)`
                }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute -top-2 -right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart size={16} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="love-letter" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 text-center mb-16 font-dancing">
            Uma Carta Para Você
          </h2>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-red-100">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-red-300 opacity-50">
                <Heart size={24} fill="currentColor" />
              </div>
              <div className="absolute -bottom-4 -right-4 text-red-300 opacity-50">
                <Heart size={24} fill="currentColor" />
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-red-700 font-script">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-gradient-to-r from-red-100 to-rose-100">
        <div className="flex items-center justify-center space-x-2 text-2xl md:text-3xl text-red-800 font-dancing">
          <Heart size={28} fill="currentColor" className="animate-pulse" />
          <span>Eu te amo infinitamente, Gabriella - Amor da minha vida</span>
          <Heart size={28} fill="currentColor" className="animate-pulse" />
        </div>
        <p className="mt-4 text-red-600 font-script">
          Feito com muito amor e uma pitadinha de IA ❤️
        </p>
      </footer>
    </div>
  )
}
