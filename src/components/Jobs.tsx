import React, { useState } from "react";
import data from "../data.json";
import oval from "../../public/images/Oval Copy.svg";

interface Job {
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

const Jobs: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterClick = (filter: string) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filterJob = (job: Job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => tags.includes(filter));
  };

  const filteredJobs = filters.length === 0 ? data : data.filter(filterJob);

  return (
    <div className="container flex flex-col max-w-[1440px] gap-[40px] mt-[56px] relative pb-[24px] items-center justify-center">
      {filters.length > 0 && (
        <div className="filter-bar bg-white shadow-lg rounded-md p-4 relative top-[-80px] flex items-center gap-4 flex-wrap w-[327px] dk:w-[1110px]">
          {filters.map((filter) => (
            <div
              key={filter}
              className="flex items-center bg-roles/10 text-[#5CA5A5] font-bold px-2 py-1 rounded"
            >
              {filter}
              <button
                onClick={() => removeFilter(filter)}
                className="ml-2 bg-[#5CA5A5] text-white px-2 rounded"
              >
                ×
              </button>
            </div>
          ))}
          <button
            onClick={clearFilters}
            className="ml-auto text-[#5CA5A5] font-bold hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      {filteredJobs.map((job) => (
        <div
          key={job.id}
          className="job-container w-[327px] pb-[24px] rounded-[5px] relative px-[19px] bg-container shadow-container dk:w-[1110px] dk:py-[32px] dk:pr-[18px] dk:pl-[35px]"
        >
          <div className="div dk:flex dk:flex-row dk:items-center dk:justify-between">
            <div className="desktop dk:flex dk:flex-row dk:gap-[24px]">
              <div className="img">
                <img
                  src={job.logo}
                  alt="job logo"
                  className="w-[48px] h-[48px] relative top-[-20px] dk:top-[0px] dk:w-[88px] dk:h-[88px]"
                />
              </div>
              <div className="main">
                <div className="name-new-feature flex items-center gap-[33px]">
                  <h1 className="text-[#5CA5A5] text-[13px] font-bold dk:text-[18px]">
                    {job.company}
                  </h1>
                  <div className="flex items-center gap-[8px]">
                    {job.new && (
                      <div className="bg-new text-white rounded-[12px] px-[8px] py-[2px] text-[14px] font-bold">
                        NEW!
                      </div>
                    )}
                    {job.featured && (
                      <div className="bg-featured text-white rounded-[12px] px-[8px] py-[2px] text-[14px] font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-[9px] text-[#2B3939] text-[15px] font-bold dk:text-[22px]">
                  {job.position}
                </p>
                <div className="flex items-center gap-[10px] mt-[8px]">
                  <p className="text-[#7C8F8F] text-[16px] font-medium dk:text-[18px]">
                    {job.postedAt}
                  </p>
                  <img src={oval} alt="oval" />
                  <p className="text-[#7C8F8F] text-[16px] font-medium dk:text-[18px]">
                    {job.contract}
                  </p>
                  <img src={oval} alt="oval" />
                  <p className="text-[#7C8F8F] text-[16px] font-medium dk:text-[18px]">
                    {job.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="divider w-[279px] h-[1px] mt-[15px] bg-divider dk:hidden" />

            <div className="mt-[16px] flex flex-wrap gap-[16px] items-center">
              {[job.role, job.level, ...job.languages, ...job.tools].map(
                (tag) => (
                  <div
                    key={tag}
                    className="cursor-pointer bg-roles/10 text-[#5CA5A5] text-[16px] font-bold px-[10px] py-[4px] rounded-[4px]"
                    onClick={() => handleFilterClick(tag)}
                  >
                    {tag}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
