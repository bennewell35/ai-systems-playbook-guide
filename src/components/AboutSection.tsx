
const AboutSection = () => (
  <section className="max-w-3xl mx-auto my-16 px-4" id="about">
    <div className="bg-white rounded-3xl shadow-card flex p-8 md:p-12 items-center gap-7 md:gap-14 animate-fade-in">
      <img
        src="https://media.licdn.com/dms/image/D4E03AQHQ4hqlnSZNaQ/profile-displayphoto-shrink_400_400/0/1690750620946?e=1721865600&v=beta&t=2kHoYICLKuAf6psKHOQGqXYJWFesg-bODGBnYn264fY"
        alt="Jonathan Newell photo"
        className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-accent object-cover flex-shrink-0 shadow-lg transition-all duration-200 hover:scale-105"
        loading="lazy"
      />
      <div>
        <h2 className="text-2xl font-extrabold mb-1 text-gray-900 leading-snug">About the Playbook</h2>
        <p className="text-gray-700 mb-2 text-base md:text-lg">
          This site was built by{" "}
          <a
            href="https://www.linkedin.com/in/jonathan-benjamin-newell-5b450432/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent font-semibold"
          >
            Jonathan Newell
          </a>
          , founder of ImprvHealth and prompt engineer, to help demystify AI and show what really works.
        </p>
        <p className="text-gray-500 text-sm md:text-base">
          Tired of jargon? So am I. This is a field guide for builders, PMs, and creators who want to use AI as more than a buzzword.
        </p>
      </div>
    </div>
  </section>
);
export default AboutSection;
