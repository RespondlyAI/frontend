type StepperProps = {
  currentStep: 1 | 2 | 3
}

const steps = ["Org Details", "Members", "Review"]

export function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="flex items-center justify-between gap-2">
        {steps.map((step, idx) => {
          const stepNumber = idx + 1
          const isActive = stepNumber === currentStep
          const isComplete = stepNumber < currentStep
          const connectorComplete = stepNumber < currentStep
          const marker = isComplete ? "✓" : String(stepNumber)

          return (
            <div key={step} className="flex min-w-0 flex-1 items-center">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full border ${
                    isActive ? "border-blue-500/50" : isComplete ? "border-emerald-500/50" : "border-zinc-700"
                  }`}
                >
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : isComplete
                          ? "bg-emerald-500 text-white"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {marker}
                  </span>
                </span>
                <span className={`text-xs sm:text-sm ${isActive ? "text-blue-500" : isComplete ? "text-emerald-500" : "text-muted-foreground"}`}>
                  {step}
                </span>
              </div>

              {idx < steps.length - 1 ? (
                <div className={`mx-3 h-px flex-1 ${connectorComplete ? "bg-emerald-500/80" : "bg-zinc-700"}`} />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
