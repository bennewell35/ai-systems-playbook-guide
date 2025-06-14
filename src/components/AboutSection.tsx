
// No founder photo, just text bio.
const AboutSection = () => (
  <section className="max-w-3xl mx-auto my-16 px-4" id="about">
    <div className="bg-white rounded-3xl shadow-card flex p-8 md:p-12 items-center gap-7 md:gap-14 animate-fade-in">
      <div>
        <h2 className="text-2xl font-extrabold mb-1 text-gray-900 leading-snug">About the Playbook</h2>
        <p className="text-gray-700 mb-2 text-base md:text-lg">
          This site was built by{" "}
          <span className="font-semibold">Jonathan Newell</span>
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
