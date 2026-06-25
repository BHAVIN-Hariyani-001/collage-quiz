import { useState } from "react";
import { questions } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

type Stage = "welcome" | "quiz" | "result";

interface QuizProps {
  logoUrl: string;
}

export function Quiz({ logoUrl }: QuizProps) {
  const [stage, setStage] = useState<Stage>("welcome");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = questions.length;
  const correct = answers.reduce(
    (acc, a, i) => acc + (a === questions[i].answer ? 1 : 0),
    0,
  );
  const wrong = answers.length - correct;
  const percentage = Math.round((correct / total) * 100);

  function start() {
    setStage("quiz");
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
  }

  function next() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);
    if (current + 1 >= total) {
      setStage("result");
    } else {
      setCurrent(current + 1);
    }
  }

  function restart() {
    setStage("welcome");
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
  }

  if (stage === "welcome") {
    return (
      <Card className="quiz-card p-10 text-center">
        <img src={logoUrl} alt="College logo" className="mx-auto h-28 w-28 rounded-full object-cover shadow-lg ring-4 ring-primary/20" />
        <h2 className="mt-6 text-3xl font-bold text-primary">Welcome to the BCA Quiz</h2>
        <p className="mt-3 text-muted-foreground">
          Test your knowledge on Computer Fundamentals, Internet, HTML, SEO, Programming Basics
          and Operating Systems.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <div className="rounded-lg bg-secondary p-4">
            <div className="text-2xl font-bold text-primary">{total}</div>
            <div className="text-muted-foreground">Questions</div>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-muted-foreground">Options each</div>
          </div>
          <div className="rounded-lg bg-secondary p-4">
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-muted-foreground">Time</div>
          </div>
        </div>
        <Button size="lg" className="mt-8 w-full sm:w-auto" onClick={start}>
          Start Quiz
        </Button>
      </Card>
    );
  }

  if (stage === "quiz") {
    const q = questions[current];
    const progress = ((current) / total) * 100;
    return (
      <Card className="quiz-card p-8">
        <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-medium text-primary">{q.category}</span>
          <span>
            Question {current + 1} / {total}
          </span>
        </div>
        <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{q.question}</h3>
        <div className="mt-6 grid gap-3">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isAnswer = i === q.answer;
            const locked = selected !== null;
            let extra = "";
            if (locked) {
              if (isAnswer) extra = "border-green-500 bg-green-100 text-green-900";
              else if (isSelected) extra = "border-red-500 bg-red-100 text-red-900";
              else extra = "opacity-60";
            }
            return (
              <button
                key={i}
                onClick={() => selected === null && setSelected(i)}
                disabled={locked}
                className={`option-btn ${isSelected && !locked ? "option-btn-active" : ""} ${extra}`}
              >
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span className="flex-1 text-left">{opt}</span>
                {locked && isAnswer && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                {locked && isSelected && !isAnswer && <XCircle className="h-5 w-5 text-red-600" />}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={next} disabled={selected === null} size="lg">
            {current + 1 === total ? "Finish" : "Next Question"}
          </Button>
        </div>
      </Card>
    );
  }

  // result
  return (
    <Card className="quiz-card p-10 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <Trophy className="h-10 w-10 text-primary" />
      </div>
      <h2 className="mt-4 text-3xl font-bold text-primary">Quiz Completed!</h2>
      <p className="mt-2 text-muted-foreground">Here is your performance summary.</p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl bg-secondary p-5">
          <div className="text-3xl font-bold text-foreground">{total}</div>
          <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">Total</div>
        </div>
        <div className="rounded-xl bg-green-50 p-5">
          <CheckCircle2 className="mx-auto h-6 w-6 text-green-600" />
          <div className="mt-1 text-3xl font-bold text-green-700">{correct}</div>
          <div className="text-xs uppercase tracking-wide text-green-700/70">Correct</div>
        </div>
        <div className="rounded-xl bg-red-50 p-5">
          <XCircle className="mx-auto h-6 w-6 text-red-600" />
          <div className="mt-1 text-3xl font-bold text-red-700">{wrong}</div>
          <div className="text-xs uppercase tracking-wide text-red-700/70">Wrong</div>
        </div>
        <div className="rounded-xl bg-primary p-5 text-primary-foreground">
          <div className="text-3xl font-bold">{percentage}%</div>
          <div className="mt-1 text-xs uppercase tracking-wide opacity-80">Score</div>
        </div>
      </div>

      <div className="mt-10 text-left">
        <h3 className="mb-4 text-xl font-bold text-primary">Review your answers</h3>
        <div className="grid gap-4">
          {questions.map((q, i) => {
            const userIdx = answers[i];
            const isCorrect = userIdx === q.answer;
            return (
              <div
                key={i}
                className={`rounded-xl border p-4 ${
                  isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Q{i + 1} · {q.category}
                  </div>
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 shrink-0 text-red-600" />
                  )}
                </div>
                <p className="mt-2 font-semibold text-foreground">{q.question}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {q.options.map((opt, oi) => {
                    const isUser = oi === userIdx;
                    const isAnswer = oi === q.answer;
                    const base =
                      "flex items-start gap-2 rounded-lg border p-3 text-sm transition-colors";
                    let styles = "border-border bg-white text-foreground";
                    if (isAnswer) styles = "border-green-300 bg-green-100 text-green-900";
                    if (isUser && !isAnswer)
                      styles = "border-red-300 bg-red-100 text-red-900";
                    return (
                      <div key={oi} className={`${base} ${styles}`}>
                        <span className="option-letter shrink-0">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <div className="flex-1">
                          <div>{opt}</div>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {isUser && (
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                  isAnswer
                                    ? "bg-green-600 text-white"
                                    : "bg-red-600 text-white"
                                }`}
                              >
                                Your answer
                              </span>
                            )}
                            {isAnswer && (
                              <span className="rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                                Correct
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {userIdx === undefined && (
                  <p className="mt-3 text-sm font-medium text-red-700">
                    You did not answer this question.
                  </p>
                )}

              </div>
            );
          })}
        </div>
      </div>

      <Button size="lg" className="mt-8" onClick={restart}>
        <RotateCcw className="mr-2 h-4 w-4" />
        Restart Quiz
      </Button>

    </Card>
  );
}
