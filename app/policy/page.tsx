import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, Eye, FileText, Users, Phone, Mail, MapPin } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#5c162e] rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#5c162e]">Tut School</h1>
              <p className="text-gray-600 text-sm">tutschool.ru</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#5c162e] mb-4">
            Политика конфиденциальности
          </h1>
          <p className="text-gray-600 text-lg">
            Защита персональных данных и конфиденциальность информации
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <FileText className="w-5 h-5" />
              Введение
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Языковая школа "Tut School" (далее — "Школа", "мы") серьезно относится к защите 
              персональных данных наших учеников, их родителей и посетителей веб-сайта. 
              Настоящая Политика конфиденциальности описывает, как мы собираем, используем, 
              храним и защищаем вашу персональную информацию.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя наш веб-сайт tutschool.ru или обращаясь к нашим услугам, вы соглашаетесь 
              с условиями данной Политики конфиденциальности.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <Users className="w-5 h-5" />
              Какие данные мы собираем
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#5c162e] mb-2">Персональные данные:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Фамилия, имя, отчество</li>
                <li>Дата рождения</li>
                <li>Контактная информация (телефон, email, адрес)</li>
                <li>Данные документов, удостоверяющих личность</li>
                <li>Фотографии (при согласии)</li>
                <li>Информация об образовании и языковом уровне</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#5c162e] mb-2">Технические данные:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>IP-адрес и данные браузера</li>
                <li>Информация о посещениях сайта</li>
                <li>Cookies и аналогичные технологии</li>
                <li>Данные об использовании онлайн-платформ</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Usage */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <Eye className="w-5 h-5" />
              Как мы используем ваши данные
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h3 className="font-semibold text-[#5c162e]">Образовательные цели:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Организация учебного процесса</li>
                  <li>Оценка прогресса обучения</li>
                  <li>Выдача сертификатов и документов</li>
                  <li>Индивидуальный подход к обучению</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-[#5c162e]">Административные цели:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Ведение учета учеников</li>
                  <li>Обработка платежей</li>
                  <li>Связь с учениками и родителями</li>
                  <li>Улучшение качества услуг</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <Lock className="w-5 h-5" />
              Защита персональных данных
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#5c162e] mb-2">Меры безопасности:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Шифрование данных при передаче</li>
                  <li>Ограниченный доступ к информации</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Обучение персонала правилам обработки данных</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-4">
                  <li>Резервное копирование данных</li>
                  <li>Контроль доступа к помещениям</li>
                  <li>Антивирусная защита</li>
                  <li>Мониторинг безопасности</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Rights */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <Shield className="w-5 h-5" />
              Ваши права
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 mb-4">
              В соответствии с Федеральным законом "О персональных данных" вы имеете право:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#5c162e] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm">Получать информацию о обработке ваших данных</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#5c162e] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm">Требовать уточнения или исправления данных</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#5c162e] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm">Отзывать согласие на обработку</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#5c162e] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm">Требовать удаления персональных данных</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#5c162e] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm">Обращаться в надзорные органы</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#5c162e] rounded-full mt-2"></div>
                  <span className="text-gray-700 text-sm">Получать копии ваших данных</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <FileText className="w-5 h-5" />
              Сроки хранения данных
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-[#5c162e] mb-2">Учебные данные</h4>
                  <p className="text-sm text-gray-700">5 лет после окончания обучения</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5c162e] mb-2">Финансовые данные</h4>
                  <p className="text-sm text-gray-700">5 лет в соответствии с законодательством</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#5c162e] mb-2">Маркетинговые данные</h4>
                  <p className="text-sm text-gray-700">До отзыва согласия</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <Eye className="w-5 h-5" />
              Использование Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Наш веб-сайт использует cookies для улучшения пользовательского опыта:
            </p>
            <div className="space-y-3">
              <div className="border-l-4 border-[#5c162e] pl-4">
                <h4 className="font-semibold text-[#5c162e]">Необходимые cookies</h4>
                <p className="text-sm text-gray-700">Обеспечивают базовую функциональность сайта</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-700">Аналитические cookies</h4>
                <p className="text-sm text-gray-700">Помогают понять, как посетители используют сайт</p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <h4 className="font-semibold text-gray-700">Маркетинговые cookies</h4>
                <p className="text-sm text-gray-700">Используются для персонализации рекламы</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#5c162e]">
              <FileText className="w-5 h-5" />
              Изменения в политике
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Все изменения будут опубликованы на данной странице с указанием даты последнего обновления. 
              Существенные изменения будут дополнительно доведены до вашего сведения через email 
              или уведомления на сайте.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
