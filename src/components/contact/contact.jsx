import { useState } from 'react';
import "./contact.scss"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const webhookUrl = process.env.REACT_APP_DISCORD_WEBHOOK_URL;
        
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `New Contact Form Submission`,
                    embeds: [{
                        title: 'Contact Form Details',
                        fields: [
                            {
                                name: 'Name',
                                value: formData.name,
                                inline: true
                            },
                            {
                                name: 'Email',
                                value: formData.email,
                                inline: true
                            },
                            {
                                name: 'Message',
                                value: formData.message
                            }
                        ],
                        color: 5814783
                    }]
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact" id="contact">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">Full Stack Developer ready for new challenges</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className={`submit-btn ${status}`}
                >
                    {status === 'sending' ? 'Sending...' : 
                     status === 'success' ? 'Message Sent!' : 
                     status === 'error' ? 'Try Again' : 
                     'Send Message'}
                </button>
            </form>
        </div>
    );
}
