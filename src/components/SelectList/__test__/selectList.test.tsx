import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ];
    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    const selectedCity = screen.getByText(/Campinas/i); //regex para ignorar o case sensitive
    fireEvent.press(selectedCity); //evento para selecionar pressionando
  });
});
