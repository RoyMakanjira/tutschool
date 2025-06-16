import OpenAI from 'openai';
import { streamText } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages) {
      return new Response(
        JSON.stringify({ error: 'No messages provided' }),
        { status: 400 }
      );
    }

    // TutSchool-specific system message
    const systemMessage = {
      role: 'system',
      content: `You are TutSchool AI, an assistant for TutSchool's educational platform. 
      Be friendly, encouraging, and focused on learning. TutSchool offers:
      - Personalized tutoring
      - Interactive lessons
      - Progress tracking
      - Various subjects (Math, Science, Languages, etc.)
      
      Help users with:
      - Course information
      - Learning strategies
      - Study tips
      - Platform navigation
      - Homework help (but don't give direct answers)
      
      Style guidelines:
      - Use emojis sparingly (mainly 📚🎓✏️)
      - Keep responses clear and educational
      - Break complex concepts into steps
      - Encourage growth mindset`
    };

    // Create the stream
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
      stream: true
    });

    // Create a transform stream to convert OpenAI's format to text chunks
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || '';
          controller.enqueue(encoder.encode(content));
        }
        controller.close();
      }
    });

    // Return the streaming response
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

  } catch (error) {
    console.error('OpenAI API error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { status: 500 }
    );
  }
}