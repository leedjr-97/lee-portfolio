import { Typography } from "@mui/material";

export default function DesignPassion() {
  return (
    <div
      style={{
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      <Typography
        variant={"h3"}
        style={{ textDecoration: "underline", marginBottom: "16px" }}
      >
        {"Passion in Design"}
      </Typography>

      <Typography variant={"h5"} style={{ marginLeft: "16px" }}>
        {`In my years as a front end engineer, I've learned that good design goes a long way in both UI/UX and coding. There's always an underlying temptation to get a "quick feature" out without considering the impacts for users and engineers from a long-term perspective. So I've learned to slow down and ask more questions about the features I implement:`}
      </Typography>
      <ul>
        <li>
          <Typography variant={"h5"}>
            {"What's the motive behind this feature? Why is it so important?"}
          </Typography>
        </li>
        <li>
          <Typography variant={"h5"}>
            {
              "Who will use this feature? What are their needs? What are their tendencies?"
            }
          </Typography>
        </li>
        <li>
          <Typography variant={"h5"}>
            {
              "What kind of bugs will need to be addressed after my work is done?"
            }
          </Typography>
        </li>
        <li>
          <Typography variant={"h5"}>
            {
              "What kind of engineer will look at the code I write? A junior or senior engineer? A new hire?"
            }
          </Typography>
        </li>
        <li>
          <Typography variant={"h5"}>
            {"Can this feature fit within our established design principles?"}
          </Typography>
        </li>
      </ul>
      <Typography variant={"h5"} style={{ marginLeft: "16px" }}>
        {`Slowing down enough to have these conversations have opened my eyes to the importance of design beyond what a formal education has granted me.
         I've had refreshing debates with designers I've worked with to absorb their knowledge and offer them a new perspective. I've done the dirty worked and designed systems from the ground up in Figma to prove a concept. I've built component libraries to emphasize consistency between products. I've been challenged myself to make my code more accessible and innovative!
         I've had UML design sessions with engineers to work on state management and component organization. I've refactored the code of old products to improve their readability and state management. I've communicated with back end engineers to build properly structured API calls for data management, as well as adjusted back end code for new needs. I've lead in writing documentation for front and back end development.
         Not only have the products I've worked on improved, as "Iron sharpens iron" (Proverbs 27:17), I believe the designers, engineers, and product managers I've worked with have grown just as much as I have.`}
      </Typography>

      <Typography
        variant={"h5"}
        style={{ marginLeft: "16px", marginTop: "8px" }}
      >
        {
          "From geospatial services to data entry systems, from web design to mobile design, from bug fixes to documentation, I've been blessed with many opportunities to grow beyond what I thought as I was capable of. Every conversation, every job, and every line of code is an opportunity to further grow as a software engineer and designer."
        }
      </Typography>
    </div>
  );
}
