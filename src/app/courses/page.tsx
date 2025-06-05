"use client";
import HeroSection from '../../components/HeroSection'
import StatsSection from '../../components/StatsSection'
import Image from "next/image";

const courses = [
    { title: "Fashion Designer", image: "/assets/images/courses/fashion_designer.webp", description: "Master the world of style, fabrics, and fashion industry design techniques." },
    { title: "Sampling Tailor", image: "/assets/images/courses/sampling_tailor.webp", description: "Learn how to stitch and cut fabric samples for custom production." },
    { title: "General Duty Assistant", image: "/assets/images/courses/gen_duty_assistant.webp", description: "Assist hospital staff and patients in basic healthcare tasks." },
    { title: "Emergency Care Associate", image: "/assets/images/courses/emergency_care.webp", description: "Get trained to handle critical care and emergency aid." },
    { title: "Data Entry Operator", image: "/assets/images/courses/data_entry.jpg", description: "Improve your typing speed and accuracy with real-time data tools." },
    { title: "Banking & Finance", image: "/assets/images/courses/banking.jpg", description: "Understand modern banking, investments, and risk management." },
    { title: "Microfinance Executive", image: "/assets/images/courses/finance.jpg", description: "Help communities with financial services and planning." },
    { title: "Solar PV Installer", image: "/assets/images/courses/solar.jpg", description: "Install sustainable solar energy systems professionally." },
    { title: "Accounts Assistant", image: "/assets/images/courses/account_ass.jpg", description: "Bookkeeping, invoices, and GST for small businesses." },
    { title: "Traditional Hand Embroidery", image: "/assets/images/courses/hand_emb.jpg", description: "Revive the beauty of traditional threadwork." },
    { title: "Bamboo Weavers", image: "/assets/images/courses/bamboo.jpg", description: "Craft eco-friendly products from bamboo with skill." },
    { title: "Software Analytics", image: "/assets/images/courses/software.jpg", description: "Analyze code quality, performance, and system behavior." },
];
export default function page() {
    return (
        <>
            <HeroSection title="Our Course's" currentPage="course" />
            <section className="bg-gray-100 min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-sky-700 mb-8 text-center">All Courses</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                        {courses.map((course, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-sky-500 border transition-all duration-300 group"
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-sky-600 mb-1">{course.title}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <StatsSection />

        </>
    )
}