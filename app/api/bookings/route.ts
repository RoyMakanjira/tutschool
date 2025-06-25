import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface BookingData {
  name: string
  email: string
  phone: string
  serviceType: string
  bookingDate: string
  bookingTime: string
  numberOfPeople: number
  specialRequests: string
}

export async function POST(request: NextRequest) {
  try {
    const bookingData: BookingData = await request.json()

    // Validate required fields
    if (
      !bookingData.name ||
      !bookingData.email ||
      !bookingData.serviceType ||
      !bookingData.bookingDate ||
      !bookingData.bookingTime
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format date and time for display
    const bookingDateTime = new Date(`${bookingData.bookingDate}T${bookingData.bookingTime}`)
    const formattedDate = bookingDateTime.toLocaleDateString("ru-RU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const formattedTime = bookingDateTime.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })

    // Professional email template for the business
    const businessEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Новое бронирование</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
            .booking-details { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; color: #374151; }
            .detail-value { color: #6b7280; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #6b7280; }
            .urgent { background: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .urgent-title { color: #dc2626; font-weight: bold; margin-bottom: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">📅 Новое бронирование</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">TutSchool - Языковая школа</p>
            </div>
            
            <div class="content">
              <div class="urgent">
                <div class="urgent-title">⚡ Требует внимания</div>
                <p style="margin: 5px 0 0 0;">Получен новый запрос на бронирование. Пожалуйста, свяжитесь с клиентом в течение 24 часов.</p>
              </div>

              <h2 style="color: #2563eb; margin-bottom: 20px;">Детали бронирования</h2>
              
              <div class="booking-details">
                <div class="detail-row">
                  <span class="detail-label">👤 Имя клиента:</span>
                  <span class="detail-value">${bookingData.name}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">📧 Email:</span>
                  <span class="detail-value">${bookingData.email}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">📱 Телефон:</span>
                  <span class="detail-value">${bookingData.phone || "Не указан"}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🎓 Услуга:</span>
                  <span class="detail-value">${bookingData.serviceType}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">📅 Дата:</span>
                  <span class="detail-value">${formattedDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🕐 Время:</span>
                  <span class="detail-value">${formattedTime}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">👥 Количество человек:</span>
                  <span class="detail-value">${bookingData.numberOfPeople}</span>
                </div>
                ${
                  bookingData.specialRequests
                    ? `
                <div class="detail-row" style="border-bottom: none;">
                  <span class="detail-label">💬 Особые пожелания:</span>
                </div>
                <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 10px; border: 1px solid #e5e7eb;">
                  ${bookingData.specialRequests}
                </div>
                `
                    : ""
                }
              </div>

              <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #2563eb; margin-top: 0;">📋 Следующие шаги:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Свяжитесь с клиентом для подтверждения бронирования</li>
                  <li>Проверьте доступность выбранного времени</li>
                  <li>Отправьте подтверждение клиенту</li>
                  <li>Добавьте встречу в календарь</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">Это автоматическое уведомление от системы бронирования TutSchool</p>
              <p style="margin: 5px 0 0 0;">📞 +7 (983) 600-00-00 | 📧 info@tutschool.ru</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Confirmation email template for the customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Подтверждение бронирования</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
            .booking-summary { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
            .detail-label { font-weight: bold; color: #374151; }
            .detail-value { color: #6b7280; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #6b7280; }
            .success-badge { background: #dcfce7; color: #166534; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">✅ Запрос принят</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">TutSchool - Языковая школа</p>
            </div>
            
            <div class="content">
              <div class="success-badge">
                <strong>🎉 Спасибо за ваш запрос на бронирование!</strong>
              </div>

              <p>Здравствуйте, <strong>${bookingData.name}</strong>!</p>
              
              <p>Мы получили ваш запрос на бронирование и обработаем его в ближайшее время. Наш менеджер свяжется с вами в течение 24 часов для подтверждения деталей.</p>

              <h2 style="color: #2563eb; margin-bottom: 20px;">Детали вашего запроса</h2>
              
              <div class="booking-summary">
                <div class="detail-row">
                  <span class="detail-label">🎓 Услуга:</span>
                  <span class="detail-value">${bookingData.serviceType}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">📅 Дата:</span>
                  <span class="detail-value">${formattedDate}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">🕐 Время:</span>
                  <span class="detail-value">${formattedTime}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">👥 Количество человек:</span>
                  <span class="detail-value">${bookingData.numberOfPeople}</span>
                </div>
                ${
                  bookingData.specialRequests
                    ? `
                <div class="detail-row" style="border-bottom: none;">
                  <span class="detail-label">💬 Ваши пожелания:</span>
                </div>
                <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 10px; border: 1px solid #e5e7eb;">
                  ${bookingData.specialRequests}
                </div>
                `
                    : ""
                }
              </div>

              <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #2563eb; margin-top: 0;">📞 Контактная информация</h3>
                <p style="margin: 10px 0;"><strong>Телефон:</strong> +7 (983) 600-00-00</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> info@tutschool.ru</p>
                <p style="margin: 10px 0;"><strong>Рабочие часы:</strong> Понедельник - Суббота, 9:00 - 19:00</p>
              </div>

              <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #92400e;"><strong>⚠️ Важно:</strong> Если вам нужно изменить или отменить бронирование, пожалуйста, свяжитесь с нами не менее чем за 48 часов до назначенного времени.</p>
              </div>
            </div>
            
            <div class="footer">
              <p style="margin: 0;">Спасибо, что выбрали TutSchool!</p>
              <p style="margin: 5px 0 0 0;">Мы с нетерпением ждем встречи с вами.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to business
    await resend.emails.send({
      from: "TutSchool Booking <noreply@tutschool.ru>",
      to: ["info@tutschool.ru"],
      subject: `🔔 Новое бронирование: ${bookingData.serviceType} - ${formattedDate}`,
      html: businessEmailHtml,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: "TutSchool <noreply@tutschool.ru>",
      to: [bookingData.email],
      subject: `✅ Подтверждение запроса на бронирование - TutSchool`,
      html: customerEmailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
    })
  } catch (error) {
    console.error("Booking API error:", error)
    return NextResponse.json({ error: "Failed to process booking request" }, { status: 500 })
  }
}
