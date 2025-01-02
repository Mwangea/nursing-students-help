

export function SupportCard() {
  return (
    <div className="px-4 mt-8">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-sm font-medium text-yellow-400">Need Help?</h3>
        <p className="mt-2 text-sm text-gray-300">
          Our support team is available 24/7 to assist you.
        </p>
        <button className="mt-3 w-full bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
}