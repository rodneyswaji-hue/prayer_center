import PageWrapper from "../components/layout/PageWrapper";
import { Mail, Phone, Facebook, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "0734 668 826 / 0722 448 952", color: "bg-blue-50" },
    { icon: Mail, label: "Email Us", value: "info@mountainprayer.org", color: "bg-green-50" },
    { icon: Facebook, label: "Follow Us", value: "Mountain Prayer Center", color: "bg-indigo-50" },
  ];

  return (
    <PageWrapper>
      <section className="bg-stone-beige min-h-[80vh] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-spirit-green mb-6"
          >
            Contact Us
          </motion.h2>
          <p className="text-xl text-gray-600 mb-12 italic font-light">
            "Walk with us in this exceptional journey of worship and transformation."
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-spirit-green mb-4`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-spirit-green mb-2 uppercase tracking-widest text-xs">{item.label}</h3>
                <p className="text-gray-700 font-medium break-all">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-spirit-green rounded-3xl text-white">
            <h4 className="text-2xl font-serif mb-2">Visit the Mountain</h4>
            <p className="opacity-80">Machakos County, Kenya — Kyevaluki Mountain Sanctuary</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}