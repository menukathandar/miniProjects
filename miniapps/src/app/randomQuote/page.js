'use client'
import React, { useState } from 'react'
import {Button} from "@nextui-org/react";

const RandomQuotes = () => {
    const quotes = [
        "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
        "The purpose of our lives is to be happy. - Dalai Lama",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "Get busy living or get busy dying. - Stephen King",
        "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
        "You must be the change you wish to see in the world. - Mahatma Gandhi",
        "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
        "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "The best way to predict the future is to invent it. - Alan Kay",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
        "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "It is our choices, that show what we truly are, far more than our abilities. - J.K. Rowling"
    ];

    const [quote, setQuote] = useState('');

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={generateQuote} radius="full" className="bg-gradient-to-tr from-black-500 to-grey-500 text-black shadow-lg">
                Generate a Quote
            </Button>
            {quote && (
                <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center', maxWidth: '500px' }}>
                    {quote}
                </div>
            )}
        </div>

    );
};

export default RandomQuotes;
