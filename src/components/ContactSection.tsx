'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'sonner';

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
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-red-700">Let’s Connect</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Have questions or need help? Just fill out the form and we’ll get back to you soon.
          </p>
          <div className="mt-8 border-l-4 border-red-600 pl-4 text-sm text-gray-500">
            <p>We typically respond within 24–48 hours.</p>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white shadow-xl border border-red-100 p-8 rounded-xl">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                {['name', 'email', 'mobile', 'message'].map((field) => (
                  <div key={field} className="relative">
                    <Field
                      name={field}
                      as={field === 'message' ? 'textarea' : 'input'}
                      placeholder=" "
                      rows={field === 'message' ? 4 : undefined}
                      className={`peer w-full px-4 pt-6 pb-2 border rounded-md focus:outline-none
                        focus:border-red-600 placeholder-transparent transition
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
                        peer-focus:text-red-600"
                    >
                      {field === 'mobile'
                        ? 'Mobile Number'
                        : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md shadow-md transition"
                >
                  Send Message
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
