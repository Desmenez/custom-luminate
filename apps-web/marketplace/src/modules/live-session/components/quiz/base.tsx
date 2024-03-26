import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@luminate/ui'

interface QuizAccordionProps {
  quizId: string
  quizNumber?: number
  totalQuiz?: number
  children: React.ReactNode
}

export const QuizAccordion: React.FC<QuizAccordionProps> = ({
  quizId,
  quizNumber,
  totalQuiz,
  children,
}) => {
  return (
    <Accordion type="single" collapsible className="bg-gray-800 rounded-md" defaultValue={quizId}>
      <AccordionItem value={quizId}>
        <AccordionTrigger className="py-2 px-2">
          ข้อที่ {quizNumber}/{totalQuiz}
        </AccordionTrigger>
        <AccordionContent>
          <div className="pb-4">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
