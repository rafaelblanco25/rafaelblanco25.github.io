import { Tooltip } from "@material-tailwind/react";

function Skill(props) {
  return (
    <div className="flex items-center -space-x-4">
        {props.icons.map((icon, index) => (
          <Tooltip key={index} content={props.names[index]} >
            <div className="bg-white rounded-full p-2 border-4 border-gold hover:scale-105 transition-transform duration-300">
              <img src={icon} alt={props.names[index]} className="h-14 w-14 rounded-full" />
            </div>
          </Tooltip>
        ))}
    </div>
  );
}

export default Skill;
