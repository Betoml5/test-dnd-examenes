import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "./components/Draggable";
import Droppable from "./components/Droppable";

interface Aula {
  nombre: string;
  id: number;
  examen: string | null;
}

interface Examen {
  nombre: string;
  id: number;
  aula: string | null;
}

interface AulaConExamen {
  aula: string;
  examen: string;
}

function App() {
  const [examenes] = useState([
    { nombre: "Examen 1", id: 1, aula: null },
    { nombre: "Examen 2", id: 2, aula: null },
    { nombre: "Examen 3", id: 3, aula: null },
    { nombre: "Examen 4", id: 4, aula: null },
    { nombre: "Examen 5", id: 5, aula: null },
    { nombre: "Examen 6", id: 6, aula: null },
    { nombre: "Examen 7", id: 7, aula: null },
    { nombre: "Examen 8", id: 8, aula: null },
    { nombre: "Examen 9", id: 9, aula: null },
    { nombre: "Examen 10", id: 10, aula: null },
    { nombre: "Examen 11", id: 11, aula: null },
    { nombre: "Examen 12", id: 12, aula: null },
    { nombre: "Examen 13", id: 13, aula: null },
  ]);

  const [aulas, setAulas] = useState([
    { nombre: "Aula 1", id: 1, examenes: [] },
    { nombre: "Aula 2", id: 2, examenes: [] },
    { nombre: "Aula 3", id: 3, examenes: [] },
    { nombre: "Aula 4", id: 4, examenes: [] },
    { nombre: "Aula 5", id: 5, examenes: [] },
    { nombre: "Aula 6", id: 6, examenes: [] },
    { nombre: "Aula 7", id: 7, examenes: [] },
    { nombre: "Aula 8", id: 8, examenes: [] },
  ]);
  const [aulasConExamenes, setAulasConExamenes] = useState<AulaConExamen[]>([]);

  const automaticCalendarization = () => {
    // Asignar examenes aulas
    //asignar un examen a cada aula

    const aulasConExamenes = examenes.map((examen, index) => {
      return {
        aula: aulas[index].nombre,
        examen: examenes[index].nombre,
      };
    });

    setAulasConExamenes(aulasConExamenes);

    console.log(aulasConExamenes);
  };

  console.log(aulasConExamenes);
  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <h2>Aulas</h2>
            {aulas.map((aula) => (
              <Droppable id={aula.id} key={aula.id}>
                <div>
                  {aula.nombre}
                  {aula.examenes.length > 0 &&
                    aula.examenes.map((examen) => (
                      <p
                        onClick={() => {
                          console.log("EdiTE", examen);
                        }}
                        key={examen}
                      >
                        {examen}
                      </p>
                    ))}
                </div>
              </Droppable>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <h2>Examenes</h2>
            {examenes.map((examen) => (
              <Draggable key={examen.id} id={examen.id} name={examen.nombre}>
                {examen.nombre}
                <div>editar</div>
              </Draggable>
            ))}
          </div>
        </div>
      </DndContext>
      <div>
        <h2>Examenes en aulas</h2>
        <ul>
          {aulasConExamenes.map((aulaConExamen) => (
            <li key={aulaConExamen.aula}>
              <p>
                Aula: {aulaConExamen.aula} - {aulaConExamen.examen}{" "}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={automaticCalendarization}>
        Iniciar calendarización
      </button>
    </>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleDragEnd(event: any) {
    const { active, over } = event as {
      active: { id: number; data: { current: { name: string } } };
      over: { id: number };
    };
    console.log("active", active);
    console.log("over", over);

    const aulaId = over.id;

    setAulas(
      aulas.map((aula) => {
        if (aula.id === aulaId) {
          return {
            ...aula,
            examenes: [...aula.examenes, active.data.current.name],
          };
        }
        return aula;
      })
    );

    // Si el aula ya tiene un examen asignado, no se puede asignar otro

    setAulasConExamenes([
      ...aulasConExamenes,
      { aula: over.id, examen: active.data.current.name },
    ]);
  }
}

export default App;
