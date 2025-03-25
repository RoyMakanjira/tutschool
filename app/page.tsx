import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image src="/placeholder.svg?height=48&width=48" alt="Логотип школы" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Моя Школа</h1>
              <p className="text-sm text-muted-foreground">школа английского языка</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 md:flex-row md:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+7 (901) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">info@myschool.ru</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">г. Москва, ул. Примерная, 123</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="rounded-full bg-primary p-1 text-white">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-full bg-primary p-1 text-white">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-full bg-primary p-1 text-white">
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <nav className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 py-4 md:gap-8">
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                О ШКОЛЕ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                КУРСЫ АНГЛИЙСКОГО
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                МАСТЕР-КЛАССЫ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                РАЗГОВОРНЫЙ КЛУБ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                ЛЕТНИЙ КЛУБ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                НОВОСТИ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-3 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-primary"
              >
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="relative">
          <div className="relative h-[500px] w-full">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Студенты в классе"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="mb-4 text-4xl font-bold md:text-6xl">ШКОЛА АНГЛИЙСКОГО ЯЗЫКА</h2>
              <p className="mb-8 text-xl md:text-3xl">ОТКРЫТ НАБОР В ГРУППЫ АНГЛИЙСКОГО НА УЧЕБНЫЙ ГОД 24-25</p>
              <Link href="#" className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90">
                Записаться
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Опытные преподаватели</h3>
                <p className="text-muted-foreground">
                  Наши учителя имеют международные сертификаты и многолетний опыт преподавания
                </p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Современные методики</h3>
                <p className="text-muted-foreground">Используем коммуникативный подход и интерактивные материалы</p>
              </div>
              <div className="rounded-lg border p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Малые группы</h3>
                <p className="text-muted-foreground">
                  Занятия проводятся в группах до 8 человек для максимальной эффективности
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">НАШИ КУРСЫ</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Курс для детей"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Английский для детей</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Возраст: 5-10 лет. Игровой формат обучения с акцентом на разговорную речь.
                  </p>
                  <Link
                    href="#"
                    className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Курс для подростков"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Английский для подростков</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Возраст: 11-16 лет. Подготовка к экзаменам и развитие коммуникативных навыков.
                  </p>
                  <Link
                    href="#"
                    className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Курс для взрослых"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Английский для взрослых</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Общий и деловой английский для всех уровней от начинающего до продвинутого.
                  </p>
                  <Link
                    href="#"
                    className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Индивидуальные занятия"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">Индивидуальные занятия</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Персональная программа обучения с учетом ваших целей и графика.
                  </p>
                  <Link
                    href="#"
                    className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-3xl font-bold">ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК</h2>
              <p className="mb-6 text-lg">
                Оставьте заявку, и мы свяжемся с вами для записи на бесплатное пробное занятие
              </p>
              <Link
                href="#"
                className="inline-block rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-gray-100"
              >
                Записаться на пробный урок
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+7 (901) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@myschool.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>г. Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Режим работы</h3>
              <p>Понедельник - Пятница: 9:00 - 21:00</p>
              <p>Суббота: 10:00 - 18:00</p>
              <p>Воскресенье: выходной</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Социальные сети</h3>
              <div className="flex gap-2">
                <Link href="#" className="rounded-full bg-primary p-2 text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="rounded-full bg-primary p-2 text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="rounded-full bg-primary p-2 text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p>© 2024 Моя Школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

