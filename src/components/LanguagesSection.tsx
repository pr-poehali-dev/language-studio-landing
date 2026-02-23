import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const languages = [
  {
    flag: "🇬🇧",
    name: "Английский",
    native: "English",
    gradient: "gradient-card-blue",
    levels: "A1 — B2",
    features: ["Разговорный клуб", "Бизнес-английский", "Для взрослых"],
    popular: true,
  },
  {
    flag: "🇩🇪",
    name: "Немецкий",
    native: "Deutsch",
    gradient: "gradient-card-purple",
    levels: "A1 — B2",
    features: ["Goethe-Zertifikat", "Учёба в Германии", "Разговорная практика", "Грамматический курс"],
    popular: false,
  },
  {
    flag: "🇪🇸",
    name: "Испанский",
    native: "Español",
    gradient: "gradient-card-orange",
    levels: "A1 — B2",
    features: ["DELE подготовка", "Латиноамериканский", "Для путешествий", "Культура и кино"],
    popular: false,
  },
];

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <Icon name="Globe" size={16} />
            Языки
          </div>
          <h2 className="font-heading font-800 text-4xl lg:text-5xl mb-4">
            Три языка — <span className="gradient-text">безграничные возможности</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выберите свой язык и начните путь к свободному общению
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`hover-lift relative rounded-3xl p-8 ${lang.gradient} border border-white/50`}
            >
              {lang.popular && (
                <div className="absolute -top-3 right-6 px-4 py-1 gradient-primary text-white text-xs font-bold rounded-full">
                  Популярный
                </div>
              )}

              <div className="text-5xl mb-4">{lang.flag}</div>
              <h3 className="font-heading font-800 text-2xl mb-1">{lang.name}</h3>
              <p className="text-muted-foreground font-medium mb-1">{lang.native}</p>
              <p className="text-sm text-muted-foreground mb-6">Уровни: {lang.levels}</p>

              <ul className="space-y-3 mb-8">
                {lang.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full gradient-primary text-white border-0 font-heading font-semibold rounded-xl h-12"
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              >
                Выбрать
                <Icon name="ArrowRight" size={18} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;