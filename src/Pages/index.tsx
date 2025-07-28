import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  GraduationCap,
  Award,
  Smartphone,
  BookOpen,
  CheckCircle,
  Star,
  Users,
  Clock,
  Heart,
  Brain,
  Briefcase,
  Calculator,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import manausHero from "@/assets/images/manaus-cidade.png";
import yuriSampaioImage from "@/assets/images/yuri-perfil.jpg";
import axios from "axios";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    course: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.course) {
      toast({
        title: "Preencha todos os campos",
        description: "Todos os campos são obrigatórios para garantir sua bolsa.",
        variant: "destructive"
      });
      return;
    }

    // URL do Webhook do Make
    const makeWebhookURL = 'https://hook.us2.make.com/vb7utwc4b1fh3lxfnug19wo7xqv35oix'

    try {
      // Envia os dados para o Make via Webhook
      const response = await axios.post(makeWebhookURL, formData);

      if (response.status === 200) {
        toast({
          title: "Dados enviados com sucesso!",
          description: "Sua inscrição foi registrada.",
        });
      } else {
        toast({
          title: "Erro ao enviar os dados",
          description: "Ocorreu um erro ao registrar sua inscrição. Por favor, tente novamente.",
          variant: "destructive"
        });
        console.error("Erro ao enviar para o Make:", response.data);
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar os dados",
        description: "Ocorreu um erro ao registrar sua inscrição. Por favor, tente novamente.",
        variant: "destructive"
      });
      console.error("Erro ao enviar para o Make:", error);
    }

    const message = `Olá! Sou seguidor do Yuri Sampaio e quero garantir minha bolsa de 40%!

Nome: ${formData.name}
WhatsApp: ${formData.whatsapp}
Modalidade de interesse: ${formData.course}`;

    const whatsappUrl = `https://wa.me/559220201260?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Em instantes você será atendido pela nossa equipe!"
    });
  };

  const courses = [
    { category: "Graduação/Tecnólogo", icon: GraduationCap, courses: ["Análise e Desenvolvimento de Sistemas", "Gestão de TI", "Marketing Digital", "Logística", "Recursos Humanos"] },
    { category: "Licenciatura/Saúde", icon: Heart, courses: ["Administração", "Pedagogia", "Educação Física", "Psicologia", "Serviço Social"] },
    { category: "Pós-graduação", icon: Award, courses: ["Gestão de Projetos", "Marketing", "Direito", "Educação Inclusiva", "Saúde Pública"] }
  ];

  const modalidades = [
    "Graduação",
    "Licenciatura", 
    "Tecnólogo",
    "Pós-graduação",
    "Segunda Graduação"
  ];

  const advantages = [
    { icon: Star, title: "Nota 5 no MEC", description: "Qualidade reconhecida pelo Ministério da Educação" },
    { icon: Clock, title: "100% Online", description: "Estude no seu ritmo, onde e quando quiser" },
    { icon: Smartphone, title: "App Exclusivo Edu+", description: "Acesso completo pelo celular ou computador" },
    { icon: BookOpen, title: "Mais de 100 Cursos", description: "Cursos atualizados com as demandas do mercado" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-unicv-green to-unicv-gold rounded-full flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-unicv-green">UniCV</h1>
              <p className="text-xs text-gray-600">Polo Manaus Flores</p>
            </div>
          </div>
          <Button 
            asChild
            className="bg-unicv-gold hover:bg-unicv-gold-dark text-white font-semibold"
          >
            <a href="https://wa.me/559220201260?text=Olá!%20Vim%20pelo%20Yuri%20Sampaio%20e%20quero%20saber%20sobre%20a%20bolsa%20de%2040%25!" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" size={16} />
              Contato
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(90, 106, 42, 0.8), rgba(90, 106, 42, 0.6)), url(${manausHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block sm:inline">Seguidor do <span className="text-unicv-gold">Yuri</span>?</span><br />
              <span className="block text-unicv-gold">Bolsa exclusiva de 40%</span><br />
              <span className="block">+ matrícula por <span className="text-unicv-gold">R$ 50!</span></span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Oferta especial para seguidores do Yuri Sampaio.<br />
              Transforme seu futuro com a UniCV!
            </p>
            <Button 
              size="lg"
              className="bg-unicv-gold hover:bg-unicv-gold-dark text-white text-xl px-8 py-4 h-auto font-bold shadow-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#formulario">
                Quero minha bolsa agora! 🎓
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção do Yuri */}
      <section className="py-16 bg-gradient-to-r from-unicv-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={yuriSampaioImage} 
              alt="Yuri Sampaio" 
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-unicv-gold shadow-lg object-cover"
            />
            <h2 className="text-3xl font-bold text-unicv-green mb-4">
              Recomendação do Yuri Sampaio
            </h2>
            <blockquote className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto">
              "Eu recomendo a UniCV porque sei que ela pode transformar seu futuro com condições especiais para você que me segue. Esta é uma oportunidade única!"
            </blockquote>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-unicv-gold fill-current" size={24} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades de Cursos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-unicv-green mb-4">
            Escolha seu Curso
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conheça alguns dos cursos mais procurados. Temos mais de 100 opções disponíveis para você escolher!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((category, index) => (
              <Card key={index} className="border-2 border-unicv-light hover:border-unicv-gold transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <category.icon className="w-16 h-16 text-unicv-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-unicv-green mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-gray-700 flex items-center">
                        <CheckCircle className="text-unicv-gold mr-2 flex-shrink-0" size={16} />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Técnico para Tecnólogo */}
      <section className="py-16 bg-gradient-to-r from-unicv-gold/10 to-unicv-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-unicv-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-unicv-green mb-6">
              Técnico para Tecnólogo
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Já tem curso técnico? Aproveite suas matérias e <span className="font-bold text-unicv-gold">conclua um curso tecnólogo em até 1 ano!</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <CheckCircle className="text-unicv-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-unicv-green mb-2">Aproveitamento de Matérias</h3>
                <p className="text-gray-600">Suas matérias do técnico são aproveitadas no tecnólogo</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="text-unicv-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-unicv-green mb-2">Conclusão Rápida</h3>
                <p className="text-gray-600">Finalize seu tecnólogo em apenas 1 ano</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="text-unicv-gold mx-auto mb-4" size={40} />
                <h3 className="font-bold text-unicv-green mb-2">Melhor Colocação</h3>
                <p className="text-gray-600">Diploma superior para melhores oportunidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens da UniCV */}
      <section className="py-16 bg-gradient-to-r from-unicv-green to-unicv-green-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Por que escolher a UniCV?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-unicv-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-100">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Conversão */}
      <section id="formulario" className="py-16 bg-unicv-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-unicv-gold shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-unicv-green mb-4">
                    🎓 Garante sua Bolsa de 40%
                  </h2>
                  <p className="text-lg text-gray-700">
                    Preencha os dados abaixo e nossa equipe entrará em contato!
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Digite seu nome completo"
                      className="w-full border-2 border-gray-300 focus:border-unicv-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp
                    </label>
                    <Input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="(92) 99999-9999"
                      className="w-full border-2 border-gray-300 focus:border-unicv-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modalidade de Interesse
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-unicv-gold focus:outline-none"
                    >
                      <option value="">Selecione uma modalidade</option>
                      {modalidades.map((modalidade, index) => (
                        <option key={index} value={modalidade}>{modalidade}</option>
                      ))}
                    </select>
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-unicv-gold hover:bg-unicv-gold-dark text-white text-xl py-4 h-auto font-bold shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    🚀 Quero minha Bolsa Agora!
                  </Button>
                </form>
                
                <p className="text-center text-sm text-gray-600 mt-4">
                  * Oferta válida apenas para seguidores do Yuri Sampaio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-unicv-green text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-unicv-gold rounded-full flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">UniCV Manaus Flores</span>
              </div>
              <p className="text-gray-300">
                Transformando vidas através da educação com qualidade e inovação.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contatos</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(92) 2020-1260</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle size={16} />
                  <a href="https://wa.me/559220201260?text=Olá!%20Vim%20pelo%20Yuri%20Sampaio%20e%20quero%20saber%20sobre%20a%20bolsa%20de%2040%25!" className="hover:text-unicv-gold transition-colors">
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>polo.manaus.flores@unicv.edu.br</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Av. Prof. Nilton Lins, 1984 - Flores, Manaus - AM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Oferta Especial</h3>
              <div className="bg-unicv-gold/20 p-4 rounded-lg">
                <p className="font-bold text-unicv-gold">40% de desconto</p>
                <p className="text-sm">Matrícula por apenas R$ 50</p>
                <p className="text-xs mt-2">*Válido para seguidores do Yuri Sampaio</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-unicv-green-dark mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 UniCV - Centro Universitário. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;