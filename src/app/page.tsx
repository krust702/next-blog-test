import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl  sm:text-6xl font-extrabold mb-6">
          Привіт 👋 Я Павло
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto">
          Тут мій блог про <span className="font-semibold">технології</span>,{" "}
          <span className="font-semibold">життя</span> та все, що мене драйвить
          🚀
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="p-6 bg-white shado  w rounded-2xl hover:shadow-lg transition">
          <h2 className="text-xl text-gray-600 font-bold mb-3">
            📝 Останні пости
          </h2>
          <p className="text-gray-500 mb-4">
            Свіжі статті з блогу, які можна почитати у вільний час.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Читати блог
          </Link>
        </article>

        <article className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition">
          <h2 className="text-xl text-gray-600 font-bold mb-3">🙋‍♂️ Про мене</h2>
          <p className="text-gray-600 mb-4">
            Хто я, чим займаюсь та як прийшов у розробку.
          </p>
          <a
            href="/about"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Дізнатись більше
          </a>
        </article>

        <article className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition">
          <h2 className="text-xl  text-gray-600 font-bold mb-3">📬 Контакти</h2>
          <p className="text-gray-500 mb-4">
            Є ідеї чи пропозиції? Пиши мені у будь-який час.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Зв’язатись
          </a>
        </article>
      </section>
    </main>
  );
}
