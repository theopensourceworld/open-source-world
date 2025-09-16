import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, Globe, Monitor } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Build responsive, fast, and secure websites using modern technologies.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Custom Software",
    description:
      "Tailor-made software solutions designed to solve your unique business challenges.",
    icon: <Code className="w-8 h-8 text-green-600" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Craft visually appealing and user-friendly interfaces for your digital products.",
    icon: <Monitor className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Consulting",
    description:
      "Get expert advice and guidance to enhance your digital strategy and execution.",
    icon: <Briefcase className="w-8 h-8 text-orange-600" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Our Services
        </motion.h1>
        <p className="text-lg text-gray-600 mb-12">
          We provide a wide range of digital solutions to help your business
          grow and succeed.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
