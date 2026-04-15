export default function GirlsGrid() {
  const girls = [
    {
      name: "Anna Yuri",
      age: 26,
      job: "Yoga Instructor",
      img: "/assets/annaImage02-CjDuc6jt.jpg",
    },
    {
      name: "Bella Martinez",
      age: 28,
      job: "Designer",
      img: "/assets/bellaImage01-DQLHmop-.jpg",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {girls.map((g, i) => (
        <div key={i} className="bg-gray-800 rounded-xl overflow-hidden">

          <img src={g.img} className="w-full h-60 object-cover" />

          <div className="p-4">
            <h2 className="text-xl font-bold">
              {g.name}, {g.age}
            </h2>

            <p className="text-gray-400">{g.job}</p>

            <button className="mt-4 w-full bg-pink-500 py-2 rounded-lg hover:bg-pink-600">
              Book Date
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}