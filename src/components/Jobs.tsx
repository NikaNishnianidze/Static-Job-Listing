import data from "../data.json";
import oval from "../../public/images/Oval Copy.svg";

interface Ijobs {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const Jobs: React.FC<Ijobs> = () => {
  return (
    <>
      <div className="container flex flex-col max-w-[1440px] gap-[40px] mt-[56px] pb-[24px] items-center justify-center ">
        {data.map((job) => {
          return (
            <div
              className="job-container w-[327px] pb-[24px] rounded-[5px] relative px-[19px] bg-container shadow-container"
              key={job.id}
            >
              <div className="desktop">
                <div className="img">
                  <img
                    src={job.logo}
                    alt="job logo"
                    className="w-[48px] h-[48px] relative top-[-20px] "
                  />
                </div>
                <div className="main">
                  <div className="name-new-feature flex items-center gap-[33px]">
                    <div className="name">
                      <h1 className="text-[#5CA5A5] text-[13px] font-bold">
                        {job.company}
                      </h1>
                    </div>
                    <div className="new-feature flex items-center gap-[8px]">
                      <div
                        className={`new ${
                          job.new
                            ? "w-[51px] h-[24px] rounded-[12px] bg-new text-center pt-[2px]"
                            : ""
                        }`}
                      >
                        <p className="text-[#fff] text-[14px] font-bold leading-[-0.108px]">{`${
                          job.new ? "NEW!" : ""
                        }`}</p>
                      </div>
                      <div
                        className={`feature ${
                          job.featured
                            ? "w-[89px] h-[24px] text-center pt-[2px] bg-featured rounded-[12px] px-[8px]"
                            : ""
                        }`}
                      >
                        <p className="text-[#fff] text-[14px] font-bold leading-[-0.108px]">{`${
                          job.featured ? "FEATURED" : ""
                        }`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="position mt-[9px]">
                    <p className="text-[#2B3939] text-[15px] font-bold">
                      {job.position}
                    </p>
                  </div>
                  <div className="day-time-location flex items-center gap-[10px] mt-[8px]">
                    <div className="post-time">
                      <p className="text-[#7C8F8F] text-[16px] font-medium">
                        {job.postedAt}
                      </p>
                    </div>
                    <div className="oval">
                      <img src={oval} alt="oval" />
                    </div>
                    <div className="time">
                      <p className="text-[#7C8F8F] text-[16px] font-medium">
                        {job.contract}
                      </p>
                    </div>
                    <div className="oval">
                      <img src={oval} alt="oval" />
                    </div>
                    <div className="location">
                      <p className="text-[#7C8F8F] text-[16px] font-medium">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="divider w-[279px] h-[1px] mt-[15px] bg-divider"></div>
              <div className="role-level-laguanges flex flex-row flex-wrap mt-[16px] gap-[16px] items-center">
                <div className="role px-[10px] py-[4px] bg-roles/10 rounded-[4px]">
                  <p className="text-[#5CA5A5] text-[16px] font-bold leading-[-0.123px]">
                    {job.role}
                  </p>
                </div>
                <div className="level px-[9px] py-[4px] bg-roles/10 rounded-[4px]">
                  <p className="text-[#5CA5A5] text-[16px] font-bold leading-[-0.123px]">
                    {job.level}
                  </p>
                </div>
                <div className="languages flex flex-wrap items-center">
                  {job.languages.map((language) => {
                    return (
                      <div className="laguage flex flex-wrap items-center mr-[16px] px-[9px] py-[4px] bg-roles/10 rounded-[4px]">
                        <p className="text-[#5CA5A5] text-[16px] font-bold leading-[-0.123px]">
                          {language}
                        </p>
                      </div>
                    );
                  })}
                  <div className="tools flex gap-[16px]">
                    {job.tools?.map((tool) => {
                      return (
                        <div className="px-[8px] py-[4px] rounded-[4px] bg-roles/10 flex flex-row">
                          <p className="text-[#5CA5A5] text-[16px] font-bold leading-[-0.123px]">
                            {tool}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Jobs;
