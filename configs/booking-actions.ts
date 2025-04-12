"use server"

import { neon } from "@neondatabase/serverless"
import { revalidatePath } from "next/cache"
import nodemailer from "nodemailer"

// Define the booking form data type
export type BookingFormData = {
  name: string
  email: string
  phone: string
  bookingDate: string
  bookingTime: string
  serviceType: string
  numberOfPeople: number
  specialRequests?: string
}

// Define the response type
export type BookingResponse = {
  success: boolean
  message: string
}

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function createBooking(formData: FormData): Promise<BookingResponse> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const bookingDate = formData.get("bookingDate") as string
    const bookingTime = formData.get("bookingTime") as string
    const serviceType = formData.get("serviceType") as string
    const numberOfPeople = Number.parseInt(formData.get("numberOfPeople") as string)
    const specialRequests = (formData.get("specialRequests") as string) || ""

    // Validate required fields
    if (!name || !email || !bookingDate || !bookingTime || !serviceType || isNaN(numberOfPeople)) {
      return {
        success: false,
        message: "Пожалуйста, заполните все обязательные поля",
      }
    }

    // Connect to the database
    const sql = neon(process.env.DATABASE_URL!)

    // Insert the booking into the database
    await sql`
      INSERT INTO bookings (
        name, email, phone, booking_date, booking_time, 
        service_type, number_of_people, special_requests, status
      ) 
      VALUES (
        ${name}, ${email}, ${phone}, ${bookingDate}, ${bookingTime}, 
        ${serviceType}, ${numberOfPeople}, ${specialRequests}, 'pending'
      )
    `

    // Send confirmation email
    await sendConfirmationEmail({
      name,
      email,
      bookingDate,
      bookingTime,
      serviceType,
      numberOfPeople,
      specialRequests,
      phone,
    })

    // Revalidate the booking page
    revalidatePath("/booking")

    return {
      success: true,
      message: "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время для подтверждения.",
    }
  } catch (error) {
    console.error("Error creating booking:", error)
    return {
      success: false,
      message: "Произошла ошибка при обработке вашей заявки. Пожалуйста, попробуйте позже.",
    }
  }
}

async function sendConfirmationEmail(booking: BookingFormData) {
  const formattedDate = new Date(booking.bookingDate).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const emailContent = `
    <h2>Подтверждение бронирования</h2>
    <p>Уважаемый(ая) ${booking.name},</p>
    <p>Благодарим вас за бронирование в нашей языковой школе. Ниже приведены детали вашего бронирования:</p>
    <ul>
      <li><strong>Дата:</strong> ${formattedDate}</li>
      <li><strong>Время:</strong> ${booking.bookingTime}</li>
      <li><strong>Услуга:</strong> ${booking.serviceType}</li>
      <li><strong>Количество человек:</strong> ${booking.numberOfPeople}</li>
      ${booking.specialRequests ? `<li><strong>Особые пожелания:</strong> ${booking.specialRequests}</li>` : ""}
    </ul>
    <p>Мы свяжемся с вами в ближайшее время для подтверждения вашего бронирования.</p>
    <p>С уважением,<br>Команда Языковой Школы</p>
  `

  try {
    await transporter.sendMail({
      from: '"Языковая Школа" <no-reply@languageschool.com>',
      to: booking.email,
      subject: "Подтверждение бронирования",
      html: emailContent,
    })
  } catch (error) {
    console.error("Error sending email:", error)
    // We don't throw here to prevent booking creation failure if email fails
  }
}

