import { motion } from 'motion/react';
import { Leaf, Info, ShoppingBag, Phone, Mail, Instagram, MapPin, ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Cuidados', href: '#cuidados' },
  { name: 'Sobre Nós', href: '#sobre' },
];

const AZALEAS = [
  {
    id: 1,
    name: 'Azaléia Rosa Clássica',
    price: 'R$ 45,90',
    description: 'A favorita dos jardins brasileiros, com flores vibrantes e perenes.',
    image: 'https://images.unsplash.com/photo-1596135892554-7f152d1297e2?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Mais Vendida',
  },
  {
    id: 2,
    name: 'Azaléia Branca Pureza',
    price: 'R$ 52,00',
    description: 'Elegância e paz em forma de flor. Ideal para ambientes iluminados.',
    image: 'https://images.unsplash.com/photo-1558236714-d1ae43309995?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Elegante',
  },
  {
    id: 3,
    name: 'Azaléia Vermelha Paixão',
    price: 'R$ 49,90',
    description: 'Cor intensa que destaca qualquer canteiro ou varanda.',
    image: 'https://images.unsplash.com/photo-1621217743171-8798e4f15d7e?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Intensa',
  },
  {
    id: 4,
    name: 'Azaléia Bicolor Rara',
    price: 'R$ 65,00',
    description: 'Pétalas mescladas em branco e rosa, uma verdadeira obra de arte.',
    image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7295?auto=format&fit=crop&q=80&w=600&h=800',
    tag: 'Edição Limitada',
  },
];

