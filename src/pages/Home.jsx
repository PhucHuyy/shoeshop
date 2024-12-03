import ExperienceList from "@/components/Home/ExperienceList";
import NewComer from "@/components/Home/NewComer";
import Note from "@/components/Home/Note";
import Slider from "@/components/Home/Slider";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5 bg-red-50">
      <Slider />
      <NewComer />
      <Note />
      <ExperienceList />
    </div>
  );
};

export default HomePage;
