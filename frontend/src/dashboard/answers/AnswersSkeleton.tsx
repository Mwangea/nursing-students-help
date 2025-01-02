

export function AnswersSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((key) => (
        <div key={key} className="bg-white rounded-xl shadow-sm p-6 animate-pulse">
          <div className="flex justify-between">
            <div className="h-6 w-24 bg-gray-200 rounded-full" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>
          <div className="mt-4 h-6 w-3/4 bg-gray-200 rounded" />
          <div className="mt-3 space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
            <div className="h-4 w-4/6 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}