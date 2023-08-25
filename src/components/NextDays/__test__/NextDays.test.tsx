import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";
describe("Component: NextDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "20°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "10°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "22°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});
