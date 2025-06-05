'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const initialValues = {
    name: '',
    mobile: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces')
      .required('Name is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Thanks for reaching out! We'll get back to you shortly.");
    resetForm();
  };

  return (
    <>
      {/* Contact Form */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">LEAVE US YOUR INFO</h2>
          <p className="text-sm text-gray-500 mt-2">AND WE WILL GET BACK TO YOU.</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="mt-10 space-y-8">
                {['name', 'email', 'mobile', 'message'].map((field) => (
                  <div key={field} className="relative">
                    <Field
                      name={field}
                      as={field === 'message' ? 'textarea' : 'input'}
                      placeholder={
                        field.charAt(0).toUpperCase() +
                        field.slice(1).replace('mobile', 'Mobile Number') +
                        (field === 'message' ? '' : '*')
                      }
                      rows={field === 'message' ? 4 : undefined}
                      className={`w-full px-4 pt-6 pb-2 border rounded-md focus:outline-none focus:border-sky-600 peer placeholder-transparent
                        ${errors[field] && touched[field] ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    <label
                      htmlFor={field}
                      className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                        peer-placeholder-shown:top-4
                        peer-placeholder-shown:text-base
                        peer-placeholder-shown:text-gray-400
                        peer-focus:top-2
                        peer-focus:text-sm
                        peer-focus:text-sky-600"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1).replace('mobile', 'Mobile Number')}
                    </label>
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-md shadow-lg transition"
                >
                  SUBMIT NOW
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      {/* Contact Info */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
          {[{
            Icon: Phone,
            title: 'Phone',
            text: 'Feel free to call us anytime.',
            link: 'tel:+1234567890',
            label: '0121-4352553'
          }, {
            Icon: Mail,
            title: 'Email',
            text: 'Reach out via email for inquiries.',
            link: 'mailto:contact@sachineduskills.org',
            label: 'Sachineduskills@yahoo.com'
          }, {
            Icon: MapPin,
            title: 'Location',
            text: 'C-86, Ganga Vatika, Ganga Nagar, Meerut, U.P.Pin: 250001',
            link: 'https://maps.app.goo.gl/9xtVDABYssYgNPSu9',
            label: 'View On Google Map'
          }].map(({ Icon, title, text, link, label }, i) => (
            <div key={i}>
              <Icon className="mx-auto mb-4" size={28} />
              <h4 className="font-bold text-lg mb-2">{title}</h4>
              <p className="text-sm mb-2 whitespace-pre-line">{text}</p>
              <a href={link} className="text-sky-400 text-sm hover:underline" target="_blank" rel="noreferrer">
                {label}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
