import React, { useState, useEffect } from 'react';
import { MailIcon, PhoneIcon } from '../components/icons/Icons';

// New data structure for services
const serviceOptions = {
    'counselling': {
        label: 'Counselling',
        subServices: [
            'Child Counselling',
            'Relationship Counselling',
            'Career Counselling'
        ]
    },
    'coaching': {
        label: 'Coaching',
        subServices: [
            'Business Coach',
            'Life Coach',
            'Career and Growth'
        ]
    },
    'legal-consultation': {
        label: 'Legal Consultation',
        subServices: [
            'Civil Litigation',
            'Criminal Litigation',
            'Corporate Consultation',
            'Non-Litigation'
        ]
    },
    'strategic-consultation': {
        label: 'Strategic Consultation',
        subServices: [
            'Startups',
            'MSME',
            'Corporate',
            'Pain Points Discussion (Competition/Market Challenges)'
        ]
    }
};

type ServiceKey = keyof typeof serviceOptions;


interface FormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    hour: string;
    minute: string;
    ampm: string;
    mainService: string;
    subService: string;
    points: string;
}

interface FormErrors {
    date?: string;
}

const ContactPage: React.FC = () => {
    useEffect(() => {
        document.title = "Contact | Dr. Ashutosh Mishra - Book an Appointment";
    }, []);

    const initialFormData: FormData = {
        name: '',
        email: '',
        phone: '',
        date: '',
        hour: '10',
        minute: '00',
        ampm: 'AM',
        mainService: '',
        subService: '',
        points: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // --- State for dynamic dropdown options ---
    const [availableHours, setAvailableHours] = useState<string[]>(['10', '11']);
    const [availableMinutes, setAvailableMinutes] = useState<string[]>(['00', '15', '30', '45']);

    const allMinutes = ['00', '15', '30', '45'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'mainService') {
            // If main service changes, reset sub-service
            setFormData(prev => ({
                ...prev,
                mainService: value,
                subService: ''
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    // --- Dynamic time validation logic ---
    useEffect(() => {
        let currentHours: string[] = [];
        if (formData.ampm === 'AM') {
            currentHours = ['10', '11'];
        } else { // PM
            currentHours = ['12', '01', '02', '03', '04', '05'];
        }
        setAvailableHours(currentHours);

        // If current hour is not valid for the new AM/PM selection, reset it
        if (!currentHours.includes(formData.hour)) {
            setFormData(prev => ({ ...prev, hour: currentHours[0] }));
        }

        // Handle the 5:00 PM edge case
        if (formData.ampm === 'PM' && formData.hour === '05') {
            setAvailableMinutes(['00']);
            if (formData.minute !== '00') {
                setFormData(prev => ({ ...prev, minute: '00' }));
            }
        } else {
            setAvailableMinutes(allMinutes);
        }

    }, [formData.ampm, formData.hour, formData.minute]);


    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({});

        const selectedDate = new Date(formData.date.replace(/-/g, '\/')); // Use '/' to avoid timezone issues, ensuring local time.
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (isNaN(selectedDate.getTime()) || selectedDate < today) {
            setErrors({ date: 'Please select a future date for your appointment.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');

        const formObject = {
            ...formData,
            access_key: "c3ffc205-4e46-4935-925c-4aa67915c4ae",
            subject: "Dr A. Mishra - New Appointent Booking",
            from_name: "Dr A. Mishra New Appointment",
        };

        const json = JSON.stringify(formObject);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });
            const result = await response.json();
            if (result.success) {
                setSubmitMessage("Thank you for your request. We will contact you back shortly.");
                setFormData(initialFormData);
            } else {
                setSubmitMessage("There was an error submitting your request. Please try again.");
            }
        } catch (error) {
            setSubmitMessage("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16" aria-labelledby="page-heading-contact">
                    <h1 id="page-heading-contact" className="text-4xl font-extrabold font-heading text-primary">Book an Appointment</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        Schedule a consultation to discuss your case. Working hours are 10 AM to 5 PM.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-light-bg p-8 md:p-12 rounded-lg shadow-lg">
                    {/* Contact Info */}
                    <section aria-labelledby="contact-info-heading">
                        <h2 id="contact-info-heading" className="text-2xl font-bold font-heading text-secondary">Contact Information</h2>
                        <p className="mt-3 text-gray-600">
                            For any immediate queries or assistance, you can also reach out via the following channels.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center space-x-3">
                                <MailIcon />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:write2me@dramishra.in" className="text-primary hover:underline">write2me@dramishra.in</a><br />
                                    <a href="mailto:advdrashutosh.mishra@gmail.com" className="text-primary hover:underline">advdrashutosh.mishra@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <PhoneIcon />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <a href="tel:05222060100" className="text-primary hover:underline">05222060100</a>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold">Registered Office</h3>
                                <p className="text-gray-700">#511, 5th Floor, Skyline Plaza 1, Behind Lulu Mall, Sushant Golf City, Lucknow</p>
                            </div>
                        </div>
                    </section>

                    {/* Appointment Form */}
                    <section aria-label="Appointment booking form">
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Your Name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Your Email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter Your Phone Number" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date *</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    />
                                    {errors.date && <p className="mt-1 text-xs text-red-600">{errors.date}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Preferred Time *</label>
                                    <div className="mt-1 flex items-center space-x-2">
                                        <select name="hour" value={formData.hour} onChange={handleInputChange} required className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" aria-label="Hour">
                                            {availableHours.map(h => <option key={h} value={h}>{h}</option>)}
                                        </select>
                                        <select name="minute" value={formData.minute} onChange={handleInputChange} required className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" aria-label="Minute">
                                            {availableMinutes.map(m => <option key={m} value={m}>{m}</option>)}
                                        </select>
                                        <select name="ampm" value={formData.ampm} onChange={handleInputChange} required className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" aria-label="AM/PM">
                                            <option value="AM">AM</option>
                                            <option value="PM">PM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mainService" className="block text-sm font-medium text-gray-700">Service Required *</label>
                                <select id="mainService" name="mainService" value={formData.mainService} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                    <option value="" disabled>-- Select a Service Category --</option>
                                    {Object.entries(serviceOptions).map(([key, { label }]) => (
                                        <option key={key} value={key}>{label}</option>
                                    ))}
                                </select>
                            </div>

                            {formData.mainService && (
                                <div>
                                    <label htmlFor="subService" className="block text-sm font-medium text-gray-700">Specific Area *</label>
                                    <select id="subService" name="subService" value={formData.subService} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary">
                                        <option value="" disabled>-- Select a Specific Area --</option>
                                        {serviceOptions[formData.mainService as ServiceKey]?.subServices.map(sub => (
                                            <option key={sub} value={sub.toLowerCase().replace(/[\s/()]+/g, '-')}>{sub}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div>
                                <label htmlFor="points" className="block text-sm font-medium text-gray-700">Briefly describe your case *</label>
                                <textarea id="points" name="points" value={formData.points} onChange={handleInputChange} rows={4} placeholder="Provide some key points about your case" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button><br></br>
                                {submitMessage && <p className="text-center text-green-600 mb-4" role="alert">{submitMessage}</p>}
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;