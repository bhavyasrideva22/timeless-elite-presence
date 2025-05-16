
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // This would be replaced with actual form submission logic
    console.log("Form submitted:", data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully. I'll be in touch soon.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
          className={`w-full border ${errors.name ? "border-black" : "border-gray-300"} p-3 focus:outline-none focus:border-black`}
        />
        {errors.name && (
          <p className="mt-1 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className={`w-full border ${errors.email ? "border-black" : "border-gray-300"} p-3 focus:outline-none focus:border-black`}
        />
        {errors.email && (
          <p className="mt-1 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm uppercase tracking-wider mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          className={`w-full border ${errors.subject ? "border-black" : "border-gray-300"} p-3 focus:outline-none focus:border-black`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Message is required" })}
          className={`w-full border ${errors.message ? "border-black" : "border-gray-300"} p-3 focus:outline-none focus:border-black`}
        />
        {errors.message && (
          <p className="mt-1 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="border border-black bg-black text-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
