
const AboutSection = () => (
  <section className="max-w-3xl mx-auto my-12 px-4" id="about">
    <div className="bg-white rounded-2xl shadow-card flex p-6 md:p-8 items-center gap-6 md:gap-10 animate-fade-in">
      <img
        src="https://media.licdn.com/dms/image/D4E03AQHQ4hqlnSZNaQ/profile-displayphoto-shrink_400_400/0/1690750620946?e=1721865600&v=beta&t=2kHoYICLKuAf6psKHOQGqXYJWFesg-bODGBnYn264fY"
        alt="Jonathan Newell photo"
        className="w-20 h-20 rounded-full border-2 border-accent object-cover flex-shrink-0"
        loading="lazy"
      />
      <div>
        <h2 className="text-xl font-bold mb-1 text-gray-900">About the Playbook</h2>
        <p className="text-gray-700 mb-2">
          This site was built by <span className="font-semibold">Jonathan Newell</span>, founder of ImprvHealth and prompt engineer, to help demystify AI and show what really works.
        </p>
        <p className="text-gray-500 text-sm">
          Tired of jargon? So am I. This is a field guide for builders, PMs, and creators who want to use AI as more than a buzzword.
        </p>
      </div>
    </div>
  </section>
);
export default AboutSection;
