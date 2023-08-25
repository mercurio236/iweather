import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "30°c",
          max: "34°c",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );
  });
});
