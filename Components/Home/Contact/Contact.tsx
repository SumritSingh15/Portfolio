"use client";
import SectionHeading from "@/Components/Helper/SectionHeading";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

// ── Success Toast ─────────────────────────────────────────────────────────────
function SuccessToast({ progress }: { progress: number }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
            >
                {/* Message row */}
                <div className="flex items-center gap-3 px-4 py-3">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 14, stiffness: 280, delay: 0.1 }}
                    >
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    </motion.div>
                    <p className="text-emerald-300 font-medium text-sm">
                        Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                </div>

                {/* Animated progress bar: fills left → right then vanishes */}
                <div className="h-[3px] bg-emerald-900/40 w-full">
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

// ── Contact Section ───────────────────────────────────────────────────────────
const Contact = () => {
    const [name,    setName]    = useState("");
    const [email,   setEmail]   = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error,   setError]   = useState("");
    const [progress, setProgress] = useState(0);

    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Clear interval on unmount
    useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

    // Run progress bar after success
    useEffect(() => {
        if (!success) return;
        setProgress(0);
        let val = 0;
        intervalRef.current = setInterval(() => {
            val += 2;
            setProgress(val);
            if (val >= 100) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                setTimeout(() => {
                    setSuccess(false);
                    setProgress(0);
                }, 400);
            }
        }, 20);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [success]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (email.toLowerCase().trim() === "sumrit578singh@gmail.com") {
            setError("Please use your own email address.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify({ name, email, subject, message }),
            });

            const data = await res.json() as { error?: string; success?: boolean };

            if (!res.ok) {
                setError(data.error ?? "Something went wrong. Please try again.");
                return;
            }

            // Reset form
            setName(""); setEmail(""); setSubject(""); setMessage("");
            setSuccess(true);
        } catch {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-16 bg-gray-950/20">
            <SectionHeading
                title_1="Get In"
                title_2="Touch"
                description="Have a project in mind or just want to say hi? I'd love to hear from you"
            />

            <div className="w-[90%] md:w-[80%] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* ── Left: contact info ── */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Let&apos;s Talk</h3>
                            <p className="text-gray-400">
                                I am always open to discussing new projects, creating ideas, or opportunities to be part of
                                your vision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((item) => (
                                <a
                                    href={item.href}
                                    key={item.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-gray-800/60 border border-white/8 shadow-md rounded-xl hover:scale-[1.02] hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 transition-colors">
                                        <item.icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">{item.label}</p>
                                        <p className="font-medium text-gray-200">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div>
                            <h4 className="text-lg font-medium mb-4 text-gray-200">Follow me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => {
                                    if (!link) return null;
                                    return (
                                        <motion.a
                                            href={link.href}
                                            key={link.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-gray-800/70 border border-white/8 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <link.icon className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-800/60 border border-white/8 rounded-2xl p-8 space-y-6"
                        >
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <Input
                                        id="name" name="name" placeholder="John Smith"
                                        className="bg-gray-900/80 border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-blue-500/50"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <Input
                                        id="email" name="email" type="email" placeholder="your@email.com"
                                        className="bg-gray-900/80 border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-blue-500/50"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <Input
                                    id="subject" name="subject" placeholder="Project Enquiry"
                                    className="bg-gray-900/80 border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-blue-500/50"
                                    value={subject} onChange={(e) => setSubject(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <Textarea
                                    id="message" name="message" placeholder="Tell me about your project..."
                                    rows={5}
                                    className="bg-gray-900/80 border-white/10 text-gray-200 placeholder:text-gray-500 focus:border-blue-500/50 h-40"
                                    value={message} onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm"
                                >
                                    {error}
                                </motion.p>
                            )}

                            {/* Success toast */}
                            {success && <SuccessToast progress={progress} />}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-500 transition-colors"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
