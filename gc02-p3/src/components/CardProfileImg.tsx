export default function CardProfileImg() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-5 mx-5">
          <a href="#" className="group relative block bg-black">
            <img
              alt="durant"
              src="https://i.pinimg.com/736x/d4/56/39/d4563963d37330ca6970c9425f8d279c.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Kevin
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Durant</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    NBA forward known for his scoring ability, Kevin Durant has
                    won multiple championships and MVP awards. Born on September
                    29, 1988, he plays for the Phoenix Suns, recognized as one
                    of the greatest scorers in basketball history.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black">
            <img
              alt="lebron"
              src="https://i.pinimg.com/736x/51/cb/3f/51cb3f5642a8961420f1fb7b24d52692.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Lebron
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">James</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    A legendary NBA player, LeBron plays for the Los Angeles
                    Lakers. Born on December 30, 1984, he’s a four-time champion
                    and MVP, known for his all-around greatness and impact on
                    and off the court.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black">
            <img
              alt="giannis"
              src="https://i.pinimg.com/736x/7e/dc/78/7edc7898deed7b6c90ccd834b991833f.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Giannis
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                Antetokounmpo
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Nicknamed the Greek Freak, Giannis is a dominant forward
                    for the Milwaukee Bucks. Born on December 6, 1994, he is a
                    multiple-time MVP and NBA champion, celebrated for his
                    versatility and athleticism.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="#" className="group relative block bg-black">
            <img
              alt="tatum"
              src="https://i.pinimg.com/736x/ee/bb/63/eebb6351f24909cb1876556cffa38e16.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Jayson
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">Tatum</p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    A rising NBA star, Jayson Tatum is a forward for the Boston
                    Celtics. Born on March 3, 1998, he is known for his smooth
                    scoring, versatility, and leadership on the court.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
