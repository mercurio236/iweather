import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/Campinas/i); //regex para ignorar o case sensitive
    fireEvent.press(selectedCity); //evento para selecionar pressionando

    //expect(onPress).toBeCalledTimes(1); //se ela foi chamada uma vez
    expect(onPress).toBeCalledWith(data[1]) //o que foi selecionado
  });

  it("not should be show options when data props is empty", () =>{
    render(<SelectList
    data={[]}
    onChange={() =>{}}
    onPress={() =>{}}
    />)

    const options = screen.getByTestId('options')
    expect(options.children).toHaveLength(0)
  })
});
