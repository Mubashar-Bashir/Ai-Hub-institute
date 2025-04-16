// src/ai/flows/ai-chatbot-faq.ts
'use server';

/**
 * @fileOverview An AI chatbot for answering FAQs about the AI-HUB Institute.
 *
 * - answerQuestion - A function that answers user questions about the institute.
 * - AIChatbotFAQInput - The input type for the answerQuestion function.
 * - AIChatbotFAQOutput - The return type for the answerQuestion function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const AIChatbotFAQInputSchema = z.object({
  question: z.string().describe('The question to be answered.'),
});
export type AIChatbotFAQInput = z.infer<typeof AIChatbotFAQInputSchema>;

const AIChatbotFAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AIChatbotFAQOutput = z.infer<typeof AIChatbotFAQOutputSchema>;

export async function answerQuestion(input: AIChatbotFAQInput): Promise<AIChatbotFAQOutput> {
  return aiChatbotFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiChatbotFAQPrompt',
  input: {
    schema: z.object({
      question: z.string().describe('The question to be answered.'),
    }),
  },
  output: {
    schema: z.object({
      answer: z.string().describe('The answer to the question.'),
    }),
  },
  prompt: `You are an AI chatbot for the AI-HUB Institute. Answer the following question about the institute:\n\nQuestion: {{{question}}}`,
});

const aiChatbotFAQFlow = ai.defineFlow<
  typeof AIChatbotFAQInputSchema,
  typeof AIChatbotFAQOutputSchema
>({
  name: 'aiChatbotFAQFlow',
  inputSchema: AIChatbotFAQInputSchema,
  outputSchema: AIChatbotFAQOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
