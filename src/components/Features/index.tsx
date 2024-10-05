import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";


const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 mx-8 lg:mx-8 xl:mx-12">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Explore the key features of Featurize and see how we help you innovate."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
