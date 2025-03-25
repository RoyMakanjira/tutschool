"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: "user" | "agent"; content: string }[]>([
    {
      type: "agent",
      content: "Hello! How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { type: "user", content: input }])
    setInput("")

    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "agent",
          content: "Thank you for your message. One of our team members will respond shortly.",
        },
      ])
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-red-500 text-white p-6 rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Open live chat</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96  bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-bold">Live Chat</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, i) => (
              <div key={i} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user" ? "bg-red-500 text-white" : "bg-neutral-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

