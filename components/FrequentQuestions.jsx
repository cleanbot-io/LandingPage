import { useState } from 'react';

function FrequentQuestions() {
    const [faqItems, setFaqItems] = useState([
        { question: "How heavy is this robot?", answer: "Answer 1", showAnswer: false },
        { question: "Requirements for housekeepers?", answer: "Answer 2", showAnswer: false },
        { question: "Do we really get tips?", answer: "Answer 3", showAnswer: false },
        { question: "Report inappropriate customers", answer: "Absolutely report them, we need to keep track of the bad clients, and once they have gotten a few bad marks by another cleaner we terminate access to our service, we take this serious", showAnswer: false },

    ]);

    const toggleAnswer = (index) => {
        const updatedFaqItems = [...faqItems];
        updatedFaqItems[index].showAnswer = !updatedFaqItems[index].showAnswer;
        setFaqItems(updatedFaqItems);
    };

    const getArrowDirection = (index) => {
        return faqItems[index].showAnswer ? "rotate(180deg)" : "rotate(0deg)";
    };

    return (
        <div className="bg-white justify-center items-center pt-10">
            <div className="text-center">
                <h1 className="font-mono text-4xl font-bold tracking-tight">
                    Your questions, answered
                </h1>
            </div>

            <div className="pt-10 w-full max-w-[50rem] mx-auto">
                {faqItems.map((item, index) => (
                    <div key={index} className="py-4">
                        <div className="flex items-start">
                            <div className="font-mono text-xl font-thin">{item.question}</div>
                            <button onClick={() => toggleAnswer(index)} className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform" viewBox="0 0 20 20" fill="currentColor" style={{ transform: getArrowDirection(index) }}>
                                    <path fillRule="evenodd" d="M10 3a1 1 0 0 0-1 1v7.293l-3.646-3.647a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 1 0-1.414-1.414L11 11.293V4a1 1 0 0 0-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div className="pt-6 font-mono text-base font-thin">
                            {item.showAnswer && <div>{item.answer}</div>}
                        </div>
                        <hr className="my-4 border-black border-b-2" />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default FrequentQuestions;
