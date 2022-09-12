import { FC, useState } from "react";

export const BandAdd: FC<{ agregarBanda: Function }> = ({
  agregarBanda,
}): JSX.Element => {
  const [newName, setNewName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newName.trim() !== "") {
      agregarBanda(newName);
      setNewName("");
    }
  };
  return (
    <>
      <h2 className="font-semibold text-3xl mb-5">Agregar Banda</h2>
      <form className="flex space-x-2 w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese el nombre de la banda"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border-2 border-gray-400 rounded-md py-2 pl-2 w-2/3"
        />
        <input
          type="submit"
          value="Añadir Banda"
          className="py-2 w-1/3 text-white rounded-md bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer"
        />
      </form>
    </>
  );
};
