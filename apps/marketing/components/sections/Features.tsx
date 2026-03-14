export default function Features() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {["Image Processing", "Machine Learning", "Voice Recognition", "Chatbot Generate"].map((item) => (
          <div
            key={item}
            className="bg-teal-700 text-white p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-lg font-semibold">{item}</h3>
            <p className="text-sm mt-3 opacity-80">
              Advanced AI capabilities designed for modern teams.
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}