import SectionHeading from '@/Components/Helper/SectionHeading'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Textarea } from '@/Components/ui/textarea'
import { contactInfo, socialLinks } from '@/data'
import { error } from 'console'
import { DivideCircle, Send, Target } from 'lucide-react'
import React, { use, useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const [progress, setProgress] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");

        if (
            !name.trim() ||
            !email.trim() ||
            !subject.trim() ||
            !message.trim()
        ) {
            setError("Please fill all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return;
        }

        setLoading(true);

        try {
            // fake API call
            await new Promise((resolve) =>
                setTimeout(resolve, 2000)
            );

            setSuccess(true);

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setProgress(0);

            let value = 0;

            const interval = setInterval(() => {
                value += 2;

                setProgress(value);

                if (value >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        setSuccess(false);
                        setProgress(0);
                    }, 500);
                }
            }, 20);
        } catch {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='py-16 bg-gray-100 dark:bg-gray-950'>
            <SectionHeading title_1='Get In' title_2='Touch' description="have a project in mind or just want to say hi? I'd love to hear form you" />
            <div className='w-[80%] mx-auto'>
                <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/*contact form */}
                    <div className='space-y-8'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-4'>Let's Talk</h3>
                            <p className='text-muted-foreground'>I am always open to discussing new projects, creating ideas, or opportunities to be part of
                                your vision.</p>
                        </div>
                        <div className='space-y-4'>{contactInfo.map((item) => {
                            return (
                                <a href={item.href} key={item.label} target="_blank" className='flex items-center gap-4p-4 bg-white
                             dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group'>
                                    <div className='w-12 h-12 ml-2 rounded-lg bg-blue-600/10 flex items-center justify-center group-hover:bg-blue-600/20
                                transition-colors'>
                                        <item.icon className='w-5 h-5  text-blue-500 dark:text-white' />
                                    </div>
                                    <div className='m-2 '>
                                        <p className='text-sm text-muted-foreground'>
                                            {item.label}
                                        </p>
                                        <p className=' font-medium'>{item.value}</p>
                                    </div>
                                </a>
                            )
                        })}</div>
                        {/* social icons */}
                        <div>
                            <h4 className='text-lg font-medium mb-4'>Follow me</h4>
                            <div className='flex gap-3'>{socialLinks.map((link) => {
                                return (
                                    <a href={link.href} key={link.label} target='_blank' className='w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex
                            items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors '>
                                        <link.icon className='w-5 h-5' />
                                    </a>
                                )
                            })}</div>
                        </div>
                    </div>
                    {/*contact form */}
                    <div>
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input id="name" name="name" placeholder="John Smith" className="bg-gray-100"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" name="email" type="email" placeholder="john578@example.com" className="bg-gray-100"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input id="subject" name="subject" placeholder="Project Enquiry" className="bg-gray-100"
                                    value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} className="bg-gray-100 h-40"
                                    value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            {error && (
                                <p className="text-red-500 text-sm">
                                    {error}
                                </p>
                            )}

                            {success && (
                                <div className="space-y-2">
                                    <p className="text-green-500 font-medium">👍 Message sent successfully</p>
                                    <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 transition-all duration-100" style={{
                                            width: `${progress}%`,
                                        }}
                                        />
                                    </div>
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full cursor-pointer" disabled={loading}>
                                <Send className="w-4 h-4 mr-2" />
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
