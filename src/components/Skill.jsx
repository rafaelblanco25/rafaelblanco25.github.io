import { Tooltip } from "@material-tailwind/react";

function Skill(props) {
  return (
    <div className="flex items-center -space-x-4">
        {props.icons.map((icon, index) => (
          <Tooltip key={index} content={props.names[index]} >
            <div className="bg-white rounded-full p-2  hover:scale-105 transition-transform duration-300">
              <img src={icon} alt={props.names[index]} className="h-10 w-10 rounded-full lg:h-14 lg:w-14 md:h-12 md:w-12 sm:h-10 sm:w-10" />
            </div>
          </Tooltip>
        ))}
    </div>
  );
}

export default Skill;
