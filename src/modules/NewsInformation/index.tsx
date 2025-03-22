import Spinner from "@components/Spinner";
import { NewsInterface } from "@interfaces/newsInterface";
import NewInformation from "./components/NewInformation/NewInformation";

interface NewInformationProps {
  news: NewsInterface[] | [];
  isLoading: boolean;
}

const NewsInformation = ({ news, isLoading }: NewInformationProps) => {
  if (news.length === 0) {
    return <div>No news to show.</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      {news.map((newData, index) => (
        <NewInformation key={index} newData={newData} />
      ))}
    </div>
  );
};

export default NewsInformation;
