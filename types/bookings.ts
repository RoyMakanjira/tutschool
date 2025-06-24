export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  bookingDate?: string;
  bookingTime?: string;
  numberOfPeople?: string;
  submit?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  bookingDate: string;
  bookingTime: string;
  numberOfPeople: number;
  specialRequests: string;
}

export type ServiceGroup = {
  group: string;
  services: string[];
};