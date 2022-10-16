import { TextInput } from "./lib";

export function App() {
  return (
    <div className="p-8">
      <TextInput.Root>
        <TextInput.Input />
      </TextInput.Root>
      <h1>Hello World</h1>
    </div>
  );
}
