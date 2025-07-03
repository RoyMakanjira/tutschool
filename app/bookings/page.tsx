"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, Users, MessageSquare, Phone, Mail, User, Check, AlertCircle, Loader2, BookOpen } from "lucide-react"
import { toast } from "sonner"

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

  const handleSubmitWithFormSubmit = async (data: BookingFormData) => {
    const formPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone || "Не указан",
      serviceType: data.serviceType,
      bookingDate: data.bookingDate,
      bookingTime: data.bookingTime,
      numberOfPeople: data.numberOfPeople.toString(),
      specialRequests: data.specialRequests || "Нет особых пожеланий",
      _subject: `Новое бронирование: ${data.serviceType}`,
      _template: "boxy",
      _captcha: "false",
      _replyto: data.email,
      _html: `
      <div style="
        background-color: #4C1D24; 
        color: #f3f4f6; 
        font-family: 'Georgia', serif; 
        padding: 2rem;
        border-radius: 8px;
        max-width: 600px;
        margin: 0 auto;
      ">
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="
            display: inline-block;
            background: #f8f8f8;
            color: #4C1D24;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            line-height: 60px;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 1rem;
          ">TUT</div>
          <h1 style="
            font-size: 1.75rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            letter-spacing: 0.5px;
          ">
            Новая заявка на бронирование
          </h1>
          <div style="
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            margin: 1rem 0;
          "></div>
        </div>

        <div style="
          background: rgba(255,255,255,0.08);
          border-left: 4px solid #d4a017;
          padding: 1.25rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        ">
          <h2 style="
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          ">
            <span style="
              background: #d4a017;
              color: #4C1D24;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin-right: 8px;
              font-size: 14px;
            ">1</span>
            Детали бронирования
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; width: 120px; font-weight: bold;">Услуга:</td>
              <td style="padding: 6px 0;">${data.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Дата:</td>
              <td style="padding: 6px 0;">${data.bookingDate}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Время:</td>
              <td style="padding: 6px 0;">${data.bookingTime}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Участники:</td>
              <td style="padding: 6px 0;">${data.numberOfPeople}</td>
            </tr>
          </table>
        </div>

        <div style="
          background: rgba(255,255,255,0.08);
          border-left: 4px solid #8e9aaf;
          padding: 1.25rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        ">
          <h2 style="
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          ">
            <span style="
              background: #8e9aaf;
              color: #4C1D24;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin-right: 8px;
              font-size: 14px;
            ">2</span>
            Контактная информация
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; width: 120px; font-weight: bold;">Имя:</td>
              <td style="padding: 6px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Телефон:</td>
              <td style="padding: 6px 0;">${data.phone || "Не указан"}</td>
            </tr>
          </table>
        </div>

        ${data.specialRequests ? `
        <div style="
          background: rgba(255,255,255,0.08);
          border-left: 4px solid #c77dff;
          padding: 1.25rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        ">
          <h2 style="
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
          ">
            <span style="
              background: #c77dff;
              color: white;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              margin-right: 8px;
              font-size: 14px;
            ">3</span>
            Особые пожелания
          </h2>
          <p style="line-height: 1.5;">${data.specialRequests}</p>
        </div>
        ` : ''}

        <div style="
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255,255,255,0.2);
          font-size: 0.8rem;
          color: rgba(255,255,255,0.7);
        ">
          <p>Языковая школа TUT • info@tutschool.ru</p>
          <p style="margin-top: 0.5rem;">
            <a href="https://tutschool.ru" style="color: #d4a017; text-decoration: none;">Посетите наш сайт</a>
          </p>
        </div>
      </div>
      `
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@tutschool.ru", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      })

      if (!response.ok) throw new Error("Ошибка отправки формы")
    } catch (error: any) {
      throw new Error(error.message || "Не удалось отправить запрос на бронирование")
    }
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
      await handleSubmitWithFormSubmit(formData)

      setFormSuccess(true)
      toast.success("Запрос на бронирование отправлен успешно! Мы свяжемся с вами в ближайшее время.")

      // Reset form
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
      const errorMessage = error.message || "Произошла ошибка при отправке запроса. Попробуйте еще раз."
      setFormErrors({ submit: errorMessage })
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-burgundy-900" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-burgundy-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Онлайн-бронирование</h1>
            <p className="text-lg opacity-90 md:text-xl">
              Запишитесь на занятия, консультации или мероприятия с помощью нашей удобной системы онлайн-бронирования
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" suppressHydrationWarning>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-12 w-full text-burgundy-900"
            aria-hidden="true"
            suppressHydrationWarning
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Booking Information */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-burgundy-900">Информация о бронировании</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="mr-3 mt-1 h-5 w-5 text-burgundy-900" />
                    <div>
                      <h3 className="font-semibold">Доступные дни</h3>
                      <p className="text-gray-600">Понедельник - Суббота</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-3 mt-1 h-5 w-5 text-burgundy-900" />
                    <div>
                      <h3 className="font-semibold">Рабочие часы</h3>
                      <p className="text-gray-600">9:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-3 mt-1 h-5 w-5 text-burgundy-900" />
                    <div>
                      <h3 className="font-semibold">Телефон</h3>
                      <p className="text-gray-600">+7 (983) 662-97-30</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 mt-1 h-5 w-5 text-burgundy-900" />
                    <div>
                      <h3 className="font-semibold">Электронная почта</h3>
                      <p className="text-gray-600">info@tutschool.ru</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-gray-50 p-4">
                  <h3 className="mb-2 font-semibold text-burgundy-900">Примечание:</h3>
                  <p className="text-sm text-gray-600">
                    Ваш запрос будет отправлен немедленно, и вы получите подтверждение на email мгновенно. Наш менеджер
                    свяжется с вами в течение 2-4 часов в рабочее время для финального подтверждения.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-burgundy-900">Забронировать занятие</h2>

                {formSuccess && (
                  <div className="mb-6 flex items-start rounded-lg bg-green-50 p-4 text-green-800">
                    <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Запрос успешно отправлен!</h3>
                      <p>Мы свяжемся с вами в ближайшее время для подтверждения бронирования.</p>
                    </div>
                  </div>
                )}

                {formErrors.submit && (
                  <div className="mb-6 flex items-start rounded-lg bg-red-50 p-4 text-red-800">
                    <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <div>
                      <h3 className="font-semibold">Ошибка отправки</h3>
                      <p>{formErrors.submit}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div className="md:col-span-1">
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                        ФИО *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full rounded-md border bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.name ? "border-red-500" : "border-gray-300"}`}
                          placeholder="Ваше полное имя"
                        />
                      </div>
                      {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-1">
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                        Электронная почта *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full rounded-md border bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.email ? "border-red-500" : "border-gray-300"}`}
                          placeholder="Ваш адрес электронной почты"
                        />
                      </div>
                      {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-1">
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                        Номер телефона
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full rounded-md border bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.phone ? "border-red-500" : "border-gray-300"}`}
                          placeholder="+7 (XXX) XXX-XXXX"
                        />
                      </div>
                      {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                    </div>

                    {/* Service Type */}
                    <div className="md:col-span-1">
                      <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-gray-700">
                        Тип услуги *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className={`w-full rounded-md border bg-gray-50 py-2 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.serviceType ? "border-red-500" : "border-gray-300"}`}
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
                      {formErrors.serviceType && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.serviceType}</p>
                      )}
                    </div>

                    {/* Date */}
                    <div className="md:col-span-1">
                      <label htmlFor="bookingDate" className="mb-1 block text-sm font-medium text-gray-700">
                        Дата *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                          className={`w-full rounded-md border bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.bookingDate ? "border-red-500" : "border-gray-300"}`}
                        />
                      </div>
                      {formErrors.bookingDate && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.bookingDate}</p>
                      )}
                    </div>

                    {/* Time */}
                    <div className="md:col-span-1">
                      <label htmlFor="bookingTime" className="mb-1 block text-sm font-medium text-gray-700">
                        Время *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                          className={`w-full rounded-md border bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.bookingTime ? "border-red-500" : "border-gray-300"}`}
                        />
                      </div>
                      {formErrors.bookingTime && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.bookingTime}</p>
                      )}
                    </div>

                    {/* Number of People */}
                    <div className="md:col-span-1">
                      <label htmlFor="numberOfPeople" className="mb-1 block text-sm font-medium text-gray-700">
                        Количество человек *
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
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
                          className={`w-full rounded-md border bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${formErrors.numberOfPeople ? "border-red-500" : "border-gray-300"}`}
                        />
                      </div>
                      {formErrors.numberOfPeople && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.numberOfPeople}</p>
                      )}
                    </div>

                    {/* Special Requests */}
                    <div className="md:col-span-2">
                      <label htmlFor="specialRequests" className="mb-1 block text-sm font-medium text-gray-700">
                        Особые пожелания
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute left-3 top-3 flex items-start">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          className="w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 pl-10 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900"
                          placeholder="Любые особые требования или дополнительная информация"
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-4 md:col-span-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center rounded-md bg-burgundy-900 py-3 px-4 font-bold text-white transition-colors duration-300 hover:bg-burgundy-800 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-burgundy-900">Часто задаваемые вопросы</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
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
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-burgundy-900">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}