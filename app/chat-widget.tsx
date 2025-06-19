"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Loader2, GraduationCap } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

const staticResponses: { [key: string]: string } = {
  "hello": "Hello! How can I help you with your learning journey today?",
  "courses": "We offer various courses including English and Chinese language courses for different age groups. Would you like to know more about a specific course?",
  "prices": "Our course prices vary depending on the program and age group. Please visit our website or contact us directly for detailed pricing information.",
  "schedule": "We have flexible scheduling options. Classes are available on weekdays and weekends. Would you like to know more about a specific course schedule?",
  "contact": "You can reach us at:\nPhone: +7 (983) 600-00-00\nEmail: info@tut-school.ru\nAddress: Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
  "default": "I'm here to help! Please ask me about our courses, schedules, or contact information. For more detailed information, you can visit our website or contact us directly."
}

export default function TutSchoolChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm TutSchool AI 🎓\nHow can I help you with your learning today?"
    }
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    for (const [key, response] of Object.entries(staticResponses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    return staticResponses.default
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      const response = getResponse(input)
      setMessages(prev => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#4f46e5] hover:bg-[#4338ca] text-white p-4 rounded-full shadow-lg transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <GraduationCap size={24} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-[#4f46e5] text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <GraduationCap size={20} />
              <h3 className="font-bold">TutSchool Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 h-96 space-y-3">
            {messages.map((message, i) => (
              <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${message.role === "user"
                  ? "bg-[#4f46e5] text-white"
                  : "bg-gray-50 text-gray-800 border border-gray-200"
                  }`}>
                  {message.role === "assistant" && message.content === "Thinking..." ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="animate-spin h-4 w-4" />
                      <span>Thinking...</span>
                    </div>
                  ) : (
                    message.content.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about courses, help, or learning tips..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#4f46e5] hover:bg-[#4338ca]"
              >
                {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Ask"}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              TutSchool AI can make mistakes. Verify important information.
            </p>
          </form>
        </div>
      )}
    </div>
  )
}