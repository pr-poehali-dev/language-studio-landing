import Icon from "@/components/ui/icon";

const teachers = [
  {
    name: "Анна Мюллер",
    role: "Немецкий язык",
    experience: "10 лет опыта",
    description: "Носитель языка из Берлина. Сертифицированный преподаватель DaF.",
    emoji: "👩‍🏫",
    color: "bg-purple-100",
  },
  {
    name: "Джеймс Уилсон",
    role: "Английский язык",
    experience: "8 лет опыта",
    description: "CELTA-сертификат. Подготовил 200+ учеников к IELTS на 7.0+",
    emoji: "👨‍🎓",
    color: "bg-blue-100",
  },
  {
    name: "Мария Гарсия",
    role: "Испанский язык",
    experience: "7 лет опыта",
    description: "Из Барселоны. Институт Сервантеса. Экзаменатор DELE.",
    emoji: "👩‍💼",
    color: "bg-orange-100",
  },
  {
    name: "Елена Козлова",
    role: "Английский и немецкий",
    experience: "12 лет опыта",
    description: "Методист студии. Автор курсов для начинающих взрослых.",
    emoji: "👩‍🔬",
    color: "bg-green-100",
  },
];

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-24 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
            <Icon name="GraduationCap" size={16} />
            Преподаватели
          </div>
          <h2 className="font-heading font-800 text-4xl lg:text-5xl mb-4">
            Команда <span className="gradient-text">профессионалов</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Носители языка и сертифицированные преподаватели с международным опытом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="hover-lift group text-center rounded-2xl p-6 bg-white border border-border/50 shadow-sm"
            >
              <div className={`w-24 h-24 rounded-3xl ${teacher.color} flex items-center justify-center text-5xl mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                {teacher.emoji}
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{teacher.name}</h3>
              <p className="text-sm gradient-text font-semibold mb-1">{teacher.role}</p>
              <p className="text-xs text-muted-foreground mb-3">{teacher.experience}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{teacher.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;