const CARE_TIPS = [
  {
    title: 'Luminosidade Ideal',
    content: 'As azaléias amam luz solar direta, pelo menos 4 a 6 horas por dia. Se cultivadas em ambientes internos, devem ficar próximas a janelas bem iluminadas.',
  },
  {
    title: 'Rega e Umidade',
    content: 'Mantenha o solo sempre úmido, mas nunca encharcado. Em dias quentes, a rega deve ser diária. Evite molhar as flores diretamente para não apodrecê-las.',
  },
  {
    title: 'Adubação',
    content: 'Fertilize após a floração para garantir novas brotações. Use adubos específicos para plantas acidófilas ou NPK 10-10-10 a cada 3 meses.',
  },
  {
    title: 'Poda de Manutenção',
    content: 'A poda deve ser feita logo após o final da floração. Remova galhos secos e flores murchas para estimular o crescimento saudável.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#3D3D3D] font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E7E2]">
        <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#8B9D83] rounded-full"></div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#4A5D45]">Azaleia Vivier</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-[0.2em] text-[#6B705C]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#4A5D45] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <Button className="bg-[#8B9D83] hover:bg-[#4A5D45] text-white rounded-full px-8 h-10 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm">
            Comprar Agora
          </Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 pr-4 lg:pr-12"
            >
              <span className="text-[#A98467] font-semibold tracking-[0.2em] uppercase text-xs mb-6 block italic">Coleção de Primavera 2026</span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[84px] leading-[1.05] font-normal text-[#4A5D45] mb-8">
                A elegância natural das <span className="italic">Azaleias</span> em sua casa.
              </h1>
              <p className="text-lg md:text-xl text-[#6B705C] max-w-lg mb-10 leading-relaxed font-light">
                Transforme seu ambiente com a delicadeza e as cores vibrantes da flor que simboliza a perseverança. Entrega especializada em todo o Brasil.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#8B9D83] hover:bg-[#4A5D45] rounded-xl h-14 px-10 text-base font-medium shadow-xl shadow-[#8B9D83]/20 transition-all">
                  Ver Variedades
                </Button>
                <Button size="lg" variant="outline" className="bg-white border-[#E5E5E5] text-[#4A5D45] rounded-xl h-14 px-10 text-base font-medium hover:bg-[#F0F2EE] transition-all">
                  Saiba Mais
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute inset-0 bg-[#D4D9D0] rounded-[40px] transform rotate-2 z-0"></div>
              <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[40px] shadow-2xl transition-transform hover:-translate-y-2 duration-700">
                <img
                  src="https://images.unsplash.com/photo-1598965675045-45c5e72c7295?auto=format&fit=crop&q=80&w=1200&h=1500"
                  alt="Azaleias em destaque"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-3xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#4A5D45]">Azaléa Japônica Rose</span>
                    <span className="text-[#A98467] font-bold">R$ 89,90</span>
                  </div>
                  <p className="text-xs text-[#6B705C] leading-snug">Ideal para áreas semi-sombreadas. Floração intensa entre inverno e primavera.</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#FFE5D9] rounded-full flex items-center justify-center text-center p-3 shadow-xl rotate-12 border-4 border-white z-20">
                <span className="text-[10px] font-bold uppercase text-[#D08C60] leading-tight">Frete Grátis Sudeste</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Bar */}
        <section className="bg-[#f0f2ee] py-12 px-12 border-y border-[#E5E7E2]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-12 lg:gap-20">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#A98467] font-bold mb-1">Rega Ideal</span>
                <span className="text-sm text-[#4A5D45] font-medium">2x por semana</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#A98467] font-bold mb-1">Luz Solar</span>
                <span className="text-sm text-[#4A5D45] font-medium">Meia-sombra</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#A98467] font-bold mb-1">Tamanho</span>
                <span className="text-sm text-[#4A5D45] font-medium">30cm - 1.2m</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A2A2A2]">
              <span className="w-12 h-[1px] bg-[#E5E7E2]"></span>
              Azaléa Vivier Garden Center
            </div>
          </div>
        </section>

        {/* Catalog */}
        <section id="catalogo" className="py-24 max-w-7xl mx-auto px-12 text-[#3D3D3D]">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#A98467] font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Nossa Seleção Natural</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4A5D45]">Escolha a harmonia ideal <br /> para seu jardim</h2>
            </div>
            <Button variant="ghost" className="text-[#4A5D45] font-bold hover:bg-[#F0F2EE] uppercase text-xs tracking-widest group">
              Ver Catálogo Completo
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {AZALEAS.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-none shadow-sm overflow-hidden bg-white/50 hover:bg-white hover:shadow-2xl transition-all h-full flex flex-col rounded-[32px]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-[#4A5D45] border-none font-bold uppercase text-[10px] tracking-wider">
                        {item.tag}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <CardTitle className="font-serif text-2xl font-bold text-[#4A5D45] mb-2">{item.name}</CardTitle>
                    <CardDescription className="text-[#6B705C] leading-relaxed mb-6 font-light">{item.description}</CardDescription>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-[#A98467]">{item.price}</span>
                      <Button size="icon" className="bg-[#8B9D83] hover:bg-[#4A5D45] rounded-full scale-110 shadow-lg shadow-[#8B9D83]/20">
                        <ShoppingBag className="w-5 h-5 text-white" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Care Tips */}
        <section id="cuidados" className="py-24 bg-[#4A5D45] text-white overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8B9D83]/20 blur-[100px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <span className="text-[#D4D9D0] font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Sabedoria Botânica</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-10 leading-tight italic text-[#FAF9F6]">Como manter sua Azaléia <br /> sempre radiante</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {CARE_TIPS.map((tip, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-[#6B705C]">
                    <AccordionTrigger className="text-lg font-medium hover:text-[#D4D9D0] transition-colors py-6 text-left">
                      {tip.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#D4D9D0]/80 text-base leading-relaxed pb-6 font-light">
                      {tip.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-white/5 rounded-[60px] transform -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1596135892554-7f152d1297e2?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Cuidados com Azaléias"
                className="rounded-[60px] shadow-2xl relative z-10 object-cover w-full h-[600px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* About / Contact */}
        <section id="sobre" className="py-24 max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#8B9D83] rounded-full"></div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#4A5D45]">Azaleia Vivier</span>
            </div>
            <p className="text-[#6B705C] leading-relaxed mb-8 font-light text-lg">
              Nascemos da paixão por transformar jardins em refúgios de beleza e tranquilidade. Nossa missão é conectar você com a natureza através de plantas saudáveis, vibrantes e com procedência garantida.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-[#E5E5E5] text-[#4A5D45] hover:bg-[#F0F2EE]">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-[#E5E5E5] text-[#4A5D45] hover:bg-[#F0F2EE]">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#4A5D45]">Atendimento</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-[#6B705C]">
                <Phone className="w-5 h-5 text-[#8B9D83] mt-1 shrink-0" />
                <p className="text-sm">(11) 98765-4321 <br /> <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Segunda à Sexta</span></p>
              </div>
              <div className="flex items-start gap-4 text-[#6B705C]">
                <Mail className="w-5 h-5 text-[#8B9D83] mt-1 shrink-0" />
                <p className="text-sm">clube@azaleiavivier.com.br</p>
              </div>
              <div className="flex items-start gap-4 text-[#6B705C]">
                <MapPin className="w-5 h-5 text-[#8B9D83] mt-1 shrink-0" />
                <p className="text-sm italic">Holambra, SP - Pavilhão das Flores</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#F0F2EE] p-10 rounded-[32px] space-y-6 self-start">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#4A5D45]">Estufa Vivier</h4>
            <p className="text-sm text-[#6B705C] leading-relaxed font-light italic">Inscreva-se para receber convites exclusivos para visitas presenciais e workshops de cuidado botânico.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white border border-transparent rounded-full px-5 py-3 text-sm flex-1 outline-none focus:border-[#8B9D83] transition-all shadow-sm"
              />
              <Button className="bg-[#4A5D45] hover:bg-[#3d4d39] rounded-full p-3 size-11 shrink-0 text-white shadow-lg">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E7E2] py-12">
        <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#A2A2A2] text-[10px] uppercase tracking-[0.3em] font-medium leading-loose">© 2026 Azaléa Vivier Garden Center • Cultivando Perseverança</p>
          <div className="flex gap-10">
            <a href="#" className="text-xs font-medium text-[#A2A2A2] hover:text-[#4A5D45] uppercase tracking-widest transition-colors">Termos</a>
            <a href="#" className="text-xs font-medium text-[#A2A2A2] hover:text-[#4A5D45] uppercase tracking-widest transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
