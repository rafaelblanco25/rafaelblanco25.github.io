import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Skill from "./Skill";
import CategoryIdentifier from "./CategoryIdentifier";
import Banner from "./Banner";
import { PROFILE, SKILL_TABS } from "../data/profile";

function AboutMeBanner() {
  const [activeTab, setActiveTab] = useState(SKILL_TABS[0].value);

  return (
    <Banner id="about">
      <div className="bg-black flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-4 sm:p-6 md:p-10 lg:p-16 border-2 border-gray rounded-lg w-full">
        <img
          src={PROFILE.aboutImage}
          alt={PROFILE.name}
          loading="lazy"
          decoding="async"
          className="rounded-lg w-40 h-40 min-w-40 min-h-40 lg:w-72 lg:h-72 md:w-60 md:h-60 object-cover"
        />
        <div className="w-full min-w-0">
          <CategoryIdentifier name="About Me" description="Who Am I" />
          <p className="text-white font-sans text-base sm:text-lg pb-4 px-2 sm:px-4">
            {PROFILE.bio}
          </p>
          <CategoryIdentifier
            name="Skills"
            description="Technologies And Resources I Manage"
          />
          <Tabs value={activeTab} className="w-full mt-4">
            <TabsHeader
              className="rounded-none border-b border-gray bg-transparent p-0 overflow-x-auto"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gold shadow-none rounded-none",
              }}
            >
              {SKILL_TABS.map(({ value, label }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className="my-auto whitespace-nowrap px-3 py-2 text-xs sm:text-sm md:text-base"
                >
                  <span
                    className={
                      "font-bold leading-none transition-colors " +
                      (activeTab === value
                        ? "text-gold"
                        : "text-gray_text hover:text-white")
                    }
                  >
                    {label}
                  </span>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="mt-4 sm:mt-6 lg:mt-8">
              {SKILL_TABS.map(({ value, groups }) => (
                <TabPanel key={value} value={value} className="p-0 sm:p-2">
                  <div className="flex gap-4 items-center justify-center flex-wrap">
                    {groups.map((skill) => (
                      <Skill
                        key={skill.names.join("-")}
                        icons={skill.icons}
                        names={skill.names}
                      />
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </Banner>
  );
}

export default AboutMeBanner;
