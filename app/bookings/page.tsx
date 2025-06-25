"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar, Clock, Users, MessageSquare, Phone, Mail, User, Check, AlertCircle, Loader2 } from "lucide-react"

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  serviceType?: string
  bookingDate?: string
  bookingTime?: string
  numberOfPeople?: string
  submit?: string
}

interface BookingFormData {
  name: string
  email: string
  phone: string
  serviceType: string
  bookingDate: string
  bookingTime: string
  numberOfPeople: number
  specialRequests: string
}

interface ServiceGroup {
  group: string
  services: string[]
}

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [formSuccess, setFormSuccess] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [today, setToday] = useState("")

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    bookingDate: "",
    bookingTime: "",
    numberOfPeople: 1,
    specialRequests: "",
  })

  const serviceGroups: ServiceGroup[] = [
    {
      group: "Английский язык",
      services: [
        "Английский для дошкольников",
        "Английский для детей 7-9 лет",
        "Английский для детей 10-12 лет",
        "Английский для подростков",
        "Английский для взрослых",
        "Мастер-класс по английскому",
        "Разговорный клуб английского",
      ],
    },
    {
      group: "Китайский язык",
      services: [
        "Китайский для дошкольников",
        "Китайский для детей 7-9 лет",
        "Китайский для детей 10-12 лет",
        "Китайский для подростков",
        "Китайский для взрослых",
        "Мастер-класс по китайскому",
        "Разговорный клуб китайского",
      ],
    },
    {
      group: "Общие программы",
      services: ["Мастер-класс", "Разговорный клуб"],
    },
  ]

  useEffect(() => {
    setIsMounted(true)

    const now = new Date()
    const utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000)
    setToday(utcDate.toISOString().split("T")[0])
  }, [])

  const validateForm = (data: BookingFormData): FormErrors => {
    const errors: FormErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

    if (!data.name.trim()) errors.name = "Пожалуйста, введите ваше имя"
    if (!data.email.trim()) {
      errors.email = "Пожалуйста, введите email"
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Пожалуйста, введите корректный email"
    }
    if (data.phone && !phoneRegex.test(data.phone)) {
      errors.phone = "Пожалуйста, введите корректный номер телефона"
    }
    if (!data.serviceType) errors.serviceType = "Пожалуйста, выберите услугу"
    if (!data.bookingDate) errors.bookingDate = "Пожалуйста, выберите дату"
    if (!data.bookingTime) errors.bookingTime = "Пожалуйста, выберите время"
    if (!data.numberOfPeople || data.numberOfPeople < 1) {
      errors.numberOfPeople = "Пожалуйста, укажите количество человек"
    }

    return errors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfPeople" ? Number.parseInt(value) || 0 : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormErrors({})
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const responseData = await response.text()

      if (!response.ok) {
        let errorMessage = "Failed to submit booking"
        try {
          const errorData = JSON.parse(responseData)
          errorMessage = errorData.error || errorMessage
        } catch {
          errorMessage = responseData || errorMessage
        }
        throw new Error(errorMessage)
      }

      let result
      try {
        result = JSON.parse(responseData)
      } catch {
        // If response is not JSON, assume success if status is ok
        result = { success: true }
      }

      setFormSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        bookingDate: "",
        bookingTime: "",
        numberOfPeople: 1,
        specialRequests: "",
      })

      setTimeout(() => setFormSuccess(false), 5000)
    } catch (error: any) {
      console.error("Booking submission error:", error)
      setFormErrors({
        submit:
          error.message ||
          "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже или свяжитес�� с нами по телефону.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-primary-burgundy" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary-burgundy py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Онлайн-бронирование</h1>
            <p className="text-lg md:text-xl opacity-90">
              Запишитесь на занятия, консультации или мероприятия с помощью нашей удобной системы онлайн-бронирования
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" suppressHydrationWarning>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 text-white"
            aria-hidden="true"
            suppressHydrationWarning
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Booking Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-primary-burgundy mb-6">Информация о бронировании</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-primary-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Доступные дни</h3>
                      <p className="text-gray-600">Понедельник - Суббота</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Рабочие часы</h3>
                      <p className="text-gray-600">9:00 - 19:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Телефон</h3>
                      <p className="text-gray-600">+7 (983) 600-00-00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold">Электронная почта</h3>
                      <p className="text-gray-600">info@tutschool.ru</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-primary-burgundy mb-2">Примечание:</h3>
                  <p className="text-sm text-gray-600">
                    После отправки запроса на бронирование вы получите электронное письмо с подтверждением в течение 24
                    часов. Для срочного бронирования, пожалуйста, свяжитесь с нами напрямую по телефону.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-primary-burgundy mb-6">Забронировать занятие</h2>

                {formSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-start">
                    <Check className="w-5 h-5 mt-0.5 mr-2 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Запрос успешно отправлен!</h3>
                      <p>Мы свяжемся с вами в ближайшее время для подтверждения бронирования.</p>
                    </div>
                  </div>
                )}

                {formErrors.submit && (
                  <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 mt-0.5 mr-2 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Ошибка отправки</h3>
                      <p>{formErrors.submit}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        ФИО *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`pl-10 w-full rounded-md border ${formErrors.name ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                          placeholder="Ваше полное имя"
                        />
                      </div>
                      {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Электронная почта *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`pl-10 w-full rounded-md border ${formErrors.email ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                          placeholder="Ваш адрес электронной почты"
                        />
                      </div>
                      {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Номер телефона
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`pl-10 w-full rounded-md border ${formErrors.phone ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                          placeholder="Ваш номер телефона"
                        />
                      </div>
                      {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                    </div>

                    {/* Service Type */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                        Тип услуги *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className={`w-full rounded-md border ${formErrors.serviceType ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                      >
                        <option value="">Выберите услугу</option>
                        {serviceGroups.map((group) => (
                          <optgroup key={group.group} label={group.group}>
                            {group.services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      {formErrors.serviceType && <p className="mt-1 text-sm text-red-600">{formErrors.serviceType}</p>}
                    </div>

                    {/* Date */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Дата *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="bookingDate"
                          name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleChange}
                          required
                          min={today}
                          className={`pl-10 w-full rounded-md border ${formErrors.bookingDate ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                        />
                      </div>
                      {formErrors.bookingDate && <p className="mt-1 text-sm text-red-600">{formErrors.bookingDate}</p>}
                    </div>

                    {/* Time */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="bookingTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Время *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="time"
                          id="bookingTime"
                          name="bookingTime"
                          value={formData.bookingTime}
                          onChange={handleChange}
                          required
                          min="09:00"
                          max="19:00"
                          className={`pl-10 w-full rounded-md border ${formErrors.bookingTime ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                        />
                      </div>
                      {formErrors.bookingTime && <p className="mt-1 text-sm text-red-600">{formErrors.bookingTime}</p>}
                    </div>

                    {/* Number of People */}
                    <div className="col-span-2 md:col-span-1">
                      <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-1">
                        Количество человек *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="numberOfPeople"
                          name="numberOfPeople"
                          value={formData.numberOfPeople}
                          onChange={handleChange}
                          required
                          min="1"
                          className={`pl-10 w-full rounded-md border ${formErrors.numberOfPeople ? "border-red-500" : "border-gray-300"} py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent`}
                        />
                      </div>
                      {formErrors.numberOfPeople && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.numberOfPeople}</p>
                      )}
                    </div>

                    {/* Special Requests */}
                    <div className="col-span-2">
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                        Особые пожелания
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-burgundy focus:border-transparent"
                          placeholder="Любые особые требования или дополнительная информация"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 mt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-burgundy hover:bg-primary-burgundy-dark text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                            Обработка...
                          </>
                        ) : (
                          "Отправить запрос на бронирование"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-burgundy mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Найдите ответы на распространенные вопросы о нашем процессе бронирования и услугах
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "За сколько времени следует бронировать?",
                answer:
                  "Мы рекомендуем бронировать как минимум за одну неделю, чтобы обеспечить наличие мест, особенно для популярных временных интервалов. Для специальных мероприятий или групповых занятий рекомендуется бронировать за 2-3 недели.",
              },
              {
                question: "Какова ваша политика отмены?",
                answer:
                  "Отмены, сделанные за 48 часов или более до запланированной встречи, получат полный возврат средств. Отмены, сделанные менее чем за 48 часов до начала, могут облагаться комиссией за отмену в размере 50% от стоимости бронирования.",
              },
              {
                question: "Могу ли я перенести мое бронирование?",
                answer:
                  "Да, вы можете перенести бронирование не позднее, чем за 24 часа до запланированного времени без штрафа. Пожалуйста, свяжитесь с нами по телефону или электронной почте, чтобы назначить новое время.",
              },
              {
                question: "Предлагаете ли вы групповые скидки?",
                answer:
                  "Да, мы предлагаем скидки для групп от 5 человек. Пожалуйста, свяжитесь с нами напрямую для получения дополнительной информации о наших групповых тарифах и специальных пакетах.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-primary-burgundy mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
